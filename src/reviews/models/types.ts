export type Review = {
  id: string;
  artist?: string;
  title: string;
  author: string;
  recordLabel?: string;
  src: string;
  content: string;
  createdAt: number;
  modifiedAt?: number;
};
