import requester from "../../utils/requester.js";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export default {
    create(gameData) {
        return requester.post(baseUrl, gameData);
    }
}