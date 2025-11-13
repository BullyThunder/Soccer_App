import api from "./axios";

const deleteMatch = (idMatch) =>{
    try{
    const response = api.delete(`/admin/matches/${idMatch}`, {withCredentials: true});
    return response.data;
    }
    catch(error){
         console.error("Error deleting match:", error);
         throw error;
    }
}

export default deleteMatch;