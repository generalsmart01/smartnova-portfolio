"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const projects = [
    {
        title: "Properties Admin Dashboard",
        description: "A comprehensive dashboard for managing properties, blogs, and analytics. Built with Next.js and Recharts.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
        links: { demo: "https://nova-admin-dashboard-eight.vercel.app", repo: "https://github.com/generalsmart01/nova-admin-dashboard" },
        color: "from-green-500 to-gold-500",
        img: "/projects/property-admin.png",
    },
    // {
    //     title: "SaaS Landing Page",
    //     description: "High-conversion landing page with modern animations and pricing sections.",
    //     tags: ["React", "Framer Motion", "Stripe"],
    //     links: { demo: "#", repo: "#" },
    //     color: "from-purple-500 to-pink-500",
    //     img: "/projects/saas-landing.png",
    // },
    {
        title: "Task Management App",
        description: "Collaborative task manager with real-time updates and drag-and-drop interface.",
        tags: ["Next.js", "Supabase", "dnd-kit"],
        links: { demo: "#", repo: "#" },
        color: "from-orange-500 to-red-500",
        img: "/projects/task-management.png",
    },
    {
        title: "Frontend Resilience Lab",
        description:
            "A developer-focused dashboard simulation platform for building and testing resilient UI states. It helps teams validate loading, error, empty, offline, and success experiences, test API behavior, simulate network conditions, and share reusable scenario presets before shipping.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
        links: { demo: "https://frontendresilience-lab.vercel.app/", repo: "https://github.com/generalsmart01/frontendresilience-lab" },
        color: "from-blue-500 to-cyan-500",
        img: "/projects/frontend-resilient-lab.png",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 px-6 bg-secondary/30">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        A selection of projects that showcase my passion for building clean, efficient, and scalable web applications.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-colors"
                        >
                            {/* Project Image */}
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={project.img}
                                    alt={project.title}
                                    width={500}
                                    height={500}
                                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4">
                                    <a
                                        href={project.links.demo}
                                        className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                                    >
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a
                                        href={project.links.repo}
                                        className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
                                    >
                                        <Github size={16} /> Source
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
