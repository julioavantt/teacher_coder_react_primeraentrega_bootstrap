import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Button } from "react-bootstrap"
import { Container } from "react-bootstrap"

import {
	getFirestore,
	collection,
	getDocs,
	query,
	where,
	limit,
	writeBatch,
	doc,
	addDoc,
	updateDoc,
} from "firebase/firestore"

import { CartProvider } from "./context/cartContext"
import "./App.css"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { Cart } from "./components/Cart/Cart"

function App() {
	// documento by id
	/* 	useEffect(() => {
		const db = getFirestore()

		const refDoc = doc(db, "items", "GdAokuXkDcyIz0kHrUSv")

		getDoc(refDoc).then(snapshot => {
			console.log({ id: snapshot.id, data: snapshot.data() })
		})
	}, []) */

	/* 	useEffect(() => {
		const db = getFirestore()

		const refCollection = collection(db, "items")

		getDocs(refCollection).then(snapshot => {
			if (snapshot.size === 0) console.log("no results")
			else
				console.log(
					snapshot.docs.map(doc => {
						return { id: doc.id, data: doc.data() }
					})
				)
		})
	}, []) */

	/* 	useEffect(() => {
		const db = getFirestore()

		const q = query(
			collection(db, "items"),
			where("price", ">", 10000),
			limit(10)
		)

		getDocs(q).then(snapshot => {
			if (snapshot.size === 0) console.log("no results")
			else
				console.log(
					snapshot.docs.map(doc => {
						return { id: doc.id, data: doc.data() }
					})
				)
		})
	}, []) */

	const sendOrder = () => {
		const order = {
			buyer: {
				name: "Julio",
				phone: "354345 5",
				email: "tttt@gggm.com",
			},
			items: [
				{ name: "Bicicleta", price: 100, cantidad: 3 },
				{ name: "Gorro", price: 300, cantidad: 2 },
			],
			total: 900,
		}

		const db = getFirestore()
		const orderCollection = collection(db, "orders")

		addDoc(orderCollection, order).then(response =>
			//console.log("orden con id " + id + " creada!")
			console.log(response)
		)
	}

	const updateOrder = id => {
		const db = getFirestore()
		const orderDoc = doc(db, "orders", id)
		updateDoc(orderDoc, { totale: 3008 })
	}

	const updateOrders = () => {
		const db = getFirestore()
		const batch = writeBatch(db)

		const order1 = doc(db, "orders", "mzNOBKDVV7GS8Thcj7pN")
		const order2 = doc(db, "orders", "H9FDWlq8hhuljqXt29al")
		const order3 = doc(db, "orders", "cesoVFU08F5lXd33GB53")

		//! Update actualiza
		batch.update(order1, { total: 5000 })
		batch.update(order2, { total: 5000 })

		//! Set reemplaza
		batch.set(order3, {})

		batch.commit()
	}

	const onAdd = stock => console.log("Stock actual:  " + stock)

	return (
		<CartProvider>
			<Container className="mt-4 mb-4">
				<Button onClick={sendOrder}>
					Agregar documento y/o colección
				</Button>
				<Button
					onClick={() => updateOrder("cesoVFU08F5lXd33GB53")}
				>
					Editar documento
				</Button>
				<Button onClick={updateOrders}>Batch</Button>
			</Container>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route
						path="/"
						element={<ItemListContainer greeting="Productos" />}
					/>
					<Route
						path="/category/:id"
						element={<ItemListContainer greeting="Productos" />}
					/>
					<Route
						path="/item/:id"
						element={<ItemDetailContainer onAdd={onAdd} />}
					/>
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	)
}

export default App
