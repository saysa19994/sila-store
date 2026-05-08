"use client";

import React from "react";
import Link from "next/link";
import { Star, Zap, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";

interface ProductCardProps {
  id: string;
  name: string;
  category?: string;
  price: number;
  oldPrice?: number;
  rating?: number;
  reviewsCount?: number;
  image: string;
  badge?: string;
  slug: string;
}

const ProductCard = ({
  name,
  category = "اشتراك رقمي",
  price,
  oldPrice,
  rating = 4.9,
  reviewsCount = 120,
  image,
  badge,
  slug,
}: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group bg-card border border-border rounded-3xl p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
    >
      <Link href={`/product/${slug}`} className="block space-y-4">
        {/* Image Container */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted flex items-center justify-center p-8">
          <img
            src={image}
            alt={name}
            className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110"
          />
          {badge && (
            <div className="absolute top-3 right-3 bg-primary text-white text-[10px] font-bold px-3 py-1 rounded-full">
              {badge}
            </div>
          )}
          <div className="absolute top-3 left-3 bg-background/80 backdrop-blur-sm text-foreground text-[10px] font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <Zap className="w-3 h-3 text-secondary" />
            <span>تسليم فوري</span>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-2">
          <span className="text-xs text-muted-foreground font-medium">{category}</span>
          <h3 className="font-bold text-lg line-clamp-1 group-hover:text-primary transition-colors">
            {name}
          </h3>
          
          <div className="flex items-center gap-1">
            <div className="flex items-center text-warning">
              <Star className="w-4 h-4 fill-current" />
              <span className="text-sm font-bold mr-1">{rating}</span>
            </div>
            <span className="text-[10px] text-muted-foreground">({reviewsCount} تقييم)</span>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-primary">{price} ريال</span>
                {oldPrice && (
                  <span className="text-sm text-muted-foreground line-through">{oldPrice} ريال</span>
                )}
              </div>
              <span className="text-[10px] text-muted-foreground">اشتراك شهري</span>
            </div>
            
            <button className="w-10 h-10 bg-muted group-hover:bg-primary group-hover:text-white rounded-xl flex items-center justify-center transition-all">
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
