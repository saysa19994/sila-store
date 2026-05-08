import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { 
  Star, 
  ShieldCheck, 
  Zap, 
  Clock, 
  MessageCircle,
  Share2,
  Heart,
  ShoppingCart
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import { notFound } from "next/navigation";

export default async function ProductDetails({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  // 1. Fetch Product Data
  const { data: product } = await supabase
    .from('products')
    .select('*, categories(*)')
    .eq('slug', slug)
    .single();

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
            
            {/* Left: Product Image */}
            <div className="flex-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-all"></div>
                <div className="relative bg-card border border-border rounded-[40px] p-12 aspect-square flex items-center justify-center overflow-hidden shadow-2xl">
                   <img 
                    src={product.image_url} 
                    alt={product.title_ar} 
                    className="w-full h-auto max-w-sm transform group-hover:scale-105 transition-all duration-700" 
                   />
                </div>
              </div>
            </div>

            {/* Right: Product Info */}
            <div className="flex-1 space-y-8">
               <div className="space-y-4">
                  <div className="flex items-center gap-2 text-primary font-bold text-sm">
                    <span className="bg-primary/10 px-3 py-1 rounded-full">{product.categories?.name_ar}</span>
                    <span className="text-muted-foreground">/</span>
                    <span>تسليم فوري</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-black leading-tight">{product.title_ar}</h1>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-secondary">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                    </div>
                    <span className="text-sm font-bold">4.9 (1,240 تقييم)</span>
                  </div>
               </div>

               <div className="p-8 bg-muted/30 rounded-[32px] border border-border space-y-6">
                  <div className="flex items-end gap-4">
                    <span className="text-5xl font-black text-primary">{product.price_monthly} ريال</span>
                    {product.price_yearly && (
                      <span className="text-xl text-muted-foreground line-through mb-1">{product.price_yearly} ريال</span>
                    )}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description_ar}
                  </p>
               </div>

               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button className="flex-1 bg-primary text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:scale-[1.02] transition-all shadow-xl shadow-primary/20">
                    <ShoppingCart size={22} />
                    أضف للسلة
                  </button>
                  <button className="flex-1 bg-card border border-border py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:bg-muted transition-all">
                    <Zap size={22} className="text-secondary" />
                    شراء الآن
                  </button>
               </div>

               {/* Trust Features */}
               <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-success/10 text-success rounded-xl flex items-center justify-center">
                      <ShieldCheck size={20} />
                    </div>
                    <div className="text-xs">
                       <p className="font-bold">ضمان ذهبي</p>
                       <p className="text-muted-foreground">استبدال فوري للمنتج</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center">
                      <Clock size={20} />
                    </div>
                    <div className="text-xs">
                       <p className="font-bold">تسليم آلي</p>
                       <p className="text-muted-foreground">خلال أقل من 60 ثانية</p>
                    </div>
                  </div>
               </div>

               {/* Reviews Section */}
               <div className="pt-20 space-y-12">
                  <div className="flex items-center justify-between">
                     <h2 className="text-3xl font-bold">آراء المشتركين</h2>
                     <button className="text-primary font-bold hover:underline">أضف تقييمك</button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     {[
                        { name: "محمد العتيبي", rating: 5, date: "منذ يومين", comment: "خدمة سريعة جداً، استلمت كود أدوبي في أقل من دقيقة. شكراً صلة!" },
                        { name: "سارة القحطاني", rating: 5, date: "منذ أسبوع", comment: "أفضل متجر تعاملت معه، السعر ممتاز والدعم الفني متعاون جداً." }
                     ].map((rev, i) => (
                        <div key={i} className="bg-muted/30 border border-border p-8 rounded-[32px] space-y-4">
                           <div className="flex justify-between items-center">
                              <p className="font-bold">{rev.name}</p>
                              <span className="text-[10px] text-muted-foreground">{rev.date}</span>
                           </div>
                           <div className="flex items-center gap-1 text-secondary">
                              {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                           </div>
                           <p className="text-sm text-muted-foreground leading-relaxed italic">"{rev.comment}"</p>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
