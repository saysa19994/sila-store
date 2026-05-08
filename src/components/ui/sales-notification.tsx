"use client";

import React, { useState, useEffect } from "react";
import { ShoppingBag, X } from "lucide-react";

const cities = ["الرياض", "جدة", "الدمام", "مكة المكرمة", "المدينة المنورة", "القصيم", "تبوك", "أبها"];
const products = ["Adobe Creative Cloud", "Canva Pro", "ChatGPT Plus", "YouTube Premium", "Netflix 4K", "Windows 11 Pro"];

export default function SalesNotification() {
  const [show, setShow] = useState(false);
  const [sale, setSale] = useState({ city: "", product: "", time: "" });

  useEffect(() => {
    // Show first notification after 5 seconds
    const timer = setTimeout(() => {
      generateSale();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const generateSale = () => {
    const randomCity = cities[Math.floor(Math.random() * cities.length)];
    const randomProduct = products[Math.floor(Math.random() * products.length)];
    
    setSale({
      city: randomCity,
      product: randomProduct,
      time: "منذ دقيقة"
    });
    
    setShow(true);

    // Hide after 6 seconds
    setTimeout(() => {
      setShow(false);
      // Generate next one after a random delay (15-30 seconds)
      setTimeout(generateSale, Math.random() * 15000 + 15000);
    }, 6000);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-6 right-6 z-[100] animate-in slide-in-from-right-full duration-500">
      <div className="bg-card border border-border p-4 pr-6 rounded-[24px] shadow-2xl flex items-center gap-4 max-w-xs relative group overflow-hidden">
        <div className="absolute top-0 right-0 w-1 h-full bg-primary"></div>
        <button 
          onClick={() => setShow(false)}
          className="absolute top-2 left-2 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all"
        >
          <X size={14} />
        </button>
        
        <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center shrink-0">
          <ShoppingBag size={24} />
        </div>
        
        <div className="text-sm">
          <p className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest mb-1">طلب جديد!</p>
          <p className="font-bold leading-tight">شخص من <span className="text-primary">{sale.city}</span> اشترى <span className="text-secondary">{sale.product}</span></p>
          <p className="text-[10px] text-muted-foreground mt-1">{sale.time}</p>
        </div>
      </div>
    </div>
  );
}
