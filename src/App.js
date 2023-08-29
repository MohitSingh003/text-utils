import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title= "TextUtils" />
      <div className="container my-3" >
        <h1 id="_heading1">Enter your text</h1>
        <Textform lableText="Enter the text to analyze"/>
      </div>
      
    </>
    
  );
}

export default App;
