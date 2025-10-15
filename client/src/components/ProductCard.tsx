import { Card } from "@/components/ui/card";
import { Star, Info } from "lucide-react";
import type { Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export function ProductCard({ product, onClick }: ProductCardProps) {
  const totalPrice = (
    Number(product.pricePerGram) * Number(product.weight) + Number(product.makingCharges)
  ).toFixed(2);

  return (
    <Card
      className="group cursor-pointer overflow-hidden hover-elevate active-elevate-2 transition-all duration-300 bg-card border-card-border hover:shadow-xl"
      onClick={onClick}
      data-testid={`card-product-${product.id}`}
    >
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1">
          <Star className="w-3 h-3 fill-current" />
          {product.rating}
        </div>
      </div>

      <div className="p-4 space-y-2">
        <h4 className="font-display font-semibold text-base text-card-foreground line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h4>
        
        <p className="text-sm text-muted-foreground line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div>
            <div className="text-xs text-muted-foreground">From</div>
            <div className="text-lg font-bold text-primary font-accent">
              ₹{totalPrice}
            </div>
            <div className="text-xs text-muted-foreground">
              {product.weight}g • {product.purity}
            </div>
          </div>

          <div className="flex items-center gap-1 text-primary text-xs font-medium group-hover:gap-2 transition-all">
            <Info className="w-4 h-4" />
            <span>Details</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
