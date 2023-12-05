import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-dark">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"  >
				<button type="button" className="btn btn-dark" id="icon"> 
                <img className="starWarsLogo" src="https://cdn.worldvectorlogo.com/logos/star-wars.svg" alt="Star Wars logo vector"></img>
              	</button></span>
			</Link>
			<div className="mx-3">
				<Link to="/contacts">
					<button className="btn btn-light" id="contact" > <strong>Favorites</strong> </button>
				</Link>
			</div>
		</nav>
	);
};
