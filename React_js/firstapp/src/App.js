import { useState } from "react";
import "./App.css";

// import Hello from './component/New.js';
// import Bye from './component/New.js';
// import { Signup,Login } from './component/Signup.js';

function App() {
	let [counter, setcounter] = useState(0);
	return (
		<>
			<h1>Use State</h1>
			<h2>{counter}</h2>
			<button
				onClick={() => {
					setcounter(counter + 1);
          if (counter==20) {
            setcounter(20)
          }   
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					setcounter(counter - 1);
          if (counter==0) {
            setcounter(0)
          }
				}}
			>
				-
			</button>
		</>
	);
}

export default App;
