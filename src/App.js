import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
//import { getFirestore, getDoc, doc, collection, getDocs, query, where, limit } from "firebase/firestore"

import {
	getFirestore,
	collection,
	getDocs,
	query,
	where,
	limit,
} from "firebase/firestore"

import { CartProvider } from "./context/cartContext"
import "./App.css"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"

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

	useEffect(() => {
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
	}, [])

	const onAdd = stock => console.log("Stock actual:  " + stock)

	return (
		<CartProvider>
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
				</Routes>
			</BrowserRouter>
		</CartProvider>
	)
}

export default App
