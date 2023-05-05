import { BrowserRouter, Routes, Route } from "react-router-dom"

import "./App.css"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"

function App() {
	const onAdd = stock => console.log("Stock actual:  " + stock)

	return (
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
	)
}

export default App
