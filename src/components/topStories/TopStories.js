import './topStories.css'
import List from './List';
function TopStories() {
    return (
        <div>
           <div className="top-list-content">     
                    <div className="header">
                        <p> TOP SRORIES</p>
                    </div>
                    <List text="PM unveils Shiva statue in Coimbatore on Mahashivratri" />
                    <List text="PM Modi: Kanpur train accident was a conspiracy" />
                    <List text="Sena, BJP have no option but to join hands again" />
                    <List text="Thousands bid adieu to martyred jawan in Kashmir" />
                    <List text="Jayalalithaa’s niece Deepa floats political outfit" />
                    <List text="China made mistake of ignoring India’s talent " />
                    <List text="Jayalalithaa’s niece Deepa floats political outfit" />
            </div>
        </div>
        
    )
}

export default TopStories;