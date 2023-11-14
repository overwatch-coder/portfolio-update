import { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import SideNav from "./components/SideNav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavProvider from "./context/NavProvider";

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
        <NavProvider>
          <Header />
          <section className="flex justify-center relative">
            <SideNav />
            <main className="w-full flex-1 flex flex-col min-h-screen bg-slate-100 md:ms-[18rem]">
              <div className="mb-auto px-5">{children}</div>
              <Footer />
            </main>
          </section>
        </NavProvider>
      </body>
    </html>
  );
}
