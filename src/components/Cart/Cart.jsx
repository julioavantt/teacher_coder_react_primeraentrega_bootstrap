import { useState } from "react"

import Container from "react-bootstrap/Container"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export const Cart = () => {
	const [formValues, setFormValues] = useState({
		name: "",
		phone: "",
		email: "",
	})

	const handleChange = ev => {
		setFormValues(prev => ({
			...prev,
			[ev.target.name]: ev.target.value,
		}))
	}

	return (
		<Container className="mt-4">
			<h1>Lista productos</h1>
			<div style={{ height: 200, backgroundColor: "yellow" }}>
				productos
			</div>
			<h2>Ingresar datos de usuario</h2>
			<Form>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Nombre</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={formValues.name}
						type="text"
						name="name"
					/>
				</Form.Group>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={formValues.email}
						type="email"
						name="email"
					/>
				</Form.Group>
				<Form.Group className="mb-3">
					<Form.Label>Tel</Form.Label>
					<Form.Control
						onChange={handleChange}
						value={formValues.phone}
						type="text"
						name="phone"
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	)
}
