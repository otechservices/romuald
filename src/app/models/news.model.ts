export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  author: string;
  publishDate: Date;
  category: string;
  tags: string[];
  featured: boolean;
}