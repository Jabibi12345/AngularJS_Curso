import { hello } from "modulo.js"; 

var app = { 
	saludo : () => {
		hello("Carlos");
		}
	}
	
console.log(app.saludo())