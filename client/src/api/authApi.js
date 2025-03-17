import requester from "../utils/requester.js"

const baseUrl = 'http://localhost:3030/users'

export const useLogin = () => {
    const login = async (email, password) => {
        const result = await requester.post(`${baseUrl}/login`, { email, password });

        return result
    }

    return {
        login
    }
}