import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "./Button";

const Core = ({ cardLimit, setFetchStart }) => {
  const [pokemonData, setPokemonData] = useState([]); // State for fetch data from API
  const [shuffledData, setShuffledData] = useState([]); // State for duplicate fetched data into another array
  const [tilt, setTilt] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [score, setScore] = useState(0); // State for update score of the game
  const [bestScore, setBestScore] = useState(0);
  const [clickedPokemon, setClickedPokemon] = useState([]); // State for sort clicked cards
  const [isWinner, setIsWinner] = useState(false);
  const [gameActive, setGameActive] = useState(true);

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
        }, 1000);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };
    fetchPokemonData();
  }, []);

  const shufflePokemonData = () => {
    // Shuffling the Pokemon data randomly
    const newShuffledData = [...shuffledData].sort(() => Math.random() - 0.5);
    setShuffledData(newShuffledData);
  };
  const handleCardClick = (card) => {
    if (!gameActive) return; // Do nothing if game is not active
    setTilt(true);
    // Check if the pokemon has already been clicked
    if (clickedPokemon.includes(card)) {
      // Game over, reset the score and clickedPokemon array
      setScore(0);
      setClickedPokemon([]);
      // Lose Logic : If pokemon card has already clicked then
      setGameActive(false);
      setIsWinner(false);
    } else {
      // Increment the score and update clickedPokemon array
      setScore((prevScore) => prevScore + 1);
      setClickedPokemon((prevClickedPokemon) => [...prevClickedPokemon, card]);
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

  const handleQuit = () => {
    setFetchStart(false);
  };

  const handlePlayAgain = () => {
    setGameActive(true);
    setIsWinner(false);
    setScore(0);
    setClickedPokemon([]);
    shufflePokemonData();
  };

  return (
    <div className="flex-col flex items-center">
      {isLoading ? (
        <div className="flex items-center justify-center bg-black/90 fixed top-0 w-full h-full p-32">
          <h1 className=" flex items-center justify-center text-3xl text-white">
            L
            <img
              src=".\images\pokeball.png"
              alt="pokemon ball"
              className="animate-spin hover:animate-none transition-transform duration-300 ease-in-out"
            />
            ading...
          </h1>
        </div>
      ) : (
        <>
          <div className="flex items-center flex-wrap justify-center text-lg mb-2 text-center">
            <p className="m-2 text-black ">Score: {score}</p>
            <p className="m-2 text-red-500 ">🏆Best Score: {bestScore}</p>
          </div>
          <div className="card-container">
            {shuffledData.map((card, index) => (
              <div
                key={index}
                className="card"
                onClick={() => handleCardClick(card)}
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
                        pokemonData.indexOf(card) + 1
                      }.png`}
                      alt={card.name}
                      className="w-30 h-30 mx-auto mb-2 "
                    />
                    <p className="text-center">{card.name}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {isWinner && gameActive && (
            <div className=" fixed top-0 flex items-center justify-center flex-col w-full h-full p-4 bg-black/80">
              <div className="flex items-center flex-col justify-center rounded-lg text-black bg-white/70 p-5 w-[400px] h-[300px]">
                <h1 className=" text-4xl text-center my-2 mt-6 ">
                  Congratulations! You won! 🏆
                </h1>
                <p className="flex items-center justify-center text-5xl font-extrabold">
                  {cardLimit} / {cardLimit}
                </p>
                <div className="flex items-center flex-row pb-5">
                  <Button
                    typeOf="button"
                    buttonText="Play Again"
                    classForStyling="btn"
                    btnContainerStyle="btn-container"
                    onClick={handlePlayAgain}
                  />
                  <Button
                    typeOf="button"
                    buttonText="Quit"
                    classForStyling="btn"
                    btnContainerStyle="btn-container"
                    onClick={handleQuit}
                  />
                </div>
              </div>
            </div>
          )}

          {!gameActive && !isWinner && (
            <div className="flex items-center flex-col fixed top-0 justify-center bg-black/80 w-full h-full">
              <div className="flex items-center justify-center flex-col bg-white/70 rounded-lg w-[400px] h-[300px] p-5">
                <h1 className="flex items-center justify-center text-center text-black text-4xl">
                  Better luck next time!
                </h1>
                <div className="flex items-center flex-row pb-5">
                  <Button
                    typeOf="button"
                    buttonText="Play Again"
                    classForStyling="btn"
                    btnContainerStyle="btn-container"
                    onClick={handlePlayAgain}
                  />
                  <Button
                    typeOf="button"
                    buttonText="Quit"
                    classForStyling="btn"
                    btnContainerStyle="btn-container"
                    onClick={handleQuit}
                  />
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Core;
