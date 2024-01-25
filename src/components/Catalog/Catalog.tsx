import PRE_LOADER_SKELETON from "../../utils/SKELETON";
import { useGetUsersQuery } from "../../Redux/catalogSlice";
import ListContainer from "../ListContainer/ListContainer";
import User from "../User";
import React, { Fragment } from "react";

export default function Catalog() {
  const { data: users, isLoading, isError } = useGetUsersQuery();
  if (isLoading)
    return (
      <ListContainer>
        <PRE_LOADER_SKELETON
          number={6}
          css={{ width: "100%", height: "20px" }}
        />
      </ListContainer>
    );
  if (isError) return <h2>OOPS, Error occured while fetching users...</h2>;
  return (
    <ListContainer>
      {users?.map((user) => (
        <Fragment key={user.id}>
          <User user={user} />
        </Fragment>
      ))}
    </ListContainer>
  );
}
