import './worldnews/worldnews.css';
import WorldNews from './worldnews/Worldnews';
import Section2 from './worldnews/Section2';
import Entertainment from './worldnews/Entertainment';
import Sports from './worldnews/Sports';

function WorldNew() {
    return(
        <div className="worldnews">
            <div className="section1">
                <WorldNews />
            </div>
            <div className="section2">
                <Section2/>
            </div>
            <div className="section3">
                <Entertainment/>
            </div>
            <div className="section4">
                <Sports/>
            </div>
        </div>
    );
}

export default WorldNew;