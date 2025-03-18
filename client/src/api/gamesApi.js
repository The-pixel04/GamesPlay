import { useEffect, useState } from "react";
import requester from "../utils/requester.js";
import useAuth from "../hooks/useAuth.js";

const baseUrl = 'http://localhost:3030/data/games';

export default {
    async deleteGame(id) {
        return requester.delete(`${baseUrl}/${id}`);
    },

}

export const useCreateGame = () => {
    const { request } = useAuth();

    const create = (gameData) => {
        return request.post(baseUrl, gameData);
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

export const useEditGame = () => {
    const { request } = useAuth();

    const edit = (id, gameData) => {
        return request.put(`${baseUrl}/${id}`, { ...gameData, _id: id });
    };

    return {
        edit
    }
}

export const useDeleteGame = () => {
    const { request } = useAuth();

    const deleteGame = (gameData) => {
        return request.delete({ baseUrl }, gameData);
    };

    return {
        deleteGame
    }
}