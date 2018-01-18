import React,{Component} from 'react';
import animeJS from 'animejs';
import {recognition,synthVoice} from '../speechWeb';
import {StyledSpeaker,SpeakerItem,SpeakerImage,SpeakerTitle} from '../styledComponents/styledComponents';
import '../common/css/animate.min.css';
import speaker from '../common/images/speak.png';
import bot from '../common/images/bot.png';






export default class Speaker extends Component {
       constructor(props) {
         super(props);
         this.state = {
            title : "",
            isSpeaking : false,

         }
         this.onClick = this.onClick.bind(this);
       }

       componentWillMount() {
         const {initialTitle} = this.props;
         this.setState({title : initialTitle });
       }

       componentDidMount(){
         recognition.addEventListener('result',(e)=>{
            let last = e.results.length - 1 ;
            let text = e.results[last][0].transcript;

            console.log('Confidence: ' + e.results[0][0].confidence);

            fetch('/chatbotMessage'  ,{method: "post",
                headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json' },
                 body: JSON.stringify({user_message: text})
                    })
               .then(res =>{  console.log(res); return  res.json(); })
               .then(data => {
                       this.setState({title : "our bot is speaking",isSpeaking : true});
                       synthVoice(data.botResponse);
               })
               .catch(err => {
                     alert(err);
               });
         });
       }

       onClick(e){
          const {initialTitle,appContext} = this.props;
          e.preventDefault();
          if(initialTitle === "you"){
              this.setState({title : "you are speaking...",isSpeaking : true});
              appContext.setState({conversationState : 'started'});

              recognition.start();

          }
          else{
             this.setState({title : "click yourself! not me",isSpeaking : true});
             setTimeout(()=> {
               this.setState({title : initialTitle,isSpeaking : false});
             },3000);
          }
       }

       render(){
         const {title,isSpeaking} = this.state;
         const {initialTitle} = this.props;
         let className ;
         if(isSpeaking)
           className = "animated wobble";
         else
           className = "";

         return (
          <StyledSpeaker>
                <SpeakerItem>
                    <a href="#" onClick={this.onClick}>
                      {
                        (initialTitle === "you")?
                           <SpeakerImage  src={speaker} alt=""/> : <SpeakerImage src={bot} alt=""/>
                      }
                    </a>
                </SpeakerItem>
                <SpeakerTitle className={className} >{title}</SpeakerTitle>
          </StyledSpeaker> )
      }
}
