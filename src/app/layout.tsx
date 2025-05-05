import type { Metadata } from "next";
import 'bootswatch/dist/darkly/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";
import { Inter } from "next/font/google";
import BootstrapClient from "@/components/BootstrapClient";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "International Trade to Grow - Desarrollo de Negocios de LATAM",
  description: "Empresa dedicada al desarrollo de negocios en América Latina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-bs-theme="dark">
      <body
        className={`${inter.variable} antialiased`}
      >
        <div className="min-vh-100 d-flex flex-column">
          {children}
        </div>
        <BootstrapClient />
      </body>
    </html>
  );
}
