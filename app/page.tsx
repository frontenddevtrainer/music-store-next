import AlbumListing from "@/src/components/album-listing/album-listing";
import Banner from "@/src/components/banner/banner";
import PostList from "@/src/components/product-list/product-list";
import Link from "next/link";

const topAlbumAPI = process.env['TOP_ALBUM_SOURCE_API'] as string;
const latestAlbumAPI = process.env['LATEST_ALBUM_SOURCE_API'] as string;

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <Banner />
      <AlbumListing heading="Top Albums" source={topAlbumAPI}/>
      <AlbumListing heading="Latest Albums" source={latestAlbumAPI}/>
      <PostList posts={[]}/>
    </main>
  );
}
