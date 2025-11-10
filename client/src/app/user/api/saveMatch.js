import api from "./axios";

const savedMatch = async()=>{
    const res = await api.get("/admin/matches", {withCredentials: true})
    return res.data;
}
export default savedMatch