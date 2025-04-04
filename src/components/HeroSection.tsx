
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="bg-navy text-white">
      <div className="section-container flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight animate-fade-in">
          Singapore Founders & C-Suite Retreat
        </h1>
        <h2 className="text-xl md:text-2xl lg:text-3xl mb-8 text-gold animate-fade-in">
          Where Visionary Leaders Recharge, Network, and Scale Beyond Borders
        </h2>
        <p className="text-lg md:text-xl max-w-3xl mb-10 opacity-90 animate-fade-in">
          Success Isn't Just About Working Harder, It's About Scaling Smarter
        </p>
        <Button className="btn-primary text-lg animate-fade-in">
          CLAIM MY SEAT NOW
        </Button>
        <p className="mt-6 text-sm opacity-75 animate-fade-in">
          October 13-19, 2025 | Limited Spots Available
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
