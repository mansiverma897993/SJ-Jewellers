import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import type { Category } from "@shared/schema";

interface CategoryCardProps {
  category: Category;
  onClick: () => void;
  delay?: number;
}

export function CategoryCard({ category, onClick, delay = 0 }: CategoryCardProps) {
  return (
    <Card
      className="group cursor-pointer overflow-hidden border-2 border-card-border hover:border-primary transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl bg-card"
      onClick={onClick}
      style={{ animationDelay: `${delay}ms` }}
      data-testid={`card-category-${category.id}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/40 to-transparent z-10" />
        <img
          src={category.imageUrl}
          alt={category.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <h3 className="text-2xl font-display font-bold text-white mb-2">
            {category.name}
          </h3>
          <p className="text-sm text-white/90 mb-3 line-clamp-2">
            {category.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-primary text-sm font-semibold bg-white/90 px-3 py-1 rounded-full">
              {category.itemCount} Designs
            </span>
            <div className="flex items-center gap-2 text-white group-hover:text-primary transition-colors">
              <span className="text-sm font-medium">View Collection</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>

        <div className="absolute inset-0 ring-2 ring-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md" style={{ boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)" }} />
      </div>
    </Card>
  );
}
