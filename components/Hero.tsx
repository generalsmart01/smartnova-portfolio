"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export default function Hero() {
    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background" />

            <div className="max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6">
                        Available for work
                    </span>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                        Building Digital <br /> Experiences
                    </h1>
                    <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        I'm a Frontend Developer specializing in building exceptional digital experiences.
                        Currently focused on accessible, human-centered products.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
                        <Link
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
                        >
                            View Projects <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors"
                        >
                            Contact Me
                        </Link>
                    </div>

                    <div className="flex items-center justify-center gap-6 text-muted-foreground">
                        <Link href="https://github.com/generalsmart01" className="hover:text-foreground transition-colors">
                            <Github size={24} />
                        </Link>
                        <Link href="https://linkedin.com/in/adeleke-michael-segun-50a470194/" className="hover:text-foreground transition-colors">
                            <Linkedin size={24} />
                        </Link>
                        <Link href="#" className="hover:text-foreground transition-colors">
                            <Twitter size={24} />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
