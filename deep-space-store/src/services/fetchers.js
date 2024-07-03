import axios from 'axios'

export const fetchOrder = async function (code) {
    try {
        const response = await axios.get(`https://api.deepspacestore.com/offers/${code}`);
        console.log(response.data)
        return response.data;
    } catch (error) {
        console.error('Error fetching order:', error);
        throw error;
    }
};