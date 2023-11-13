import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  style: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Overwatch Coder | Porfolio",
  description: "Overwatch Coder Porfolio website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} overflow-x-hidden scroll-smooth`}>
        <section className="flex justify-center">
          <div className="w-72 min-h-screen bg-slate-900">
            <SideNav />
          </div>
          <main className="w-full flex-1 flex flex-col px-5 min-h-screen bg-slate-100">
            <div className="mb-auto">{children}</div>
            <Footer />
          </main>
        </section>
      </body>
    </html>
  );
}
