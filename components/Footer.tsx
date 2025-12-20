export default function Footer() {
    return (
        <footer className="py-8 px-6 border-t border-border bg-background">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Frontend Developer. All rights reserved.
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                    <a href="#" className="hover:text-foreground transition-colors">
                        Twitter
                    </a>
                    <a href="#" className="hover:text-foreground transition-colors">
                        GitHub
                    </a>
                    <a href="#" className="hover:text-foreground transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
