import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import { CartWidget } from "../CartWidget/CartWidget"
import products from "../../data/products.json"

export const NavBar = () => {
	const [itemsMenu, setItemsMenu] = useState([])

	useEffect(() => {
		const productList = new Promise((resolve, reject) =>
			resolve(products)
		)
		productList.then(result => {
			const categories = result.map(item => item.category)
			const uniqueCategories = new Set(categories)
			setItemsMenu([...uniqueCategories].sort())
		})
	}, [])

	return (
		<Navbar bg="primary" variant="dark">
			<Container>
				<Navbar.Brand href="#home">Happy cats</Navbar.Brand>
				<Nav className="me-auto">
					<NavLink to="/">HOME</NavLink>
					{itemsMenu?.map(item => (
						<NavLink key={item} to={`/category/${item}`}>
							{item.toUpperCase()}
						</NavLink>
					))}
				</Nav>
				<CartWidget />
			</Container>
		</Navbar>
	)
}
