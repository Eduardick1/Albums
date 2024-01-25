import { useAppSelector } from "../../Redux/store";
import Photo from "../Photo/Photo";
import React, { Fragment } from "react";
import { Photos } from "../../utils/styles";
import { FavoritesNotFound, NotFound } from "./Favorites.styled";

export default function Favorites() {
  const favorites = useAppSelector((state) => state.favorites);
  if (!favorites.length)
    return (
      <FavoritesNotFound>
        <NotFound>
          <img
            src={require("../../assets/favNotfound.png")}
            alt="Not found"
          ></img>
          <h1>Список избранного пуст</h1>
          <p>Добавляйте изображения, нажимая на звездочки</p>
        </NotFound>
      </FavoritesNotFound>
    );
  return (
    <Photos>
      {favorites?.map((photo) => (
        <Fragment key={photo.id}>
          <Photo photo={photo} />
        </Fragment>
      ))}
    </Photos>
  );
}
