import React from 'react';
import {StyledConversation} from '../styledComponents/styledComponents';
import Speaker from './speaker';


const ConversationSection = () =>
           <StyledConversation>
                <Speaker title="you" />
                <Speaker title="our bot" />
           </StyledConversation>


export default ConversationSection ;
