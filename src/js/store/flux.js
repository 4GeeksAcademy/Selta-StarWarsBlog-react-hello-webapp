const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships:[],
			favorites:[],
		},
		actions: {
			getPeople: async () => {
				const store = getStore();
				const textResponse = await fetch ("https://www.swapi.tech/api/people");
				const jsonResponse = await textResponse.json ();
				setStore({...store, people: jsonResponse.results });

				//how to store the main data in local storage?
				localStorage.setItem ('starwars_local_data', JSON.stringify({ people: jsonResponse.results, planets: [], starships: []  }));

			},
			getPlanets: async () => {
				const store = getStore();
				const textResponse = await fetch ("https://www.swapi.tech/api/planets");
				const jsonResponse = await textResponse.json();
				setStore({...store, planets: jsonResponse.results })

				localStorage.setItem ('starwars_local_data', JSON.stringify({ people:[] , planets: jsonResponse.results, starships: []  }));

			},
			
			getStarships: async () => {
				const store = getStore();
				const textResponse = await fetch ("https://www.swapi.tech/api/starships");
				const jsonResponse = await textResponse.json();
				setStore({...store, starships: jsonResponse.results })

				localStorage.setItem ('starwars_local_data', JSON.stringify({ people:[] , planets: [] , starships: jsonResponse.results  }));

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
			addFavorite: (item) => {
				const store = getStore();
				const {uid, linkPath} = (item);
				//this checks if item already exists in favorites
				const itemInFavorites = store.favorites.some (fav => fav.uid === uid && fav.linkPath === linkPath );
				
				// filter creates a new array without the item if it exists
				const newFavorite = itemInFavorites
				? store.favorites.filter (fav => !(fav.uid === uid && fav.linkPath === linkPath)) : [...store.favorites, item]

				setStore ({...store, favorites: newFavorite});
				localStorage.setItem ('favorites',JSON.stringify(newFavorite));

			},

			removeFavorite: (item) => {
				const store = getStore();
				const {uid, linkPath} = (item);
				const itemInFavorites = store.favorites.some (fav => fav.uid === uid && fav.linkPath === linkPath );
				const newFavorite = itemInFavorites
				
				? store.favorites.filter (fav => !(fav.uid === uid && fav.linkPath === linkPath)) : [...store.favorites]

				setStore ({...store, favorites: newFavorite});
				localStorage.setItem ('favorites',JSON.stringify(newFavorite));

			},
		}
	};
};

export default getState;
