import { Crimson_Pro, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/custom-components/Navbar";
import Footer from "@/components/custom-components/Footer";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const headingFont = Crimson_Pro({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata = {
  title: "Begined India",
  description: "Begined India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/dashicons/3.9.1/css/dashicons.min.css"
        />
      </head>

      <body
        className={`${bodyFont.variable} ${headingFont.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
