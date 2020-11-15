import CardList from "./videos/CardList";
import Header from "./videos/Header";
import MostPopular from "./videos/MostPopular";
import VideoList from "./videos/VideoList";
import VideoPlay from "./videos/VideoPlay";
import './videos/videos.css';
function Video() {
    return(
        <div className="videos-container">
            <div className="video-section1">
                <Header/>
                <div className="videoplay-section">
                    <div >
                        <VideoPlay/>
                    </div>
                    <div>
                        <VideoList/>
                    </div>
                </div>
                <div>
                    <CardList/>
                </div>
            </div>
            <div className="mostpolular">
                <MostPopular />
            </div>
        </div>
    );
}

export default Video;