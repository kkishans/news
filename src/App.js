import './App.css';
import Features from './components/Features';
import Header from './components/Header'
import Stories from './components/Stories'
import WorldNews from './components/WorldNew';
import Video from './components/Video';
import Footer from './components/footer/Footer'
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
        <hr/>
        <Footer/>
        <hr/>
    </div>
  );
}

export default App;
