import { useState } from 'react';
import {client as axios} from '../utils/axios'

export const useCreateNotes = () => {

const [loading, setLoading] = useState(false);
const [error, setError] = useState(null);

const useCreateNote = async (NoteDTO) => {
    setLoading(true);

    try {
        const response = await axios.post('/v1/notes/create', NoteDTO);
        setLoading(false);
        setError(null);
       return response.data;
    } catch (err) {
        setLoading(false);
        setError(err.response.data.error);
        return null;
    }
};

return [ loading, error, useCreateNote ];

}
