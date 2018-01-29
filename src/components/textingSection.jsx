import React,{Component} from 'react';
import $ from 'jquery';
import ChatSection from './chatSection';
import {StyledTexting} from '../styledComponents/styledComponents';





export default class TextingSection extends Component {
        constructor(props) {
          super(props);
        }


        componentDidMount(){



              $(document).on('newConversation',()=>{

              });

        }


        render(){
          const {appContext} = this.props;
          return (
           <StyledTexting textingState={appContext.state.textingState}>
              <ChatSection appContext={appContext}/>
           </StyledTexting> )
         }
}
