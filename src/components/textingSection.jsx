import React,{Component} from 'react';
import $ from 'jquery';
import ChatSection from './chatSection';
import {StyledTexting,UserTextArea,InputSection,MessageLogo} from '../styledComponents/styledComponents';
import '../common/css/chat.css';
import '../common/css/animate.min.css';
import chat from '../common/images/chat.png';
import chatred from '../common/images/chatred.png';




export default class TextingSection extends Component {
        constructor(props) {
          super(props);
          this.state = {
              className : "",
              emptyAreaError : false,
              message : "",
              reply : ""
          }

          this.onClick = this.onClick.bind(this);
          this.onFocus = this.onFocus.bind(this);
          this.onBlur = this.onBlur.bind(this);
          this.onSubmitMessage = this.onSubmitMessage.bind(this);
        }

        onSubmitMessage(){
          const {appContext} = this.props;

          if($('.userArea').val()){
                let message = $('.userArea').val();
                $('.userArea').val('');
                this.setState({message : message,reply: ""});

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
                           this.setState({reply: data.botResponse});
                           appContext.setState({textingState : 'started'});
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

            $('.userArea').keyup((e) =>{
                 if(e.keyCode === 13){
                   this.onSubmitMessage();
                 }

            });

              $(document).on('newConversation',()=>{

              });

        }


        render(){
          const {appContext} = this.props;
          const {className,emptyAreaError,message,reply} = this.state;
          return (
           <StyledTexting>
              <ChatSection message={message} reply={reply}/>
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
           </StyledTexting> )
         }
}
