import Card from './Card';
import './videos.css';

function CardList() {
    return(
        <div className="cardlist">
            <Card head="The Intimate Lens of Ed van der Elsken" content="Two European museums are presenting retrospectives of a man many consider to be one of the best street photographers of the 20th century." img ="card-1.png"/>
            <Card head="Gauging the Art Market’s Health" content="Auctions of Impressionist, modern and Surrealist art at Sotheby’s and Christie’s will be the first major test of buoyancy since the inauguration in the U.S." img ="card-2.png"/>
            <Card head="What happen when you skip breakfast" content="The old saying, ‘Eat breakfast like a king, lunch like a prince and dinner like a pauper’ couldn’t ring truer. Beginning your day with a heavy breakfast." img ="card-3.png"/>
            <Card head="In London, the Rise of Old-Fashioned " content="The old saying, ‘Eat breakfast like a king, lunch like a prince and dinner like a pauper’ couldn’t ring truer. Beginning your day with a heavy breakfast." img ="card-4.png"/>
            <Card head="6 myths about keeping an aquarium" content="Keeping fish in aquariums is a hobby which is quite common. People are often very apprehensive about keeping fish and having an aquarium." img ="card-5.png"/>
        </div>
    );
}

export default CardList;