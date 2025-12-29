"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layout, Palette, Smartphone, Terminal } from "lucide-react";

const skills = [
    { name: "Frontend Development", icon: Layout, description: "React, Next.js, TypeScript" },
    { name: "UI/UX Design", icon: Palette, description: "Figma, Tailwind CSS, Framer Motion" },
    { name: "Backend Integration", icon: Database, description: "Node.js, Supabase, PostgreSQL" },
    { name: "Mobile First", icon: Smartphone, description: "Responsive Design, PWA" },
    { name: "Clean Code", icon: Code2, description: "ESLint, Prettier, Best Practices" },
    { name: "DevOps", icon: Terminal, description: "Git, CI/CD, Vercel" },
];

export default function About() {
    return (
        <section id="about" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            I'm a passionate Frontend Developer with a keen eye for design and a drive for creating seamless digital experiences.
                            With over 2 years of experience, I bridge the gap between design and engineering.
                        </p>
                        <p className="text-lg text-muted-foreground mb-8">
                            My approach is user-centric, focusing on performance, accessibility, and clean code.
                            I love solving complex problems and turning ideas into reality.
                        </p>

                        <div className="p-6 bg-secondary/20 rounded-2xl border border-border">
                            <h3 className="font-semibold mb-4">Current Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "GraphQL"].map((tech) => (
                                    <span key={tech} className="px-3 py-1 bg-background border border-border rounded-full text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-secondary/10 rounded-xl border border-border hover:bg-secondary/30 transition-colors"
                            >
                                <skill.icon className="w-8 h-8 mb-4 text-primary" />
                                <h3 className="font-semibold mb-2">{skill.name}</h3>
                                <p className="text-sm text-muted-foreground">{skill.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
