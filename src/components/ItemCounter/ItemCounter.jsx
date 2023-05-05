import { useState, useEffect } from "react"

export const ItemCounter = ({ stock, onAdd }) => {
	const [counter, setCounter] = useState(0)

	useEffect(() => {
		if (counter > 0) onAdd(stock - counter)
	}, [counter])

	const handlerIncreaseCount = () => {
		if (stock > counter) setCounter(counter + 1)
	}

	const handlerDecreaseCount = () => {
		if (counter > 0) setCounter(counter - 1)
	}

	return (
		<div>
			<span onClick={handlerIncreaseCount}>+</span>
			{counter}
			<span onClick={handlerDecreaseCount}>-</span>
		</div>
	)
}
