import { useState } from 'react';
import {client as axios} from '../utils/axios'

export const useCreatePlace = () => {

const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const useCreatePlace = async (placeDTO) => {
    setLoading(true);

    try {
        const response = await axios.post('/v1/places/create', placeDTO);
        setLoading(false);
        setError(null);
       return response.data;
    } catch (err) {
        setLoading(false);
        setError(err.response.data.error);
        return null;
    }
};

return [ loading, error, useCreatePlace ];

}
