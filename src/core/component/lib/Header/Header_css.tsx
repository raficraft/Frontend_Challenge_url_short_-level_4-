import { S } from "../../styled/function";
import styled from "styled-components";

export const HeaderContainer = styled.header`
  .header_content {
    ${S.flex("row", "space-between", "center")}

    header {
      ${S.flex("row", "space-between", "center")}

      .logo {
        margin-right: 46px;
      }

      nav {
        ${S.flex("row", "space-between", "center")}
        gap: 30px;
      }
    }

    aside {
      a {
        margin-left: 2.25rem;
      }
    }
  }
`;
