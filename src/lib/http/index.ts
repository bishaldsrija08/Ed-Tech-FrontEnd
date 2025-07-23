import axios from "axios";

const API = axios.create({
    baseURL: "http://localhost:3000/api/",
    headers: {
        "Content-Type": "application/json", //frontendle backendma kasto data pathako xa
        "Accept": "application/json" // Backendle bata receive garne format
    }
})

export default API