import axios from "axios";

const API = {
    key: () => axios.get("https://randomuser.me/api/?results=100"),
};
export default API
