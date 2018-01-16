import React, {PropTypes} from 'react';
import {recognition,synthVoice} from '../speechWeb';

export default class TestFetch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      botMessage : "nothing"
    }

    this.startRecognition = this.startRecognition.bind(this);
  }

  startRecognition(){
    recognition.start();

  }

  componentWillMount() {
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
                  //this.setState({botMessage : data.botResponse})
                  synthVoice(data.botResponse);
          })
          .catch(err => {
                alert(err);
          });
    });
  }

  render() {
    return (<div>
        <button onClick={this.startRecognition}>recognition</button>
        <p>{this.state.botMessage}</p>
    </div>);
  }
}

TestFetch.propTypes = {
};
