import React from "react";
import { HeroContainer } from "./Hero_css";
import { HeroSVG } from "../../SVG/HeroSVG";

type NavigationProps = {
  children?: React.ReactNode;
};

export default function Hero({ children }: NavigationProps) {
  return (
    <HeroContainer id="__Hero">
      <section className="hero_content">
        <div className="splash_text">
          <header>
            <h1>More than just shorter links</h1>
            <p className="text-md-lg">
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
          </header>

          <button type="button" className="btn btn_rounded-big">
            Get started
          </button>
        </div>

        <div className="heroSVG">
          <HeroSVG></HeroSVG>
        </div>
      </section>
      <footer></footer>
    </HeroContainer>
  );
}
