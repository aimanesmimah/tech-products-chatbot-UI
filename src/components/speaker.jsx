import React from 'react';
import animeJS from 'animejs';
import {StyledSpeaker,SpeakerItem,SpeakerImage,SpeakerTitle} from '../styledComponents/styledComponents';
import speaker from '../common/images/speak.png';
import bot from '../common/images/bot.png';





const Speaker = ({title}) => {
       const onClick = (e) => {
          e.preventDefault();
          
       }

       return (
        <StyledSpeaker>
              <SpeakerItem>
                  <a href="#" onClick={onClick}>
                    {
                      (title === "you")?
                         <SpeakerImage  src={speaker} alt=""/> : <SpeakerImage src={bot} alt=""/>
                    }
                  </a>
              </SpeakerItem>
              <SpeakerTitle className="speakerTitle">{title}</SpeakerTitle>
        </StyledSpeaker> )
}


export default Speaker;
