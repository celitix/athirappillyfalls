import { Geist, Geist_Mono, Lato ,Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/components/navbar";
import Footer from "@/app/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const lato = Lato({
  variable: "--font-lato",
  weight: ['300', '400', '700', '900'], 
  subsets: ['latin'],
  display: 'swap',
})

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  weight: ['300', '400', '700', ], 
  subsets: ["latin"],
  display: 'swap',
})

export const metadata = {
 title: "Athirappilly Falls | Athirapally Falls | Waterfalls In Kerala",
  description: "A worth visit to the Athirappilly Falls offering a scenic beauty to you. It is situated in Kerala in South India. Thirussur is a tourist spot in Kerala for.",
   alternates: {
      canonical: "https://www.athirappillyfalls.com/",
    },
   icons: {
    icon: [
      { url: '/athirappillyfalls-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/athirappillyfalls-192x192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/athirappillyfalls-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${lato.variable} ${josefinSans.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
