import React from 'react';
import $ from 'jquery';
import {StyledAppMenu,AppMenuItem,AppMenuLink} from '../styledComponents/styledComponents';


class AppMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.onNewClick = this.onNewClick.bind(this);

  }

  onNewClick(e){
    e.preventDefault();
    $(document).trigger('newConversation');
  }

  render(){
    const {title} = this.props;
    return (
    <StyledAppMenu>
      <AppMenuItem active={title === "new"} >
        <AppMenuLink  href="#" onClick={this.onNewClick}>
             new conversation
        </AppMenuLink>
      </AppMenuItem>
      <AppMenuItem active={title === "contact"}>
        <AppMenuLink  href="#" >
           contact
        </AppMenuLink>
      </AppMenuItem>
    </StyledAppMenu>
  )
  }
}

export default AppMenu ;
