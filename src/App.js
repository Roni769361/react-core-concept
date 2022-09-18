import logo from './logo.svg';
import './App.css';

function App() {
  var name = "Rani"
  var years = 150000
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {name} react Man</h1>
        <h5>{name} is {years} years Old</h5>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Done for React <code>src/App.js</code> and save to reload.
        </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur rem facilis vel adipisci eos tenetur in nesciunt ratione aliquid corporis vero, repellat modi eaque, recusandae, culpa dicta ipsa facere ipsum.</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
