import React,{Component} from 'react';
import AppTemplate from './appTemplate';
import TextingSection from './textingSection';
import StoreSection from './storeSection';

export default class Texting extends Component {
     constructor(props) {
       super(props);
       this.state = {
         textingState : 'nothing'
       }
     }

     componentDidMount(){
       /*$(document).on('newConversation',(e)=>{
         this.setState({conversationState : 'nothing'});
       });*/
     }

     render(){
       const {textingState} = this.state;
       return (
         <AppTemplate title="texting">
           <TextingSection appContext={this} />
           <StoreSection textingState={textingState} source="texting"/>
         </AppTemplate>
       )
     }

}
