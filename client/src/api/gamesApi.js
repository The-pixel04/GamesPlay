import { useEffect, useState } from "react";
import requester from "../utils/requester.js";

const baseUrl = 'http://localhost:3030/data/games';

export default {
    async deleteGame(id) {
        return requester.delete(`${baseUrl}/${id}`);
    },
    async edit(id, gameData) {
        return requester.put(`${baseUrl}/${id}`, { ...gameData, _id: id });
    }
}

export const useCreateGame = () => {
    const create = (gameData) => {
        return requester.post(baseUrl, gameData);
    }

    return {
        create
    }
};

export const useGames = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        requester.get(baseUrl)
            .then(result => setGames(result))
    }, []);

    return {
        games
    }
};

export const useGame = (gameId) => {
    const [game, setGame] = useState({});

    useEffect(() => {
        requester.get(`${baseUrl}/${gameId}`)
            .then(setGame)
    }, [gameId]);

    return {
        game
    }
};