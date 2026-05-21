import axios from "axios";

const api = axios.create({
    baseURL: "https://becausewecare.onrender.com/auth",
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;