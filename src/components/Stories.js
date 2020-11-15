import './features/features.css';
import './topStories/topStories.css'
import TopStories from './topStories/TopStories';
import QuickBites from './topStories/QuickBites'

function Stories() {
    return(
        <div className="row">
            <div style={{width:'100%'}}>
                <TopStories/>
            </div>
            {/* <div style={{width:'25%'}}>
                <QuickBites/>
            </div> */}
        </div>
    );
}

export default Stories;