import React,{Component} from 'react';
import $ from 'jquery';
import AppTemplate from './appTemplate';
import ConversationSection from './conversationSection';
import StoreSection from './storeSection';


export default class Conversation extends Component {
     constructor(props) {
       super(props);
       this.state = {
         conversationState : 'nothing'
       }
     }

     componentDidMount(){
       $(document).on('newConversation',(e)=>{
         this.setState({conversationState : 'nothing'});
       });
     }

     render(){
       const {conversationState} = this.state;
       return (
         <AppTemplate title="conversation">
           <ConversationSection appContext={this} />
           <StoreSection conversationState={conversationState} source="conversation"/>
         </AppTemplate>
       )
     }

}
