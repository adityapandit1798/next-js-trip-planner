"use client";

import { useState } from "react";
import { Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import type { Destination } from "@/lib/destinations";

interface DestinationDetailsProps {
  destination: Destination;
}

export function DestinationDetails({ destination }: DestinationDetailsProps) {
  const [date, setDate] = useState<Date | undefined>(undefined);

  return (
    <main className="pt-16">
      {/* Hero Section */}
      <div className="relative h-[60vh]">
        <img
          src={destination.heroImage}
          alt={destination.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">{destination.title}</h1>
            <p className="text-xl max-w-2xl mx-auto">{destination.description}</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <TripOverview destination={destination} />
            <Itinerary itinerary={destination.itinerary} />
            <PhotoGallery gallery={destination.gallery} title={destination.title} />
          </div>

          {/* Booking Section */}
          <div className="lg:col-span-1">
            <BookingCard
              price={destination.price}
              date={date}
              onDateSelect={setDate}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

function TripOverview({ destination }: { destination: Destination }) {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Trip Overview</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-primary" />
            <span>{destination.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-primary" />
            <span>{destination.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            <span>Max {destination.groupSize} people</span>
          </div>
        </div>
        <p className="text-muted-foreground">{destination.overview}</p>
      </CardContent>
    </Card>
  );
}

function Itinerary({ itinerary }: { itinerary: Destination["itinerary"] }) {
  return (
    <Card className="mb-8">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Daily Itinerary</h2>
        <div className="space-y-6">
          {itinerary.map((day, index) => (
            <div key={index} className="border-l-2 border-primary pl-4">
              <h3 className="font-semibold text-lg mb-2">
                Day {index + 1}: {day.title}
              </h3>
              <p className="text-muted-foreground">{day.description}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function PhotoGallery({ gallery, title }: { gallery: string[]; title: string }) {
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-6">Photo Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt={`${title} - ${index + 1}`}
              className="rounded-lg aspect-[4/3] object-cover"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function BookingCard({
  price,
  date,
  onDateSelect,
}: {
  price: string;
  date: Date | undefined;
  onDateSelect: (date: Date | undefined) => void;
}) {
  return (
    <Card className="sticky top-20">
      <CardContent className="p-6">
        <h2 className="text-2xl font-bold mb-4">Book This Trip</h2>
        <div className="space-y-4">
          <p className="text-2xl font-bold text-primary">{price}</p>
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Date</label>
            <Calendar
              mode="single"
              selected={date}
              onSelect={onDateSelect}
              className="rounded-md border"
            />
          </div>
          <Button className="w-full" size="lg">
            Book Now
          </Button>
          <p className="text-sm text-muted-foreground text-center">
            * Prices may vary based on group size and season
          </p>
        </div>
      </CardContent>
    </Card>
  );
}