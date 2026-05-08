import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export async function GET() {
  try {
    console.log("Starting seed process via API...");

    // 1. Create Categories
    const { data: categories, error: catError } = await supabase
      .from('categories')
      .upsert([
        { name_ar: 'الذكاء الاصطناعي', slug: 'ai-tools' },
        { name_ar: 'خدمات البث', slug: 'streaming' },
        { name_ar: 'تصميم وإبداع', slug: 'design' }
      ], { onConflict: 'slug' })
      .select();

    if (catError) throw catError;

    const aiCatId = categories.find(c => c.slug === 'ai-tools').id;
    const streamCatId = categories.find(c => c.slug === 'streaming').id;
    const designCatId = categories.find(c => c.slug === 'design').id;

    // 2. Create Products
    const products = [
      {
        title_ar: 'اشتراك Google Gemini Premium 🤖✨',
        slug: 'gemini-premium',
        description_ar: 'فعّل الآن الذكاء الاصطناعي الأقوى من Google واستمتع بمميزات Gemini المتقدمة! وصول كامل لميزات Gemini Pro، ردود ذكية واحترافية، مساعدك الشخصي في الكتابة، الترجمة، والبحث.',
        price_monthly: 49,
        price_yearly: 499,
        image_url: 'https://www.google.com/gemini/static/images/gemini_logo_gradient_v2.png',
        category_id: aiCatId
      },
      {
        title_ar: 'نتفلكس بريميوم - 4K Ultra HD 🍿',
        slug: 'netflix-premium',
        description_ar: 'استمتع بمشاهدة أفلامك ومسلسلاتك المفضلة بأعلى جودة 4K على 4 أجهزة في وقت واحد. حساب بريميوم رسمي ومستقر.',
        price_monthly: 35,
        price_yearly: 350,
        image_url: 'https://images.ctfassets.net/y2ske730sjwb/4biAy4s0HAsjSthhtHpybs/2222f7786411516e5015b60218157790/Netflix-Logo.png',
        category_id: streamCatId
      },
      {
        title_ar: 'يوتيوب بريميوم - بدون إعلانات 📺',
        slug: 'youtube-premium',
        description_ar: 'تخلص من الإعلانات المزعجة، استمع في الخلفية، وحمل فيديوهاتك للمشاهدة بدون إنترنت. اشتراك رسمي على إيميلك الشخصي.',
        price_monthly: 15,
        price_yearly: 150,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png',
        category_id: streamCatId
      },
      {
        title_ar: 'كانفا برو - Canva Pro للرسم والتصميم 🎨',
        slug: 'canva-pro',
        description_ar: 'وصول كامل لجميع الصور والقوالب والخطوط البريميوم. صمم باحترافية وسهولة مع أدوات الذكاء الاصطناعي من كانفا.',
        price_monthly: 25,
        price_yearly: 199,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Canva_logo_2021.svg/2560px-Canva_logo_2021.svg.png',
        category_id: designCatId
      },
      {
        title_ar: 'أدوبي كريتيف كلاود - Adobe CC 🖌️',
        slug: 'adobe-creative-cloud',
        description_ar: 'جميع برامج أدوبي في اشتراك واحد (فوتوشوب، إليستريتور، بريمير، والمزيد). اشتراك رسمي يدعم التحديثات وسحابة أدوبي.',
        price_monthly: 89,
        price_yearly: 899,
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Adobe_Creative_Cloud_logo.svg/2560px-Adobe_Creative_Cloud_logo.svg.png',
        category_id: designCatId
      }
    ];

    const { error: prodError } = await supabase
      .from('products')
      .upsert(products, { onConflict: 'slug' });

    if (prodError) throw prodError;

    return NextResponse.json({ success: true, message: "Database seeded successfully!" });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
