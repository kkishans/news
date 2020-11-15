import './topStories.css'
function Section3() {
    return (
        <div>
           <div className="quick-bit-content">    
                <div className="header">
                    <p> QUICK BITES</p>
                </div> 
                <div className="headline">
                    <p>
                    Stocks Sell Off, Gold Rises 
                    Ahead of Trump Speech: 
                    Markets Wrap
                    </p>
                </div>
                <div className="content">
                    <p>
                    Global stocks retreated, erasing gains for the week as a glum set of European corporate earnings compounded investor nervousness before a major speech from U.S. President Donald Trump. Gold extended its rally as the dollar edged lower.<br/>
                    <a style={{float:'right'}}>New &rarr; </a>
                    </p>
                </div>
            </div>
            <div className="sign-up">
                <p>
                    Get the Quick Bites delivered to your inbox daily
                </p>
                <div>
                    <input type="text" placeholder="Enter you email"/>
                    <button>Sing Up</button>
                </div>
            </div>
        </div>
        
    )
}

export default Section3;