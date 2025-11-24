"use client";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { I18nProvider } from "@/utils/i18n";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showSidebar, setShowSidebar] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const pathname = window.location.pathname;
      const user = localStorage.getItem("user");
      // Si está logueado y accede a / o /registro, redirigir a perfil
      if (user && (pathname === "/" || pathname === "/registro")) {
        window.location.href = "/perfil";
      }
      // Sidebar visible en todas las páginas excepto registro/login
      if (user && !["/registro", "/login", "/"].includes(pathname)) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    }
  }, []);
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>StoryUp</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-green-100`}>
        <I18nProvider>
          <Header />
          {showSidebar && <Sidebar />}
          <main>{children}</main>
        </I18nProvider>
      </body>
    </html>
  );
}
