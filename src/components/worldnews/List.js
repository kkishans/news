import './worldnews.css';

function List(props) {
    return(
        <div>
            <div className="list">
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    );
}

export default List;