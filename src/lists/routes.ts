export const LISTS_PATH = '/lists';

export const listsPath = (listId?: string): string => {
  if (!listId) {
    return LISTS_PATH;
  }

  return `${LISTS_PATH}#${listId}`;
};

export const listPagePath = (listId: string): string => {
  return `${listsPath()}/${listId}`;
};
