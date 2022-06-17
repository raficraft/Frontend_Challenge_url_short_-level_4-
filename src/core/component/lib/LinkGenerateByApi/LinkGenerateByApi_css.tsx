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
  }

  .link_content {
    ${S.flex("row", "space-between", "center")}
    flex : 1;
    width: 100%;
    p {
      font-weight: 500;
      color: var(--gray-dark);
      ${S.responsiveContainer("450px")}
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
  }
`;
