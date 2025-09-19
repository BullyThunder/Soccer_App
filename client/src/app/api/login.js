import api from "./axios";

export const login = async(loginData) =>{
    const res = await api.post("/login", loginData, {withCredentials: true});
    return res.data;
}