import React from "react";
import { Content } from "../utils/Content";
import { Main } from "../utils/styles";

export const Home = () => {
  return (
    <Main>
      {Content.map((i) => (
        <article key={i.title}>
          <div className="content">
            <div className="title">
              <h3>{i.title}</h3>
            </div>
            <div className="text">
              <p>{i.text}</p>
            </div>
          </div>
        </article>
      ))}
    </Main>
  );
};
