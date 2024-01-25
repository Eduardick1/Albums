import React, { Suspense, lazy, useState } from "react";
import { IAlbum } from "../utils/types";
import OpenLabel from "./OpenLabel/OpenLabel";
import { Label, LiTitle, LiWrapper, Photos } from "../utils/styles";
import PRE_LOADER_SKELETON from "../utils/SKELETON";
const PhotosContainer = lazy(() => import("./PhotosContainer"));

export default function Album({ album }: { album: IAlbum }) {
  const [isAlbumOpen, toggleAlbumOpen] = useState<boolean>(false);
  return (
    <LiWrapper>
      <Label>
        <OpenLabel isOpen={isAlbumOpen} toggleOpen={toggleAlbumOpen} />
        <LiTitle>{album.title}</LiTitle>
      </Label>
      {isAlbumOpen && (
        <Suspense
          fallback={
            <Photos>
              <PRE_LOADER_SKELETON
                number={6}
                css={{ width: "150px", height: "150px" }}
              />
            </Photos>
          }
        >
          <PhotosContainer albumId={album.albumId} />
        </Suspense>
      )}
    </LiWrapper>
  );
}
