import './App.css';
import Features from './components/Features';
import Header from './components/Header'
import Stories from './components/Stories'
import WorldNews from './components/WorldNew';
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
        {/* <TopStories/>   
        <hr/> */}
        <hr style={{marginTop:'2rem'}}/>
        <Footer/>

        <hr/>
    </div>
  );
}

export default App;
