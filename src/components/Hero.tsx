import { useEffect, useState } from "react";
import { Play, Film, Video, Zap, TrendingUp, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-video-editing.jpg";

const Hero = () => {
  const [counters, setCounters] = useState({ views: 0, projects: 0, satisfaction: 0 });

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const start = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        
        setCounters({
          views: Math.floor(200 * progress),
          projects: Math.floor(5 * progress),
          satisfaction: Math.floor(99 * progress),
        });
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    };

    // Start animation after a short delay
    const timeout = setTimeout(animateCounters, 1000);
    return () => clearTimeout(timeout);
  }, []);

  const scrollToPortfolio = () => {
    const element = document.querySelector('#portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { Icon: Play, delay: 0, position: 'top-20 left-20' },
    { Icon: Film, delay: 1, position: 'top-32 right-32' },
    { Icon: Video, delay: 2, position: 'bottom-40 left-32' },
    { Icon: Zap, delay: 0.5, position: 'top-40 left-1/2' },
    { Icon: TrendingUp, delay: 1.5, position: 'bottom-32 right-20' },
    { Icon: Eye, delay: 2.5, position: 'top-1/2 right-20' },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
        <div className="absolute inset-0 bg-gradient-glow" />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <div
          key={index}
          className={`absolute ${position} animate-float opacity-30 hidden lg:block`}
          style={{ animationDelay: `${delay}s` }}
        >
          <Icon size={40} className="text-primary animate-glow" />
        </div>
      ))}

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-particles"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-slide-up">
            <span className="text-gradient animate-glow">I Turn Raw Footage</span>
            <br />
            <span className="text-foreground">Into Engaging Content</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto animate-slide-up">
            Professional Video Editor | After Effects Expert | Premiere Pro Master
          </p>

          {/* Stats Counter */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 animate-scale-in">
            <div className="card-glow p-6 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-gradient animate-counter">
                {counters.views}+
              </div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="card-glow p-6 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-gradient animate-counter">
                {counters.projects}+
              </div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="card-glow p-6 rounded-xl">
              <div className="text-3xl md:text-4xl font-bold text-gradient animate-counter">
                {counters.satisfaction}%
              </div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="animate-slide-up">
            <Button 
              variant="hero"
              size="lg"
              onClick={scrollToPortfolio}
              className="text-xl px-12 py-6 animate-glow"
            >
              See My Work
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;