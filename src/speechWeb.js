import $ from 'jquery';


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
const utterThis = new SpeechSynthesisUtterance();

export {recognition};

recognition.onspeechend = function() {
  console.log('Speech has stopped being detected');
  $(document).trigger("recognitionEnd");
}


export const synthVoice = (text,utterance=utterThis) => {
    const synth = window.speechSynthesis;
    utterance.text = text ;
    utterance.pith = 9;
    utterance.rate = 1.5;
    //utterance.voice = synth.getVoices()[0];
    synth.speak(utterance);



    utterance.addEventListener('end', (e) => {
      //synth.cancel();
      console.log('finished after ' + e.elapsedTime + " milliseconds");
      $(document).trigger("utterEnd",[e.elapsedTime]);
    });

    return synth;

}
