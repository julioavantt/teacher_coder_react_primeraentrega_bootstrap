import "./App.css"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { NavBar } from "./components/NavBar/NavBar"

function App() {
	return (
		<>
			<NavBar />
			<ItemDetailContainer />
			<ItemListContainer greeting="Hola" />
		</>
	)
}

export default App
