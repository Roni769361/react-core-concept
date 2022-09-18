import logo from './logo.svg';
import './App.css';

function App() {

 
  return (
    <div className="App">
      <header className="App-header">
      <h1>I am React User! for you</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>

      </header>
    </div>
  );
}

function Person(){
  return (
  <div style={{border:"1px solid red", borderRadius:"30px", padding: "10px", margin:"10px"}}>
    <h1>Name: Roni</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, nesciunt.</p>
  </div>
  )
}

export default App;


