export interface Category {
  name: string;
  slug: string;
}

export interface Manga {
  name: string;
  slug: string;
  status: number;
  cdn: string;
  thumb_url: string;
  category: Category[];
}

export interface ApiResponse {
  status: number;
  message: string;
  data: Manga[];
}
