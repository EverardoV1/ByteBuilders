import axios from "axios";

const api = axios.create({
    baseURL: "https://bytebuilders-app.onrender.com/auth",
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;
