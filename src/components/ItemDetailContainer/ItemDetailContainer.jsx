import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"

import { ItemDetail } from "../ItemDetail/ItemDetail"

const productList = {
	title: "Montaña",
	description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minima cum iusto quibusdam, velit quo asperiores aliquam a quae. Itaque, laborum debitis nemo vero non voluptates id magnam quo quasi. Ullam aut commodi odio libero quis sit aliquid rerum praesentium. Beatae nemo obcaecati natus rem iusto fugiat quidem necessitatibus architecto ullam dolores? Laborum, maiores quos laboriosam praesentium rerum dignissimos blanditiis!`,
	price: 6,
	img: "https://images.unsplash.com/photo-1570641963303-92ce4845ed4c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
}

export const ItemDetailContainer = () => {
	const [product, setProduct] = useState({})

	useEffect(() => {
		const productPromise = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(productList)
			}, 2000)
		})
		productPromise.then(result => setProduct(result))
	}, [])

	return (
		<Container>
			<ItemDetail product={product} />
		</Container>
	)
}
