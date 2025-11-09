import api from "./axios";

const savedMatch = async(dataMatches)=>{
    const res = await api.post("/admin/savedMatches",dataMatches, {withCredentials: true})
    return res;
}
export default savedMatch