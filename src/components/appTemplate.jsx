import React from 'react';
import {StyledAppTemplate,AppTemplateBody} from '../styledComponents/styledComponents';
import AppBar from './appBar';
import ConversationSection from './conversationSection';
import StoreSection from './storeSection';


const AppTemplate = ({title,children=null}) => (
     <StyledAppTemplate>
       <AppBar title={title} />
       <AppTemplateBody>
           <ConversationSection />
           <StoreSection />
       </AppTemplateBody>
     </StyledAppTemplate>
)

export default AppTemplate ;
