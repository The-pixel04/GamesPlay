import { createContext } from "react";

export const UserContext = createContext({
    _id: '',
    email: '',
    password: '',
    accessToken: '',
    userLoginHandler: () => null,
    userLogoutHandler: () => null
});