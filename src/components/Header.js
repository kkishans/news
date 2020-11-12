import React from 'react'
import '../App.css';
import MainText from './header/MainText'
import Top from './header/Top'
import Links from './header/Links'
function Header(){
    return(
        <div>
            <Top/>
            <hr/>
            <MainText/>
            <hr/>
            <Links/>
            <hr/>
        </div>
    );
}

export default Header;
