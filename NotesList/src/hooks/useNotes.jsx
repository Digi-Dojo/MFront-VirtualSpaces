import { useState, useEffect } from 'react';
import {client as axios} from '../utils/axios'

export const useNotes = ({placeId}) => {


    const [notes, setNotes] = useState([]);

    async function invert(id) {
      await axios.get(`/v1/notes/invert/${id}`);
      get();
    }

    function invertStatusNote(id) {
      return invert(id);
    }


    async function get() {
      const { data } = await axios.get(`/v1/notes/getFromPlaceId/${placeId}`);
      setNotes(data);
    }

    function getNotes() {
      if(placeId)
        get();
    }

    useEffect(() => {
      console.log(placeId);
      getNotes();
  
      const interval = setInterval(getNotes, 5000);
  
      return () => {
        clearInterval(interval);
      };
    }, [placeId]);


  return {notes, invertStatusNote};
};