import './videos.css';
function MList(para) {
    return(
        <div className="Mlist">
           <div className="no">
                {para.no}
           </div>
           <div className="text">
                <p>
                    {para.content}
                </p>
           </div>
        </div>
    );
}

export default MList;