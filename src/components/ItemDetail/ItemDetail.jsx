import { ItemCounter } from "../ItemCounter/ItemCounter"

export const ItemDetail = ({ product, onAdd }) => {
	return (
		<div>
			<h1>{product.name}</h1>
			<img src={product.avatar} alt={product.name} />
			<p>$ {product.prize}</p>
			<ItemCounter stock={product.stock} onAdd={onAdd} />
			{product.stock > 0 ? (
				<button>Agregar al cart</button>
			) : (
				<>
					<span>No hay stock</span>
					<a href="/">Seguir comprando</a>
				</>
			)}
		</div>
	)
}
