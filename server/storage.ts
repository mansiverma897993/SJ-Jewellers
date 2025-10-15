import {
  type Category,
  type InsertCategory,
  type Product,
  type InsertProduct,
  type Review,
  type InsertReview,
  type ContactInquiry,
  type InsertContactInquiry,
  type MetalPrice,
  type InsertMetalPrice,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getAllCategories(): Promise<Category[]>;
  getCategoryById(id: string): Promise<Category | undefined>;
  createCategory(category: InsertCategory): Promise<Category>;

  getAllProducts(): Promise<Product[]>;
  getProductsByCategory(categoryId: string): Promise<Product[]>;
  getProductById(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;

  getReviewsByProduct(productId: string): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;

  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
  getAllContactInquiries(): Promise<ContactInquiry[]>;

  getMetalPrices(): Promise<MetalPrice[]>;
  updateMetalPrice(metalPrice: InsertMetalPrice): Promise<MetalPrice>;
}

export class MemStorage implements IStorage {
  private categories: Map<string, Category>;
  private products: Map<string, Product>;
  private reviews: Map<string, Review>;
  private contactInquiries: Map<string, ContactInquiry>;
  private metalPrices: Map<string, MetalPrice>;

  constructor() {
    this.categories = new Map();
    this.products = new Map();
    this.reviews = new Map();
    this.contactInquiries = new Map();
    this.metalPrices = new Map();
    this.initializeSampleData();
  }

  private initializeSampleData() {
    const categories: Category[] = [
      {
        id: "gold-chains",
        name: "Gold Chains",
        description: "Elegant and timeless gold chains in various designs and lengths",
        imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&q=80",
        itemCount: 12,
      },
      {
        id: "gold-rings",
        name: "Gold Rings",
        description: "Exquisite gold rings for every occasion and celebration",
        imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&q=80",
        itemCount: 15,
      },
      {
        id: "necklaces",
        name: "Necklaces",
        description: "Stunning necklaces that add grace and beauty to any outfit",
        imageUrl: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=600&q=80",
        itemCount: 10,
      },
      {
        id: "earrings",
        name: "Gold Earrings",
        description: "Beautiful gold earrings ranging from traditional to contemporary designs",
        imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&q=80",
        itemCount: 14,
      },
      {
        id: "zodiac-gemstones",
        name: "Zodiac Gemstones",
        description: "Authentic gemstones aligned with your zodiac sign for prosperity and luck",
        imageUrl: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=600&q=80",
        itemCount: 12,
      },
      {
        id: "diamond-jewellery",
        name: "Diamond Jewellery",
        description: "Premium diamond jewellery pieces that sparkle with brilliance",
        imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=600&q=80",
        itemCount: 11,
      },
    ];

    categories.forEach(cat => this.categories.set(cat.id, cat));

    const products: Product[] = [
      {
        id: "gc-001",
        categoryId: "gold-chains",
        name: "Royal Rope Chain",
        description: "22K gold rope chain with intricate twisted design, perfect for everyday wear",
        imageUrl: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&q=80",
        additionalImages: [],
        pricePerGram: "6850",
        weight: "15.50",
        purity: "22K (916)",
        makingCharges: "8500",
        specifications: "Length: 20 inches\nWidth: 3mm\nClasp: Secure lobster clasp\nHallmark: BIS certified",
        rating: "4.8",
      },
      {
        id: "gc-002",
        categoryId: "gold-chains",
        name: "Classic Cuban Link",
        description: "Heavy Cuban link chain in lustrous 22K gold, makes a bold statement",
        imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
        additionalImages: [],
        pricePerGram: "6850",
        weight: "25.00",
        purity: "22K (916)",
        makingCharges: "12000",
        specifications: "Length: 22 inches\nWidth: 5mm\nWeight: Heavy\nHallmark: BIS certified",
        rating: "5.0",
      },
      {
        id: "gc-003",
        categoryId: "gold-chains",
        name: "Delicate Box Chain",
        description: "Lightweight box chain ideal for pendants and daily wear",
        imageUrl: "https://images.unsplash.com/photo-1611652022419-a9419f74343c?w=400&q=80",
        additionalImages: [],
        pricePerGram: "6850",
        weight: "8.50",
        purity: "22K (916)",
        makingCharges: "5500",
        specifications: "Length: 18 inches\nWidth: 2mm\nStyle: Box link\nHallmark: BIS certified",
        rating: "4.9",
      },
      {
        id: "gc-004",
        categoryId: "gold-chains",
        name: "Figaro Chain Premium",
        description: "Traditional Figaro pattern chain with alternating link sizes",
        imageUrl: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&q=80",
        additionalImages: [],
        pricePerGram: "6850",
        weight: "18.00",
        purity: "22K (916)",
        makingCharges: "9000",
        specifications: "Length: 24 inches\nPattern: 3+1 Figaro\nHallmark: BIS certified",
        rating: "4.7",
      },
      {
        id: "gc-005",
        categoryId: "gold-chains",
        name: "Singapore Twist Chain",
        description: "Elegant twisted Singapore chain that catches light beautifully",
        imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
        additionalImages: [],
        pricePerGram: "6850",
        weight: "12.00",
        purity: "22K (916)",
        makingCharges: "7000",
        specifications: "Length: 20 inches\nStyle: Twisted Singapore\nHallmark: BIS certified",
        rating: "4.9",
      },
      {
        id: "gr-001",
        categoryId: "gold-rings",
        name: "Solitaire Gold Ring",
        description: "Classic solitaire design in polished 22K gold with elegant finish",
        imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
        additionalImages: [],
        pricePerGram: "6850",
        weight: "4.50",
        purity: "22K (916)",
        makingCharges: "3500",
        specifications: "Ring Size: Adjustable\nWidth: 4mm\nFinish: High polish\nHallmark: BIS certified",
        rating: "5.0",
      },
      {
        id: "gr-002",
        categoryId: "gold-rings",
        name: "Traditional Band Ring",
        description: "Wide band ring with traditional engraved patterns",
        imageUrl: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=400&q=80",
        additionalImages: [],
        pricePerGram: "6850",
        weight: "6.00",
        purity: "22K (916)",
        makingCharges: "4000",
        specifications: "Ring Size: 16-22 available\nWidth: 6mm\nDesign: Engraved\nHallmark: BIS certified",
        rating: "4.8",
      },
      {
        id: "gr-003",
        categoryId: "gold-rings",
        name: "Floral Gold Ring",
        description: "Delicate floral pattern ring perfect for special occasions",
        imageUrl: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80",
        additionalImages: [],
        pricePerGram: "6850",
        weight: "3.80",
        purity: "22K (916)",
        makingCharges: "3200",
        specifications: "Design: Floral motif\nRing Size: Customizable\nHallmark: BIS certified",
        rating: "4.9",
      },
      {
        id: "nc-001",
        categoryId: "necklaces",
        name: "Temple Necklace",
        description: "Traditional temple jewelry necklace with intricate deity motifs",
        imageUrl: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=400&q=80",
        additionalImages: [],
        pricePerGram: "6850",
        weight: "45.00",
        purity: "22K (916)",
        makingCharges: "25000",
        specifications: "Length: 16 inches\nStyle: Temple jewelry\nMotif: Traditional deities\nHallmark: BIS certified",
        rating: "5.0",
      },
      {
        id: "nc-002",
        categoryId: "necklaces",
        name: "Layered Necklace Set",
        description: "Modern multi-layered necklace perfect for contemporary style",
        imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80",
        additionalImages: [],
        pricePerGram: "6850",
        weight: "28.00",
        purity: "22K (916)",
        makingCharges: "15000",
        specifications: "Layers: 3 strand design\nLength: Adjustable\nHallmark: BIS certified",
        rating: "4.9",
      },
      {
        id: "er-001",
        categoryId: "earrings",
        name: "Jhumka Earrings",
        description: "Traditional jhumka earrings with delicate ghungroo detailing",
        imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&q=80",
        additionalImages: [],
        pricePerGram: "6850",
        weight: "8.50",
        purity: "22K (916)",
        makingCharges: "5000",
        specifications: "Style: Traditional Jhumka\nLength: 2 inches\nBack: Screw type\nHallmark: BIS certified",
        rating: "5.0",
      },
      {
        id: "er-002",
        categoryId: "earrings",
        name: "Hoop Earrings Gold",
        description: "Classic hoop earrings in various sizes for everyday elegance",
        imageUrl: "https://images.unsplash.com/photo-1588444650577-308c0c0d8c5f?w=400&q=80",
        additionalImages: [],
        pricePerGram: "6850",
        weight: "5.50",
        purity: "22K (916)",
        makingCharges: "3500",
        specifications: "Diameter: 25mm\nThickness: 2mm\nClosure: Hinged\nHallmark: BIS certified",
        rating: "4.8",
      },
      {
        id: "zg-001",
        categoryId: "zodiac-gemstones",
        name: "Ruby for Leo",
        description: "Natural Burmese ruby for Leo zodiac sign, enhances confidence and vitality",
        imageUrl: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=400&q=80",
        additionalImages: [],
        pricePerGram: "0",
        weight: "5.00",
        purity: "Natural Gemstone",
        makingCharges: "45000",
        specifications: "Gemstone: Natural Ruby\nOrigin: Burma\nCarat: 5.0\nZodiac: Leo\nCertificate: Included",
        rating: "5.0",
      },
      {
        id: "zg-002",
        categoryId: "zodiac-gemstones",
        name: "Emerald for Mercury",
        description: "Premium emerald gemstone for Mercury, brings wisdom and prosperity",
        imageUrl: "https://images.unsplash.com/photo-1611652022419-a9419f74343c?w=400&q=80",
        additionalImages: [],
        pricePerGram: "0",
        weight: "4.50",
        purity: "Natural Gemstone",
        makingCharges: "38000",
        specifications: "Gemstone: Natural Emerald\nOrigin: Colombia\nCarat: 4.5\nPlanet: Mercury\nCertificate: Included",
        rating: "4.9",
      },
      {
        id: "dj-001",
        categoryId: "diamond-jewellery",
        name: "Diamond Stud Earrings",
        description: "Classic diamond studs with brilliant cut diamonds in gold setting",
        imageUrl: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
        additionalImages: [],
        pricePerGram: "6850",
        weight: "3.50",
        purity: "18K Gold",
        makingCharges: "55000",
        specifications: "Diamond: 0.50 carat total\nClarity: VS1\nColor: F\nCut: Excellent\nCertificate: IGI",
        rating: "5.0",
      },
      {
        id: "dj-002",
        categoryId: "diamond-jewellery",
        name: "Diamond Tennis Bracelet",
        description: "Elegant tennis bracelet with continuous line of diamonds",
        imageUrl: "https://images.unsplash.com/photo-1611652022419-a9419f74343c?w=400&q=80",
        additionalImages: [],
        pricePerGram: "6850",
        weight: "12.00",
        purity: "18K Gold",
        makingCharges: "125000",
        specifications: "Diamond: 2.0 carat total\nClarity: VVS\nColor: E\nLength: 7 inches\nCertificate: GIA",
        rating: "5.0",
      },
    ];

    products.forEach(prod => this.products.set(prod.id, prod));

    const reviews: Review[] = [
      {
        id: "rev-001",
        productId: "gc-001",
        customerName: "Priya Sharma",
        rating: 5,
        comment: "Beautiful chain! The quality is excellent and the design is exactly what I wanted. Very happy with my purchase.",
        customerImage: "https://i.pravatar.cc/150?img=1",
        createdAt: new Date("2024-09-15"),
      },
      {
        id: "rev-002",
        productId: "gc-001",
        customerName: "Rahul Verma",
        rating: 5,
        comment: "Purchased this for my wife. She absolutely loves it! Great craftsmanship.",
        customerImage: "https://i.pravatar.cc/150?img=12",
        createdAt: new Date("2024-09-20"),
      },
      {
        id: "rev-003",
        productId: "gr-001",
        customerName: "Anjali Patel",
        rating: 5,
        comment: "Perfect ring for my engagement! The finish is superb and it fits beautifully.",
        customerImage: "https://i.pravatar.cc/150?img=5",
        createdAt: new Date("2024-09-10"),
      },
      {
        id: "rev-004",
        productId: "nc-001",
        customerName: "Meera Singh",
        rating: 5,
        comment: "Stunning temple necklace! Wore it for a wedding and received so many compliments.",
        customerImage: "https://i.pravatar.cc/150?img=9",
        createdAt: new Date("2024-08-25"),
      },
      {
        id: "rev-005",
        productId: "er-001",
        customerName: "Kavita Reddy",
        rating: 5,
        comment: "These jhumkas are absolutely gorgeous! Traditional yet elegant.",
        customerImage: "https://i.pravatar.cc/150?img=16",
        createdAt: new Date("2024-09-05"),
      },
      {
        id: "rev-006",
        productId: "dj-001",
        customerName: "Neha Gupta",
        rating: 5,
        comment: "Diamond quality is exceptional! Exactly as described. Very satisfied.",
        customerImage: "https://i.pravatar.cc/150?img=23",
        createdAt: new Date("2024-09-18"),
      },
    ];

    reviews.forEach(rev => this.reviews.set(rev.id, rev));

    const metalPrices: MetalPrice[] = [
      {
        id: "gold",
        metal: "Gold",
        pricePerGram: "6850",
        updatedAt: new Date(),
      },
      {
        id: "silver",
        metal: "Silver",
        pricePerGram: "82",
        updatedAt: new Date(),
      },
    ];

    metalPrices.forEach(mp => this.metalPrices.set(mp.id, mp));
  }

  async getAllCategories(): Promise<Category[]> {
    return Array.from(this.categories.values());
  }

  async getCategoryById(id: string): Promise<Category | undefined> {
    return this.categories.get(id);
  }

  async createCategory(insertCategory: InsertCategory): Promise<Category> {
    const id = randomUUID();
    const category: Category = { ...insertCategory, id };
    this.categories.set(id, category);
    return category;
  }

  async getAllProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProductsByCategory(categoryId: string): Promise<Product[]> {
    return Array.from(this.products.values()).filter(
      (product) => product.categoryId === categoryId
    );
  }

  async getProductById(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = { ...insertProduct, id };
    this.products.set(id, product);
    return product;
  }

  async getReviewsByProduct(productId: string): Promise<Review[]> {
    return Array.from(this.reviews.values()).filter(
      (review) => review.productId === productId
    );
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const id = randomUUID();
    const review: Review = {
      ...insertReview,
      id,
      createdAt: new Date(),
    };
    this.reviews.set(id, review);
    return review;
  }

  async createContactInquiry(
    insertInquiry: InsertContactInquiry
  ): Promise<ContactInquiry> {
    const id = randomUUID();
    const inquiry: ContactInquiry = {
      ...insertInquiry,
      id,
      createdAt: new Date(),
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }

  async getAllContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }

  async getMetalPrices(): Promise<MetalPrice[]> {
    return Array.from(this.metalPrices.values());
  }

  async updateMetalPrice(metalPrice: InsertMetalPrice): Promise<MetalPrice> {
    const existing = Array.from(this.metalPrices.values()).find(
      (mp) => mp.metal === metalPrice.metal
    );

    if (existing) {
      const updated: MetalPrice = {
        ...existing,
        ...metalPrice,
        updatedAt: new Date(),
      };
      this.metalPrices.set(existing.id, updated);
      return updated;
    }

    const id = randomUUID();
    const newPrice: MetalPrice = {
      ...metalPrice,
      id,
      updatedAt: new Date(),
    };
    this.metalPrices.set(id, newPrice);
    return newPrice;
  }
}

export const storage = new MemStorage();
