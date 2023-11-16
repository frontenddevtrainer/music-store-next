import AlbumListing from "@/src/components/album-listing/album-listing";
import Banner from "@/src/components/banner/banner";
import Link from "next/link";

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <Banner />
      <AlbumListing heading="Top Albums"/>
      <AlbumListing heading="Latest Albums"/>
    </main>
  );
}
