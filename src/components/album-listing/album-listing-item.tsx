"use client";

import { Album } from "@/src/interfaces/Album";
import Link from "next/link";
import { useState } from "react";
import { container } from "./styles";
import "./style.scss";

interface Props {
  album: Album;
}

export default function AlbumListingItem({ album }: Props) {
  const [hideButton, setHideButton] = useState(false);

  return (
    <div className="bg-gray-800 p-4 rounded relative container">
      <div className="relative">
        <img
          src={album?.albumArt?.thumbnail}
          alt="Album"
          className="w-full rounded mb-2"
        />
        {!hideButton && (
          <button
            onClick={() => {
              setHideButton(true);
            }}
            className="absolute bottom-2 right-2 bg-green-400 w-10 h-10 rounded-full flex items-center justify-center hover:bg-green-300"
          >
            <span className="material-icons text-white"> play_arrow </span>
          </button>
        )}
      </div>

      <div className="text-left">
        <h3 className="text-md font-bold mb-1">
          <Link href={`/albums/${album.id}`}>{album?.name}</Link>
        </h3>
        <p className="text-sm mb-2 text-gray-400">
          By {album?.singers?.join(", ")}
        </p>
        <p className="text-sm mb-2 text-green-200">${album?.price}</p>

        <a
          href="#"
          className="inline-flex items-center text-green-400 hover:text-green-300"
        >
          <span className="material-icons"> shopping_cart </span>
          <span className="ml-1">Add to Cart</span>
        </a>
      </div>
      <style jsx>
        {`
          @import "./style.scss";
        `}
      </style>
    </div>
  );
}
