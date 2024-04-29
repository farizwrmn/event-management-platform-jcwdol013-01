import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Navbar from "./pages/navbar";
import Footer from "./pages/Footer";

const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "askEvent",
  description: "Event Finder Web App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      publishableKey="pk_test_aGVscGluZy1tb25rZmlzaC02Ny5jbGVyay5hY2NvdW50cy5kZXYk"
      appearance={{
        layout: {
          socialButtonsPlacement: "bottom",
        },
      }}
    >
      <html lang="en">
        <body className={quicksand.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
