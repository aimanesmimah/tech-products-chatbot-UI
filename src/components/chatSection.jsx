import React, {PropTypes} from 'react';
import ChatItem from './chatItem';
import anime from 'animejs';
import $ from 'jquery';
import {scroller,animateScroll} from 'react-scroll';
import {StyledChat,ChatContainer,ChatItemsContainer,UserTextArea,InputSection,MessageLogo,Logo} from '../styledComponents/styledComponents';
import '../common/css/chat.css';
import '../common/css/animate.min.css';
import chat from '../common/images/chat.png';
import chatred from '../common/images/chatred.png';
import bot from '../common/images/bot.png';

export default class ChatSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chatItems : [],
      lastMessage : "",
      lastReply : "",
      className : "",
      emptyAreaError : false
    }
    this.onClick = this.onClick.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onSubmitMessage = this.onSubmitMessage.bind(this);
  }

  onSubmitMessage(){
    const {appContext} = this.props;
    var {chatItems} = this.state;
    //alert(chatItems.length);
    appContext.setState({textingState : 'started'});

    if($('.userArea').val()){
          let message = $('.userArea').val();
          $('.userArea').val('');
          this.setState({lastMessage : message});
          //alert(chatItems.length);
       fetch('https://products-chatbot.herokuapp.com/chatbotMessage/' + message  ,{method : "get",
          headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
          }})
             .then(res =>{  console.log(res); return  res.json(); })
             .then(data => {
                     //alert(JSON.stringify(data));
                     $(document).trigger('newData',[data]);
                     //alert(data.botResponse.length);
                     //chatItems[chatItems.length-1].reply = data.botResponse;
                     this.setState({chatItems:[...this.state.chatItems,{message:this.state.lastMessage,reply:data.botResponse}],
                                    lastMessage : ""});
                     //appContext.setState({textingState : 'started'});


             })
             .catch(err => {
                        alert(err);
             });
    }
    else{
      this.setState({className : "animated lightSpeedIn",emptyAreaError:true});
      setTimeout(()=>{
         this.setState({className : "",emptyAreaError:false});
      },2000);
    }
  }

  onClick(e){
    e.preventDefault();
    this.onSubmitMessage();
  }

  onFocus(){
     this.setState({className : "animated wobble"});
  }

  onBlur(){
    this.setState({className : ""});
  }

  componentDidMount(){
    const {chatItems} = this.state;
    $('.messageArea').hover(()=>{
           alert('hover');
    },()=>{

    });

    $('.userArea').keyup((e) =>{
         if(e.keyCode === 13){
           this.onSubmitMessage();

           $('.ChatItemsContainer').scrollTop(6000000);

         }

    });
  }

  componentWillUnmount() {}


  render() {
    const {chatItems,lastMessage,className,emptyAreaError} = this.state ;
    //alert(chatItems.length);
    return (
      <StyledChat>
        {
          (chatItems.length || lastMessage )?
            <ChatContainer>
                <ChatItemsContainer className="ChatItemsContainer">
                    {
                      (chatItems.length)?
                          chatItems.map(item =>
                                <ChatItem message={item.message} msgLength={item.message.length}
                                   reply={item.reply} replyLength={item.reply.length} logo={bot}/>
                          ) : ""
                    }
                    {
                      (lastMessage)?
                          <ChatItem message={lastMessage} msgLength={lastMessage.length}
                              reply={null} replyLength={0} logo={bot}/>:""
                    }
                </ChatItemsContainer>
            </ChatContainer> :
            <Logo src={bot} alt="" size={70} marginAuto={true}/>
        }
        <InputSection>
          <a href="#" onClick={this.onClick} >
            {
              (!emptyAreaError)?
                   <MessageLogo src={chat} className={className} /> :
                   <MessageLogo src={chatred} className={className} />
            }

          </a>
          <UserTextArea type="text" placeholder="chat with grover chatbot..."
              onFocus={this.onFocus} onBlur={this.onBlur} className="userArea" />
        </InputSection>
      </StyledChat>);
  }
}

ChatSection.propTypes = {
};
