import type { Metadata } from "next";
import "./globals.css";

import { GeistSans } from 'geist/font/sans'

import grid from './grid.svg'
import Footer from "./components/footer";

// type RootLayoutProps = {
//   children: React.ReactNode
// }

const SITE_URL = 
  process.env.NODE_ENV === 'production' ? 'https://links.projextly.com' : "http://localhost:3000";
const SITE_TITLE = 'Links | Projextly';
const SITE_DESCRIPTION = 
  'Connect with me on all my social media profiles through Links. Discover new content and stay updated with my latest posts!';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    }
  },
  manifest: '/favicon/site.webmanifest',
  twitter: {
    title: "Projextly Links",
    card: 'summary_large_image',
    site: '@projextly',
    creator: '@projextly',
  },
  alternates: {
    canonical: SITE_URL,
  },

}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body
        className="relative bg-[#020202] font-sans text-white"
      >
        <div 
          className="absolute inset-0 -z-10 size-full" 
          style={{
            backgroundImage: `url(${grid.src})`
          }}  
        />
        <div 
          className="absolute inset-0 -z-10 size-full"
          style={{
            backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,0.8) 20%, rgba(0,0,0,0) 100%)'
          }}
        />
        <div className="relative min-h-screen overflow-x-hidden">
          <main className="relative mx-auto max-w-lg px-4">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
