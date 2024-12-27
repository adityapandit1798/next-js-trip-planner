export interface Destination {
  id: string;
  title: string;
  description: string;
  heroImage: string;
  location: string;
  duration: string;
  groupSize: number;
  price: string;
  overview: string;
  itinerary: Array<{
    title: string;
    description: string;
  }>;
  gallery: string[];
}

const destinations: Record<string, Destination> = {
  "taj-mahal": {
    id: "taj-mahal",
    title: "Taj Mahal, Agra",
    description: "Experience the majestic beauty of India's most iconic monument",
    heroImage: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600",
    location: "Agra, India",
    duration: "3 Days",
    groupSize: 15,
    price: "From $299",
    overview: "Discover the breathtaking Taj Mahal, one of the world's most beautiful monuments. This 3-day tour includes guided visits to the Taj Mahal, Agra Fort, and other historical sites, along with luxury accommodations and authentic local experiences.",
    itinerary: [
      {
        title: "Arrival & Evening Tour",
        description: "Arrive in Agra, check into your hotel, and enjoy an evening heritage walk through the old city markets."
      },
      {
        title: "Taj Mahal Sunrise & Agra Fort",
        description: "Watch the sunrise at the Taj Mahal, followed by a guided tour. After lunch, explore the magnificent Agra Fort."
      },
      {
        title: "Local Culture & Departure",
        description: "Visit local artisans, enjoy a cooking demonstration, and depart with memorable experiences."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=800",
      "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?q=80&w=800",
      "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?q=80&w=800",
      "https://images.unsplash.com/photo-1591801018936-d886e36afe4d?q=80&w=800",
      "https://images.unsplash.com/photo-1612810436541-336b73fcbe4b?q=80&w=800",
      "https://images.unsplash.com/photo-1592639296346-560c37a0f711?q=80&w=800"
    ]
  },
  "kerala-backwaters": {
    id: "kerala-backwaters",
    title: "Kerala Backwaters",
    description: "Experience the serene beauty of Kerala's backwaters",
    heroImage: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1600",
    location: "Kerala, India",
    duration: "4 Days",
    groupSize: 10,
    price: "From $399",
    overview: "Explore the tranquil backwaters of Kerala on a traditional houseboat. This 4-day journey includes luxury accommodation on a private houseboat, authentic Kerala cuisine, and cultural experiences in local villages.",
    itinerary: [
      {
        title: "Welcome to Kerala",
        description: "Arrive in Kochi, transfer to Alleppey, and board your luxury houseboat."
      },
      {
        title: "Backwater Cruise",
        description: "Full day cruising through scenic backwaters, visiting local villages and temples."
      },
      {
        title: "Village Life & Culture",
        description: "Experience local life, try traditional fishing techniques, and enjoy cultural performances."
      },
      {
        title: "Farewell Kerala",
        description: "Morning yoga, local market visit, and departure with lasting memories."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=800",
      "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=800",
      "https://images.unsplash.com/photo-1583997052103-b4a1cb974ce3?q=80&w=800",
      "https://images.unsplash.com/photo-1580253464928-51c4c2d0b6e1?q=80&w=800",
      "https://images.unsplash.com/photo-1590517862150-8253aa8f3fb5?q=80&w=800",
      "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=800"
    ]
  },
  "santorini": {
    id: "santorini",
    title: "Santorini, Greece",
    description: "Discover the magic of Greece's most picturesque island",
    heroImage: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1600",
    location: "Santorini, Greece",
    duration: "5 Days",
    groupSize: 12,
    price: "From $899",
    overview: "Experience the stunning beauty of Santorini with its white-washed buildings, blue-domed churches, and spectacular sunsets. This 5-day adventure includes luxury accommodations, wine tasting, boat tours, and authentic Greek experiences.",
    itinerary: [
      {
        title: "Welcome to Paradise",
        description: "Arrive in Santorini, transfer to your hotel, and enjoy a welcome dinner with sunset views."
      },
      {
        title: "Caldera & Wine Tour",
        description: "Explore the volcanic caldera, visit traditional wineries, and taste local varieties."
      },
      {
        title: "Sailing Adventure",
        description: "Full-day sailing trip around the island, including hot springs and snorkeling."
      },
      {
        title: "Cultural Exploration",
        description: "Visit Akrotiri archaeological site, traditional villages, and enjoy a cooking class."
      },
      {
        title: "Free Day & Farewell",
        description: "Free time for shopping or relaxation, farewell dinner at a local taverna."
      }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800",
      "https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?q=80&w=800",
      "https://images.unsplash.com/photo-1603565816030-6b389eeb23cb?q=80&w=800",
      "https://images.unsplash.com/photo-1603177405431-d0a7c67808b9?q=80&w=800",
      "https://images.unsplash.com/photo-1604999333679-b86d54738315?q=80&w=800",
      "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=800"
    ]
  }
};

export function getDestinationData(slug: string): Destination | undefined {
  return destinations[slug];
}

export function getAllDestinations(): Destination[] {
  return Object.values(destinations);
}