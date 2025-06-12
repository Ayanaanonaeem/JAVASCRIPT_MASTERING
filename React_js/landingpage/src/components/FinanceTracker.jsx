import React from 'react'

export default function FinanceTracker({
    totalincome,
    totalexpense,
    balanceamount,
    setamount,
    settype,
    handletransactions,
    amount,
    type,
    transactions,
  
}) {
  return (
    <div>
      	<div className="flex flex-cols justify-center items-center">
         <div className="flex flex-cols justify-center items-center gap-4 my-3 " >
			<div className="border border-purple-800 text-xl px-4">
				<h1>Total income</h1>
				<h1>{totalincome}</h1>
			</div>
			<div className="border border-purple-800 text-xl px-4">
				<h1>Total expense</h1>
				<h1>{totalexpense}</h1>
			</div>
			<div className="border border-purple-800 text-xl px-4">
				<h1>Balance</h1>
				<h1>{balanceamount}</h1>
			</div>
		 </div>
		</div>
		<div className="flex justify-center gap-4 ">
			<input type="number" value={amount} onChange={(e)=>{
              setamount(e.target.value)
			}} className="border border-purple-600 rounded-sm px-3" placeholder="Add amount" />
			<select value={type} className="border border-purple-600 rounded-sm px-3" onChange={(e)=>{
              settype(e.target.value)
			}}>
				<option value="income">income</option>
				<option value="expense">expense</option>
			</select>
			<button className="bg-purple-400 border border-black rounded-sm px-4 text-white" onClick={handletransactions}>Submit</button>
		</div>
		<div className="flex flex-col justify-center items-center  h-auto my-4">
			{
				transactions.map((data,idx)=>(
                <div key={idx} className="flex gap-20  justify-center items-center ">
					<h1 className="text-3xl bold  ">{idx+1}) {data.amount}</h1>					
					<h1 className={`text-3xl bold ${data.type==="income"?"text-green-400":"text-red-400"}`}>{data.type}</h1>					
				</div>
				))

				
			}
		</div>
    </div>
  )
}
