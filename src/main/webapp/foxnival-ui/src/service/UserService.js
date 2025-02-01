import axios from "axios";
import { API_BASE_URL } from "../constant/AppConst";

const userServiceApi = {

    login: (username, password) => {
        return axios.post(`${API_BASE_URL}/users/${username}/${password}/login`);
    },

    getAllUsers: () => {
        return axios.get(`${API_BASE_URL}/users/fetchAll`);
    },

    addUser: (user) => {
        return axios.post(`${API_BASE_URL}/users/add`, user);
    },

    getUsersBySubscriberId: (subscriberId) => {
        return axios.get(`${API_BASE_URL}/users/subscribers/${subscriberId}`);
    },

    deleteUser: (userId) => {
        return axios.delete(`${API_BASE_URL}/users/${userId}`);
    },

    updateUserDetails: (userId, updateDetails) => {
        return axios.put(`${API_BASE_URL}/users/updateUserDetails/${userId}`, updateDetails);
    },

    getUserById: (userId) => {
        return axios.get(`${API_BASE_URL}/users/${userId}`);
    },
    
}

export default userServiceApi;