import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 flex items-start justify-start p-6">
      {/* Spinning Logo */}
      <div className="flex items-center justify-center">
        <img
          src="/lovable-uploads/a9464df5-c4c1-4c87-aba6-9ed69bf46b76.png"
          alt="The Carousel Club Logo"
          className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 animate-carousel-spin logo-red-filter"
        />
      </div>
    </header>
  );
};
