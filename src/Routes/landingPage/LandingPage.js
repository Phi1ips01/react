import React, { Component } from 'react';
import train from '../../images/train.png';
import bus from '../../images/bus.png';
import flight from '../../images/airplane.png';
import Logo from '../../Components/Logo';
import DropDown from '../../Components/DropDown';

class LandingPage extends Component {
    
        render() {
            
    return (
        <div className="landing-main">
            <DropDown/>
        <Logo className="logo-landing"/>
        <div className="mode">
            <a href="/"><button><img src={train} className="mode-img" alt="Train"/></button></a>
            <a href="/home"><button><img src={bus} className="mode-img" alt="Bus"/></button></a>
            <a href="/"><button><img src={flight} className="mode-img" alt="Flight"/></button></a>
        </div>
    </div>
    )
}
}
export default LandingPage;