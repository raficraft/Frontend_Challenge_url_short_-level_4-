import { S } from "../../styled/function";
import styled from "styled-components";

export const FooterContainer = styled.section`
  ${S.flex("row", "space-between", "flex-start")}

  .footer_link {
    ${S.flex("row", "space-between", "flex-start")}

    &--inside {
      ${S.flex("column", "space-between", "flex-start")}

      nav {
        ${S.flex("column", "space-between", "flex-start")}
      }
    }
  }

  svg {
    color: white;
  }
`;
