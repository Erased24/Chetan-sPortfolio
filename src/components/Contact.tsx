import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { Icon: Mail, label: "Email", value: "chetanjagtap2004ui@gmail.com" },
    { Icon: Phone, label: "Phone", value: "+91 8779492519" },
    { Icon: MapPin, label: "Location", value: "Mumbai, India" },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            Let's Connect
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Reach out to me via email, phone, or just say hi!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Profile Card */}
          <div className="card-glow rounded-xl p-8 text-center">
            <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 mx-auto mb-6">
              <img
                src="/profile.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-bold text-gradient mb-2">Chetan Jagtap</h3>
            <p className="text-muted-foreground mb-6">
              Professional Video Editor & Motion Graphics Artist
            </p>
          </div>

          {/* Contact Details */}
          <div className="card-glow rounded-xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-6">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map(({ Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{label}</div>
                    <div className="text-foreground font-medium">{value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="card-glow rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-gradient mb-1">24hr</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="card-glow rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-gradient mb-1">7 Days</div>
                <div className="text-sm text-muted-foreground">Avg Turnaround</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
