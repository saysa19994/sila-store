"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface CategoryCardProps {
  name: string;
  icon: React.ReactNode;
  color: string;
  slug: string;
  count: number;
}

const CategoryCard = ({ name, icon, color, slug, count }: CategoryCardProps) => {
  return (
    <Link href={`/shop/${slug}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="flex flex-col items-center gap-4 bg-card border border-border p-6 rounded-3xl hover:border-primary/50 transition-all group"
      >
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all group-hover:shadow-lg"
          style={{ backgroundColor: `${color}10`, color: color }}
        >
          {React.cloneElement(icon as React.ReactElement<any>, { size: 32 })}
        </div>
        <div className="text-center">
          <h4 className="font-bold">{name}</h4>
          <p className="text-xs text-muted-foreground">{count} منتج</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default CategoryCard;
