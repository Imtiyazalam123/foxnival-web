import axios from "axios";
import { API_BASE_URL } from "../constant/AppConst";

const forgotpasswordApi = {

    sendVerificationCode: (email) => {
        return axios.post(`${API_BASE_URL}/generateOtp/${email}`);
    },

    verifyOtp: (email, otp) => {
        return axios.post(`${API_BASE_URL}/verifyOtp/${email}/otp/${otp}`);
    },

    resetPassword: (email, password) => {
        return axios.put(`${API_BASE_URL}/resetPassword/${email}/password/${password}`);
    },
}

export default forgotpasswordApi;