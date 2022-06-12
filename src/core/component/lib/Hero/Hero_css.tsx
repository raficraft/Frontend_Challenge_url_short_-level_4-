import { S } from "../../styled/function";
import styled from "styled-components";

export const HeroContainer = styled.section`
  @media screen and (max-width: 1440px) {
    padding: 0;
  }
  .hero_content {
    ${S.flex("row", "space-between", "center", "nowrap")};

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

      h1 {
        margin: 0 0 5px 0;

        @media screen and (max-width: 1440px) {
          font-size: 65px;
        }

        @media screen and (max-width: 1080px) {
          margin: 0 0 2.5rem 0;
          text-align: center;
        }
      }
      p {
        margin: 0 0 2.5rem 0;
        @media screen and (max-width: 1080px) {
          ${S.responsiveContainer("100%")}
          margin : 0;
          text-align: center;
          margin: 2rem 0;
        }
      }

      button {
        ${S.size("197px", "56px")}
      }
    }

    .heroSVG {
      ${S.responsiveContainer("610px")}
      background-color: yellow;
      display: flex;
      content: " ";

      @media screen and (max-width: 1080px) {
        display: none;
      }
    }

    .heroSVG--tablet {
      display: none;
      @media screen and (max-width: 1080px) {
        ${S.responsiveContainer("100%")}
        display: red;
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
    }
  }
`;
