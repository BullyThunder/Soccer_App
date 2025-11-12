import api from "./axios";

const deleteMatch = (idMatch) =>{
    try{
    const response = api.delete(`/admin/matches/${idMatch}`, {withCredentials: true});
    return response.data;
    }
    catch(error){
         console.error("Ошибка при удалении матча:", error);
         throw error;
    }
}

export default deleteMatch;