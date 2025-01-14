import axios from "axios";
import { API_BASE_URL } from "../constant/AppConst";

const userServiceApi = {

    login: (username, password) => {
        return axios.post(`${API_BASE_URL}/users/${username}/${password}/login`);
    },

    getAllUsers: () => {
        return axios.get(`${API_BASE_URL}/users/fetchAll`);
    },


}

export default userServiceApi;