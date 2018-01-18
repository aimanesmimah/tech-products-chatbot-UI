import React, {PropTypes} from 'react';
import $ from 'jquery';
import StoreItem from './storeItem';
import '../common/css/storeMenu.css';
import smartphone from '../common/images/store/smartphone.png';
import watch from '../common/images/store/watches.png';
import computing from '../common/images/store/laptop.png';
import logoStore from '../common/images/store/smallbot.png';

export default class StoreMenu extends React.Component {
  componentDidMount(){
    $(document).ready(() => {
      $(".trigger").click(() => {
        $(".menu").toggleClass("active");
      });
    });
  }
  render() {
    return (
      <div class="menu">
        <div class="btn trigger">
          <StoreItem title="our Store" image={logoStore}/>
        </div>

        <div class="rotater">
          <div class="btn btn-icon">
            <StoreItem title="gaming"/>
          </div>
        </div>

        <div class="rotater">
          <div class="btn btn-icon">
            <StoreItem title="computing" image={computing}/>
          </div>
        </div>

        <div class="rotater">
          <div class="btn btn-icon">
            <StoreItem title="wearables" image={watch}/>
          </div>
        </div>

        <div class="rotater">
          <div class="btn btn-icon">
            <StoreItem title="phones" image={smartphone} />
          </div>
        </div>

        <div class="rotater">
          <div class="btn btn-icon">
            <StoreItem title="drones"/>
          </div>
        </div>

        <div class="rotater">
          <div class="btn btn-icon">
            <StoreItem title="drones"/>
          </div>
        </div>

        <div class="rotater">
          <div class="btn btn-icon">
            <StoreItem title="drones"/>
          </div>
        </div>

        <div class="rotater">
          <div class="btn btn-icon">
            <StoreItem title="drones"/>
          </div>
        </div>

      </div>
    );
  }
}

StoreMenu.propTypes = {
};
