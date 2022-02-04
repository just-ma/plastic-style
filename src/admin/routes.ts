export const ADMIN_PATH = '/admin';
export const ADMIN_TEXT_EDITOR_PATH = '/text-editor';
export const ADMIN_LOGIN_PATH = '/login';

export const adminPath = (): string => {
  return ADMIN_PATH;
};

export const adminPagePath = (path: string): string => {
  return `${adminPath()}${path}`;
};

export const adminTextEditorPath = (): string => {
  return adminPagePath(ADMIN_TEXT_EDITOR_PATH);
};

export const adminLoginPath = (): string => {
  return adminPagePath(ADMIN_LOGIN_PATH);
};
