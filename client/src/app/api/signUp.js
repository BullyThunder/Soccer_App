import api from "./axios";

export const signUp = async(signUpData) =>{
    const res = await api.post("/signup", signUpData, {withCredentials: true});
    return res.data;
}