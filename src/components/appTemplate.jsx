import React,{Component} from 'react';
import {StyledAppTemplate,AppTemplateBody} from '../styledComponents/styledComponents';
import AppBar from './appBar';
import ConversationSection from './conversationSection';
import StoreSection from './storeSection';


export default class AppTemplate extends Component {
   constructor(props) {
     super(props);
     this.state = {
       conversationState : 'nothing'
     }

   }

   render(){
     const {title} = this.props;
     const {conversationState} = this.state;
     return (
     <StyledAppTemplate>
       <AppBar title={title} />
       <AppTemplateBody>
           <ConversationSection appContext={this} />
           <StoreSection conversationState={conversationState} />
       </AppTemplateBody>
     </StyledAppTemplate> )
   }
}
