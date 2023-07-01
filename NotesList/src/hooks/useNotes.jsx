import { useState, useEffect } from 'react';
import {client as axios} from '../utils/axios'

export const useNotes = () => {

    const [notes, setNotes] = useState([]);

    async function invert(id) {
      await axios.get(`/v1/notes/invert/${id}`);
      get();
    }

    function invertStatusNote(id) {
      return invert(id);
    }


    async function get() {
      const { data } = await axios.get('/v1/notes/getAll');
      setNotes(data);
    }

    function getNotes() {
      get();
    }

    useEffect(() => {
      getNotes();
  
      const interval = setInterval(getNotes, 5000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);


  return {notes, invertStatusNote};
};