import logo from './logo.svg';
import './App.css';
import CounterButton from'./counterbutton'
import HelloCGU from'./hellocgu'


function App() 
{
  return (
  <div className="App">
    <div>
      { HelloCGU() }
      </div>
      <div>
        {CounterButton(10) }
      </div>
    </div>);
}



export default App;
