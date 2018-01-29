import smartphone from '../common/images/store/smartphone.png';
import watch from '../common/images/store/watches.png';
import computing from '../common/images/store/laptop.png';
import drones from '../common/images/store/drone.png';
import gaming from '../common/images/store/xbox.png';
import smarthome from '../common/images/store/smart-home.png';


const mapItems = items => {

  let newItems = [];

      if(items && items.length){
       newItems = items.map(item => {
         if(typeof item === 'object'){
             return {
               name : item.name,
               price : (item.price)?item.price : item.subprice,
               image : null
             }
         }
         else{
          switch (item) {
            case 'computing':
              return {
                name : item,
                image : computing
              }
              break;
            case 'phones & tablets':
              return {
                name : item,
                image : smartphone
              }
              break;
            case 'drones' :
              return {
                name : item,
                image : drones
              }
              break;
            case 'gaming & vr' :
              return {
                name : item,
                image : gaming
              }
              break;
            case 'wearables' :
              return {
                name : item,
                image : watch
              }
              break;
            case 'home smart' :
              return {
                name : item,
                image : smarthome
              }
              break;
            default:
              return {
                name : item,
                image : null
              }

          }
        }

       });

     }
     else{
       newItems = [];
     }

       return newItems;
}

export default mapItems ;
