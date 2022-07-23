import axios from 'axios';

const requestRd = axios.create({
    baseURL: process.env.REACT_APP_MOCK_BASE_URL,
});

export const get = async (path, options = {}) => {
    const response = await requestRd.get(path, options);
    return response.data;
};

export default requestRd;
