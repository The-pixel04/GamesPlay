import requester from "../utils/requester.js";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    crete(email, gameId, comment) {
        return requester.post(`${baseUrl}`, { email, gameId, comment });
    },
    async getAll(gameId) {
       const comments = await requester.get(`${baseUrl}`);

       const gameComments =  Object.values(comments).filter(c => c.gameId === gameId);
       return gameComments;
    }
};