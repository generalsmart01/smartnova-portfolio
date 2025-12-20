"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, Folder, User, Mail } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const navLinks = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "Projects", href: "#projects", icon: Folder },
    { name: "About", href: "#about", icon: User },
    { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const currentTheme = mounted ? (resolvedTheme || theme) : 'light';

    return (
        <>
            {/* Top Navigation (Desktop & Mobile Brand) */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center">
                        <Image
                            src={currentTheme === 'dark' ? '/logo-darkmode.png' : '/logo-lightmode.png'}
                            alt="Generalsmart01"
                            width={200}
                            height={100}
                            priority
                            className="h-16 w-auto"
                        />
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <ModeToggle />
                    </div>

                    {/* Mobile Theme Toggle */}
                    <div className="md:hidden">
                        <ModeToggle />
                    </div>
                </div>
            </nav>

            {/* Bottom Navigation (Mobile & Tablet) */}
            <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-t border-border pb-safe">
                <div className="flex items-center justify-around h-16 px-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex flex-col items-center justify-center w-full h-full text-muted-foreground hover:text-foreground transition-colors gap-1"
                        >
                            <link.icon size={20} />
                            <span className="text-[10px] font-medium">{link.name}</span>
                        </Link>
                    ))}
                </div>
            </nav>
        </>
    );
}
