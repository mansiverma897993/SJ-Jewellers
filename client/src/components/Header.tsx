import { Phone, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-primary via-primary to-[hsl(40_75%_60%)] shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Gem className="w-8 h-8 text-primary-foreground" />
            <h1 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground">
              Shri Jagdambe Jewellers
            </h1>
          </div>
          
          <nav className="hidden lg:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-primary-foreground hover:text-primary-foreground/80 font-medium transition-colors"
              data-testid="link-home"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("categories")}
              className="text-primary-foreground hover:text-primary-foreground/80 font-medium transition-colors"
              data-testid="link-categories"
            >
              Collections
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-primary-foreground hover:text-primary-foreground/80 font-medium transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-2 text-primary-foreground">
            <Phone className="w-4 h-4" />
            <div className="text-sm md:text-base">
              <span className="font-medium">Mr. Sandeep Verma</span>
              <span className="mx-2">|</span>
              <a 
                href="tel:+919643265151" 
                className="hover:underline font-accent"
                data-testid="link-phone"
              >
                +91-9643265151
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
