import { S } from "../../styled/function";
import styled from "styled-components";

export const HeaderContainer = styled.header`
position: relative;
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

        @media screen and (max-width : 960px){
            display : none;
        }
      }
    }

    aside {
      .header_login {

        a{
            margin-left: 2.25rem;
        }
        @media screen and (max-width : 960px){
            display : none;
        }
      }

      .burger {
        ${S.size("1.5rem", "19px")};
        content : " ";
        ${S.flex("column", "space-between", "center")};
        transition : var(--transition-sm);

        @media screen and (min-width : 960px){
            display : none;
        }

            &:hover{
            span:first-child{
                transform : translateY(-2px);
            }

            span:last-child{
                transform : translateY(2px);
            }
            }

            span{
                transition : var(--transition-sm);
                content : " ";
                width: 1.5rem;
                height: 3px;
                background-color : var(--gray-light) ;
            }    
        }
      }
    }
  }
`;
