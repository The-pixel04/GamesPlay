import requester from "../../utils/requester.js";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export default {
    create(gameData) {
        return requester.post(baseUrl, gameData);
    },
    async getAll() {
        const result = await requester.get(baseUrl);

        const games = Object.values(result);
        return games;
    },
    async getOne(id) {
        const game = requester.get(`${baseUrl}/${id}`);
        return game;
    },
}