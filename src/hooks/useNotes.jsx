import { useState, useEffect } from 'react';
import {client as axios} from '../utils/axios'

export const useNotes = () => {

    const [notes, setNotes] = useState([]);

    async function post({text, status, placeId, date}) {
      return axios.post('/v1/notes/create', {
              text: text,
              status: status,
              placeId: placeId,
              date: date
          })
          .then(message => message)
    }

    function setNote(note) {
      return post(note);
    }


    async function get() {
      const { data } = await axios.get('/v1/notes/getAll');
      setNotes(data);
    }

    function getNotes() {
      get();
    }

  useEffect(getNotes, []);

  return [notes, setNote];
};