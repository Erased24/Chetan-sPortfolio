import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import AnimatedBackground from "@/components/AnimatedBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatedBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
