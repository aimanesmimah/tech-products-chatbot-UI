import React from 'react';
import {StyledSpeaker,SpeakerItem,SpeakerImage,SpeakerTitle} from '../styledComponents/styledComponents';
import '../common/css/animate.min.css';
import bot from '../common/images/bot.png';


const BotSpeaker = ({isSpeaking,title,onClick}) => {
      let className ;
      if(isSpeaking)
        className = "animated wobble";
      else
        className = "";

      return (
          <StyledSpeaker>
                <SpeakerItem>
                    <a href="#" onClick={(e)=> onClick(e,'bot')}>
                      <SpeakerImage src={bot} alt=""/>
                    </a>
                </SpeakerItem>
                <SpeakerTitle className={className} >{title}</SpeakerTitle>
          </StyledSpeaker>

        )
}

export default BotSpeaker;
