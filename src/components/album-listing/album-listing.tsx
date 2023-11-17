"use client";

import { Album } from "@/src/interfaces/Album";
import AlbumListingItem from "./album-listing-item";
import { useEffect, useState } from "react";

interface Props {
  heading: string;
  source: string;
}

export default function AlbumListing({ heading, source }: Props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getAlbumData(url: string) {
      const response = await fetch(url, { next: { revalidate: 30 } });

      if (!response.ok) {
        throw new Error("Unable to fetch data");
      }
      setData(await response.json());
    }

    getAlbumData(source);
  }, []);

  return (
    <section className="mb-12">
      <h2 className="text-3xl text-green-400 mb-4">{heading}</h2>
      <div className="grid grid-cols-5 gap-4">
        {data.map((album: Album) => {
          return <AlbumListingItem key={album.id} album={album} />;
        })}
      </div>
    </section>
  );
}
