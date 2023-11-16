export interface Song {
  duration: number;
  name: string;
  singer: string[];
}

export interface Album {
  name: string;
  albumArt: {
    thumbnail: string;
  };
  price: number;
  singers: string[];
  songs: Song[];
  id: number;
  tags: string;
}
