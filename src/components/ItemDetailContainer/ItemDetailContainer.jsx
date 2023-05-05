import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"
import { useParams } from "react-router-dom"

import { ItemDetail } from "../ItemDetail/ItemDetail"
import products from "../../data/products.json"

export const ItemDetailContainer = ({ onAdd }) => {
	const [product, setProduct] = useState({})
	const { id } = useParams()

	useEffect(() => {
		const getItem = new Promise((resolve, reject) => {
			setTimeout(() => {
				const product = products.find(item => item.id === id)
				resolve(product)
			}, 2000)
		})
		getItem.then(result => setProduct(result))
	}, [id])

	return (
		<Container>
			<ItemDetail product={product} onAdd={onAdd} />
		</Container>
	)
}
