import logo from './logo.svg';
import './App.css';

function App() {

 
  return (
    <div className="App">
      <header className="App-header">
      <h1>I am React User! for you</h1>
      <Person name="Roni Nath" p="This is Roni's Items."></Person>
      <Person name="Rudresh is Software Engenner" p="This is Only rudresh's house"></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>

      </header>
    </div>
  );
}

function Person(props){
  return (
  <div style={{border:"1px solid red", borderRadius:"30px", padding: "10px", margin:"10px"}}>
    <h1>Name: {props.name}</h1>
    <p>{props.p}</p>
  </div>
  )
}

export default App;


