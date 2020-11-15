import './topStories.css'
function TopStories() {
    return (
        <div className="quick_bite_div">
            <image className="image"> 
            <img src={`${process.env.PUBLIC_URL}/imgs/cover1.png`} />
            </image>

            <div className='title'>
                What One Photo Tells Us About North Korea’s Nuclear Program
            </div> 
            <div className="Clues_from_a_propage">
                Clues from a propaganda photo reveal details about North Korea’s expanding weapons programs and internal politics.
            </div>
        </div>
        
    )
}

export default TopStories;

