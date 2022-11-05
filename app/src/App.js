import './App.css';
import { Mess } from './Message'; 

export const App = (props) => {
  return (
    <div >   
      <header className="App-header">  
      <h3 > I just started learning REACT</h3>
      </header> 
      <Mess  text={ props.text }/>
    </div>
  );
}


