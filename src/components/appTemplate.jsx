import React,{Component} from 'react';
import $ from 'jquery';
import {StyledAppTemplate,AppTemplateBody} from '../styledComponents/styledComponents';
import AppBar from './appBar';


const AppTemplate = ({title,children}) =>
           <StyledAppTemplate>
             <AppBar title={title} />
             <AppTemplateBody>
                 {children}
             </AppTemplateBody>
           </StyledAppTemplate>


export default AppTemplate;
