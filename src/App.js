import './App.css';
import Features from './components/Features';
import Header from './components/Header'
import TopStories from './components/topStories/TopStories'
function App() {
  return (
    <div className="App">      

        <Header/> 
        <Features/>
        <hr/>      
        <TopStories/>   
        <hr/>
             
    </div>
  );
}

export default App;
