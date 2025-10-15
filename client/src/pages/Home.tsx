import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Header } from "@/components/Header";
import { LivePriceBanner } from "@/components/LivePriceBanner";
import { HeroSection } from "@/components/HeroSection";
import { CategoryCard } from "@/components/CategoryCard";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailDialog } from "@/components/ProductDetailDialog";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ChevronLeft, Sparkles } from "lucide-react";
import type { Category, Product } from "@shared/schema";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [productDialogOpen, setProductDialogOpen] = useState(false);

  const { data: categories, isLoading: categoriesLoading } = useQuery<Category[]>({
    queryKey: ["/api/categories"],
  });

  const { data: products, isLoading: productsLoading } = useQuery<Product[]>({
    queryKey: selectedCategory 
      ? [`/api/products?categoryId=${selectedCategory.id}`]
      : ["/api/products"],
    enabled: !!selectedCategory,
  });

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setTimeout(() => {
      document.getElementById("products-section")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setProductDialogOpen(true);
  };

  const handleBackToCategories = () => {
    setSelectedCategory(null);
    setTimeout(() => {
      document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <LivePriceBanner />
      <HeroSection />

      <section id="categories" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {!selectedCategory ? (
            <>
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Our Collections</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
                  Explore Our Jewellery
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover our carefully curated collections of exquisite jewellery pieces, 
                  each designed to celebrate life's precious moments.
                </p>
              </div>

              {categoriesLoading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="aspect-[4/3] bg-card rounded-lg animate-pulse" />
                  ))}
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categories?.map((category, index) => (
                    <CategoryCard
                      key={category.id}
                      category={category}
                      onClick={() => handleCategoryClick(category)}
                      delay={index * 100}
                    />
                  ))}
                </div>
              )}
            </>
          ) : (
            <div id="products-section">
              <div className="mb-8">
                <Button
                  variant="outline"
                  onClick={handleBackToCategories}
                  className="mb-4"
                  data-testid="button-back"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Back to Collections
                </Button>

                <div className="flex items-center gap-4 mb-2">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
                    {selectedCategory.name}
                  </h2>
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    {selectedCategory.itemCount} Designs
                  </span>
                </div>
                <p className="text-muted-foreground text-lg">
                  {selectedCategory.description}
                </p>
              </div>

              {productsLoading ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {[...Array(10)].map((_, i) => (
                    <div key={i} className="aspect-square bg-card rounded-lg animate-pulse" />
                  ))}
                </div>
              ) : products && products.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {products.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onClick={() => handleProductClick(product)}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">No products available in this category.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <ContactSection />
      <Footer />

      <ProductDetailDialog
        product={selectedProduct}
        open={productDialogOpen}
        onOpenChange={setProductDialogOpen}
      />
    </div>
  );
}
