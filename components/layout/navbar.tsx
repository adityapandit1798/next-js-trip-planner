"use client";

import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Plane className="h-6 w-6 text-primary mr-2" />
            <span className="text-xl font-bold">TravelPro</span>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link href="#home" className="text-foreground/70 hover:text-foreground">
              Home
            </Link>
            <Link href="#about" className="text-foreground/70 hover:text-foreground">
              About
            </Link>
            <Link href="#destinations" className="text-foreground/70 hover:text-foreground">
              Destinations
            </Link>
            <Link href="#contact" className="text-foreground/70 hover:text-foreground">
              Contact
            </Link>
          </div>

          <Button>Book Now</Button>
        </div>
      </div>
    </nav>
  );
}