import React from "react";
import { NavLink } from "react-router-dom";
import { MyNav } from "../utils/styles";
import { NavbarLinks } from "../utils/Links";

export const NavBar = () => {
  return (
    <MyNav>
      {NavbarLinks.map((i) => (
        <NavLink
          key={i.text}
          className={({ isActive }) => (isActive ? "active link" : "link")}
          to={i.path}
        >
          {i.text}
        </NavLink>
      ))}
    </MyNav>
  );
};
