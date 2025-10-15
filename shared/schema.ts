import { pgTable, text, varchar, integer, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Product Categories
export const categories = pgTable("categories", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  itemCount: integer("item_count").notNull().default(0),
});

export const insertCategorySchema = createInsertSchema(categories).omit({ id: true });
export type InsertCategory = z.infer<typeof insertCategorySchema>;
export type Category = typeof categories.$inferSelect;

// Products (Jewelry Items)
export const products = pgTable("products", {
  id: varchar("id").primaryKey(),
  categoryId: varchar("category_id").notNull(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  imageUrl: text("image_url").notNull(),
  additionalImages: text("additional_images").array().notNull().default([]),
  pricePerGram: decimal("price_per_gram", { precision: 10, scale: 2 }).notNull(),
  weight: decimal("weight", { precision: 6, scale: 2 }).notNull(),
  purity: text("purity").notNull(),
  makingCharges: decimal("making_charges", { precision: 10, scale: 2 }).notNull(),
  specifications: text("specifications").notNull(),
  rating: decimal("rating", { precision: 2, scale: 1 }).notNull().default("5.0"),
});

export const insertProductSchema = createInsertSchema(products).omit({ id: true });
export type InsertProduct = z.infer<typeof insertProductSchema>;
export type Product = typeof products.$inferSelect;

// Customer Reviews
export const reviews = pgTable("reviews", {
  id: varchar("id").primaryKey(),
  productId: varchar("product_id").notNull(),
  customerName: text("customer_name").notNull(),
  rating: integer("rating").notNull(),
  comment: text("comment").notNull(),
  customerImage: text("customer_image"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertReviewSchema = createInsertSchema(reviews).omit({ id: true, createdAt: true });
export type InsertReview = z.infer<typeof insertReviewSchema>;
export type Review = typeof reviews.$inferSelect;

// Contact Inquiries
export const contactInquiries = pgTable("contact_inquiries", {
  id: varchar("id").primaryKey(),
  name: text("name").notNull(),
  query: text("query").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
});

export const insertContactInquirySchema = createInsertSchema(contactInquiries).omit({ 
  id: true, 
  createdAt: true 
}).extend({
  name: z.string().min(2, "Name must be at least 2 characters"),
  query: z.string().min(5, "Query must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export type InsertContactInquiry = z.infer<typeof insertContactInquirySchema>;
export type ContactInquiry = typeof contactInquiries.$inferSelect;

// Metal Prices
export const metalPrices = pgTable("metal_prices", {
  id: varchar("id").primaryKey(),
  metal: text("metal").notNull(),
  pricePerGram: decimal("price_per_gram", { precision: 10, scale: 2 }).notNull(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const insertMetalPriceSchema = createInsertSchema(metalPrices).omit({ 
  id: true, 
  updatedAt: true 
});

export type InsertMetalPrice = z.infer<typeof insertMetalPriceSchema>;
export type MetalPrice = typeof metalPrices.$inferSelect;
