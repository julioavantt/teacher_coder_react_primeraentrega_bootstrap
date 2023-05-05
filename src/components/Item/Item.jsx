import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

export const Item = ({ item }) => (
	<Card
		style={{ width: "18rem" }}
		key={item.id}
		className="float-start"
	>
		<Card.Img variant="top" src={item.avatar} />
		<Card.Body>
			<Card.Title>{item.name}</Card.Title>
			<Card.Text>Categoría: {item.category}</Card.Text>
			<Link to={`/item/${item.id}`}>
				<Button variant="primary">Ver detalle</Button>
			</Link>
		</Card.Body>
	</Card>
)
