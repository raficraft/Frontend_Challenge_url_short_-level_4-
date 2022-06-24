import { S } from "../../styled/function";
import styled from "styled-components";

export const UrlShortContainer = styled.section`
  ${S.flex("row", "flex-start", "flex-start")};
  position: relative;
  ${S.responsiveContainer("100%")};
  padding: 0 var(--spacing-xl--y);
  height: auto;
  top: 0px;
  margin: 0 0 16px 0;

  .urlShort_container {
    ${S.flex("column", "center", "flex-start")};
    ${S.responsiveContainer("100%")};

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
    .submit {
      ${S.flex("row", "space-between", "flex-start")};
      ${S.responsiveContainer("100%")};
      z-index: 1000;
    }

    .bloc_input {
      ${S.flexCenter()};
      z-index: 100;
      flex: 1;

      @media screen and (max-width: 1080px) {
        ${S.flex("column", "center", "flex-start")};
      }
    }

    .bloc-input-item {
      position: relative;
      width: 100%;
      flex: 1;

      @media screen and (max-width: 1080px) {
        margin: 0 0 24px 0;
      }

      .search {
        width: 100%;
      }

      .error-message {
        display: block;
        margin-top: 8px;
        font-weight: 500;
        font-style: italic;
        color: #f46363;
      }
    }

    .btn--submit {
      @media screen and (max-width: 1080px) {
        margin: 0 0 16px 0;
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
    z-index: 1000;
    right: 0;
    left: 0;
    bottom: 0;
    ${S.size("100%", "24px")}
    background-color: transparent;
    font-size: 15px;
    line-height: 18px;
    text-align: right;
    font-style: italic;
    font-weight: 700;
    cursor: pointer;
    &:hover {
      color: #f46363;
      letter-spacing: 1px;
    }
  }
`;
