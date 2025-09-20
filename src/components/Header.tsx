import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  // Scroll with offset for fixed header
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href) as HTMLElement | null;
    if (element) {
      const headerOffset = 64; // h-16 = 64px
      const elementPosition = element.offsetTop - headerOffset;
      window.scrollTo({ top: elementPosition, behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300",
        isScrolled
          ? "bg-card/80 backdrop-blur-xl border-b border-border shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-gradient">Chetan Jagtap</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-muted-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <Button variant="hero" onClick={() => scrollToSection("#contact")}>
              Let's Work Together
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <nav className="flex flex-col space-y-3 pt-4 border-t border-border">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-left text-muted-foreground hover:text-primary transition-colors duration-300 py-2"
              >
                {item.name}
              </button>
            ))}
            <Button
              variant="hero"
              className="mt-4"
              onClick={() => scrollToSection("#contact")}
            >
              Let's Work Together
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
