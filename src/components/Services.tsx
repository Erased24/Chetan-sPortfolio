import { useEffect, useState } from "react";
import motionGraphicsIcon from "@/assets/motion-graphics-icon.png";
import afterEffectsIcon from "@/assets/after-effects-icon.png";
import premiereProIcon from "@/assets/premiere-pro-icon.png";
import viralContentIcon from "@/assets/viral-content-icon.png";

const Services = () => {
  const [skillLevels, setSkillLevels] = useState({
    afterEffects: 0,
    premierePro: 0,
    motionGraphics: 0,
    colorGrading: 0,
  });

  useEffect(() => {
    const animateSkills = () => {
      const duration = 2000;
      const start = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - start;
        const progress = Math.min(elapsed / duration, 1);
        
        setSkillLevels({
          afterEffects: Math.floor(98 * progress),
          premierePro: Math.floor(96 * progress),
          motionGraphics: Math.floor(94 * progress),
          colorGrading: Math.floor(92 * progress),
        });
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      animate();
    };

    // Trigger animation when component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateSkills();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.querySelector('#services');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: motionGraphicsIcon,
      title: "Motion Graphics & Animation",
      description: "Stunning animated graphics that captivate audiences and elevate your brand story.",
      features: ["Logo Animations", "Title Sequences", "Explainer Videos", "2D/3D Animation"],
      gradient: "from-primary to-primary-glow",
    },
    {
      icon: afterEffectsIcon,
      title: "After Effects Mastery",
      description: "Advanced VFX and compositing that brings impossible visions to life.",
      features: ["VFX Compositing", "Motion Tracking", "Particle Systems", "Green Screen"],
      gradient: "from-secondary to-secondary-glow",
    },
    {
      icon: premiereProIcon,
      title: "Premiere Pro Editing",
      description: "Lightning-fast turnaround with professional-grade editing and storytelling.",
      features: ["Quick Turnaround", "Color Correction", "Audio Sync", "Multi-cam Editing"],
      gradient: "from-accent to-accent-glow",
    },
    {
      icon: viralContentIcon,
      title: "Social Content Creation",
      description: "Creating engaging content optimized for social media platforms and audience engagement.",
      features: ["Trending Effects", "Platform Optimization", "Audience Engagement", "Content Strategy"],
      gradient: "from-primary via-secondary to-accent",
    },
  ];

  const skills = [
    { name: "After Effects", level: skillLevels.afterEffects, color: "primary" },
    { name: "Premiere Pro", level: skillLevels.premierePro, color: "secondary" },
    { name: "Motion Graphics", level: skillLevels.motionGraphics, color: "accent" },
    { name: "Color Grading", level: skillLevels.colorGrading, color: "primary" },
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            My Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive video editing solutions that bring your creative vision to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group card-glow rounded-xl p-8 hover:shadow-elevated transition-all duration-500 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="relative mb-6">
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${service.gradient} p-4 group-hover:scale-110 transition-transform duration-300`}>
                  <img
                    src={service.icon}
                    alt={service.title}
                    className="w-full h-full object-contain filter brightness-0 invert"
                  />
                </div>
                <div className="absolute inset-0 w-20 h-20 rounded-xl bg-gradient-to-br opacity-30 blur-xl group-hover:opacity-60 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-gradient transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center text-foreground">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl border border-primary/0 group-hover:border-primary/30 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="card-glow rounded-xl p-8">
          <h3 className="text-3xl font-bold text-center text-gradient mb-12">
            Proficiency Levels
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-foreground">
                    {skill.name}
                  </span>
                  <span className="text-primary font-bold">
                    {skill.level}%
                  </span>
                </div>
                
                {/* Progress Bar */}
                <div className="relative h-4 bg-muted rounded-full overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full bg-gradient-to-r from-${skill.color} to-${skill.color}-glow rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-slide-across" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;