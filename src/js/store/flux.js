const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships:[]
		},
		actions: {
			getPeople: async () => {
				const store = getStore();
				const textResponse = await fetch ("https.//www.swapi.tech/api/people");
				const jsonResponse = await textResponse.json ();
				setStore({...store, people: jsonResponse.results })

			},
			getPlanets: async () => {
				const store = getStore();
				await fetch ("https.//www.swapi.tech/api/planets");
				const jsonResponse = await textResponse.json ();
				setStore({...store, planets: jsonResponse.results })
			},
			
			getStarships: async () => {
				const store = getStore();
				await fetch ("https.//www.swapi.tech/api/starships");
				const jsonResponse = await textResponse.json ();
				setStore({...store, starships: jsonResponse.results })
			},	
			
			
			getPersonDetails: async () => {
				const store = getStore();
//efficiently handle multiple asynchronous operations promise
								const newPersonDetails = await Promise.all (store.people.map( async (person)=> {
									const textResponse = await fetch (person.url);
									const jsonResponse = await textResponse.json ();
									return {...person, details: jsonResponse.results};
								}));
				
				setStore({...store, peopl:newPersonDetails});
			
				
			},
			getPlanet: async () => {
				const store = getStore();
				
								const newPlanetDetails = await Promise.all (store.people.map( async (person)=> {
									const textResponse = await fetch (person.url);
									const jsonResponse = await textResponse.json ();
									return {...person, details: jsonResponse.results};
								}));
								
								setStore({...store, peopl:newPlanetDetails});
			},
			getStarship: async () => {
				const store = getStore();
								
								const newPlanetDetails = await Promise.all (store.people.map( async (person)=> {
									const textResponse = await fetch (person.url);
									const jsonResponse = await textResponse.json ();
									return {...person, details: jsonResponse.results};
								}));
								
								setStore({...store, peopl:newPlanetDetails});
			},
		}
	};
};

export default getState;
