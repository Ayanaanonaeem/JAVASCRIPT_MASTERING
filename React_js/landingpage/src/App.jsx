import Button from "./components/Button";
import Header from "./components/Header";
import landingPageData from "./constant/webdata";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/testimonials";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
	const { header, hero, features, testimonials } = landingPageData;
    const [username,setusername]=useState("Ayan")
	const [counter,setcounter]=useState(0)
	const[like,setlike]=useState(false)
	 console.log(like);
	// const handleusername=(()=>{
	// 	setusername("Ayan Naeem")	
	// })
	const handleinput=((e)=>{
      setusername(e.target.value)
	})
	// const handlecounter=(()=>{
	// 	setcounter(counter+1)
	// })
	console.log(username);
	
	return (
		<>
		{/* <h1>{counter}</h1>
		<button onClick={handlecounter} className="border border-purple-500 bg-amber-300">update counter</button> */}
        <p>{username}</p>
		<input type="text" 
		value={username}
		onChange={handleinput}
		className="border border-black"
		/>
		<input type="checkbox" 
		checked={like}
		onChange={(e)=>{
          setlike(e.target.checked)
		 
	 console.log(like);
		  
		}}
		/>
		{/* <button onClick={handleusername} className="border border-purple-500 bg-amber-300">handle username</button> */}
		{/* <Header header={header}/>
		<Hero hero={hero}/>
        <Features features={features}/>
        <Testimonials testimonials={testimonials}/>
        <Footer header={header}/> */}
		</>
	);
}

export default App;
