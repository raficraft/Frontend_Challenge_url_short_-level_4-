import { S } from "../../styled/function";
import styled from "styled-components";

export const LinkGenerateByApiContainer = styled.section`
  .link_container {
    background-color: var(--light);
    ${S.flex("row", "space-between", "center")}
    padding : 18px 2rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    gap: 24px;
    @media screen and (max-width: 960px) {
      ${S.flex("column", "space-between", "center")}
      padding : 6px 0 1rem 0;
    }
  }

  .link_content {
    ${S.flex("row", "space-between", "center")}
    flex : 1;
    width: 100%;

    p {
      font-weight: 500;
      color: var(--gray-dark);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .current_link {
      ${S.responsiveContainer("550px")}
    }

    .short_link {
      ${S.responsiveContainer("250px")}
      color: var(--green);
      text-align: right;
    }

    @media screen and (max-width: 960px) {
      ${S.flex("column", "flex-start", "center")}

      .current_link {
        ${S.responsiveContainer("100%")}
        padding: 0 1rem 6px 1rem;
      }

      .short_link {
        ${S.responsiveContainer("100%")}
        text-align: left;
        padding: 6px 1rem 0px 1rem;
      }
    }
  }

  .seperator {
    height: 1px;
    background-color: #9e9aa8;
    border: none;
    width: 100%;
    margin: 0;
    display: none;
  }

  @media screen and (max-width: 960px) {
    .btn_container {
      width: 100%;
      padding: 0 1rem;
    }

    .btn--xs {
      width: 100%;
    }

    .seperator {
      display: block;
    }
  }
`;
