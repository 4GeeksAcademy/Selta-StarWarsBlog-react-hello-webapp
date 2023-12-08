import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	const { actions, store } = useContext(Context);

	
	return (
		<nav className="navbar navbar-light bg-dark">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"  >
				<button type="button" className="btn btn-dark" id="icon"> 
                <img className="starWarsLogo" src="https://cdn.worldvectorlogo.com/logos/star-wars.svg" alt="Star Wars logo vector"></img>
              	</button></span>
			</Link>
			<div className="mx-3">
				<div className="btn-group">
					<button className="btn btn-light" id="contact" type="button" data-bs-toggle="dropdown" aria-expanded="false"> 
					Favorites {" "} {store.favorites.length }
					</button> 
				</div>
			</div>
		</nav>
	);
};
