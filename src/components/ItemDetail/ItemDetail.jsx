import { ItemCounter } from "../ItemCounter/ItemCounter"

export const ItemDetail = ({ product, onAdd }) => {
	return (
		<div>
			<h1>{product.name}</h1>
			<img src={product.avatar} alt={product.name} />
			<p>$ {product.prize}</p>
			<ItemCounter stock={product.stock} onAdd={onAdd} />
		</div>
	)
}
