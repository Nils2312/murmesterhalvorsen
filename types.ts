
export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface Badge {
  id: string;
  title: string;
  imageUrl: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
}
