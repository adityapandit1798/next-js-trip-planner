"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const destinations = {
  india: [
    {
      id: "taj-mahal",
      title: "Taj Mahal, Agra",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=800",
      price: "From $299",
      rating: 4.8,
    },
    {
      id: "kerala-backwaters",
      title: "Kerala Backwaters",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800",
      price: "From $399",
      rating: 4.9,
    },
    {
      id: "varanasi",
      title: "Varanasi Ghats",
      image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=800",
      price: "From $249",
      rating: 4.7,
    },
  ],
  international: [
    {
      id: "santorini",
      title: "Santorini, Greece",
      image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800",
      price: "From $899",
      rating: 4.9,
    },
    {
      id: "machu-picchu",
      title: "Machu Picchu, Peru",
      image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=800",
      price: "From $1299",
      rating: 4.8,
    },
    {
      id: "bali",
      title: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800",
      price: "From $799",
      rating: 4.7,
    },
  ],
};

export function DestinationsSection() {
  const [activeTab, setActiveTab] = useState<"india" | "international">("india");

  return (
    <section id="destinations" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Popular Destinations
        </h2>
        <Tabs defaultValue="india" className="w-full" onValueChange={(value) => setActiveTab(value as "india" | "international")}>
          <TabsList className="w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="india" className="w-1/2">
              India
            </TabsTrigger>
            <TabsTrigger value="international" className="w-1/2">
              International
            </TabsTrigger>
          </TabsList>
          {["india", "international"].map((tab) => (
            <TabsContent key={tab} value={tab}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {destinations[tab as keyof typeof destinations].map((dest) => (
                  <Card key={dest.title} className="overflow-hidden">
                    <Link href={`/destinations/${dest.id}`}>
                      <div className="aspect-[4/3] relative">
                        <img
                          src={dest.image}
                          alt={dest.title}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-center mb-2">
                          <h3 className="text-xl font-semibold">{dest.title}</h3>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 mr-1" />
                            <span className="text-sm">{dest.rating}</span>
                          </div>
                        </div>
                        <p className="text-primary font-semibold">{dest.price}</p>
                        <Button className="w-full mt-4">View Details</Button>
                      </CardContent>
                    </Link>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}