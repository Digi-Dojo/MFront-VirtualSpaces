import { useState, useEffect } from 'react';
import {client as axios} from '../utils/axios'

export const useNotes = ({placeId}) => {

    async function post({text, statusAdded, date}) {
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


  return {addNote};
};