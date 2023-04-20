import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

export const Item = ({ item }) => (
	<Card style={{ width: "18rem" }} className="float-start">
		<Card.Img variant="top" src="holder.js/100px180" />
		<Card.Body>
			<Card.Title>{item.car_model}</Card.Title>
			<Card.Text>Año: {item.car_year}</Card.Text>
			<Button variant="primary">Ver detalle</Button>
		</Card.Body>
	</Card>
)
