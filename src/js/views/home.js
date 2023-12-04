import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";

export const Home = () => { 

	const {store, actions} = useContext (Context);
	const [isLoading, setIsLoading] = useState (false);
	
	const handleInitialFetch = async () => {
		await actions.getPeople();
		await actions.getPlanets();
		await actions.getStarships();
	}
	useEffect (() => {
		handleInitialFetch();

	}, []);


	return (
	<div className="text-center mt-5">
		<h1>Welcome to the StarWars Blogpedia </h1>
		
		<div>
			<h2>People:</h2>
				{store.people.map((person) => <p key={person.uid}>{person.name} </p>)}
		</div>
		<div>
			<h2>Planets:</h2>
				{store.planets.map((planets) => <p key={planets.uid}>{planets.name} </p>)}
		</div>
		<div>
			<h2>Starships: </h2>
				{store.starships.map((starships) => <p key={starships.uid}>{starships.name} </p>)}
		</div>

	
	</div>
);
};