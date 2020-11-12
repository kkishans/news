import './header.css';

function Links(params) {
    return(
        <div className="links-list">
            <ul>
                <li><a href="#">World</a>  </li>
                <li><a href="#">Politics</a>  </li>
                <li><a href="#">Business</a>  </li>
                <li><a href="#">Opinion</a>  </li>
                <li><a href="#">Tech</a>  </li>
                <li><a href="#">Science</a>  </li>
                <li><a href="#">Health</a>  </li>
                <li><a href="#">Sports</a>  </li>
                <li><a href="#">Entertainment</a>  </li>
                <li><a href="#">Travel</a>  </li>
                <li><a href="#">More</a>  </li>
                <li className="e-paper"><a href="#">
                    <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14 2V0H0V11C0 11 0 13 2 13H14.5C14.5 13 16 12.969 16 11V2H14ZM2 12C1 12 1 11 1 11V1H13V11C13 11.4605 13.142 11.7795 13.338 12H2Z" fill="#0C79FF"/>
                        <rect x="2" y="3" width="10" height="1" fill="#0C79FF"/>
                     </svg> 
                     </a> 
                     E- PAPER
                 </li>
            </ul>
        </div>
    );
}

export default Links;