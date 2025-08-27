import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Instagram } from "lucide-react";
import { TikTokIcon } from "./TikTokIcon";
import { supabase } from "@/integrations/supabase/client";

export const EmailSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("EMAIL", email);
      const { data, error } = await supabase
        .from("signups")
        .insert([{ email }]);

      console.log("ERRORS", error);

      if (error) {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Thank you for joining!",
          description: "We'll notify you when we launch.",
        });
        setEmail("");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }

    setIsSubmitting(false);
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h2 className="font-exmouth italic text-3xl md:text-4xl mb-4 text-luxury-charcoal">
          Luxury That Keeps Spinning
        </h2>
        <p className="text-lg font-antonio font-bold text-muted-foreground mb-8">
          Welcome to The Carousel Club, your new ride to pre-loved luxury! Join
          the club for early access to our curated collection.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="h-12 px-4 text-center border-2 border-luxury-cream focus:border-luxury-red focus-visible:ring-luxury-red bg-luxury-ivory/50 backdrop-blur-sm"
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full h-12 text-lg bg-luxury-red text-white hover:bg-luxury-red/90 font-medium tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {isSubmitting ? "Joining..." : "Notify Me"}
        </Button>
      </form>

      <p className="text-xs text-muted-foreground text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>

      <p className="text-base font-antonio font-bold text-muted-foreground text-center mt-6">
        Can't wait? Check out our Vinted page{" "}
        <a
          href="https://www.vinted.fr/member/33623404"
          target="_blank"
          rel="noopener noreferrer"
          className="text-luxury-red hover:underline"
        >
          NOW!
        </a>
      </p>

      <div className="flex justify-center items-center gap-4 mt-4">
        <a
          href="https://www.instagram.com/thecarousel.club?igsh=bDdmNXlubmpnOTd4"
          target="_blank"
          rel="noopener noreferrer"
          className="text-luxury-red hover:text-luxury-red/80 transition-colors"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://www.tiktok.com/@thecarousel.club?_t=ZN-8z0cCql7Pd8&_r=1"
          target="_blank"
          rel="noopener noreferrer"
          className="text-luxury-red hover:text-luxury-red/80 transition-colors"
        >
          <TikTokIcon size={24} />
        </a>
      </div>
    </div>
  );
};
