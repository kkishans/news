import '../features/features.css';

function LiveVideo(props) {
    return(
        <div>
                <img src={`${process.env.PUBLIC_URL}/imgs/`+props.video} />
               <div className="p-div">
               <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="23" stroke="#A5A5A5" stroke-width="2"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M37 25L17 35V15L37 25Z" fill="white"/>
                </svg>
                    <p>{props.headline}<br/>
                    <span className="time">{props.time}</span></p>
               </div>
        </div>
    );
}

export default LiveVideo;