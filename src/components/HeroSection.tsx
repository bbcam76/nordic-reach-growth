import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden pt-16">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-accent/10 blur-3xl animate-float" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-primary/8 blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block text-sm font-semibold tracking-wide text-accent uppercase mb-4">
              Sales Consulting for the Nordics
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight text-foreground text-balance mb-6"
            initial={{ opacity: 0, y: 28, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
          >
            Scale Your Sales Without the Overhead
          </motion.h1>

          <motion.p
            className="text-lg text-muted-foreground max-w-lg mx-auto mb-10 text-pretty"
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            Nordic Reach Group helps companies grow through high-performance remote sales — transparent, fair, and built for results.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button variant="hero" size="xl" asChild>
              <a href="#signup">Book a Call</a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="#services">Get Started</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
