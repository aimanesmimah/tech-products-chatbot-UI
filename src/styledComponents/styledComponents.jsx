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

  ${({title,textingState}) => title === "texting" && textingState === "started" && css`
    display : flex;
    flex-direction : row-reverse;
  `  }

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

export const StyledTexting = styled.div`
  margin : 20px 0 10px 30%;
  width : 40%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  ${({textingState}) => textingState === "started" && css`
    margin : 10px 0 0 5% ;
  `  }

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
          margin : -60px 0 0 -70px;

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
     margin : 40px 100px 100px 100px ;

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

export const InputSection = styled.div`
  position: relative;
  margin : 0 auto ;
  padding : 0 ;
  width : 300px;
`

export const MessageLogo = styled.img`
  position: absolute;
  top : 8px ;
  right : 10px;
  width : 30px;
  height : 30px;

`

export const UserTextArea = styled.input`
  border-radius : 10px;
  border : none;
  box-shadow: 1px 1px 6px #d7d0d5;
  height : 40px;
  width : 300px;
  margin : auto;
  background-color: #f4f7f9;
  outline : none;
  font-size : 18px;
  text-align: center;
  &:focus {
    outline : none;
  }

  &::placeholder {
    color : #b6b2b5;
    font-size: 13px;
    text-align: center;
  }
`

export const StyledChat = styled.div`

`

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  background-color: #d5d1d1;
  border : 2px dashed #baacbb;
  border-radius: 7px;
  margin : 0 0 10px 0;
  padding : 10px 0;
  height : 400px;
  width : 530px;
`

export const ChatItemsContainer = styled.div`
  width : 535px;
  max-height: 400px;
  overflow-y: auto;


`

export const ChatItemContainer = styled.div`
  height: 130px;
  border : none;
`

export const MessageContainer = styled.div`
  position: relative;
  min-height : 40px;
`

export const Message = styled.div`
   position  : absolute;
   right : 15px;
   top : 5px;
   border-radius: 12px;
   background-color: #5f6363;
   padding : 5px 10px;
   box-shadow: 1px 1px 2px 0.1px black;
   max-width: 300px;
   color : #d0d0cb;
   font-family: 'Acme', sans-serif;

   transition: transform 0.4s ease;
   &:hover{
      position: absolute;
      z-index : 50;
      transform: scale(1.3,1.3);
   }

   ${({length}) => {
     if(length < 100)
       return css`
           font-size: 15px;

       `
     else if(length < 200)
       return css`
           font-size: 12px;

       `
     else
        return css`
          font-size: 10px;
        `
     }}
`

export const ReplyContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding : 0 0 0 10px;
  min-height : 40px
`

export const Logo = styled.img`

  ${({size}) => size && css`
          width : ${size}px ;
          height : ${size}px;  `  }

  ${({marginAuto}) => {
      if(marginAuto)
        return css`
          margin : 0 auto 15px auto;
              `
      else
        return css`
          margin-right : 10px;
               `
            }}
`

export const Reply = styled.div`
    border-radius: 12px;
    background-color: #5f6363;
    padding : 10px 10px;
    box-shadow: 1px 1px 2px 0.1px black;
    max-width: 350px;
    color : #d0d0cb;
    font-family: 'Acme', sans-serif;
    transition: transform 0.4s ease;
    &:hover{
       position: absolute;
       z-index : 50;
       left : 12%;
       transform: scale(1.3,1.3);
    }

    ${({length}) => {
      if(length < 100)
        return css`
            font-size: 15px;

        `
      else if(length < 200)
        return css`
            font-size: 12px;

        `
      else
         return css`
           font-size: 10px;
         `
      }}
`
