export type Review = {
  id: string;
  artist?: string;
  title: string;
  author: string;
  recordLabel?: string;
  image: string;
  content: string;
  createdAt: number;
  modifiedAt?: number;
};
