export interface IPhoto {
  albumId: string;
  id: string;
  title: string;
  small_url: string;
  big_url: string;
}
export interface IAlbum {
  albumId: string;
  userId: string;
  title: string;
}
export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
}
