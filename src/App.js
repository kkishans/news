import './App.css';
import Features from './components/Features';
import Header from './components/Header'
import Stories from './components/Stories'
import WorldNews from './components/WorldNew';
import Video from './components/Video';
function App() {
  return (
    <div className="App">      
        <Header/> 
        <Stories/>  
        <hr/>
        <Features/>
        <hr/>    
        <WorldNews/>  
        <hr/>
        <Video/>
    </div>
  );
}

export default App;
