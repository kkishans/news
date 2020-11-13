import './features.css';
import Spot from './Spot';

function Highlight() {
    return(
        <div className="spotlist">
           <div>
                <Spot headline="Women Do Like to Compete 
                Against Themselves" img="spot1.svg"/>
           </div>
           <div>
                <Spot headline="Vijay Mallya, the fugitive 
                supposed to be part of " img="spot2.svg"/>
           </div>
           <div>
                <Spot headline="Women Do Like to Compete 
                Against Themselves" img="spot3.svg"/>
           </div>
        </div>
    );
}

export default Highlight;