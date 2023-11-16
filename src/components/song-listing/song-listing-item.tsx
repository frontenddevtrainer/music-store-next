interface Props {
  song: Song;
}

import { Song } from "@/src/interfaces/Album";

export default function SongListingItem({ song }: Props) {
  return (
    <li className="py-2 flex justify-between items-center">
      <button className="material-icons text-green-400 hover:text-green-300 text-lg mx-1">
        play_arrow
      </button>
      <div className="flex-grow text-left ml-4">
        <span className="text-md">{song?.name}</span>
        <br />
        <span className="text-xs text-gray-400">
          By {song?.singer?.join(", ")}
        </span>
      </div>
      <span className="text-xs text-gray-400">{song?.duration}</span>
    </li>
  );
}
