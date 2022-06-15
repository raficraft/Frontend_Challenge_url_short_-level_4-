import { S } from "../../styled/function";
import styled from "styled-components";

export const CardContainer = styled.div`
  position: relative;
  ${S.responsiveContainer("350px")}
  background-color: white;
  ${S.flex("column", "flex-start", "flex-start")};
  padding: 77px 32px 40px 32px;
  border-radius: 5px;
  z-index: 100;

  @media screen and (max-width: 1024px) {
    ${S.responsiveContainer("80%")}
    text-align : center;
  }

  @media screen and (max-width: 600px) {
    ${S.responsiveContainer("100%")}
    text-align : center;
  }

  header {
    width: 100%;
  }

  h3 {
    font-size: 22px;
    font-weight: 700;
    margin: 0 0 1rem 0;
    ${S.responsiveContainer("100%")}

    @media screen and (max-width: 1024px) {
      text-align: center;
    }
  }

  p {
    font-weight: 500;
    font-size: 15px;
    color: var(--gray);
    line-height: 26px;
  }

  .svg_container {
    ${S.size("88px")}
    background-color: var(--violet-dark);
    border-radius: 50%;
    ${S.flexCenter()};
    position: absolute;
    top: -44px;

    @media screen and (max-width: 1024px) {
      left: calc(50% - 88px / 2);
    }
  }
`;
