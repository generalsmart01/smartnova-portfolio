"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-6 bg-secondary/30">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Get In Touch</h2>
                    <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
                        I'm currently open to new opportunities and collaborations.
                        Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        <div className="flex flex-col items-center p-6 bg-background rounded-xl border border-border">
                            <Mail className="w-8 h-8 mb-4 text-primary" />
                            <h3 className="font-semibold mb-2">Email</h3>
                            <a href="mailto:michaelbrainy19@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                michaelbrainy19@gmail.com
                            </a>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-background rounded-xl border border-border">
                            <Phone className="w-8 h-8 mb-4 text-primary" />
                            <h3 className="font-semibold mb-2">Phone</h3>
                            <p className="text-muted-foreground">+234 902 421 3422</p>
                        </div>

                        <div className="flex flex-col items-center p-6 bg-background rounded-xl border border-border">
                            <MapPin className="w-8 h-8 mb-4 text-primary" />
                            <h3 className="font-semibold mb-2">Location</h3>
                            <p className="text-muted-foreground">Ibadan, Oyo State, NG</p>
                        </div>
                    </div>

                    <a
                        href="mailto:michaelbrainy19@gmail.com"
                        className="inline-block px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
                    >
                        Say Hello
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
