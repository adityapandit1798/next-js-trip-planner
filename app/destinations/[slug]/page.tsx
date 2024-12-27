// Remove 'use client' directive here
import { notFound } from 'next/navigation';
import { getAllDestinations, getDestinationData } from '@/lib/destinations';
import { DestinationDetails } from '@/components/destinations/destination-details';
import { Navbar } from '@/components/layout/navbar';

// Server-side logic to fetch static params
export async function generateStaticParams() {
  const destinations = await getAllDestinations(); // Ensure you await any async functions
  return destinations.map((destination) => ({
    slug: destination.id,
  }));
}

export default function DestinationPage({
  params,
}: {
  params: { slug: string };
}) {
  // Fetch the destination data based on the slug
  const destination = getDestinationData(params.slug);

  // If destination is not found, trigger 404
  if (!destination) {
    notFound();
  }

  // Render the page
  return (
    <>
      <Navbar />
      <DestinationDetails destination={destination} />
    </>
  );
}
