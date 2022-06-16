import { S } from "../../styled/function";
import styled from "styled-components";

export const UrlShortContainer = styled.section`
  ${S.flex("column", "flex-start", "flex-start")};
  position: relative ${S.responsiveContainer("100%")};
  padding: 0 var(--spacing-xl--y);
  height: auto;

  .urlShort_container {
    ${S.flex("column", "center", "flex-start")};
    ${S.responsiveContainer("100%")};
    top: 82px;

    position: relative;
    overflow: hidden;
    width: 100%;
    padding: 52px 64px;
    border-radius: 10px;
    background-color: var(--violet-dark);
    z-index: 500;

    @media screen and (max-width: 1080px) {
      padding: 24px;
    }

    .bloc_input {
      ${S.flexCenter()};
      width: 100%;
      margin: 0 0 0.5rem 0;
      z-index: 100;

      @media screen and (max-width: 1080px) {
        ${S.flex("column", "center", "flex-start")};
      }
    }

    .bloc-input-item {
      position: relative;
      width: 100%;
      margin: 0 1rem 0rem 0;
      flex: 1;

      @media screen and (max-width: 1080px) {
        margin: 0 0 38px 0;
      }

      .search {
        width: 100%;
      }

      .error-message {
        position: absolute;
        left: 0;
        bottom: -24px;
        font-weight: 500;
        font-style: italic;
        color: #f46363;
      }
    }

    .forme {
      position: absolute;
    }

    .bottomLeft {
      top: 29px;
      left: -134px;
    }

    .topRight {
      right: -252px;
      top: -184px;
    }

    @media screen and (max-width: 1080px) {
      .bottomLeft {
        top: 89px;
        left: -334px;
      }

      .topRight {
        right: -287px;
        top: -114px;
      }
    }

    @media screen and (max-width: 860px) {
      .bottomLeft {
        display: none;
      }

      .topRight {
        right: -477px;
        top: -89px;
      }
    }
  }

  .reset_local {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 1000;
    ${S.size("100px", "24px")}
    background-color: transparent;
    font-size: 15px;
    line-height: 18px;
    cursor: pointer;
    font-style: italic;
    color: #f46363;
    font-weight: 700;
    &:hover {
      letter-spacing: 1px;
    }
  }
`;
