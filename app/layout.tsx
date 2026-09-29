import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Confeitaria Prates",
  description: "Site oficial da Prates Confeitaria, uma confeitaria especializada em bolos, doces e sobremesas artesanais. Descubra nossas deliciosas criações e encomende online.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={cormorantGaramond.variable}>
        {children}
      </body>
    </html>
  );
}