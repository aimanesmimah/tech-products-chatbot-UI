import React,{Component} from 'react';
import StoreMenu from './storeMenu';
import $ from 'jquery';
import '../common/css/bounceAnimation.css';
import {StyledStore,StoreInitialTitle} from '../styledComponents/styledComponents';



export default class StoreSection extends Component {
        constructor(props) {
          super(props);
          this.state = {
            className : ""
          }
        }

        componentWillMount(){

        }

        componentDidMount() {

        }

        render(){
          const {className} = this.state;
          const {conversationState} = this.props;
          return (
           <StyledStore>
             {
               (conversationState === "nothing")?
                     <StoreInitialTitle className={className}>
                           <span className="first_part">Start off by clicking on your microphone</span>
                           <span className="second_part"> and say HI</span>
                           <span className="third_part"> to our bot</span>
                     </StoreInitialTitle> :
                      <StoreMenu />

             }
           </StyledStore>)
        }
}
