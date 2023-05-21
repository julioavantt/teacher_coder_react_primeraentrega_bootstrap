import { Link } from "react-router-dom"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

export const Item = ({ item }) => (
	<Card
		style={{ width: "24rem" }}
		key={item.id}
		className="float-start"
	>
		<div style={{ overflow: "hidden", height: 250 }}>
			<Card.Img variant="top" src={item.imageId} />
		</div>
		<Card.Body>
			<Card.Title>{item.name}</Card.Title>
			<Card.Text>Categoría: {item.categoryId}</Card.Text>
			<Card.Text>{item.description}</Card.Text>
			<Link to={`/item/${item.id}`}>
				<Button variant="primary">Ver detalle</Button>
			</Link>
			<mark>Stock: {item.stock}</mark>
		</Card.Body>
	</Card>
)
