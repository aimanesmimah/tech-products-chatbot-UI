import React, {PropTypes} from 'react';
import {StyledStoreItem} from '../styledComponents/styledComponents';

export default class StoreItem extends React.Component {
  render() {
    const {image,title} = this.props;
    return (
      <StyledStoreItem>
        <p className="storeItemTitle">{title}</p>
        <hr  className="separator"/>
        {
          (image)? <img src={image} alt="" className="storeItemImage"/> : ""
        }

      </StyledStoreItem>
    );
  }
}

StoreItem.propTypes = {
};
