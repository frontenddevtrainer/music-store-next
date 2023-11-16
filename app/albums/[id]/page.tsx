import SongListingItem from "@/src/components/song-listing/song-listing-item";
import { Album, Song } from "@/src/interfaces/Album";

interface Props {
  params: {
    id: string;
  };
}

async function getAlbumData(id: string) {
  const albumBaseUrl = process.env["ALBUM_SOURCE_API"];
  const apiUrl = `${albumBaseUrl}/${id}`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("Unable to fetch data");
  }

  return response.json();
}

export default async function AlbumDetails({ params }: Props) {
  const albumId = params.id;
  const album: Album = await getAlbumData(albumId);

  return (
    <>
      <div className="relative">
        <img
          src="https://via.placeholder.com/1920x500"
          alt="Album"
          className="w-full"
        />
        <div className="absolute top-4 left-4">
          <h1 className="text-4xl font-bold text-white">{album?.name}</h1>
        </div>
        <div className="absolute bottom-4 right-4 flex items-center space-x-4">
          <button className="bg-green-400 text-white px-4 py-2 rounded hover:bg-green-300">
            Add to Cart
          </button>
          <button className="material-icons text-green-400 hover:text-green-300 text-3xl">
            play_arrow
          </button>
        </div>
      </div>
      <div className="container mx-auto p-8 mt-4">
        <h2 className="text-2xl font-bold">Songs</h2>
        <ul className="divide-y divide-gray-700">
          {album?.songs?.map((song: Song) => {
            return <SongListingItem key={song.name} song={song} />;
          })}
        </ul>

        <div className="container mx-auto p-8 mt-4">
          <h2 className="text-2xl font-bold mb-4">Related Albums</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800 p-4 rounded text-left">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Album"
                  className="w-full rounded mb-2"
                />
                <div className="absolute bottom-0 right-0 p-2 flex space-x-2">
                  <button className="bg-green-400 text-white rounded-full p-2 hover:bg-green-300 material-icons">
                    library_add
                  </button>
                  <button className="bg-gray-700 text-white rounded-full p-2 hover:bg-gray-600 material-icons">
                    add_shopping_cart
                  </button>
                </div>
              </div>
              <p className="text-md font-bold">Album Name</p>
              <p className="text-sm text-gray-400">By Singer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
