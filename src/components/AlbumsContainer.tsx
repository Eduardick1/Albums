import { useGetAlbumsQuery } from "../Redux/catalogSlice";
import Album from "./Album";
import React, { Fragment } from "react";
import { IAlbum } from "../utils/types";
import PRE_LOADER_SKELETON from "../utils/SKELETON";

export default function AlbumsContainer({ userId }: Pick<IAlbum, "userId">) {
  const { data: albums, isError, isLoading } = useGetAlbumsQuery(userId);
  if (isLoading)
    return (
      <>
        <PRE_LOADER_SKELETON
          number={6}
          css={{ width: "100%", height: "20px" }}
        />
      </>
    );
  if (isError) return <h2>OOPS, Error occured while fetching albums...</h2>;
  return (
    <>
      {albums?.map((album) => (
        <Fragment key={album.albumId}>
          <Album album={album} />
        </Fragment>
      ))}
    </>
  );
}
