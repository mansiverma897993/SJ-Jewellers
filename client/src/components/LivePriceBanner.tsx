import { useQuery } from "@tanstack/react-query";
import { TrendingUp, Sparkles } from "lucide-react";
import type { MetalPrice } from "@shared/schema";

export function LivePriceBanner() {
  const { data: prices, isLoading } = useQuery<MetalPrice[]>({
    queryKey: ["/api/metal-prices"],
    refetchInterval: 60000,
  });

  const goldPrice = prices?.find(p => p.metal === "Gold");
  const silverPrice = prices?.find(p => p.metal === "Silver");

  if (isLoading) {
    return (
      <div className="bg-gradient-to-r from-[hsl(38_92%_50%)] to-[hsl(45_92%_55%)] text-white py-2 px-4">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <Sparkles className="w-4 h-4 animate-pulse-glow" />
          <span className="text-sm font-medium">Loading live rates...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r from-[hsl(38_92%_50%)] to-[hsl(45_92%_55%)] text-white py-3 px-4 shadow-md relative overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
        style={{ backgroundSize: "200% 100%" }}
      />
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 animate-pulse-glow" />
            <span className="text-xs md:text-sm font-semibold uppercase tracking-wider">
              Live Market Rates
            </span>
            <Sparkles className="w-3 h-3 animate-pulse-glow" />
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full" data-testid="price-gold">
            <span className="text-sm md:text-base font-accent font-semibold">Gold:</span>
            <span className="text-base md:text-lg font-bold font-accent">
              ₹{goldPrice?.pricePerGram || "6,850"}/gram
            </span>
          </div>

          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full" data-testid="price-silver">
            <span className="text-sm md:text-base font-accent font-semibold">Silver:</span>
            <span className="text-base md:text-lg font-bold font-accent">
              ₹{silverPrice?.pricePerGram || "82"}/gram
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
