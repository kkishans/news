import './videos.css';
import LiveVideo from './LiveVideo';
function VideoList() {
    return(
        <div>
            <div className="v-list">
                <LiveVideo  video="image7.png" headline="Isro launches 104 satellites in a single mission "
                    time="2:30 | By Telegraph"/>
                <LiveVideo  video="video-image1.png" headline="Isro launches 104 satellites in a single mission "
                    time="2:30 | By Telegraph"/>
                <LiveVideo  video="image3.png" headline="Vijay Mallya, the fugitive supposed to be part of"
                    time="2:30 | By Telegraph"/>
            </div>
        </div>
    );
}

export default VideoList;
