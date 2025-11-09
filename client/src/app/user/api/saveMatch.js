import api from "./axios";

const savedMatch = async(dataMatches)=>{
    const res = await api.get("/admin/matches", {withCredentials: true})
    return res;
}
export default savedMatch