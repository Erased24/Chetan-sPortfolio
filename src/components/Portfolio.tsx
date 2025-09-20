import { useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

// Import videos - ADD NEW IMPORTS HERE WHEN ADDING MORE VIDEOS
import v1Video from "@/assets/videos/v1.mp4";
import v2Video from "@/assets/videos/v2.mp4";
import v3Video from "@/assets/videos/v3.mp4";
import v4Video from "@/assets/videos/v4.mp4";
import v5Video from "@/assets/videos/v5.mp4";
import v6Video from "@/assets/videos/v6.mp4";


interface PortfolioItem {
  id: string;
  title: string;
  category: 'motion-graphics' | 'social-media' | 'short-form';
  videoUrl: string;
  platform: string;
  techniques: string[];
  description: string;
}

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  // EASILY EDITABLE PORTFOLIO ITEMS - ADD NEW VIDEOS HERE
  const portfolioItems: PortfolioItem[] = [

    {
      id: '1',
      title: 'Website Project',
      category: 'motion-graphics', // or 'social-media' or 'short-form'
      videoUrl: v1Video, // Make sure to import v1Video above
      platform: 'Instagram', // or Instagram, TikTok etc.
      techniques: ['After Effects', 'Animation', 'Design'],
      description: 'Made a website promo.',
    },
    {
      id: '2',
      title: 'French Mastery Project',
      category: 'motion-graphics', // or 'social-media' or 'short-form'
      videoUrl: v2Video, // Make sure to import v1Video above
      platform: 'YouTube', // or Instagram, TikTok etc.
      techniques: ['After Effects', 'Animation', 'Design'],
      description: 'French Course Video',
    },
    {
      id: '3',
      title: 'Dynamic Instagram Reel',
      category: 'social-media',
      videoUrl: v3Video,
      platform: 'Instagram',
      techniques: ['Quick Cuts', 'Beat Sync', 'Color Grading'],
      description: 'Engaging social media content with smooth transitions and perfect timing.',
    },
    {
      id: '4',
      title: 'Creative Short-Form Content',
      category: 'short-form',
      videoUrl: v4Video,
      platform: 'TikTok',
      techniques: ['Trending Effects', 'Text Animation', 'Music Sync'],
      description: 'Creative short-form video showcasing modern editing techniques.',
    },
    {
      id: '5',
      title: 'Social Media Promo',
      category: 'social-media',
      videoUrl: v5Video,
      platform: 'Instagram',
      techniques: ['Motion Graphics', 'Color Pop', 'Transitions'],
      description: 'Professional social media promotional content with engaging visuals.',
    },
    {
      id: '6',
      title: 'Motion Graphics Showcase',
      category: 'motion-graphics',
      videoUrl: v6Video,
      platform: 'YouTube',
      techniques: ['After Effects', '3D Animation', 'VFX'],
      description: 'Complex motion graphics project featuring advanced animation techniques.',
    },
 //TODO: ADD NEW VIDEOS BELOW WHEN PROVIDED:
   
   
  ];

  const filters = [
    { id: 'all', label: 'All Work' },
    { id: 'motion-graphics', label: 'Motion Graphics' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'short-form', label: 'Short-form' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-card/20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
            My Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional video editing and motion graphics for all platforms
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "hero" : "outline"}
              onClick={() => setActiveFilter(filter.id)}
              className="transition-all duration-300"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group card-glow rounded-xl overflow-hidden hover:shadow-elevated transition-all duration-500 cursor-pointer animate-scale-in"
              onClick={() => setSelectedItem(item)}
            >
              {/* Video Preview */}
              <div className="relative overflow-hidden aspect-[9/16]">
                <video
                  src={item.videoUrl}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  muted
                  loop
                  onMouseEnter={(e) => e.currentTarget.play()}
                  onMouseLeave={(e) => e.currentTarget.pause()}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-primary/30">
                    <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                  </div>
                </div>

                {/* Platform Badge */}
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-primary/20 backdrop-blur-sm border-primary/30">
                    {item.platform}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-foreground group-hover:text-gradient transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Techniques */}
                <div className="flex flex-wrap gap-1">
                  {item.techniques.slice(0, 2).map((technique) => (
                    <Badge
                      key={technique}
                      variant="outline"
                      className="text-xs border-primary/30 text-primary"
                    >
                      {technique}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View More Projects
          </Button>
        </div>
      </div>

      {/* Modal */}
      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-4xl bg-card border-border">
          {selectedItem && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-gradient">
                  {selectedItem.title}
                </DialogTitle>
              </DialogHeader>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Video Player */}
                <div className="relative">
                  <video
                    src={selectedItem.videoUrl}
                    controls
                    className="w-full h-auto rounded-lg"
                    autoPlay
                    muted
                    loop
                  />
                </div>

                {/* Details */}
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Description</h4>
                    <p className="text-muted-foreground">{selectedItem.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Platform</h4>
                    <Badge variant="secondary">{selectedItem.platform}</Badge>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Techniques Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.techniques.map((technique) => (
                        <Badge
                          key={technique}
                          variant="outline"
                          className="border-primary/30 text-primary"
                        >
                          {technique}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Portfolio;