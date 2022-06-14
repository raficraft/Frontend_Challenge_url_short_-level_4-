import { S } from "../../styled/function";
import styled from "styled-components";

export const FooterContainer = styled.section`
  ${S.flex("row", "space-between", "flex-start")}

  @media screen and (max-width: 1100px) {
    ${S.flex("column", "space-between", "center")}
    .footer_header {
      margin: 0 0 2rem 0;
    }
  }
  @media screen and (max-width: 600px) {
    padding: 480px 0;
  }

  .footer_link {
    ${S.flex("row", "space-between", "flex-start")}
    gap: 90px;
    align-self: flex-end;

    @media screen and (max-width: 1100px) {
      ${S.flex("row", "space-around", "flex-start")}
      width: 100%;
    }

    @media screen and (max-width: 600px) {
      ${S.flex("column", "center", "center")}
      width: 100%;
      gap: 40px;
    }

    &--inside {
      ${S.flex("column", "space-between", "flex-start")}

      @media screen and (max-width: 600px) {
        ${S.flex("column", "center", "center")}
        width: 100%;
      }

      h4 {
        color: white;
        margin: 0 0 22px 0;
      }

      nav {
        ${S.flex("column", "space-between", "flex-start")}

        @media screen and (max-width: 600px) {
          ${S.flex("column", "center", "center")}
          width: 100%;
        }
        a {
          font-size: 15px;
          color: #bfbfbf;
          letter-spacing: -0.23px;
          margin: 0 0 14px 0;
          transition: var(--transition-xs);
          &:hover {
            transition: var(--transition-xs);
            color: var(--green-hover);
          }
        }
      }
    }
    .footer_icon {
      display: flex;
      ${S.flexCenter()}
      gap: 24px;
    }
  }

  svg {
    cursor: pointer;
    transition: var(--transition-xs);
  }

  svg:hover {
    transition: var(--transition-xs);
    color: var(--green-hover);
  }
`;
