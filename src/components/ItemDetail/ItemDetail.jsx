import { useContext } from "react"

import { ItemCount } from "../ItemCount/ItemCount"
import { CartContext } from "../../context/cartContext"

export const ItemDetail = ({ product }) => {
	const { addItem } = useContext(CartContext)

	const onAdd = quantity => addItem(product, quantity)

	return (
		<div>
			<h1>{product.title}</h1>
			<img
				src={product.imageId}
				height={300}
				alt={product.title}
			/>
			<p>$ {product.price}</p>
			<ItemCount stock={product.stock} onAdd={onAdd} />
		</div>
	)
}
