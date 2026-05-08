import React from "react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import ProductCard from "@/components/ui/product-card";
import { supabase } from "@/lib/supabase";
import { Search, Filter } from "lucide-react";

export default async function ShopPage({
  searchParams,
}: {
  searchParams: { category?: string; q?: string };
}) {
  // 1. Build Query
  let query = supabase.from('products').select('*');

  if (searchParams.category) {
    query = query.eq('slug', searchParams.category); // Simplified for now
  }

  if (searchParams.q) {
    query = query.ilike('title_ar', `%${searchParams.q}%`);
  }

  const { data: products } = await query;

  // 2. Fetch Categories for filter
  const { data: categories } = await supabase.from('categories').select('*');

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-2">متجر صلة</h1>
              <p className="text-muted-foreground">استكشف أفضل الاشتراكات الرقمية بأسعار تنافسية.</p>
            </div>
            
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input 
                type="text" 
                placeholder="ابحث عن منتج..." 
                className="w-full bg-muted/50 border border-border rounded-2xl py-4 pr-12 pl-4 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar Filters */}
            <aside className="w-full lg:w-64 space-y-8">
              <div>
                <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Filter className="w-5 h-5 text-primary" />
                  الفئات
                </h3>
                <div className="space-y-2">
                   <button className="w-full text-right px-4 py-2 rounded-xl bg-primary text-white font-bold text-sm">الكل</button>
                   {categories?.map((cat) => (
                     <button key={cat.id} className="w-full text-right px-4 py-2 rounded-xl hover:bg-muted text-sm font-medium transition-all">
                       {cat.name_ar}
                     </button>
                   ))}
                </div>
              </div>
            </aside>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {products?.map((product) => (
                  <ProductCard 
                    key={product.id}
                    id={product.id}
                    name={product.title_ar}
                    category={product.slug}
                    price={Number(product.price_monthly)}
                    oldPrice={Number(product.price_yearly) || undefined}
                    rating={4.9}
                    reviewsCount={85}
                    image={product.image_url || ""}
                    slug={product.slug}
                  />
                ))}
              </div>
              
              {(!products || products.length === 0) && (
                <div className="text-center py-20 bg-muted/20 rounded-[32px] border border-dashed border-border">
                  <p className="text-muted-foreground">لا توجد منتجات متوفرة حالياً في هذا القسم.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
