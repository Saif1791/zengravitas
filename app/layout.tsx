import "./css/style.css";

import { Inter } from "next/font/google";
import Footer from "@/components/ui/footer";
import { SideBar } from "../components/sidebar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-gray-50 font-inter tracking-tight antialiased flex flex-row justify-center`}
      >
        <div className="flex flex-row">
          <SideBar />
          <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
