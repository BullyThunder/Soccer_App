import api from "./axios";

const createMatch = async(matchData) =>{
    const res = await api.post("/admin/matches", matchData,{withCredentials: true})
    return res.data;
}
export default createMatch