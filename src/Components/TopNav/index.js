import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
// import { ROUTES } from '../../Routes.constants';
// import PropType from 'prop-types';
// import style from './style.module.scss';
import train from '../../images/train.png'
import bus from "../../images/bus.png"
import flight from "../../images/airplane.png"
import DropDown from '../DropDown'
import Logo from '../Logo';
export default class TopNav extends Component {
  render() {
    return (
      <div>
        <div className="header">
        <DropDown/>

        <ul className="topnav">
          <li className="topnav-list"><a href="#about"> <img src={train} className='topnav-image' alt='train'/></a></li>
          <li className="topnav-list"><a href="/home"> <img src={bus} className='topnav-image' alt='bus'/></a></li>
          <li className="topnav-list"><a href="#contact"> <img src={flight} className='topnav-image' alt='flight'/></a></li>
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