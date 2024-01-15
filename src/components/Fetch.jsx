// import { useEffect, useState } from "react";
// // import PokemonCards from "./PokemonCards";

// // const PokemonCard = ({ pokemon }) => (
// //   <div className="card">
// //     <h2>{pokemon.name}</h2>
// //     <img src={pokemon.sprites.front_default} alt={pokemon.name} />
// //   </div>
// // );

// const Fetch = ({ numberOfPokemon }) => {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSwapped, setIsSwapped] = useState(false);
//   const [randomPokemon, setRandomPokemon] = useState([]);
//   const pokemonIds = Array.from(
//     { length: numberOfPokemon },
//     (_, index) => index + 1
//   );

//   function getRandomPokemon() {
//     const randomIndex = pokemonData.sort(Math.random() * pokemonIds.length - 1);
//     return pokemonIds[randomIndex];
//   }

//   const handleCardClick = () => {
//     setIsSwapped(!isSwapped);
//     setRandomPokemon(getRandomPokemon());
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const promises = pokemonIds.map(async (id) => {
//           const response = await fetch(
//             `https://pokeapi.co/api/v2/pokemon/${id}/`
//           );
//           if (!response.ok) {
//             throw new Error(
//               `Failed to fetch data for Pokemon ${id}: ${response.status}`
//             );
//           }
//           return response.json();
//         });

//         const data = await Promise.all(promises);
//         setPokemonData(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching Pokémon data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [pokemonIds]);

//   return (
//     <div className="loading-container">
//       {isLoading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <div className="card-container">
//           {randomPokemon.map((randomPokemon, index) => (
//             // <PokemonCards
//             //   key={pokemon.id}
//             //   pokemon={pokemon}
//             //   isSwapped={isSwapped}
//             //   onCardClick={handleCardClick}
//             // />
//             <div className="card" key={index} onClick={handleCardClick}>
//               {isSwapped ? (
//                 <img alt="card's back side" src="public/images/card-back.png" />
//               ) : (
//                 <img
//                   alt={randomPokemon.name}
//                   src={randomPokemon.sprites.front_default}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Fetch;

// import { useEffect, useState } from "react";

// const Fetch = ({ numberOfPokemon }) => {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const pokemonIds = Array.from(
//     { length: numberOfPokemon },
//     (_, index) => index + 1
//   );

//   const handleCardClick = () => {
//     // Shuffle the Pokemon data array when a card is clicked
//     setPokemonData((prevData) => {
//       const shuffledData = [...prevData];
//       for (let i = shuffledData.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [shuffledData[i], shuffledData[j]] = [shuffledData[j], shuffledData[i]];
//       }
//       return shuffledData;
//     });
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const promises = pokemonIds.map(async (id) => {
//           const response = await fetch(
//             `https://pokeapi.co/api/v2/pokemon/${id}/`
//           );
//           if (!response.ok) {
//             throw new Error(
//               `Failed to fetch data for Pokemon ${id}: ${response.status}`
//             );
//           }
//           return response.json();
//         });

//         const data = await Promise.all(promises);
//         setPokemonData(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching Pokémon data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [pokemonIds]);

//   return (
//     <div className="loading-container">
//       {isLoading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <div className="card-container">
//           {pokemonData.map((pokemon, index) => (
//             <div className="card" key={index} onClick={handleCardClick}>
//               <img alt={pokemon.name} src={pokemon.sprites.front_default} />
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Fetch;

// import { useEffect, useState } from "react";

// const Fetch = ({ numberOfPokemon }) => {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSwapped, setIsSwapped] = useState(false);
//   const [randomPokemonIndexes, setRandomPokemonIndexes] = useState([]);
//   const pokemonIds = Array.from(
//     { length: numberOfPokemon },
//     (_, index) => index + 1
//   );

//   function getRandomPokemonIndexes() {
//     const shuffledIndexes = [...pokemonData];
//     for (let i = shuffledIndexes.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [shuffledIndexes[i], shuffledIndexes[j]] = [
//         shuffledIndexes[j],
//         shuffledIndexes[i],
//       ];
//     }
//     return shuffledIndexes;
//   }

//   const handleCardClick = () => {
//     setIsSwapped(!isSwapped);
//     setRandomPokemonIndexes(getRandomPokemonIndexes());
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const promises = pokemonIds.map(async (id) => {
//           const response = await fetch(
//             `https://pokeapi.co/api/v2/pokemon/${id}/`
//           );
//           if (!response.ok) {
//             throw new Error(
//               `Failed to fetch data for Pokemon ${id}: ${response.status}`
//             );
//           }
//           return response.json();
//         });

//         const data = await Promise.all(promises);
//         setPokemonData(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching Pokémon data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [pokemonIds]);

//   return (
//     <div className="loading-container">
//       {isLoading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <div className="card-container">
//           {pokemonData.map((pokemon, index) => (
//             <div className="card" key={index} onClick={handleCardClick}>
//               {isSwapped ? (
//                 <img alt="card's back side" src="public/images/card-back.png" />
//               ) : (
//                 <img alt={pokemon.name} src={pokemon.sprites.front_default} />
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Fetch;
// import { useEffect, useState } from "react";

// const Fetch = ({ numberOfPokemon }) => {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSwapped, setIsSwapped] = useState(false);
//   const [randomPokemon, setRandomPokemon] = useState([]);
//   const pokemonIds = Array.from(
//     { length: numberOfPokemon },
//     (_, index) => index + 1
//   );

//   // Fisher-Yates shuffle algorithm
//   const shuffleArray = (array) => {
//     const newArray = [...array];
//     let currentIndex = newArray.length;

//     while (currentIndex !== 0) {
//       const randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       [newArray[currentIndex], newArray[randomIndex]] = [
//         newArray[randomIndex],
//         newArray[currentIndex],
//       ];
//     }

//     return newArray;
//   };

//   const getRandomPokemon = () => {
//     const shuffledIds = shuffleArray(pokemonData);
//     const randomPokemonArray = shuffledIds.slice(0, numberOfPokemon);
//     return randomPokemonArray.map((id) => pokemonData[id - 1]);
//   };

//   const handleCardClick = () => {
//     setIsSwapped(!isSwapped);
//     setRandomPokemon(getRandomPokemon);
//     setTimeout(() => {
//       setIsSwapped(isSwapped); // Swap back to the original state
//       setRandomPokemon(getRandomPokemon); // You might want to update this line based on your requirements
//     }, 1000);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const promises = pokemonIds.map(async (id) => {
//           const response = await fetch(
//             `https://pokeapi.co/api/v2/pokemon/${id}/`
//           );
//           if (!response.ok) {
//             throw new Error(
//               `Failed to fetch data for Pokemon ${id}: ${response.status}`
//             );
//           }
//           return response.json();
//         });

//         const data = await Promise.all(promises);
//         setPokemonData(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching Pokémon data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [pokemonIds]);

//   return (
//     <div className="loading-container">
//       {isLoading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <div className="card-container">
//           {pokemonData.map((pokemon, index) => (
//             <div className="card" key={index} onClick={handleCardClick}>
//               {isSwapped ? (
//                 <img alt="card's back side" src="public/images/card-back.png" />
//               ) : (
//                 <img alt={pokemon.name} src={pokemon.sprites.front_default} />
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Fetch;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useEffect, useState } from "react";

// const Fetch = ({ numberOfPokemon }) => {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSwapped, setIsSwapped] = useState(false);
//   const [randomPokemon, setRandomPokemon] = useState([]);
//   const pokemonIds = Array.from(
//     { length: numberOfPokemon },
//     (_, index) => index + 1
//   );

//   // Fisher-Yates shuffle algorithm
//   const shuffleArray = (array) => {
//     const newArray = [...array];
//     let currentIndex = newArray.length;

//     while (currentIndex !== 0) {
//       const randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       [newArray[currentIndex], newArray[randomIndex]] = [
//         newArray[randomIndex],
//         newArray[currentIndex],
//       ];
//     }

//     return newArray;
//   };

//   const getRandomPokemon = () => {
//     const shuffledIds = shuffleArray(pokemonIds);
//     const randomPokemonArray = shuffledIds.slice(0, numberOfPokemon);
//     return randomPokemonArray.map((id) => pokemonData[id - 1]);
//   };

//   const handleCardClick = (index) => {
//     setIsSwapped(!isSwapped);
//     setRandomPokemon(getRandomPokemon);
//     setTimeout(() => {
//       setIsSwapped(isSwapped); // Swap back to the original state
//       setRandomPokemon(getRandomPokemon); // You might want to update this line based on your requirements
//     }, 1000);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const promises = pokemonIds.map(async (id) => {
//           const response = await fetch(
//             `https://pokeapi.co/api/v2/pokemon/${id}/`
//           );
//           if (!response.ok) {
//             throw new Error(
//               `Failed to fetch data for Pokemon ${id}: ${response.status}`
//             );
//           }
//           return response.json();
//         });

//         const data = await Promise.all(promises);
//         setPokemonData(data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching Pokémon data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [pokemonIds]);

//   return (
//     <div className="loading-container">
//       {isLoading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <div className="card-container">
//           {pokemonData.map((pokemon, index) => (
//             <div
//               className="card"
//               key={index}
//               onClick={() => handleCardClick(index)}
//             >
//               {isSwapped ? (
//                 <img alt="card's back side" src="public/images/card-back.png" />
//               ) : (
//                 <img alt={pokemon.name} src={pokemon.sprites.front_default} />
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Fetch;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useEffect, useState } from "react";

// const Fetch = ({ numberOfPokemon }) => {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSwapped, setIsSwapped] = useState([]);
//   const [randomPokemon, setRandomPokemon] = useState([]);
//   const pokemonIds = Array.from(
//     { length: numberOfPokemon },
//     (_, index) => index + 1
//   );

//   // Fisher-Yates shuffle algorithm
//   const shuffleArray = (array) => {
//     const newArray = [...array];
//     let currentIndex = newArray.length;

//     while (currentIndex !== 0) {
//       const randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       [newArray[currentIndex], newArray[randomIndex]] = [
//         newArray[randomIndex],
//         newArray[currentIndex],
//       ];
//     }

//     return newArray;
//   };

//   const getRandomPokemon = () => {
//     const shuffledIds = shuffleArray(pokemonIds);
//     const randomPokemonArray = shuffledIds.slice(0, numberOfPokemon);
//     return randomPokemonArray.map((id) => pokemonData[id - 1]);
//   };

//   const handleCardClick = (index) => {
//     // Create a new array to update individual card's swapped state
//     const newIsSwapped = [...isSwapped];
//     newIsSwapped[index] = !newIsSwapped[index];

//     setIsSwapped(newIsSwapped);
//     setRandomPokemon(getRandomPokemon);

//     setTimeout(() => {
//       // Swap back to the original state
//       const newIsSwappedBack = [...newIsSwapped];
//       newIsSwappedBack[index] = !newIsSwappedBack[index];
//       setIsSwapped(newIsSwappedBack);

//       // You might want to update this line based on your requirements
//       setRandomPokemon(getRandomPokemon);
//     }, 1000);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const promises = pokemonIds.map(async (id) => {
//           const response = await fetch(
//             `https://pokeapi.co/api/v2/pokemon/${id}/`
//           );
//           if (!response.ok) {
//             throw new Error(
//               `Failed to fetch data for Pokemon ${id}: ${response.status}`
//             );
//           }
//           return response.json();
//         });

//         const data = await Promise.all(promises);
//         setPokemonData(data);
//         setIsSwapped(new Array(data.length).fill(false)); // Initialize isSwapped array
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching Pokémon data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [pokemonIds]);

//   return (
//     <div className="loading-container">
//       {isLoading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <div className="card-container">
//           {pokemonData.map((pokemon, index) => (
//             <div
//               className="card"
//               key={index}
//               onClick={() => handleCardClick(index)}
//             >
//               {isSwapped[index] ? (
//                 <img alt="card's back side" src="public/images/card-back.png" />
//               ) : (
//                 <img alt={pokemon.name} src={pokemon.sprites.front_default} />
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Fetch;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// import { useEffect, useState } from "react";

// const Fetch = ({ numberOfPokemon }) => {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isSwapped, setIsSwapped] = useState([]);
//   const [randomPokemon, setRandomPokemon] = useState([]);
//   const pokemonIds = Array.from(
//     { length: numberOfPokemon },
//     (_, index) => index + 1
//   );

//   // Fisher-Yates shuffle algorithm
//   const shuffleArray = (array) => {
//     const newArray = [...array];
//     let currentIndex = newArray.length;

//     while (currentIndex !== 0) {
//       const randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;

//       [newArray[currentIndex], newArray[randomIndex]] = [
//         newArray[randomIndex],
//         newArray[currentIndex],
//       ];
//     }

//     return newArray;
//   };

//   const getRandomPokemon = () => {
//     const shuffledIds = shuffleArray(pokemonIds);
//     const randomPokemonArray = shuffledIds.slice(0, numberOfPokemon);
//     return randomPokemonArray.map((id) => pokemonData[id - 1]);
//   };

//   const handleCardClick = (index) => {
//     // Create a new array to update individual card's swapped state
//     const newIsSwapped = [...isSwapped];
//     newIsSwapped[index] = !newIsSwapped[index];

//     setIsSwapped(newIsSwapped);
//     setRandomPokemon(getRandomPokemon);

//     setTimeout(() => {
//       // Swap back to the original state
//       const newIsSwappedBack = [...newIsSwapped];
//       newIsSwappedBack[index] = !newIsSwappedBack[index];
//       setIsSwapped(newIsSwappedBack);

//       // You might want to update this line based on your requirements
//       setRandomPokemon(getRandomPokemon);
//     }, 1000);
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const promises = pokemonIds.map(async (id) => {
//           const response = await fetch(
//             `https://pokeapi.co/api/v2/pokemon/${id}/`
//           );
//           if (!response.ok) {
//             throw new Error(
//               `Failed to fetch data for Pokemon ${id}: ${response.status}`
//             );
//           }
//           return response.json();
//         });

//         const data = await Promise.all(promises);
//         setPokemonData(data);
//         setIsSwapped(new Array(data.length).fill(false)); // Initialize isSwapped array
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching Pokémon data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, [pokemonIds]);

//   return (
//     <div className="loading-container">
//       {isLoading ? (
//         <div className="loading">Loading...</div>
//       ) : (
//         <div className="card-container">
//           {pokemonData.map((pokemon, index) => (
//             <div
//               className="card"
//               key={index}
//               onClick={() => handleCardClick(index)}
//             >
//               {isSwapped[index] ? (
//                 <img alt="card's back side" src="public/images/card-back.png" />
//               ) : (
//                 <img alt={pokemon.name} src={pokemon.sprites.front_default} />
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Fetch;
