import type { Metadata } from "next";
import { Bricolage_Grotesque} from "next/font/google";
import "./globals.css";
import { cn } from "@/utils/cn";
import Header from '../components/custom/Header';

const bricolage_grotesque = Bricolage_Grotesque({ subsets: ["latin"],  variable: "--font-Bricolage_Grotesque" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen font-Bricolage_Grotesque w-100",
          bricolage_grotesque.variable
        )}>
          <Header />
          <main>
          {children}
          </main>
        </body>
    </html>
  );
}
