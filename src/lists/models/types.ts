export type List = {
  id: string;
  title: string;
  description?: string;
  author: string;
  src: string;
  listItems: ReadonlyArray<ListItem>;
  createdAt: number;
  modifiedAt?: number;
};

export type ListItem = {
  id: string;
  rank?: number;
  artist?: string;
  title: string;
  src?: string;
  content: string;
};
