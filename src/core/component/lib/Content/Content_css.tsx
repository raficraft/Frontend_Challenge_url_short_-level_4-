import { S } from "../../styled/function";
import styled from "styled-components";

export const ContentContainer = styled.div`
  ${S.flex("column", "flex-start", "center")};

  .headerContent {
    margin: 0 0 100px 0;
    ${S.responsiveContainer("540px")}
    text-align : center;

    h2 {
      margin: 0 0 18px 0;
    }
    p {
    }
  }

  .cardContainer {
    position: relative;
    ${S.flex("row", "space-between", "flex-start", "no-wrap")};
    gap: 30px;

    @media screen and (max-width: 1024px) {
      ${S.flex("column", "space-between", "center")};
      gap: 0;
    }

    div:nth-child(2) {
      margin: 44px 0 0 0;
    }
    div:nth-child(3) {
      margin: 88px 0 0 0;
    }

    @media screen and (max-width: 1024px) {
      div:nth-child(2) {
        margin: 92px 0 0 0;
      }
      div:nth-child(3) {
        margin: 92px 0 0 0;
      }
    }
  }

  .line {
    position: absolute;
    content: " ";
    ${S.size("100%", "8px")};
    background-color: red;
    top: calc(50% - 8px / 2);
    background-color: var(--green);

    @media screen and (max-width: 1024px) {
      ${S.size("8px", "100%")};
      top: 0;
    }
  }
`;
