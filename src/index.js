import React from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"

import "./index.css"
import App from "./App"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCNjxUZF8XGYhFVTldBFglnYiidh2AUZ2A",
	authDomain: "coder-e7f29.firebaseapp.com",
	projectId: "coder-e7f29",
	storageBucket: "coder-e7f29.appspot.com",
	messagingSenderId: "330827887255",
	appId: "1:330827887255:web:4a069df095cb1b72616fd2",
}

// Initialize Firebase
initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
