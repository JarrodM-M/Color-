import { useRequest } from "./api";

export function Button() {
	const amount = useRequest("/r/:amount")
	const refresh = useRequest("/")
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
