import { Card, CardContent } from "@/components/ui/card";
import { Users2, Award, Clock } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Your Trusted Travel Partner</h3>
            <p className="text-muted-foreground mb-6">
              With over 15 years of experience in crafting unforgettable journeys, 
              TravelPro has become a leading name in the travel industry. Our passion 
              for exploration and commitment to excellence ensures that every trip we 
              plan becomes a cherished memory.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Users2 className="h-5 w-5 text-primary mr-2" />
                <span>10K+ Happy Travelers</span>
              </div>
              <div className="flex items-center">
                <Award className="h-5 w-5 text-primary mr-2" />
                <span>Award Winning Service</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=800"
              alt="Travel Experience"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}