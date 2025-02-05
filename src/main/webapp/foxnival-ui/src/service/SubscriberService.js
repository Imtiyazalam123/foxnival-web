import axios from "axios";
import { API_BASE_URL } from "../constant/AppConst";

const subscriberServiceApi = {

    checkEmail: (email) => {
        return axios.get(`${API_BASE_URL}/subscribe/checkEmail/${email}`);
    }
}

export default subscriberServiceApi;