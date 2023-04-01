import React from "react";
import { Outlet } from "react-router-dom";
import { Cover } from "./cover/Cover";
import { Body } from "./utils/styles";

const Wrapper = () => {
  return (
    <Body>
      <Cover />
      <div className="all">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </Body>
  );
};

export default Wrapper;
