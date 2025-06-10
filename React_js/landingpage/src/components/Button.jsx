function Button({ label, bgcolor, txtcolor }) {
	return (
		<>
			<button
				className={`mx-4 my-4 px-4 rounded border border-purple-950 ${
					bgcolor ? bgcolor : "bg-blue-800"}
                    ${txtcolor ? txtcolor : "text-white"} `}
			>
				{label}
			</button>
		</>
	);
}

export default Button;
