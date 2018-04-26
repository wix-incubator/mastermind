const PUBLIC_URL = process.env.PUBLIC_URL;
export const ROOT_PATH = PUBLIC_URL + '/';
export const GAME_PATH = PUBLIC_URL + '/games/:id';
export const getRootPath = () => PUBLIC_URL + '/';
export const getGamePath = (id: string) => PUBLIC_URL + `/games/${id}`;
