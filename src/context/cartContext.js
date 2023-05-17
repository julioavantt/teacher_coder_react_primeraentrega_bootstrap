import { createContext } from "react"

import { useCart } from "../hooks/useCart"

const CartContext = createContext([])

export const CartProvider = ({ children }) => {
	const { productos, setProductos, onAdd, clear } = useCart()

	return (
		<CartContext.Provider
			value={{ productos, setProductos, onAdd, clear }}
		>
			{children}
		</CartContext.Provider>
	)
}
