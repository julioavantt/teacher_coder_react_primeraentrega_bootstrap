import { useState, useEffect } from "react"
import Container from "react-bootstrap/Container"

import products from "../../data/products.json"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = ({ greeting }) => {
	const [list, setList] = useState([])

	useEffect(() => {
		const productList = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(products)
			}, 2000)
		})
		productList.then(result => setList(result))
	}, [])

	return (
		<Container className="mt-4">
			<h1>{greeting}</h1>
			<ItemList list={list} />
		</Container>
	)
}
