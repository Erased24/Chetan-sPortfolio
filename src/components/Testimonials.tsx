import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star, Play, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  result: string;
  rating: number;
  metric: string;
  videoTestimonial?: boolean;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Niveshwithshri',
      role: 'Content Creator',
      company: 'Digital Creator',
      quote: "Chetan's editing skills transformed my content completely. The quality and attention to detail is exceptional.",
      result: "Amazing editing quality",
      rating: 5,
      metric: "Exceptional quality",
    },
    {
      id: '2',
      name: 'Atharva Kumbhar',
      role: 'Content Creator',
      company: 'Digital Media',
      quote: "Working with Chetan was fantastic. His creativity and technical expertise really shine through in every project.",
      result: "Professional quality work",
      rating: 5,
      metric: "Outstanding results",
    },
    {
      id: '3',
      name: 'Minexai',
      role: 'Tech Creator',
      company: 'AI Content',
      quote: "Chetan delivered exactly what we needed for our tech content. His motion graphics work is top-notch and delivered on time.",
      result: "Perfect tech content editing",
      rating: 5,
      metric: "Excellent delivery",
    },
    {
      id: '4',
      name: 'Clouddash',
      role: 'Business Creator',
      company: 'Cloud Solutions',
      quote: "Chetan's editing style perfectly matched our brand vision. Professional, creative, and delivered exactly as promised.",
      result: "Brand vision perfectly executed",
      rating: 5,
      metric: "Perfect execution",
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Client Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real results from real creators who've achieved viral success
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <Card className="card-glow p-8 md:p-12 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            
            <div className="relative z-10">
              {/* Quote */}
              <div className="text-center mb-8">
                <div className="text-6xl text-primary/30 mb-4">"</div>
                <blockquote className="text-xl md:text-2xl leading-relaxed text-foreground mb-6">
                  {currentTestimonial.quote}
                </blockquote>
                
                {/* Result Highlight */}
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full border border-primary/30">
                  <Star className="w-5 h-5 text-primary fill-current" />
                  <span className="font-bold text-gradient">
                    {currentTestimonial.result}
                  </span>
                </div>
              </div>

              {/* Client Info */}
              <div className="flex items-center justify-center gap-6">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 border-2 border-primary/30 flex items-center justify-center">
                    <User className="w-8 h-8 text-primary/70" />
                  </div>
                  {currentTestimonial.videoTestimonial && (
                    <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                      <Play size={12} className="text-primary-foreground fill-current ml-0.5" />
                    </div>
                  )}
                </div>
                
                <div className="text-center">
                  <div className="font-bold text-lg text-foreground">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-muted-foreground">
                    {currentTestimonial.role} • {currentTestimonial.company}
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex justify-center gap-1 mt-2">
                    {[...Array(currentTestimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-primary fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full p-0"
            >
              <ChevronLeft size={20} />
            </Button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary scale-125"
                      : "bg-muted-foreground/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full p-0"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center card-glow p-6 rounded-xl">
            <div className="text-3xl font-bold text-gradient mb-2">50+</div>
            <div className="text-muted-foreground">Viral Videos Created</div>
          </div>
          <div className="text-center card-glow p-6 rounded-xl">
            <div className="text-3xl font-bold text-gradient mb-2">98%</div>
            <div className="text-muted-foreground">Client Retention Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;