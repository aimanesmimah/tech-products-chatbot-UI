import React, {PropTypes} from 'react';
import $ from 'jquery';
import StoreItem from './storeItem';
import mapItems from './mapItems';
import {StyledStoreMenu} from '../styledComponents/styledComponents';
import '../common/css/storeMenu.css';
import logoStore from '../common/images/store/smallbot.png';


export default class StoreMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       currentItems : [],
       activeToggled : false,
       productFound : false
    }
  }

  componentWillMount() {

  }

  componentDidMount(){
    const {source} = this.props;

      $(document).ready(() => {
        $(".trigger").click(() => {
          $(".menu").toggleClass("active");
          this.setState({activeToggled : !this.state.activeToggled});
        });

        $(document).on('newConversation',()=>{
            this.setState({currentItems : []});
        });

        $(document).on('newData',(e,newData) => {
            const {activeToggled} = this.state;


            if(activeToggled){
                $('.menu').toggleClass('active');
                this.setState({activeToggled : false});
            }


            //alert(JSON.stringify(newData));
            if(newData.data && newData.data.payload && newData.currentState !== "nothing"){
               if(newData.currentState === "product" && newData.data.payload.items.length === 1){
                    this.setState({productFound : true});
               }
               else{
                 let items = newData.data.payload.items;
                 let mappedItems = mapItems(items);

                 if(mappedItems.length < 8){
                     for(let i = mappedItems.length ; i < 8 ; i++){
                        mappedItems.push({
                           name : "X",
                           image : null
                        });
                     }
                 }

                 this.setState({currentItems : mappedItems});

                 if(source === "conversation"){
                     setTimeout(()=> {
                          $('.menu').toggleClass("active");
                          this.setState({activeToggled : true});
                     },3500);
                   }
                 else{
                     $('.menu').toggleClass("active");
                     this.setState({activeToggled : true});
                   }


               }

            }
        });

      });
  }

  componentWillUnmount() {}

  render() {
    const {currentItems,productFound} = this.state;
    const {display} = this.props;

    return (
      <StyledStoreMenu display={display} >
        {
      (productFound)?
        <div className="menu">
          <div className="btn trigger">
            <StoreItem title={currentItems[0].name} image={currentItems[0].image}
                 price={currentItems[0].price} dreamProduct={true}/>
          </div>
        </div> :
        <div className="menu">
          <div className="btn trigger">
            <StoreItem title="our Store" image={logoStore}/>
          </div>

          {
            currentItems.map(item =>
              <div className="rotater">
                <div className="btn btn-icon">
                  <StoreItem title={item.name} image={item.image} price={item.price}/>
                </div>
              </div>
              )
          }

        </div>
      }
      </StyledStoreMenu>
    );
  }
}

StoreMenu.propTypes = {
};
