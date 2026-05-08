"use client";

import React, { useState } from "react";
import { ShoppingCart, Zap, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/cart-context";

interface AddToCartProps {
  product: {
    id: string;
    title_ar: string;
    price_monthly: number;
    image_url: string;
  };
}

export default function AddToCartButtons({ product }: AddToCartProps) {
  const router = useRouter();
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = (redirect = false) => {
    addToCart(product);
    
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);

    if (redirect) {
      router.push("/cart");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <button 
        onClick={() => handleAddToCart(false)}
        className={`flex-1 ${added ? 'bg-success' : 'bg-primary'} text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-primary/20`}
      >
        {added ? <CheckCircle2 size={22} /> : <ShoppingCart size={22} />}
        {added ? "تمت الإضافة!" : "أضف للسلة"}
      </button>
      <button 
        onClick={() => handleAddToCart(true)}
        className="flex-1 bg-card border border-border py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-muted transition-all"
      >
        <Zap size={22} className="text-secondary" />
        شراء الآن
      </button>
    </div>
  );
}
