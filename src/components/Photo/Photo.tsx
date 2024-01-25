import React, { Suspense, lazy, useCallback, useState } from "react";
import { IPhoto } from "../../utils/types";
import { Image, PhotoWrapper, TitlePhoto } from "./Photo.styled";
import FavLabel from "../FavLabel/FavLabel";
import { useAppDispatch } from "../../Redux/store";
import { toggleFavorite } from "../../Redux/favoriteSlice";
const Modal = lazy(() => import("../Modal/Modal"));

export default function Photo({ photo }: { photo: IPhoto }) {
  const [isModalOpen, toggleModalOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleFavorite = useCallback(() => {
    dispatch(toggleFavorite(photo));
  }, [photo.id]);
  return (
    <>
      <PhotoWrapper>
        <span style={{ position: "absolute", top: "5px", right: "5px" }}>
          <FavLabel id={photo.id} dispatch={handleFavorite} />
        </span>
        <Image
          src={photo.small_url}
          alt={photo.title}
          onClick={() => toggleModalOpen((prev) => !prev)}
        />
        <TitlePhoto>{photo.title}</TitlePhoto>
      </PhotoWrapper>
      {isModalOpen && (
        <Suspense>
          <Modal big_url={photo.big_url} closeModal={toggleModalOpen} />
        </Suspense>
      )}
    </>
  );
}
