import { VideoHero } from "@/components/VideoHero";
import { EmailSignup } from "@/components/EmailSignup";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Video Section */}
      <VideoHero />

      {/* Email Signup Section */}
      <section
        className="flex items-center justify-center px-4 py-4"
        style={{ backgroundColor: "#fbf5ee" }}
      >
        <div className="animate-fade-in">
          <EmailSignup />
        </div>
      </section>
    </div>
  );
};

export default Index;
