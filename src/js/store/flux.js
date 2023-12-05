const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships:[],
		},
		actions: {
			getPeople: async () => {
				const store = getStore();
				const textResponse = await fetch ("https://www.swapi.tech/api/people");
				const jsonResponse = await textResponse.json ();
				setStore({...store, people: jsonResponse.results })

			},
			getPlanets: async () => {
				const store = getStore();
				const textResponse = await fetch ("https://www.swapi.tech/api/planets");
				const jsonResponse = await textResponse.json();
				setStore({...store, planets: jsonResponse.results })
			},
			
			getStarships: async () => {
				const store = getStore();
				const textResponse = await fetch ("https://www.swapi.tech/api/starships");
				const jsonResponse = await textResponse.json();
				setStore({...store, starships: jsonResponse.results })
			},	
			
			
			getPersonDetails: async () => {
				const store = getStore();
//efficiently handle multiple asynchronous operations promise
								const newPersonDetails = await Promise.all (store.people.map( async (person)=> {
									const textResponse = await fetch (person.url);
									const jsonResponse = await textResponse.json();
									return {...person, details: jsonResponse.result};
								}));
				
				setStore({...store, people: newPersonDetails });
			
				
			},
			getPlanetDetails: async () => {
				const store = getStore();
				
								const newPlanetDetails = await Promise.all (store.planets.map( async (planet)=> {
									const textResponse = await fetch (planet.url);
									const jsonResponse = await textResponse.json();
									return {...planet, details: jsonResponse.result};
								}));
								
								setStore({...store, planets: newPlanetDetails });
			},
			getStarshipDetails: async () => {
				const store = getStore();
								
								const newStarshipDetails = await Promise.all (store.starships.map( async (starship)=> {
									const textResponse = await fetch (starship.url);
									const jsonResponse = await textResponse.json();
									return {...starship, details: jsonResponse.result};
								}));
								
								setStore({...store, starships: newStarshipDetails });
			},
		}
	};
};

export default getState;
