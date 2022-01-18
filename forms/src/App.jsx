// import logo from './logo.svg';
import { useState, useRef, useEffect } from 'react';
import './App.css';
import { Form } from './components/Form';

// function App() {
//   const [mouse, setMouse] = useState("");
//   return (
//     <div
//       // onMouseMove={(e) => {
//       //   console.log(e.clientX, e.clientY);
//       //   setMouse(`X: ${e.clientX} - Y: ${e.clientY}`);
//       // }}
//       className="App"
//     // style={{
//     //   display: "flex",
//     //   background: "coral",
//     //   width: "300px",
//     //   height: "300px",
//     // }}
//     >
//       {/* <button onClick={(e)=>{console.log(e)}}>
//         Click me
//       </button>
//       <input/> */}
//       {mouse}
//     </div>
//   );
// }



// function App() {
//   const test = useRef(1);
//   const [d, setD] = useState(1);
//   console.log("Rerendered", test);
//   return (
//     <div className='App'>
//       <button onClick={()=>{
//         // test += 1;
//         test.current = test.current + 1;
//         console.log(test);
//       }}>
//         Increment Test
//       </button>
//       <button
//       onClick={()=>{
//         setD((p)=>p+1);
//       }}>
//         Rerender
//       </button>
//     </div>
//   )
// }




function App() {
  const inputRef = useRef(null);

  return (
    <div className='App'>

      {/* <div
        ref={inputRef}
        style={{
          height: "400px",
          width: "200px",
          background: "coral",
        }}>
      </div>

      <div
        style={{
          height: "400px",
          width: "200px",
          background: "black",
        }}>
      </div>

      <div
        style={{
          height: "400px",
          width: "200px",
          background: "tomato",
        }}>
      </div>

      <div
        style={{
          height: "400px",
          width: "200px",
          background: "green",
        }}>
      </div>

      <button
        onClick={() => {
          // console.log();
          inputRef.current.scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        Scroll to top
      </button> */}

      <Form/>


    </div>
  );
}



export default App;



// 1.  Variable, saves it's own state.
// 2.  Change in variable, shouldn't cause a re-render