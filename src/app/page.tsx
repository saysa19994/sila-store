import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/home/hero";
import ProductCard from "@/components/ui/product-card";
import CategoryCard from "@/components/ui/category-card";
import Countdown from "@/components/ui/countdown";
import { 
  Palette, 
  Cpu, 
  Monitor, 
  Gamepad2, 
  ShieldCheck, 
  Cloud, 
  Zap, 
  Star,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

const iconMap: Record<string, React.ReactNode> = {
  "design": <Palette />,
  "ai": <Cpu />,
  "entertainment": <Monitor />,
  "gaming": <Gamepad2 />,
  "security": <ShieldCheck />,
  "cloud": <Cloud />,
};

export default async function Home() {
  const { data: categoriesData } = await supabase.from('categories').select('*').limit(6);
  const { data: productsData } = await supabase.from('products').select('*').eq('is_featured', true).limit(4);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">تصفح حسب الفئة</h2>
              <Link href="/shop" className="text-primary font-bold flex items-center gap-2 hover:underline">
                شاهد الكل
                <ArrowLeft className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categoriesData?.map((cat) => (
                <CategoryCard key={cat.id} name={cat.name_ar} slug={cat.slug} icon={iconMap[cat.slug] || <Zap />} color={cat.color} count={0} />
              ))}
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">المنتجات المميزة</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {productsData?.map((p) => (
                <ProductCard key={p.id} id={p.id} name={p.title_ar} price={p.price_monthly} image={p.image_url} slug={p.slug} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
