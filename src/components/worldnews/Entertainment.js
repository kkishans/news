import './worldnews.css';
import List from './List';

function Entertainment() {
    return(
        <div>
            <div className="header">
                <p> Entertainment</p>
            </div>
            <List text="Kangana sad that her ‘Rangoon’ scenes were cut by censorboard" />
            <List text="Kajol-Ajay celebrate 18th wedding anniversary in Paris" />
            <List text="Shahid wishes he was offered this Aamir Khan’s film last year!" />
            <List text="Lipstick Under My Burkha: CBFC defends its move of banning the film" />
            <List text="Varun-Alia’s new song ‘Aashiq Surrender Hua’ is out on YouTube" />
            <List text="‘Jolly LLB 2’ box-office collection week 2" />
            <List text="Casting Ouch! The open dirty secret of showbiz culture in Bollywood" />
            <List text="Student arrested for the murder of model turned teacher" />
            <List text="Shahid wishes he was offered this Aamir Khan’s film last year!"/>
        </div>
    );
}

export default Entertainment;