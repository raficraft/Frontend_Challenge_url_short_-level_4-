import { S } from "../../styled/function";
import styled from "styled-components";

export const BurgerMenuContainer = styled.div`
  background: rgba(255, 255, 255, 0.6);
  position: absolute;
  ${S.size("100%")}
  top : 0;
  bottom: 0;
  padding: 96px 24px;
  ${S.flex("column", "flex-start", "center")};
  transform: translateY(-200%);
  transition: var(--transition-sd);

  &[data-isopen="true"] {
    transform: translateY(0);
    transition: var(--transition-sd);
  }

  nav {
    background-color: var(--violet);
    border-radius: 10px;
    ${S.responsiveContainer("327px")}
    padding : 40px 24px;
    ${S.flex("column", "flex-start", "center")};

    .nav_burger {
      color: white;
      margin-bottom: 30px;
      line-height: 27px;
    }

    footer {
      gap: 1.5rem;
      padding-top: 2rem;
      width: 100%;
      border-top: 1px solid rgba(255, 255, 255, 0.6);
      ${S.flex("column", "flex-start", "center")};
      .nav_burger {
        margin: 0;
      }
      .btn_rounded-big {
        padding: 16px 22px;
      }
      a {
        width: 100%;
        margin: 0;
        text-align: center;
      }
    }
  }
`;
