import React from 'react';
import $ from 'jquery';
import {StyledAppMenu,AppMenuItem,AppMenuLink} from '../styledComponents/styledComponents';


class AppMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

  }

  render(){
    const {title} = this.props;
    return (
    <StyledAppMenu>
      <AppMenuItem active={title === "conversation"} >
        <AppMenuLink  href="#/conversation" >
             Conversation
        </AppMenuLink>
      </AppMenuItem>
      <AppMenuItem active={title === "texting"}>
        <AppMenuLink  href="#/texting" >
            Texting
        </AppMenuLink>
      </AppMenuItem>
    </StyledAppMenu>
  )
  }
}

export default AppMenu ;
