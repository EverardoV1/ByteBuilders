import axios from "axios";

const api = axios.create({
    baseURL: "https://bytebuilders-app.onrender.com",
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;
