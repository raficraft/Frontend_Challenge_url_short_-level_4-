import { S } from "../../styled/function";
import styled from "styled-components";

export const BurgerMenuContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  ${S.flex("column", "flex-start", "center")};
  ${S.size("100%")}
  padding: 96px 24px;
  background: rgba(255, 255, 255, 0.6);
  transform: translateY(-200%);
  transition: var(--transition-sd);

  &[data-isopen="true"] {
    transform: translateY(0);
    transition: var(--transition-sd);
  }

  nav {
    ${S.flex("column", "flex-start", "center")};
    ${S.responsiveContainer("327px")}
    padding : 40px 24px;
    background-color: var(--violet);
    border-radius: 10px;

    .nav_burger {
      width: 100%;
      margin-bottom: 30px;
      text-align: center;
      color: white;
      line-height: 27px;
      transition: var(--transition-sm);
      &:hover {
        letter-spacing: 4px;
        transition: var(--transition-sm);
      }
    }

    footer {
      ${S.flex("column", "flex-start", "center")};
      padding-top: 2rem;
      gap: 1.5rem;
      width: 100%;
      border-top: 1px solid rgba(255, 255, 255, 0.6);
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
