import { S } from "../../styled/function";
import styled from "styled-components";

export const HeroContainer = styled.section`
  .hero_content {
    ${S.flex("row", "space-between", "center")};

    .splash_text {
      ${S.responsiveContainer("565px")};
      ${S.flex("column", "space-between", "flex-start")};
      heigth: 351px;
      background-color: rgba(240, 240, 240, 1);
      h1 {
        margin: 0 0 5px 0;
      }
      p {
        margin: 0 0 2.5rem 0;
      }

      button {
        ${S.size("197px", "56px")}
      }
    }
  }
`;
