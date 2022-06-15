import React from "react";
import Forme from "../../SVG/Forme";
import { UrlShortContainer } from "./UrlShot_css";

export default function UrlShort() {
  return (
    <UrlShortContainer>
      <div className="bloc_input">
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="search"
        />
        <button className="btn btn--big">Shorten it!</button>
      </div>

      <Forme className="forme bottomLeft" width="715px" height="409px"></Forme>
      <Forme className="forme topRight" width="715px" height="409px"></Forme>
    </UrlShortContainer>
  );
}
