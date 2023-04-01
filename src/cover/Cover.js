import React from "react";
import { NavBar } from "./NavBar";
import { ProfileCard } from "./ProfileCard";
import { MyCover } from "../utils/styles";

export const Cover = () => {
  return (
    <MyCover>
      <NavBar />
      <ProfileCard />
    </MyCover>
  );
};
