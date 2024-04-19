import type { Metadata } from "next";
import { Urbanist} from "next/font/google";
import "./globals.css";
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
 
import Header from "@/app/componets/header";
import Navbar2 from "@/app/componets/navbar";


const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portafolio Gianfranco Siccardi",
  description: "portafolio",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />
        <Navbar2/>
        {children}
      </body>
    </html>
  );
}

