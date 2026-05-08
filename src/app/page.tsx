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

// Category Icon Mapping
const iconMap: Record<string, React.ReactNode> = {
  "design": <Palette />,
  "ai": <Cpu />,
  "entertainment": <Monitor />,
  "gaming": <Gamepad2 />,
  "security": <ShieldCheck />,
  "cloud": <Cloud />,
};

export default async function Home() {
  // 1. Fetch Categories from Supabase
  const { data: categoriesData } = await supabase
    .from('categories')
    .select('*')
    .limit(6);

  // 2. Fetch Featured Products from Supabase
  const { data: productsData } = await supabase
    .from('products')
    .select('*')
    .eq('is_featured', true)
    .limit(4);

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        {/* Categories Section */}
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
                <CategoryCard 
                  key={cat.id} 
                  name={cat.name_ar} 
                  slug={cat.slug} 
                  icon={iconMap[cat.slug] || <Zap />} 
                  color={cat.color || "#6C3CE1"}
                  count={0} // Can be calculated with a count query
                />
              ))}
            </div>
          </div>
        </section>

        {/* Bestsellers Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">الأكثر مبيعاً</h2>
              <p className="text-muted-foreground">
                انضم إلى أكثر من 50,000 عميل يثقون بصلة للحصول على اشتراكاتهم الرقمية.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {productsData?.map((product) => (
                <ProductCard 
                  key={product.id}
                  id={product.id}
                  name={product.title_ar}
                  category={product.slug} // Assuming slug can act as cat label or join needed
                  price={Number(product.price_monthly)}
                  oldPrice={Number(product.price_yearly) || undefined}
                  rating={4.9}
                  reviewsCount={120}
                  image={product.image_url || ""}
                  slug={product.slug}
                  badge={product.is_featured ? "مميز" : undefined}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Flash Deals Section */}
        <section className="py-20 bg-primary text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="space-y-6 text-center lg:text-right">
                <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full text-sm font-bold backdrop-blur-sm">
                  <Zap className="w-4 h-4 text-secondary" />
                  <span>عروض لفترة محدودة</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold">عروض اليوم الخارقة!</h2>
                <p className="text-white/80 text-lg max-w-xl">
                  خصومات تصل إلى 90% على منتجات مختارة. تنتهي العروض عند انتهاء العداد.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                  <div className="space-y-2">
                    <p className="text-sm font-bold opacity-80 uppercase tracking-widest">ينتهي خلال:</p>
                    <Countdown />
                  </div>
                  <Link href="/shop" className="bg-secondary text-black px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-secondary/20">
                    اقتنص العروض الآن
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <div className="absolute inset-0 bg-white/20 blur-[80px] rounded-full group-hover:bg-white/30 transition-all"></div>
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/1024px-ChatGPT_logo.svg.png" 
                  alt="Deals" 
                  className="w-64 h-64 relative z-10 animate-pulse"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features / Why Us */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Zap size={40} />
                </div>
                <h3 className="text-2xl font-bold">تسليم آلي فوراً</h3>
                <p className="text-muted-foreground leading-relaxed">
                  لا حاجة للانتظار. بمجرد إتمام الدفع، ستصلك بيانات الاشتراك فوراً عبر البريد الإلكتروني ولوحة تحكمك.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-secondary/10 text-secondary rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <ShieldCheck size={40} />
                </div>
                <h3 className="text-2xl font-bold">ضمان ذهبي ممتد</h3>
                <p className="text-muted-foreground leading-relaxed">
                  نحن نضمن لك اشتراكاً فعالاً طوال المدة المحددة. في حال حدوث أي مشكلة، نقوم بالاستبدال الفوري.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-info/10 text-info rounded-3xl flex items-center justify-center mx-auto mb-6">
                  <Star size={40} />
                </div>
                <h3 className="text-2xl font-bold">دعم فني متخصص</h3>
                <p className="text-muted-foreground leading-relaxed">
                  فريقنا متاح على مدار الساعة عبر الواتساب والدردشة المباشرة للإجابة على جميع استفساراتك ومساعدتك.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
