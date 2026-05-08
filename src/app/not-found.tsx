"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Home, Search, Ghost } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      
      <div className="max-w-md w-full text-center space-y-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative inline-block"
        >
           <Ghost size={120} className="text-primary/20 animate-bounce" />
           <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl font-black opacity-10">404</span>
        </motion.div>

        <div className="space-y-4">
           <h1 className="text-4xl font-bold">عذراً، الصفحة مفقودة!</h1>
           <p className="text-muted-foreground text-lg leading-relaxed">
             يبدو أنك ضللت الطريق. الصفحة التي تبحث عنها غير موجودة أو تم نقلها.
           </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
           <Link 
             href="/" 
             className="bg-primary text-white px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:scale-105 transition-all"
           >
             <Home size={20} />
             العودة للرئيسية
           </Link>
           <Link 
             href="/shop" 
             className="bg-card border border-border px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-muted transition-all"
           >
             <Search size={20} />
             تصفح المتجر
           </Link>
        </div>

        <div className="pt-10 border-t border-border">
           <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">متجر صلة الرقمي</p>
        </div>
      </div>
    </div>
  );
}
