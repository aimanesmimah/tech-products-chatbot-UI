import styled,{css} from 'styled-components';
import {injectGlobal} from 'styled-components';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Changa+One|Patua+One|Raleway|Macondo|Exo+2|Acme|Sigmar+One');
  `

export const StyledAppTemplate = styled.div`
  position : absolute;
  width : 100%;
  top : 0 ;
  left : 0 ;
  background: #f5f5f5;
  height : 100vh;
  overflow-y: auto;
`

export const AppTemplateBody = styled.div`
  margin : 100px 0 0 0 ;
`

export const StyledAppMenu = styled.ul`
  list-style: none ;
  margin : 13px 0 0 50px;
  padding : 0;
`

export const AppMenuItem = styled.li`
  display: inline;
  margin : 0 0 0 20px;
  padding : 0 0 5px 0 ;

  ${({active}) => active && css`
    color : rgb(242, 140, 45);
  `  }




`

export const AppMenuLink = styled.a`
  color : #1a1a1c;
  text-decoration: none;
  font-size: 20px;
  font-weight: 600;
  /*font-family: 'Sigmar One', cursive;
  font-family: 'Press Start 2P', cursive;*/
  font-family: 'Changa One', cursive;

  transition: color 0.5s ease;
  transition: font-size 0.5s ease;

  &:hover{
    color :#37e2dd;
    font-size: 23px
  }

`

export const StyledAppBar = styled.div`
  position : absolute;
  top : 0 ;
  left : 0 ;
  /*padding : 10px 0 0 20px ;*/
  text-align: left;
  width : 100%;
  height : 63px;
  background-color: white;
  z-index : 10;
  box-shadow: 2px 2px 5px #111;
`

export const BarLeftBox = styled.div`
  float : left;
  margin : 6px 0 0 20px;
  display: flex;
  flex-direction: row;

`

export const BarRightBox = styled.div`
  float: right;
  margin : 5px 30px 0 0;
  display: flex ;
  flex-direction: row;
  /*border : 1px solid black;*/
  justify-content: space-between;

`

export const StyledBarIcon = styled.img`
  width : 170px;
  height : 55px ;
`

export const StyledSpeaker = styled.div`
  background-color: #6b7071;
  border-radius: 5px;
  height : 120px;
  width : 110px;
  border : none;
  box-shadow: 0.8px 0.8px 10px #999;
  padding: 0 5px;
`

export const SpeakerItem = styled.div`
  background-color: #5f6363;
  border-radius: 3px;
  height : 80px;
  width : 88px;
  margin : 10px auto 0 auto;
  padding: 0 ;
  border : none;
  box-shadow: 1px 1px 1px 1px black;

  transition: opacity 0.2s ease;
  &:hover {
    opacity : 0.4;
  }

`

export const SpeakerImage = styled.img`

  width : 60px;
  height : 60px;
  margin : 10px;

`

export const SpeakerTitle = styled.p`
  font-size: 13px;
  /*font-family: 'Exo 2', sans-serif;*/
  font-family: 'Acme', sans-serif;
  color : #d0d0cb;
  line-height: 1em;
  margin : 2px 0  0 0  ;
  ${({isSpeaking}) => {
    if(isSpeaking)
      return css`
        margin : 2px 0 0 0 ;

      `
    else
       return css`
         margin : 10px 0 0 0;

       `
    }}

`

export const StyledConversation = styled.div`
  margin : 10px auto 20px auto;
  width : 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export const StyledStore = styled.div`
  width : 80%;
  display: flex;
  flex-direction: row;
  margin : 0 auto;
  justify-content: center;
`

export const StyledStoreItem = styled.div`
  background-image: -webkit-radial-gradient(circle at top right,white,#f51159,#7c07c5);
  background-image: -o-radial-gradient(circle at top right,white,#f51159,#7c07c5);
  background-image: -moz-radial-gradient(circle at top right,white,#f51159,#7c07c5);
  background-image: radial-gradient(circle at top right,white,#f51159,#7c07c5);


  ${({dreamProduct}) => {
    if(dreamProduct)
      return css`
          border : 10px solid #2e4967;
          width : 200px;
          height : 200px;
          border-radius: 150px;
          margin : -70px 0 0 -70px;

      `
    else
       return css`
         border : 5px solid #2e4967;
         width : 80px;
         height : 80px;
         border-radius: 80px;
       `
    }}

  .storeItemTitle {
    font-family: 'Macondo', cursive;
    font-size: 13px;
    font-weight: bold;
    margin : 8px 0 0 0;
  }

  .storeItemTitleAlone{
    font-family: 'Macondo', cursive;
    font-size: 12px;
    font-weight: bold;
    margin : 15px 0 0 0;
  }

  .storeItemTitleDreamProduct{
    font-family: 'Macondo', cursive;
    font-size: 20px;
    font-weight: bold;
    margin : 15px 0 0 0;
  }

   .dreamProduct{
       margin-top : 50px;
   }

  .subscriptionPlan{
    font-family: 'Macondo', cursive;
    font-size: 16px;
    font-weight: bold;
    margin : 5px 0 0 0;
  }

  .storeItemImage{

  }

  .separator{
    width : 50px;
  }
`

export const StoreInitialTitle = styled.p`
     text-align: center;
     font-family: 'Patua One', cursive;
     font-size: 30px;
     width : 550px;
     margin : 150px;

     ${({display}) => !display && css` display : none ; `  }


     .first_part {
       color : #f51159;

     }

     .second_part{
       color : white;
       background: #7c07c5;
       border-radius: 10px;
       padding: 0 10px 0 10px;
       box-shadow: 2px 2px 4px #9d9a9a;

     }

     .third_part{
       color : #3e02fd;
     }
`

export const StyledStoreMenu = styled.div`
  margin : 0 ;
  padding :  0 ;

  ${({display}) => !display && css` display : none ; `  }

`
