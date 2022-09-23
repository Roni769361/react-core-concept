import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const productList=[
    {name: "Shosma", price: "300Tk"},
    {name: "Laptop", price: "300000Tk"},
    {name: "Mobile", price: "150000Tk"},
    {name: "Charger", price: "320Tk"},
    {name: "Keyboard", price: "800Tk"},

  ]
 
  return (
    <div className="App">
      <header className="App-header">
      <h5>Simple Component Create</h5>
      <DataLoadsystem></DataLoadsystem>
      <Counter></Counter>
      {
        productList.map(pro => <Product prudoctHear={pro}></Product>)
      }


        {/* <Product prudoctHear={productList[0]}></Product>
        <Product prudoctHear={productList[1]}></Product> */}

      </header>
    </div>
  );
}
function Counter(){
  const [count, setState] = useState(0);

  return(
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setState(count -1)}>Decrease</button>
      <button onClick={() =>  setState(count + 1)}>Incress Button</button>
    </div>
  )
}


function Product(props){
  const stylehear={
    color:'green',
    backgroundColor:"#9A9A9A",
    margin:"15px",
    padding:"10px",
    hight:"300px",
    width: "280px",
    borderRadius:"10px"


  }
  const {name, price} = props.prudoctHear;
  console.log(name, price);
  return(
    <div style={stylehear}>
      <h4>{name}</h4>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )
}

function DataLoadsystem(){
  const [userpart, setUserPart] = useState([])
  useEffect(()=>{
    // console.log("UserEffect CallBack")
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUserPart(data))
  })
  return(
    <div>
      <h1>Data Load System with React</h1>
      <h2>How many People in this computer: {userpart.length}</h2>
      <ul>
        {
          userpart.map(user => <li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}
export default App;


