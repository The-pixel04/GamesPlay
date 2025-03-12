import requester from "../../utils/requester.js";

const baseUrl = 'http://localhost:3030/jsonstore/comments';

export default {
    crete(email, gameId, comment) {
        return requester.post(`${baseUrl}`, { email, gameId, comment });
    }
};