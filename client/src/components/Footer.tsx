import { Gem, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[hsl(25_45%_35%)] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Gem className="w-6 h-6" />
              <h3 className="text-xl font-display font-bold">Shri Jagdambe Jewellers</h3>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              Your trusted destination for exquisite gold, diamond, and gemstone jewellery. 
              Making dreams come true, one piece at a time.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors" data-testid="link-facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors" data-testid="link-instagram">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors" data-testid="link-twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors" data-testid="link-youtube">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors" data-testid="link-footer-home">Home</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors" data-testid="link-footer-collections">Collections</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors" data-testid="link-footer-contact">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors" data-testid="link-footer-about">About Us</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li>
                <a href="#categories" className="hover:text-white transition-colors" data-testid="link-footer-gold-chains">Gold Chains</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors" data-testid="link-footer-gold-rings">Gold Rings</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors" data-testid="link-footer-necklaces">Necklaces</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors" data-testid="link-footer-earrings">Earrings</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors" data-testid="link-footer-diamond">Diamond Jewellery</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors" data-testid="link-footer-gemstones">Zodiac Gemstones</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Trust Badges</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <div className="bg-primary w-2 h-2 rounded-full" />
                <span>100% Certified Jewellery</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="bg-primary w-2 h-2 rounded-full" />
                <span>Authentic & Hallmarked</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="bg-primary w-2 h-2 rounded-full" />
                <span>Trusted Since Years</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="bg-primary w-2 h-2 rounded-full" />
                <span>5-Star Customer Rated</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/70">
            <p>
              © {currentYear} Shri Jagdambe Jewellers. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors" data-testid="link-privacy">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors" data-testid="link-terms">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors" data-testid="link-return">Return Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
