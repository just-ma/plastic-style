export type Feature = {
  id: string;
  title: string;
  image: string;
  artist?: string;
  author: string;
  recordLabel?: string;
  content: string;
  createdAt: number;
  modifiedAt?: number;
};
