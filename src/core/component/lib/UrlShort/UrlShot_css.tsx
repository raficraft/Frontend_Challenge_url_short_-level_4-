import { S } from "../../styled/function";
import styled from "styled-components";

export const UrlShortContainer = styled.div`
  padding: 52px 64px;
  background-color: var(--violet-dark);
  width: 100%;
  ${S.flexCenter()}
  ${S.flex("column", "center", "flex-start")};
  border-radius: 10px;
  position: absolute;
  overflow: hidden;
  ${S.size("1100px", "168px")}
  top : calc(50% - 164px / 2);

  .bloc_input {
    ${S.responsiveContainer("100%")}
    ${S.flexCenter()};
    margin: 0 0 0.5rem 0;
    z-index: 100;

    .search {
      margin: 0 1rem 0rem 0;
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
    left: 647px;
    top: -184px;
  }
`;
