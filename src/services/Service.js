import axios from "axios";

const baseUrl = 'http://localhost:8000';

export default axios.create({
    baseUrl,
})