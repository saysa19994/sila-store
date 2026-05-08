"use client";

import React, { useState } from "react";
import { ShoppingCart, Zap, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";

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

  const addToCart = (redirect = false) => {
    // 1. Get current cart
    const savedCart = localStorage.getItem("sila_cart");
    let cart = savedCart ? JSON.parse(savedCart) : [];

    // 2. Check if item exists
    const exists = cart.find((item: any) => item.id === product.id);
    if (exists) {
      exists.quantity += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.title_ar,
        price: product.price_monthly,
        image: product.image_url,
        quantity: 1
      });
    }

    // 3. Save back to localStorage
    localStorage.setItem("sila_cart", JSON.stringify(cart));
    
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);

    if (redirect) {
      router.push("/cart");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <button 
        onClick={() => addToCart(false)}
        className={`flex-1 ${added ? 'bg-success' : 'bg-primary'} text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-primary/20`}
      >
        {added ? <CheckCircle2 size={22} /> : <ShoppingCart size={22} />}
        {added ? "تمت الإضافة!" : "أضف للسلة"}
      </button>
      <button 
        onClick={() => addToCart(true)}
        className="flex-1 bg-card border border-border py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-muted transition-all"
      >
        <Zap size={22} className="text-secondary" />
        شراء الآن
      </button>
    </div>
  );
}
