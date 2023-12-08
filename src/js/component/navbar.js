import React, { useContext }  from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { actions, store } = useContext(Context);

	const handleRemoveFavorite = (uid, linkPath) => {
		actions.removeFavorite (uid, linkPath);
	};



	
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
					<strong>Favorites {" "} {store.favorites.length > 0 && (
						<span className="badge bg-secondary ms-1">
							{store.favorites.length}
						</span>
					)}</strong>
					</button>
				 
						<ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
										{store.favorites.length === 0 ? (
											<li>
												<span className="dropdown-item">You know u didn't click on a favorite</span>
											</li>
										):(
											store.favorites.map((favorite,index) =>(
												<li key={index} className="d-flex justify-content-between"> 
													<Link
                    								to={`/details/${favorite.linkPath}/${favorite.uid}`}
                    								className="dropdown-item"
                  									>
                    								{favorite.name}
                  									</Link>
														<span
															className="text-danger cursor-pointer"
															onClick={(e) => {
															e.stopPropagation();
															handleRemoveFavorite(
																favorite.uid,
																favorite.linkPath
															);
															}}
															>	
															
															<svg
															xmlns="http://www.w3.org/2000/svg"
															width="16"
															height="16"
															fill="currentColor"
															className="bi bi-trash"
															viewBox="0 0 16 16"
															>
															<path
																d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"
															/>
															<path
																d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"
															/>
															</svg>
														</span>

												</li>
											) )
										)}
						</ul>
				</div>
			</div>
		</nav>
	);
};
