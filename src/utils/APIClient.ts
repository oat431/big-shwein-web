/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/prefer-promise-reject-errors */
import axios from "axios";

const baseURL: string =
    (import.meta.env.SHWEIN_API_URL as string) ||
    "http://localhost:8006/api/v1";

const api = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("jwt_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error("Unauthorized! Token may be expired.");
            window.dispatchEvent(new Event("auth-unauthorized"));
        }
        return Promise.reject(error);
    }
);

export default api;
