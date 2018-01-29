import React from 'react';
import {SyncLoader} from 'react-spinners';
import {ChatItemContainer,MessageContainer,Message,ReplyContainer,Logo,Reply} from '../styledComponents/styledComponents';



const ChatItem = ({message,msgLength,reply,replyLength,logo}) =>
        <ChatItemContainer>
            <MessageContainer>
                <Message length={msgLength} className="messageArea">{message}</Message>
            </MessageContainer>
            <ReplyContainer>
                <Logo src={logo} alt="" size={40} />
                {
                  (reply)?
                     <Reply length={replyLength} className="messageArea">{reply}</Reply> :
                     <Reply length={replyLength}>
                       <SyncLoader color="#d0d0cb" size={12} loading={true}  />
                     </Reply>
                }
            </ReplyContainer>
        </ChatItemContainer>


export default ChatItem;
