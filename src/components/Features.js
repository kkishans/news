import './features/features.css';
import Highlight from './features/Highlight';
import Tagline from './features/Tagline'
import LiveVideo from './features/LiveVideo'

function Features() {
    return(
        <div className="row">
            <div style={{width:'70%'}}>
                <Tagline/>
                <Highlight/>
            </div>
            <div style={{width:'25%'}}>
                <LiveVideo  video="video-image1.png" headline="Watch Modi live from G8 Summit"/>
            </div>
        </div>
    );
}

export default Features;