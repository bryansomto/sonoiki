import React from "react";
import { MyCard } from "../utils/styles";
import { testImg } from "../Assets";

export const ProfileCard = () => {
  return (
    <MyCard>
      <div className="imgWrapper">
        <img alt="sonoiki" src={testImg} className="img" />
      </div>
      <div className="text">
        <p>Adewunmi Sonoiki</p>
      </div>
    </MyCard>
  );
};
