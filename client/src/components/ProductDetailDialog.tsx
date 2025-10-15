import { useQuery } from "@tanstack/react-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Weight, Sparkles, Award, Phone } from "lucide-react";
import type { Product, Review } from "@shared/schema";

interface ProductDetailDialogProps {
  product: Product | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProductDetailDialog({ product, open, onOpenChange }: ProductDetailDialogProps) {
  const { data: reviews } = useQuery<Review[]>({
    queryKey: ["/api/reviews", product?.id],
    enabled: !!product?.id && open,
  });

  if (!product) return null;

  const totalPrice = (
    Number(product.pricePerGram) * Number(product.weight) + Number(product.makingCharges)
  ).toFixed(2);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid="dialog-product-details">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display font-bold text-foreground">
            {product.name}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-4">
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden border-2 border-primary/20">
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {product.additionalImages && product.additionalImages.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {product.additionalImages.map((img, idx) => (
                  <div key={idx} className="aspect-square rounded-md overflow-hidden border border-border">
                    <img
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < Math.floor(Number(product.rating)) ? "fill-primary text-primary" : "text-muted"}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  ({reviews?.length || 0} reviews)
                </span>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary font-accent">₹{totalPrice}</span>
                  <span className="text-sm text-muted-foreground">(inclusive of all charges)</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Weight className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Weight:</span>
                    <span className="font-semibold">{product.weight}g</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Purity:</span>
                    <span className="font-semibold">{product.purity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Price/gram:</span>
                    <span className="font-semibold">₹{product.pricePerGram}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">Making:</span>
                    <span className="font-semibold">₹{product.makingCharges}</span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="bg-accent/10 p-4 rounded-lg">
              <h4 className="font-semibold text-foreground mb-2">Specifications</h4>
              <p className="text-sm text-muted-foreground whitespace-pre-line">
                {product.specifications}
              </p>
            </div>

            <Button 
              size="lg" 
              className="w-full text-lg" 
              onClick={() => window.location.href = 'tel:+919643265151'}
              data-testid="button-inquiry"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call for Inquiry
            </Button>
          </div>
        </div>

        {reviews && reviews.length > 0 && (
          <div className="mt-8">
            <h3 className="text-2xl font-display font-bold mb-6">Customer Feedback</h3>
            <div className="space-y-4">
              {reviews.map((review) => (
                <Card key={review.id} className="p-4 bg-card" data-testid={`review-${review.id}`}>
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={review.customerImage || undefined} />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {review.customerName.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{review.customerName}</h4>
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-3 h-3 ${i < review.rating ? "fill-primary text-primary" : "text-muted"}`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground">{review.comment}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
