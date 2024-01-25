import React, { Fragment } from "react";
import type { IAlbum } from "../utils/types";
import { Photos } from "../utils/styles";
import { useGetPhotosQuery } from "../Redux/catalogSlice";
import Photo from "./Photo/Photo";
import PRE_LOADER_SKELETON from "../utils/SKELETON";

export default function PhotosContainer({ albumId }: Pick<IAlbum, "albumId">) {
  const { data: photos, isLoading, isError } = useGetPhotosQuery(albumId);
  if (isLoading)
    return (
      <Photos>
        <PRE_LOADER_SKELETON
          number={6}
          css={{ width: "150px", height: "150px" }}
        />
      </Photos>
    );
  if (isError) return <h2>OOPS, Error occured while fetching users...</h2>;
  return (
    <Photos>
      {photos?.map((photo) => (
        <Fragment key={photo.id}>
          <Photo photo={photo} />
        </Fragment>
      ))}
    </Photos>
  );
}
