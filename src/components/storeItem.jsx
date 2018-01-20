import React, {PropTypes} from 'react';
import {StyledStoreItem} from '../styledComponents/styledComponents';

export default class StoreItem extends React.Component {
  render() {
    const {image,title,price,dreamProduct} = this.props;

    return (
      <StyledStoreItem dreamProduct={dreamProduct}>
         {
           (dreamProduct)?
              <div className="dreamProduct">
                <p className="storeItemTitleDreamProduct">{title}</p>
                <hr  className="separator"/>
                {
                  (image)? <img src={image} alt="" className="storeItemImage"/> : ""
                }
                <p className="subscriptionPlan">Subscription Plan : <br/> {price}</p>
              </div> :
                 (price)?
                    <p className="storeItemTitleAlone">{title}</p> :
                    <div>
                      <p className="storeItemTitle">{title}</p>
                      <hr  className="separator"/>
                      {
                        (image)? <img src={image} alt="" className="storeItemImage"/> : ""
                      }
                    </div>
         }

      </StyledStoreItem>
    );
  }
}

StoreItem.propTypes = {
};
