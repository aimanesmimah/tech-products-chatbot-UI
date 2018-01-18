import React from 'react';
import {StyledSpeaker,SpeakerItem,SpeakerImage,SpeakerTitle} from '../styledComponents/styledComponents';
import '../common/css/animate.min.css';
import speaker from '../common/images/speak.png';


const UserSpeaker = ({isSpeaking,title,onClick}) => {
      let className ;
      if(isSpeaking)
        className = "animated wobble";
      else
        className = "";

      return (
          <StyledSpeaker>
                <SpeakerItem>
                    <a href="#" onClick={(e)=> onClick(e,'user')}>
                      <SpeakerImage src={speaker} alt=""/>
                    </a>
                </SpeakerItem>
                <SpeakerTitle className={className} >{title}</SpeakerTitle>
          </StyledSpeaker>

        )
}

export default UserSpeaker;
