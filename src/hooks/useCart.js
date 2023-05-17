import { useState } from "react"

export const useCart = () => {
	const [productos, setProductos] = useState([])

	const onAdd = producto => setProductos(prev => [...prev, producto])

	const clear = () => setProductos([])

	return { productos, setProductos, onAdd, clear }
}
