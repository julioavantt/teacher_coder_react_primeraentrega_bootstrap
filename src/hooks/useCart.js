import { useState } from "react"

export const useCart = () => {
	const [productosAgregados, setProductosAgregados] = useState([])

	const addItem = (producto, quantity) => {
		const { stock, ...rest } = producto
		const alreadyExists = productosAgregados.some(
			producto => producto.id === rest.id
		)
		if (!alreadyExists)
			setProductosAgregados(prev => [
				...prev,
				{ ...rest, quantity },
			])
		else {
			const actualizarProductos = productosAgregados.map(
				producto => {
					if (producto.id === rest.id)
						return {
							...producto,
							quantity: producto.quantity + quantity,
						}
					else return producto
				}
			)
			setProductosAgregados(actualizarProductos)
		}
	}

	const deleteItem = id => {
		const otrosProductos = productosAgregados.filter(
			producto => producto.id !== id
		)
		setProductosAgregados(otrosProductos)
	}

	const clear = () => setProductosAgregados([])

	return {
		productosAgregados,
		addItem,
		clear,
		deleteItem,
	}
}
