import './worldnews.css';

function Sports(props) {
    return(
        <div>
            <div className="header">
                <p> Entertainment</p>
            </div><br/><br/><br/>
            <div className="sp0rts">
               <p className="headline">
                COA wants all BCCI bodies to produce compliance report
               </p><br/>
            </div>
            <div className="content">
            After the election, Democrats debated whether to confront Mr. Trump or seek compromise, but riled-up liberals have pushed party leaders into a fight.<br/><br/>
            </div>
            <div>
                <img src={`${process.env.PUBLIC_URL}/imgs/image6.png`} /><br/><br/>
            </div>
            <div>
                <p className="headline">
                Series win in Australia hugely satisfying: Upul Tharanga
                </p>
            </div>
        </div>
    );
}

export default Sports;