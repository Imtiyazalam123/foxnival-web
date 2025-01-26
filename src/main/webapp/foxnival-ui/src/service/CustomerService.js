import axios from "axios";
import { API_BASE_URL } from "../constant/AppConst";

const customerServiceApi = {

    addCustomerDetails: (customerDetails) => {
        return axios.post(`${API_BASE_URL}/customers/add`, customerDetails);
    },

    getCustomerDetailsBySubscriberId: (subscriberId) => {
        return axios.get(`${API_BASE_URL}/customers/subscribers/${subscriberId}`);
    },
    
    updateCustomerDetails: (customerId, subscriberId, customerDetails) => {
        return axios.put(`${API_BASE_URL}/customers/${customerId}/subscribers/${subscriberId}`, customerDetails);
    },

    deleteCustomerById: (customerId) => {
        return axios.delete(`${API_BASE_URL}/customers/${customerId}`);
    }
}

export default customerServiceApi; 