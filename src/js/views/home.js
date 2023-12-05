import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card.js"


export const Home = () => { 

	const {store, actions} = useContext (Context);
	const [loading, setLoading] = useState (false)
	
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
		setLoading(true);
		await handleInitialFetch();
		await handleFetchDetails();
		setLoading (false);
	}
	
	useEffect (() => {
		if (!store.people.length || !store.planets.length || !store.starships.length) {
			handleAsyncCalls();
		}
	}, []);


	return  ( 
		
	
	<div className="text-center" id="star">
		<h1>Welcome to the Star Wars Blogpedia </h1>
		
					<div className="m-3 p-3" >
						<h2>People:</h2>
						<div className="d-flex overflow-auto" >	
						{store.people.map((person) => (
								<Card
								key={`person-${person.uid}`}
								uid={person.uid}
								name={person.name}
								linkPath="people"
								buttonText= "Go to person's details" 
								/>
						))}
						</div>
					</div>
					
					<div className="m-3 p-3" >
						<h2>Planets:</h2>
						<div className="d-flex overflow-auto" >	
							{store.planets.map((planet) => (
									<Card
									key={`planet-${planet.uid}`}
									uid={planet.uid}
									name={planet.name}
									linkPath="planets"
									buttonText= "Go to planet's details" 
									/>
							))}
						</div>
						</div>
					
					<div className="m-3 p-3">
						<h2>Starships: </h2>
						<div className="d-flex overflow-auto" >	
						{store.starships.map((starship) => (
								<Card
								key={`starship-${starship.uid}`}
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