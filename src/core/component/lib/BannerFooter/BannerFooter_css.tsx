import { S } from "../../styled/function";
import styled from "styled-components";

export const BannerFooterContainer = styled.section`
  height: 250px;
  background: var(--violet-dark);
  ${S.flexCenter("column")}
  position : relative;
  overflow: hidden;

    @media screen and (max-width : 600px){
        height : 300px;            
    }

  .banner_content{
    z-index: 100;
    ${S.flexCenter("column")}
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 0 24px;
    

    h2 {
    margin: 0 0 2rem 0;
    width : 100%;
    text-align : center;
    @media screen and (max-width : 600px){
        margin: 0 0 1rem 0;
    }
    }

    button{
        ${S.size("197px", "56px")}
    }

  }



  .abstract_container {
    z-index : 0
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: " ";
    ${S.size("100%")}
    overflow: hidden;

  

    .topleft{
        position : absolute;
        bottom : -205px;
        right : -514px;

        @media screen and (max-width : 1239px){
            right : -714px;
        }

        @media screen and (max-width : 980px){
            display : none;
        }
    }
    .bottom{
        position : absolute;
        transform : rotate(-21deg);
        top : 216px;
        left : -236px;
    }
    .topright{
        position : absolute;
        bottom : 125px;
        left : -514px;

        @media screen and (max-width : 600px){
            bottom : 175px;
        }
    }
  }
`;
