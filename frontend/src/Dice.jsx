import {useState} from 'react';
import { useRequest } from "./api";

export function Dice() {
	const [rollNumber, setRollNumber] = useState(0)
	const amount = useRequest("/r/:amount")
	const handleClick = () =>{
		amount()
		console.log(rollNumber)
	}
	

	return (
		<div>
			<button 
				onClick = {handleClick}
			>"Roll Me"</button>
		</div>
	);
};
