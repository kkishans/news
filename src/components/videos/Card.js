import './videos.css';
function Card(props) {
    return(
        <div className="card">
            <div className="card-img">
               <img src={`${process.env.PUBLIC_URL}/imgs/`+props.img} />
            </div>
            <div className="headline">
                <p>
                    {props.head}
                </p>
            </div>
            <div className="content">
                <p>
                     {props.content}
                </p>
            </div>
        </div>
    );
}

export default Card;