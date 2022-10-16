import { useRequest } from "./api";

export function Dice() {
	const amount = useRequest("/r/:amount")
	const handleClick = () =>{
		amount
	}
	

	return (
		<div>
			<button 
				onClick = {handleClick}
			>"Roll Me"</button>
		</div>
	);
};
