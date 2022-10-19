import axios from "axios"

const baseUrl = 'http://localhost:5000';

export const getData = async (url) => {
    const res = await axios.get(baseUrl + url);
    return res;
}