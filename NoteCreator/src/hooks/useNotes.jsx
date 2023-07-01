import { useState, useEffect } from 'react';
import {client as axios} from '../utils/axios'

export const useNotes = () => {

    // const [notes, setNotes] = useState([]);

    async function post({text, statusAdded, placeId, date}) {
      return axios.post('/v1/notes/create', {
              text: text,
              statusAdded: statusAdded,
              placeId: placeId,
              date: date
          })
          .then(message => message)
    }

    async function addNote(note) {
      return await post(note);
    }

  //   async function invert(id) {
  //     await axios.get(`/v1/notes/invert/${id}`);
  //     get();
  //   }

  //   function invertStatusNote(id) {
  //     return invert(id);
  //   }


  //   async function get() {
  //     const { data } = await axios.get('/v1/notes/getAll');
  //     setNotes(data);
  //   }

  //   function getNotes() {
  //     get();
  //   }

  // useEffect(getNotes, []);

  return {addNote};
};