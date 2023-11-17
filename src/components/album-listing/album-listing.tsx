import { Album } from "@/src/interfaces/Album";
import AlbumListingItem from "./album-listing-item";

interface Props {
  heading: string;
  source : string
}

async function getAlbumData(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to fetch data");
  }

  return response.json();
}

export default async function AlbumListing({ heading, source }: Props) {
  const data = await getAlbumData(source);

  console.log(data);

  return (
    <section className="mb-12 container">
      <h2 className="text-3xl text-green-400 mb-4">{heading}</h2>
      <div className="grid grid-cols-5 gap-4">
        {
            data.map((album: Album)=>{
                return <AlbumListingItem key={album.id} album={album}/>
            })
        }
      </div>
    </section>
  );
}
