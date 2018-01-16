import React from 'react';
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
      <AppMenuItem active={title === "new"} >
        <AppMenuLink  href="#" >
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
