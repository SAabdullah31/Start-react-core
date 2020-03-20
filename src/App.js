import React, {useState, useEffect,} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
const nayoks=['anwar','jafor','alomgir','salman']
const products =[
  {name:'Photoshop',price:'$99.99'},
  {name:'illusttor', price:'99.90'},
  {name:'pdf reader', price:'90.90'}
]
  return (
    <div className="App">
      <header className="App-header">
       <p>I am a new react learner</p>
       <Counter></Counter>
       <Users></Users>
       <Products product={products[0]}></Products>
      <Person name='Munna' job='football player'></Person>
      <Person name='masum' job='khela dekhe'></Person>
      </header>
    </div>
  );
}
function Counter(){
const [count,setCount]=useState(0);
const handleIncrease=()=> setCount(count + 1);
const deHandle=()=> setCount(count - 1);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={deHandle}>Decrease</button>
      <br/>
      <button onClick={handleIncrease}>Increase</button>
    </div>
  )
}
function Users(){
const [users,setUsers]=useState([]);
useEffect(()=>{
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(data => setUsers(data));
},[])
return (
  <div>
    <h3>Dynamic Users: {users.length}</h3>
    <ul>
    {
      users.map(user=> <li>{user.name}</li>)
    }
    </ul>
  </div>
)
}


function Products(props){
  const productStyle={
    border:'2px solid gray',
    borderRadius:'5px',
    backgroundColor:'lightgray',
    height:'200px',
    width:'200px',
    float:'left'
  }
  return (
    <div style={productStyle} >
      <h3>{props.name} </h3>
  <h5>{props.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}


function Person(props){
  return (
    <div style={{border:'2px solid gold',width:'500px', margin:'10px'}}>
      <h3>My Name:{props.name} </h3>
      <p>My Profession:{props.job} </p>
    </div>
  )
}

export default App;
