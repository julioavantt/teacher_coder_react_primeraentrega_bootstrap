import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { getFirestore, collection, getDocs } from "firebase/firestore"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

import { CartWidget } from "../CartWidget/CartWidget"

export const NavBar = () => {
	const [itemsMenu, setItemsMenu] = useState([])

	useEffect(() => {
		const db = getFirestore()

		const refCollection = collection(db, "items")

		getDocs(refCollection).then(snapshot => {
			if (snapshot.size === 0) console.log("no results")
			else {
				const categories = snapshot.docs.map(
					item => item.data().categoryId
				)
				const uniqueCategories = new Set(categories)
				setItemsMenu([...uniqueCategories].sort())
			}
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
