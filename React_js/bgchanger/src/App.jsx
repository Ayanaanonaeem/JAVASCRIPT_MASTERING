import { useState } from "react";

import "./App.css";

function App() {
	const [color, setcolor] = useState("yellow");
	return (
		<>
			<div className="w-full h-screen" style={{ background:color }}>
				<div className="fixed bottom-4 flex flex-wrap justify-center w-full">
					<div className="flex flex-wrap justify-center w-9/12 border-4 border-black gap-4 rounded-2xl ">
						<button className="bg-red-600 rounded-2xl px-6 py-2 border border-black shadow-black my-3"
            onClick={()=>{
              setcolor("red")
            }}>
							Red
						</button>
						<button className="bg-blue-600 rounded-2xl px-6 py-2 border border-black shadow-black my-3 transition-all delay-2000"
             onClick={()=>{
              setcolor("blue")
            }}>
							Blue
						</button>
						<button className="bg-green-600 rounded-2xl px-6 py-2 border border-black shadow-black my-3"
             onClick={()=>{
              setcolor("green")
            }}>
							Green
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
