import type { Metadata } from "next";
import 'bootstrap/dist/css/bootstrap.css';
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
  title: "Internation Trade 2 Grow - Desarrollo de Negocios de LATAM",
  description: "Empresa dedicada al desarrollo de negocios en América Latina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" data-bs-theme="light">
      <body
        className={`${inter.variable} antialiased bg-light`}
      >
        <div className="min-vh-100 d-flex flex-column">
          {children}
        </div>
        <BootstrapClient />
      </body>
    </html>
  );
}
