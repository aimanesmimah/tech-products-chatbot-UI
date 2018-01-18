import React,{Component} from 'react';
import {recognition,synthVoice} from '../speechWeb';
import {StyledConversation} from '../styledComponents/styledComponents';
import UserSpeaker from './userSpeaker';
import BotSpeaker from './botSpeaker';


export default class ConversationSection extends Component {
        constructor(props) {
          super(props);
          this.state = {
              userTitle : "you",
              botTitle : "our bot",
              userSpeaking : false,
              botSpeaking : false
          }

          this.onClick = this.onClick.bind(this);

        }

        onClick(e,speaker){
           const {appContext} = this.props;
           e.preventDefault();
           if(speaker === "user"){
               this.setState({userTitle : "you are speaking...",userSpeaking : true});
               appContext.setState({conversationState : 'started'});

               recognition.start();

           }
           else{
              this.setState({botTitle : "click yourself! not me",botSpeaking : true});
              setTimeout(()=> {
                this.setState({botTitle : "our bot",botSpeaking : false});
              },3000);
           }
        }

        componentDidMount(){
          recognition.addEventListener('result',(e)=>{
             let last = e.results.length - 1 ;
             let text = e.results[last][0].transcript;

             console.log('Confidence: ' + e.results[0][0].confidence);
             this.setState({userTitle : "you",userSpeaking : false});


             fetch('/chatbotMessage'  ,{method: "post",
                 headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json' },
                  body: JSON.stringify({user_message: text})
                     })
                .then(res =>{  console.log(res); return  res.json(); })
                .then(data => {
                        alert("hi");
                        this.setState({botTitle : "our bot is speaking...",botSpeaking : true});
                        synthVoice(data.botResponse);
                })
                .catch(err => {
                      alert(err);
                });
          });
        }


        render(){
          const {appContext} = this.props;
          const {userTitle,botTitle,userSpeaking,botSpeaking} = this.state;
          return (
           <StyledConversation>
                <UserSpeaker title={userTitle} isSpeaking={userSpeaking} onClick={this.onClick} />
                <BotSpeaker title={botTitle} isSpeaking={botSpeaking} onClick={this.onClick} />
           </StyledConversation> )
         }
}
