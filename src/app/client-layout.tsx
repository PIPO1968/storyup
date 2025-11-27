"use client";
import React from "react";
import { usePathname, useRouter } from "next/navigation";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [showSidebar, setShowSidebar] = React.useState(false);
    const [mounted, setMounted] = React.useState(false);
    const router = useRouter();
    const pathname = usePathname();

    React.useEffect(() => {
        setMounted(true);
    }, []);

    React.useEffect(() => {
        if (!mounted || typeof window === "undefined") return;

        const user = sessionStorage.getItem("user");

        // Si está logueado y accede a / o /registro, redirigir a perfil
        if (user && (pathname === "/" || pathname === "/registro")) {
            router.push("/perfil");
            return;
        }

        // Sidebar visible en todas las páginas excepto registro/login
        if (user && !["/registro", "/login", "/"].includes(pathname)) {
            setShowSidebar(true);
        } else {
            setShowSidebar(false);
        }
    }, [mounted, pathname]);

    if (!mounted) {
        return (
            <>
                <Header />
                {children}
            </>
        );
    }

    return (
        <>
            <Header />
            {showSidebar && <Sidebar />}
            <main>{children}</main>
        </>
    );
}