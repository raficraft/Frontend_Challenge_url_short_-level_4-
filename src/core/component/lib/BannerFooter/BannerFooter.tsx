import React from "react";
import Forme from "../../SVG/Forme";
import { BannerFooterContainer } from "./BannerFooter_css";

export default function BannerFooter() {
  return (
    <BannerFooterContainer>
      <div className="abstract_container">
        <Forme className="topleft"></Forme>
        <Forme className="bottom"></Forme>
        <Forme className="topright"></Forme>
      </div>
      <div className="banner_content">
        <h2 className="text-light">Boost your links today</h2>
        <button type="button" className="btn btn_rounded-big">
          Get Started
        </button>
      </div>
    </BannerFooterContainer>
  );
}
