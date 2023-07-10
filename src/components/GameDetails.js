import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import games from "../data/games";

const GameDetailsContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const GameTitle = styled.h2`
  color: #333;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

const GameDescription = styled.p`
  color: #666;
  padding: 20px;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Cover = styled.img`
  height: 150px;
`;

const GameDetails = () => {
  const { id } = useParams();
  const gameId = Number(id);
  const game = games.find((game) => game.id === gameId);

  if (!game) {
    return <div>Game not found.</div>;
  }

  return (
    <GameDetailsContainer>
      <GameTitle>
        {game.name} <Cover src={game.image} alt="Game Cover" />
      </GameTitle>
      <GameDescription>{game.description}</GameDescription>
      <b>Price: £{game.price}</b>
    </GameDetailsContainer>
  );
};

export default GameDetails;
