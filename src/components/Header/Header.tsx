import React from "react";
import { Navigation, Page } from "./Header.styled";
import { NavLink } from "react-router-dom";
import { PAGES } from "../../utils/const";
import { getLocaleName } from "../../utils/helpers";

export default function Header() {
  return (
    <Navigation>
      {PAGES.map((page, index) => (
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "#117DC1" : "#000",
            backgroundColor: isActive ? "#EDF9FF" : "#fff",
            borderRadius: "1rem",
          })}
          key={page + index}
          to={`/${page !== "catalog" ? page : ""}`}
        >
          <Page>{getLocaleName(page)}</Page>
        </NavLink>
      ))}
    </Navigation>
  );
}
