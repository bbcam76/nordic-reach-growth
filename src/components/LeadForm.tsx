import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle2, Loader2 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function LeadForm() {
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!company.trim() || !email.trim()) return;

    setStatus("loading");

    // For now, simulate success. Backend will be connected via Lovable Cloud.
    await new Promise((r) => setTimeout(r, 800));
    setStatus("success");
  };

  return (
    <section id="signup" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <ScrollReveal>
            <div className="glass-card-glow rounded-2xl p-8 sm:p-10">
              {status === "success" ? (
                <div className="text-center py-8">
                  <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Thank you!</h3>
                  <p className="text-muted-foreground text-sm">
                    We'll be in touch within 24 hours to discuss how we can help your business grow.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-foreground mb-2 text-center text-balance">
                    Let's Grow Together
                  </h2>
                  <p className="text-muted-foreground text-sm text-center mb-8">
                    Leave your details and we'll reach out with a tailored plan.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="company" className="text-sm font-medium text-foreground">
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Acme AB"
                        required
                        maxLength={100}
                        className="h-11 bg-background/60"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-foreground">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        required
                        maxLength={255}
                        className="h-11 bg-background/60"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+46 70 123 45 67"
                        maxLength={20}
                        className="h-11 bg-background/60"
                      />
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full"
                      disabled={status === "loading"}
                    >
                      {status === "loading" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        "Get Your Free Consultation"
                      )}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
