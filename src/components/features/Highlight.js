import './features.css';
import Spot from './Spot';

function Highlight() {
    return(
        <div className="spotlist">
           <div>
                <Spot headline="Women Do Like to Compete 
                Against Themselves" img="image2.png"/>
           </div>
           <div>
                <Spot headline="Vijay Mallya, the fugitive 
                supposed to be part of " img="image3.png"/>
           </div>
           <div>
                <Spot headline="Women Do Like to Compete 
                Against Themselves" img="image4.png"/>
           </div>
        </div>
    );
}

export default Highlight;