export type List = {
  id: string;
  title: string;
  description?: string;
  author: string;
  image: string;
  listItems: ReadonlyArray<ListItem>;
  createdAt: number;
  modifiedAt?: number;
};

export type ListItem = {
  id: string;
  rank?: number;
  artist?: string;
  title: string;
  image?: string;
  content: string;
};
