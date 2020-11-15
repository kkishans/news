import './videos.css';
import VideoList from './VideoList';
function VideoPlay() {
    return(
        <div>
            <div className="video-categories-list">
            
            <div className="play-video-list">
                <div className="play-video">
                    <div>
                    <ul>
                        <li><a>Tranding</a></li>
                        <li>News</li>
                        <li>Entertainment</li>
                        <li>Clebs</li>
                        <li>Movies</li>
                        <li>LifeStyle</li>
                        <li>Sport</li>
                        <li>Tech</li>
                        <li>Business</li>
                        <li>Auto</li>
                    </ul>
                    </div>
                      <img src={`${process.env.PUBLIC_URL}/imgs/video-image2.png`} />
                      <div className="hover">
                            <svg width="60" height="60" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="24" cy="24" r="23" stroke="#A5A5A5" stroke-width="2"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M37 25L17 35V15L37 25Z" fill="white"/>
                            </svg>
                            <p>
                                 Isro launches 104 satellites in a single mission to create world record <br/><span>
                                2:30 | By Telegraph
                            </span>
                            </p>
                           
                      </div>
                </div>
            </div>
            </div>
        </div>
    );
}

export default VideoPlay;
