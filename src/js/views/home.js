import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card.js"


export const Home = () => { 

	const {store, actions} = useContext (Context);
	const [isLoading, setIsLoading] = useState(false);
	
	const handleInitialFetch = async () => {
		await actions.getPeople();
		await actions.getPlanets();
		await actions.getStarships();
	}

	const handleFetchDetails = async () => {
		await actions.getPersonDetails();
		await actions.getPlanetDetails();
		await actions.getStarshipDetails();
	}

	const handleAsyncCalls = async () => {
		await handleInitialFetch();
		await handleFetchDetails();
		
	}
	
	useEffect (() => {
		if (!store.people.length || !store.planets.length || !store.starships.length) {
			handleAsyncCalls();
		}
	}, []);


	return  ( 
		
	
	<div className="text-center mt-5">
		<h1>Welcome to the StarWars Blogpedia </h1>
		
					<div className="m-3 p-3" >
						<h2>People:</h2>
						<div className="d-flex overflow-auto" >	
						{store.people.map((person) => (
								<Card
								key={person.uid}
								uid={person.uid}
								name={person.name}
								linkPath="people"
								buttonText= "Go to person's details" 
								/>
						))}
						</div>
					</div>
					<div>
						<h2>Planets:</h2>
						<div className="d-flex overflow-auto" >	
							{store.planets.map((planet) => (
									<Card
									key={planet.uid}
									uid={planet.uid}
									name={planet.name}
									linkPath="planets"
									buttonText= "Go to planet's details" 
									/>
							))}
						</div>
					</div>
					<div>
						<h2>Starships: </h2>
						<div className="d-flex overflow-auto" >	
						{store.starships.map((starship) => (
								<Card
								key={starship.uid}
								uid={starship.uid}
								name={starship.name}
								linkPath="starships"
								buttonText= "Go to starship's details" 
								/>
						))}
						</div>
					</div>

	</div>
);
};