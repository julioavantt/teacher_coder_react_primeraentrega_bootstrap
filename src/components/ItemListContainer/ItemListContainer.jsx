import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import Container from "react-bootstrap/Container"

import products from "../../data/products.json"
import { ItemList } from "../ItemList/ItemList"

export const ItemListContainer = ({ greeting }) => {
	const [list, setList] = useState([])
	const { id } = useParams()

	console.log(id)

	useEffect(() => {
		const productList = new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(products)
			}, 2000)
		})
		productList.then(result => {
			if (id) {
				const productsFiltered = result.filter(
					item => item.category === id
				)
				setList(productsFiltered)
			} else {
				setList(result)
			}
		})
	}, [id])

	return (
		<Container className="mt-4">
			<h1>{greeting}</h1>
			<ItemList list={list} />
		</Container>
	)
}
