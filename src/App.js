import { BrowserRouter, Routes, Route } from "react-router-dom"

import { CartProvider } from "./context/cartContext"
import "./App.css"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"
import { Cart } from "./components/Cart/Cart"

function App() {
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
						element={<ItemDetailContainer />}
					/>
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</CartProvider>
	)
}

export default App
