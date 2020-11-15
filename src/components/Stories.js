import './features/features.css';
import './topStories/topStories.css'
import TopStories from './topStories/TopStories';
import QuickBites from './topStories/QuickBites'

function Stories() {
    return(
        <div className="row">
            <div style={{width:'70%'}}>
                <TopStories/>
            </div>
            <div style={{width:'25%',marginTop:'200px'}}>
                <QuickBites/>
            </div>
        </div>
    );
}

export default Stories;