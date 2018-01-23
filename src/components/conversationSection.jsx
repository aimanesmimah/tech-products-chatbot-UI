import React,{Component} from 'react';
import $ from 'jquery';
import {recognition,synthVoice} from '../speechWeb';
import {StyledConversation} from '../styledComponents/styledComponents';
import UserSpeaker from './userSpeaker';
import BotSpeaker from './botSpeaker';


export default class ConversationSection extends Component {
        constructor(props) {
          super(props);
          this.state = {
              userTitle : "you",
              botTitle : "grover bot",
              userSpeaking : false,
              wait : false,
              botSpeaking : false
          }

          this.onClick = this.onClick.bind(this);
          this.synthesis = null;
        }

        onClick(e,speaker){
           const {appContext} = this.props;
           const {botSpeaking} = this.state;

           e.preventDefault();
           if(speaker === "user"){
               if(botSpeaking){
                    this.setState({userTitle : "wait until he finishes",wait:true});
                    setTimeout(()=>{
                        this.setState({userTitle : "you",wait:false});
                    },2000);
               }
               else{
               this.setState({userTitle : "you are speaking...",userSpeaking : true});
               appContext.setState({conversationState : 'started'});

               recognition.start();
             }

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



        fetch('https://products-chatbot.herokuapp.com/chatbotMessage/' + text  ,{method : "get",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }})
                .then(res =>{  console.log(res); return  res.json(); })
                .then(data => {
                        //alert(JSON.stringify(data));
                        $(document).trigger('newData',[data]);
                        this.setState({botTitle : "our bot is speaking...",botSpeaking : true});
                        this.synthesis = synthVoice(data.botResponse);
                })
                .catch(err => {
                      alert(err);
                });
          });

          $(document).on('utterEnd',(e,time)=>{
               //alert('uutterEnd');
               this.setState({botTitle: "grover bot",botSpeaking : false});
          });

          $(document).on('recognitionEnd',(e)=>{
            this.setState({userTitle : "you",userSpeaking : false});
          });

          $(document).on('newConversation',()=>{
            if(this.synthesis !== null)
              this.synthesis.cancel();
          });
        }


        render(){
          const {appContext} = this.props;
          const {userTitle,botTitle,userSpeaking,botSpeaking,wait} = this.state;
          return (
           <StyledConversation>
                <UserSpeaker title={userTitle} isSpeaking={userSpeaking} wait={wait} onClick={this.onClick} />
                <BotSpeaker title={botTitle} isSpeaking={botSpeaking} onClick={this.onClick} />
           </StyledConversation> )
         }
}
