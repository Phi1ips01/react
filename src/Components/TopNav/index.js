import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import { ROUTES } from '../../Routes.constants';
// import PropType from 'prop-types';
// import style from './style.module.scss';
import train from '../../images/train.svg'
import bus from "../../images/bus.svg"
import flight from "../../images/airplane.svg"
import DropDown from '../DropDown'
export default class TopNav extends Component {
  render() {
    return (
      <div>
        <div class="header">
        <DropDown/>

        <ul class="topnav">
          <li class="topnav-list"><a href="#about"> <img src={train} alt='train'/></a></li>
          <li class="topnav-list"><a href="/home"> <img src={bus} alt='bus'/></a></li>
          <li class="topnav-list"><a href="#contact"> <img src={flight} alt='flight'/></a></li>
      </ul>
      </div>
      </div>
    );
  }
}



// function TopNav(props) {
//   const handleLogout = () => {
//     localStorage.clear();
//     props.history.push(ROUTES.LOGIN);
//   };
//   return (
//     <div className={style['nav-bar']}>
//       <div className={style.navs}>
//         <Link to={ROUTES.HOME}>
//           Home
//         </Link>
//         <Link to={ROUTES.DETAILS}>
//           Details
//         </Link>
//       </div>
//       <div className={style['user-controls']}>
//         <Link onClick={handleLogout}>
//           Logout
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default withRouter(TopNav);

// TopNav.PropType = {
//   className: PropType.string,
// };
