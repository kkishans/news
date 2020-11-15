import './features/features.css';
import './topStories/topStories.css'
import TopStories from './topStories/TopStories';
import QuickBites from './topStories/QuickBites'
import Section3 from './topStories/Section3';
function Stories() {
    return(
        <div className="top-stories">
            <div className="cover">
              <QuickBites/>
            </div>
            <div className="top-list">
              <TopStories/>
            </div>
            <div className="quick-bit">
                <Section3/>
            </div>
        </div>
    );
}

export default Stories;