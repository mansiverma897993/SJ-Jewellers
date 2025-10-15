import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const scrollToCategories = () => {
    const element = document.getElementById("categories");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-accent/20">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-primary/5 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-scale-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
            <span className="text-sm font-medium text-foreground">Premium Jewellery Collection</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-foreground leading-tight">
            Make Your Wish Come True
          </h1>
          
          <p className="text-2xl md:text-3xl lg:text-4xl font-display font-semibold bg-gradient-to-r from-primary via-[hsl(40_85%_50%)] to-primary bg-clip-text text-transparent">
            In Your Dream Designed Jewellery
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our exquisite collection of handcrafted gold, diamond, and gemstone jewellery. 
            Each piece is a masterpiece, designed to celebrate your special moments with timeless elegance.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Button 
              size="lg"
              onClick={scrollToCategories}
              className="group text-base md:text-lg px-8 py-6 bg-primary hover:bg-primary text-primary-foreground shadow-xl"
              data-testid="button-explore"
            >
              Explore Collections
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="text-base md:text-lg px-8 py-6 border-2 bg-background/50 backdrop-blur-sm hover:bg-background"
              data-testid="button-contact"
            >
              Get in Touch
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary font-accent">100+</div>
              <div className="text-sm md:text-base text-muted-foreground mt-1">Unique Designs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary font-accent">100%</div>
              <div className="text-sm md:text-base text-muted-foreground mt-1">Certified & Authentic</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary font-accent">5★</div>
              <div className="text-sm md:text-base text-muted-foreground mt-1">Customer Rated</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
