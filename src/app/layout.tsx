import type { Metadata } from "next";
import Script from "next/script";
import { Cairo, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/components/providers/auth-provider";
import SalesNotification from "@/components/ui/sales-notification";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "صلة (Sila) | أكبر متجر للاشتراكات الرقمية في الوطن العربي",
  description: "وفر أكثر من 70% على اشتراكاتك المفضلة (أدوبي، نتفلكس، كانفا، والمزيد). تسليم فوري، ضمان ذهبي، ودفع آمن عبر مدى وApple Pay.",
  keywords: "اشتراكات رقمية, متجر صلة, اشتراك نتفلكس, اشتراك ادوبي, اشتراك كانفا, اشتراك يوتيوب بريميوم, متجر تطبيقات, اشتراكات رخيصة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${cairo.variable} ${inter.variable} antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.moyasar.com/mpf/1.14.0/moyasar.css"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground font-cairo">
        <Script src="https://cdn.moyasar.com/mpf/1.14.0/moyasar.js" strategy="afterInteractive" />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            {children}
            <SalesNotification />
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
