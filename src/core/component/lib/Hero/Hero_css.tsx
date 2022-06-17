import { S } from "../../styled/function";
import styled from "styled-components";

export const HeroContainer = styled.section`
  position: relative;

  .hero_content {
    ${S.flex("row", "space-between", "center", "nowrap")};

    @media screen and (max-width: 600px) {
      ${S.flex("column-reverse", "space-between", "flex-start")};
    }

    .splash_text {
      ${S.responsiveContainer("565px")};
      ${S.flex("column", "space-between", "flex-start")};

      @media screen and (max-width: 1080px) {
        ${S.responsiveContainer("100%")};
        ${S.flex("row", "center", "space-between", "no-wrap")};

        header {
          ${S.flex("row", "center", "center")};
        }
      }

      @media screen and (max-width: 600px) {
        padding: 0 24px 0 0;
      }

      h1 {
        margin: 0 0 5px 0;

        @media screen and (max-width: 1440px) {
          font-size: 65px;
        }

        @media screen and (max-width: 1080px) {
          margin: 0 0 2.5rem 0;
          text-align: center;
        }

        @media screen and (max-width: 600px) {
          font-size: 42px;
          line-height: 48px;
          letter-spacing: -1px;
          margin: 2rem 0 1rem 0;
        }
      }
      p {
        margin: 0 0 2.5rem 0;
        @media screen and (max-width: 1080px) {
          ${S.responsiveContainer("100%")};
          margin: 0;
          text-align: center;
          margin: 2rem 0;
        }

        @media screen and (max-width: 600px) {
          margin: 0 0 2rem 0;
        }
      }

      button {
        ${S.size("197px", "56px")};
      }
    }

    .heroSVG {
      ${S.responsiveContainer("610px")};
      display: flex;

      @media screen and (max-width: 1080px) {
        display: none;
      }

      @media screen and (max-width: 600px) {
        display: none;
      }
    }

    .heroSVG--mobil {
      display: none;
      ${S.responsiveContainer("100%")}

      @media screen and (max-width: 600px) {
        ${S.flex("row", "flex-end", "space-between", "no-wrap")};
      }
    }

    .heroSVG--tablet {
      display: none;
      @media screen and (max-width: 1080px) {
        ${S.responsiveContainer("100%")}

        ${S.flexCenter()}
        margin: 0;
        svg {
          ${S.responsiveContainer("60%")}
        }
      }

      @media screen and (max-width: 860px) {
        svg {
          ${S.responsiveContainer("80%")}
        }
      }

      @media screen and (max-width: 600px) {
        display: none;
      }
    }
  }
`;
