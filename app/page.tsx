"use client";

import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { DestinationsSection } from "@/components/sections/destinations";
import { Plane, Map, Globe2, Navigation } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section id="home" className="relative h-[80vh] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000')",
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
              Explore breathtaking destinations around the world with our expertly
              crafted travel experiences
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card">
                <CardContent className="p-6 text-center">
                  <Map className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
                  <p className="text-muted-foreground">
                    Personalized itineraries crafted by travel experts
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6 text-center">
                  <Globe2 className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Global Destinations</h3>
                  <p className="text-muted-foreground">
                    Curated selection of the world's most amazing places
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card">
                <CardContent className="p-6 text-center">
                  <Navigation className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-2">Seamless Experience</h3>
                  <p className="text-muted-foreground">
                    End-to-end travel planning and support
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <AboutSection />
        <DestinationsSection />
        <ContactSection />

        {/* CTA Section */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let us help you create unforgettable travel memories
            </p>
          </div>
        </section>
      </div>
    </>
  );
}