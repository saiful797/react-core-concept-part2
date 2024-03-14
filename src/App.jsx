import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Users from './Users';

function App() {

  function handleClick(){
    alert('Button Clicked!');
  }

  const handleClick2 = () =>{
    alert('Button 2 clicked');
  }

  const add = (num) => {
    alert(`Number is ${num + 5}`);
  }

  return (
    <>
      <h1>React Core Concept 2</h1>

      <Friends></Friends>
      
      <Users></Users>

      <Counter></Counter>



      {/* <button onClick={()=> handleClick()}>Click Me</button> */}
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me2</button>
      <button onClick={() => {alert('Button 3 clicked')}}>Click Me3</button>
      <button onClick={() => add(7)}>Click Me4</button>
    </>
  )
}

export default App
