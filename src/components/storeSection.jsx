import React,{Component} from 'react';
import StoreMenu from './storeMenu';
import $ from 'jquery';
import '../common/css/bounceAnimation.css';
import {StyledStore,StoreInitialTitle} from '../styledComponents/styledComponents';



export default class StoreSection extends Component {
        constructor(props) {
          super(props);
          this.state = {
            className : ""
          }
        }

        componentWillMount(){

        }

        componentDidMount() {

        }

        render(){
          const {className} = this.state;
          const {conversationState,textingState,newConversation,source} = this.props;
          return (
            (source === "conversation")?
               <StyledStore>
                         <StoreInitialTitle className={className} display={conversationState === "nothing"}>
                               <span className="first_part">Start off by clicking on your microphone</span>
                               <span className="second_part"> and say HI</span>
                               <span className="third_part"> to our bot</span>
                         </StoreInitialTitle>
                         <StoreMenu newConversation={newConversation} display={conversationState !== "nothing"} source="conversation"/>
               </StyledStore> :
               <StyledStore>
                         <StoreInitialTitle className={className} display={textingState === "nothing"}>
                               <span className="first_part">Start off by clicking on your microphone</span>
                               <span className="second_part"> and say HI</span>
                               <span className="third_part"> to our bot</span>
                         </StoreInitialTitle>
                         <StoreMenu newConversation={newConversation} display={textingState !== "nothing"} source="texting"/>
               </StyledStore>)
        }
}
