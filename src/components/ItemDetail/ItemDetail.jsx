export const ItemDetail = ({ product }) => (
	<div>
		<h1>
			{product.title} ${product.price}
		</h1>
		<img src={product.img} alt={product.description} />
		<p>{product.description}</p>
	</div>
)
