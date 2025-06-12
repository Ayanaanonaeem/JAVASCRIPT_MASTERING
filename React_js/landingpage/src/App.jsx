import Button from "./components/Button";
import Header from "./components/Header";
import landingPageData from "./constant/webdata";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Testimonials from "./components/testimonials";
import Footer from "./components/Footer";
import { useState } from "react";
import FinanceTracker from "./components/FinanceTracker";

function App() {
	const { header, hero, features, testimonials } = landingPageData;
    // const [username,setusername]=useState("Ayan")
	// const [counter,setcounter]=useState(0)

	// const[like,setlike]=useState(false)
	//  console.log(like);
	// const handleusername=(()=>{
	// 	setusername("Ayan Naeem")	
	// })
	// const handleinput=((e)=>{
    //   setusername(e.target.value)
	// })
	// const handlecounter=(()=>{
	// 	setcounter(counter+1)
	// })

	const [amount,setamount]=useState()
	const [type,settype]=useState("expense")
    const [transactions,settransactions]=useState([])
	const handletransactions=(()=>{
		settransactions([...transactions,{amount,type}])
		setamount('')
		settype("expense")
		
	})
	
	const totalincome=transactions.reduce(
		(acc,transactions)=>
	  transactions.type== "income"?acc+Number(transactions.amount):acc,
	   
	0
);
	const totalexpense=transactions.reduce(
		(acc,transactions)=>
	  transactions.type== "expense"?acc+Number(transactions.amount):acc,
	   
	0
		);
		const balanceamount=totalincome-totalexpense
		
	return (
		<>
		<Header header={header}/>
	    <FinanceTracker totalincome={totalincome} totalexpense={totalexpense} balanceamount={balanceamount}  handletransactions={handletransactions} setamount={setamount} settype={settype} amount={amount} type={type} transactions={transactions}/>
		{/* <button onClick={handleusername} className="border border-purple-500 bg-amber-300">handle username</button> */}
		<Hero hero={hero}/>
        <Features features={features}/>
        <Testimonials testimonials={testimonials}/>
        <Footer header={header}/>
		</>
	);
}

export default App;

{/* <h1>{counter}</h1>
<button onClick={handlecounter} className="border border-purple-500 bg-amber-300">update counter</button> */}
{/* <p>{username}</p>
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
/> */}