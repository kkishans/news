import React from 'react'
import '../App.css';
import MainText from './header/MainText'
function Header(){
    return(
        <div>
        <div className="row">
            <div style={{flex:'start'}}>
                <svg width="14px"  viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="14" height="2" fill="#D8D8D8"/>
                        <rect y="4" width="14" height="2" fill="#D8D8D8"/>
                        <rect y="8" width="14" height="2" fill="#D8D8D8"/>
                </svg>                            
            </div>
            <div>
                <h4>SECTIONS</h4>    
            </div>
            <div >
                <p>Friday, February 24 </p>
            </div>
        </div>
        <MainText/>
    </div>
    );
}

export default Header;
