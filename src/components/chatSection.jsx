import React, {PropTypes} from 'react';
import {SyncLoader} from 'react-spinners';
import anime from 'animejs';
import $ from 'jquery';
import {StyledChat,MessageContainer,Message,ReplyContainer,Logo,Reply} from '../styledComponents/styledComponents';
import bot from '../common/images/bot.png';

export default class ChatSection extends React.Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick(){

  }

  componentDidMount(){
    $('.messageArea').hover(()=>{
           alert('hover');
    },()=>{

    });
  }


  render() {
    const {message,reply} = this.props;
    const msgLength = message.length;
    const replyLength = reply.length;

    return (
      (message === "" && reply === "")?
        <Logo src={bot} alt="" size={70} marginAuto={true}/> :
        <StyledChat>
            <MessageContainer>
                <Message length={msgLength} className="messageArea">{message}</Message>
            </MessageContainer>
            <ReplyContainer>
                <Logo src={bot} alt="" size={40} />
                {
                  (reply)?
                     <Reply length={replyLength} className="messageArea">{reply}</Reply> :
                     <Reply length={replyLength}>
                       <SyncLoader color="#d0d0cb" size={12} loading={true}  />
                     </Reply>
                }
            </ReplyContainer>
        </StyledChat>);
  }
}

ChatSection.propTypes = {
};
