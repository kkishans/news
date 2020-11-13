import './features.css';
function Spot(props) {
    
    return(
        <div>
        
            <div className="spotbox">
                <img src={`${process.env.PUBLIC_URL}/imgs/`+props.img} />
                <p>{props.headline}</p>
            </div>
        </div>
    );

}

export default Spot;