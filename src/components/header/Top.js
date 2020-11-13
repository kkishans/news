import '../header/header.css';

function Top(params) {
    return (
        <div>
            <div className="header-row">
                <div>
                    <svg width="14px"  viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="14" height="2" fill="#D8D8D8"/>
                        <rect y="4" width="14" height="2" fill="#D8D8D8"/>
                        <rect y="8" width="14" height="2" fill="#D8D8D8"/>
                    </svg> <b> SECTIONS</b>      
                </div>       
                <div>
                    <span style={{justifyContent:"center"}}>Friday, February 24 ,2020</span>
                </div>
                <div className="header-row">
                <svg width="18" height="18" className="search-fab" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.8018 11.8339L9.65444 8.61786C10.4637 7.67274 10.9071 6.48358 10.9071 5.24561C10.9071 2.35323 8.51184 0 5.5678 0C2.62377 0 0.228516 2.35323 0.228516 5.24561C0.228516 8.138 2.62377 10.4912 5.5678 10.4912C6.67303 10.4912 7.72627 10.1637 8.62675 9.542L11.7981 12.7824C11.9306 12.9177 12.1089 12.9922 12.2999 12.9922C12.4808 12.9922 12.6523 12.9245 12.7826 12.8014C13.0593 12.5398 13.0681 12.106 12.8018 11.8339ZM5.5678 1.36842C7.74391 1.36842 9.51423 3.10768 9.51423 5.24561C9.51423 7.38354 7.74391 9.12281 5.5678 9.12281C3.39169 9.12281 1.62137 7.38354 1.62137 5.24561C1.62137 3.10768 3.39169 1.36842 5.5678 1.36842Z" fill="#222222"/>
                    </svg>

                    <input type="text" placeholder="search" class="input-search"/>
                    <button className="login-button">LOGIN</button>
                </div>
            </div>
            </div>
    );
}

export default Top;