import React,{Component} from 'react';
import $ from 'jquery';
import {StyledAppTemplate,AppTemplateBody} from '../styledComponents/styledComponents';
import AppBar from './appBar';


const AppTemplate = ({title,children,textingState}) =>
           <StyledAppTemplate textingState={textingState}>
             <AppBar title={title} />
             <AppTemplateBody title={title} textingState={textingState}>
                 {children}
             </AppTemplateBody>
           </StyledAppTemplate>


export default AppTemplate;
