import { S } from "../../styled/function";
import styled from "styled-components";

export const LinkGenerateByApiContainer = styled.section`
  .link_container {
    background-color: var(--light);
    ${S.flex("row", "space-between", "center")}
    padding : 18px 2rem;

    p {
      font-weight: 500;
      color: var(--gray-dark);
    }

    .short_link {
      color: var(--green);
    }
  }
`;
