import React, { useEffect, useState } from "react";

const PokemonCard = ({ pokemon }) => (
  <div className="card">
    <h2>{pokemon.name}</h2>
    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
  </div>
);

const Fetch = ({ numberOfPokemon }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const pokemonIds = Array.from(
    { length: numberOfPokemon },
    (_, index) => index + 1
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = pokemonIds.map(async (id) => {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${id}/`
          );
          if (!response.ok) {
            throw new Error(
              `Failed to fetch data for Pokemon ${id}: ${response.status}`
            );
          }
          return response.json();
        });

        const data = await Promise.all(promises);
        setPokemonData(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [pokemonIds]);

  return (
    <div>
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="card-container">
          {pokemonData.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Fetch;

// import { useEffect, useState } from "react";

// const Fetch = ({ numberOfPokemon }) => {
//   const [pokemonData, setPokemonData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const pokemonIds = Array.from(
//     { length: numberOfPokemon },
//     (_, index) => index + 1
//   );

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
//     <div>
//       {isLoading ? (
//         <div className="flex items-center">Loading...</div>
//       ) : (
//         <div className="card-container">
//           {pokemonData.map((pokemon) => (
//             <div key={pokemon.id} className="card">
//               <h2>{pokemon.name}</h2>
//               <img src={pokemon.sprites.front_default} alt={pokemon.name} />
//               {/* Display other relevant information about the Pokémon */}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Fetch;
