import React, { Suspense, lazy, useState } from "react";
import { IUser } from "../utils/types";
import OpenLabel from "./OpenLabel/OpenLabel";
import { Label, LiTitle, LiWrapper } from "../utils/styles";
import PRE_LOADER_SKELETON from "../utils/SKELETON";
const ListContainer = lazy(() => import("./ListContainer/ListContainer"));
const AlbumsContainer = lazy(() => import("./AlbumsContainer"));

export default function User({ user }: { user: IUser }) {
  const [isUserOpen, toggleUserOpen] = useState<boolean>(false);
  return (
    <LiWrapper>
      <Label>
        <OpenLabel isOpen={isUserOpen} toggleOpen={toggleUserOpen} />
        <LiTitle>{user.name}</LiTitle>
      </Label>
      {isUserOpen && (
        <Suspense
          fallback={
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                padding: "1rem 0 0 3.5rem",
              }}
            >
              <PRE_LOADER_SKELETON
                number={6}
                css={{ width: "100%", height: "20px" }}
              />
            </div>
          }
        >
          <ListContainer>
            <AlbumsContainer userId={user.id} />
          </ListContainer>
        </Suspense>
      )}
    </LiWrapper>
  );
}
