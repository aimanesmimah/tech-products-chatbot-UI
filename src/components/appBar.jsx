import React,{Component} from 'react';
import PropTypes from 'prop-types';
import {StyledAppBar,BarLeftBox,BarRightBox,StyledBarIcon, StyledLink} from '../styledComponents/styledComponents';
import appLogo from '../common/images/logo.png';
import AppMenu from './appMenu';


class AppBar extends Component {
  constructor(props){
    super(props);
    this.state = {

    }


  }

  render(){
    const {title} = this.props;
  return(
    <StyledAppBar>
        <BarLeftBox>
          <div>
            <StyledBarIcon src={appLogo} alt="" />
          </div>
          <div>
            <AppMenu  title={title} />
          </div>
        </BarLeftBox>
        <BarRightBox>
        </BarRightBox>
  </StyledAppBar>
    )
  }
}

export default AppBar;
