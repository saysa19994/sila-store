import React from "react";
import Link from "next/link";
import { Search, ShoppingCart, User, Menu, Globe, CreditCard, LogOut, LayoutDashboard, Timer, Sparkles, Tag, Gift } from "lucide-react";
import { motion } from "framer-motion";

export default function DealsPage() {
  const deals = [
    {
      id: 1,
      title: "باقة أدوبي الإبداعية - سنة كاملة",
      originalPrice: 450,
      dealPrice: 199,
      discount: "55%",
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=400",
      timeLeft: "12:45:00",
      category: "برامج التصميم"
    },
    {
      id: 2,
      title: "نتفلكس بريميوم - 4K - 6 شهور",
      originalPrice: 180,
      dealPrice: 89,
      discount: "50%",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=400",
      timeLeft: "08:20:00",
      category: "ترفيه"
    },
    {
      id: 3,
      title: "يوتيوب بريميوم - سنة (اشتراك عائلي)",
      originalPrice: 120,
      dealPrice: 49,
      discount: "60%",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=400",
      timeLeft: "23:10:00",
      category: "خدمات قوقل"
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8">
          <div className="space-y-4 text-center md:text-right">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full font-bold text-sm">
              <Timer className="w-4 h-4" />
              عروض لفترة محدودة
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-tight">عروض <br /><span className="text-primary">صلة الكبرى</span></h1>
            <p className="text-muted-foreground text-lg max-w-xl">وفّر أكثر مع عروضنا الحصرية والمتجددة يومياً على أفضل الاشتراكات الرقمية.</p>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-4 bg-primary/20 rounded-[40px] blur-2xl group-hover:bg-primary/30 transition-all duration-500"></div>
            <div className="relative bg-card border border-border p-8 rounded-[40px] shadow-2xl flex flex-col items-center gap-4">
              <Sparkles className="w-12 h-12 text-primary animate-pulse" />
              <div className="text-center">
                <p className="text-3xl font-black">خصومات تصل لـ</p>
                <p className="text-6xl font-black text-primary">70%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deals.map((deal) => (
            <motion.div 
              key={deal.id}
              whileHover={{ y: -10 }}
              className="bg-card border border-border rounded-[32px] overflow-hidden flex flex-col group"
            >
              <div className="relative h-48">
                <img src={deal.image} alt={deal.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-danger text-white font-bold px-4 py-1 rounded-full text-sm">
                  -{deal.discount}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-2 rounded-xl flex items-center gap-2">
                  <Timer size={14} className="text-primary" />
                  ينتهي خلال: {deal.timeLeft}
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col gap-4 text-right">
                <div className="flex justify-between items-start">
                  <Tag size={16} className="text-muted-foreground" />
                  <span className="text-xs font-bold text-muted-foreground bg-muted px-3 py-1 rounded-full">{deal.category}</span>
                </div>
                <h3 className="text-xl font-bold leading-snug">{deal.title}</h3>
                
                <div className="mt-auto pt-4 flex items-end justify-between border-t border-border">
                  <Link href="/shop" className="bg-primary text-white p-3 rounded-2xl hover:scale-110 transition-all">
                    <ShoppingCart size={20} />
                  </Link>
                  <div className="flex flex-col items-end">
                    <span className="text-muted-foreground line-through text-sm">{deal.originalPrice} ريال</span>
                    <span className="text-2xl font-black text-primary">{deal.dealPrice} ريال</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Exclusive Coupon Section */}
        <div className="mt-20 bg-gradient-to-r from-primary to-secondary p-1 rounded-[40px]">
          <div className="bg-background rounded-[38px] p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 text-center md:text-right">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full font-bold text-sm">
                <Gift className="w-4 h-4" />
                كوبون خاص بالجمعة البيضاء
              </div>
              <h2 className="text-3xl md:text-5xl font-black leading-tight">استخدم كود <span className="text-primary">SILA20</span> واحصل على خصم إضافي!</h2>
              <p className="text-muted-foreground">هذا الكود صالح لمرة واحدة لكل عميل على جميع باقات اشتراك نتفلكس ويوتيوب.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
               <div className="text-6xl font-black border-4 border-dashed border-primary px-12 py-6 rounded-[32px] text-primary">SILA20</div>
               <button className="text-sm font-bold text-muted-foreground hover:text-primary transition-colors">اضغط لنسخ الكود</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
