import React, { useState, useEffect } from "react";
import axios from "axios";

const Core = ({ cardLimit }) => {
  const [pokemonData, setPokemonData] = useState([]);
  const [shuffledData, setShuffledData] = useState([]);
  const [tilt, setTilt] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [isWinner, setIsWinner] = useState(false);
  // const cardLimit = setCardLimit;

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=${cardLimit}`
        );
        setPokemonData(response.data.results);
        setShuffledData(response.data.results.slice()); // Initial shuffle
        setTimeout(() => {
          setIsLoading(false);
        }, 800);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };
    fetchPokemonData();
  }, [cardLimit]);

  const shufflePokemonData = () => {
    // Shuffling the Pokemon data randomly
    const newShuffledData = [...shuffledData].sort(() => Math.random() - 0.5);
    setShuffledData(newShuffledData);
  };
  const handleCardClick = (pokemon) => {
    setTilt(true);
    // Check if the pokemon has already been clicked
    if (clickedPokemon.includes(pokemon)) {
      // Game over, reset the score and clickedPokemon array
      setScore(0);
      setClickedPokemon([]);
    } else {
      // Increment the score and update clickedPokemon array
      setScore((prevScore) => prevScore + 1);
      setClickedPokemon((prevClickedPokemon) => [
        ...prevClickedPokemon,
        pokemon,
      ]);
      // Update the best score if the current score is higher
      if (score + 1 > bestScore) {
        setBestScore(score + 1);
      }
      // Shuffle the contents of all cards, including images
      if (score + 1 === cardLimit) {
        setIsWinner(true);
        setScore(0);
        setClickedPokemon([]);
      } else {
        // Shuffle the contents of all cards, including images
        shufflePokemonData();
      }
    }
    setTimeout(() => {
      setTilt(false);
    }, 500);
  };

  return (
    <div className="text-white flex-col flex items-center">
      <div className="mb-4 text-center bg-black bg-black/40 rounded-xl py-2 px-20">
        <p>Score: {score}</p>
        <p>Best Score: {bestScore}</p>
        {isWinner && <p>Congratulations! You won!</p>}
      </div>

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-center mt-10 mx-20">
          {shuffledData.map((pokemon, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleCardClick(pokemon)}
            >
              {tilt ? (
                <div className="card">
                  <img
                    src="./images/card-back.png"
                    alt="tilted side(pokemonlogo)"
                  />
                </div>
              ) : (
                <div>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      pokemonData.indexOf(pokemon) + 1
                    }.png`}
                    alt={pokemon.name}
                    className="w-20 h-20 mx-auto mb-2"
                  />
                  <p className="text-center">{pokemon.name}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Core;
