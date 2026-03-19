import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import localFont from "next/font/local";

export const fontBangla = localFont({
  src: "./../fonts/mayaboti-normal.ttf",
  // weight: []
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const baseUrl = "https://hero-kidz-rose-sigma.vercel.app";

export const metadata = {
  title: {
    default: "HeroKidz Store",
    template: "%s | HeroKidz",
  },
  description:
    "Shop premium kids products, toys, fashion, and essentials at HeroKidz. Enjoy affordable prices, fast delivery, and secure checkout.",

  applicationName: "HeroKidz",
  generator: "Next.js",

  keywords: [
    "ecommerce",
    "kids store",
    "toys online",
    "kids fashion",
    "buy toys",
    "online shopping",
  ],

  authors: [{ name: "Kamrul Hasan" }],

  creator: "Kamrul Hasan",
  publisher: "HeroKidz",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  metadataBase: new URL(baseUrl),

  alternates: {
    canonical: baseUrl,
  },

  openGraph: {
    title: "HeroKidz - Kids Toys & Fashion Store",
    description:
      "Discover fun, safe, and affordable toys and kids fashion. Shop now at HeroKidz with fast delivery and secure payment.",
    url: baseUrl,
    siteName: "HeroKidz",
    images: [
      {
        url: `${baseUrl}/assets/logo.png`,
        width: 1200,
        height: 630,
        alt: "HeroKidz Store",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "HeroKidz Store",
    description:
      "Shop kids toys, fashion, and essentials with great deals and fast delivery.",
    images: [`${baseUrl}/assets/logo.png`],
  },

  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon.ico",
  //   apple: "/apple-icon.png",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <header>
          {/* Navbar */}
          <Navbar />
        </header>

        {/* main */}
        <main className="min-h-[calc(100vh-81px-275px)] w-11/12 max-w-7xl mx-auto">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
