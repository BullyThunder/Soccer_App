import api from "./axios";

const deleteMatch = async(idMatch) =>{
    try{
        const response = await api.delete(`/admin/matches/${idMatch}`, {withCredentials: true});
        return response.data;
    }
    catch(error){
        const msg = error.response?.data?.message || 'Server error';
        console.error("Error deleting match:", msg);
        throw new Error(msg);
    }
}

export default deleteMatch;