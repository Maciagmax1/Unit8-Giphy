interface Original {
  url: string;
}

interface Image {
  original: Original;
}

export default interface Gif {
  url: string;
  title: string;
  images: Image;
  id: string;
}
