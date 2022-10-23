import axios from "axios"

const baseUrl = 'https://craft-comfort-server.onrender.com';

export const getData = async (url) => {
    const res = await axios.get(baseUrl + url);
    return res;
}