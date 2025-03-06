import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome - Overwatch Coder | Porfolio",
  description: "Overwatch Coder Porfolio website",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.className} antialiased overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <section className="!light-mode dark:!dark-mode">
            <div className="flex min-h-screen flex-col w-full mx-auto container">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}
