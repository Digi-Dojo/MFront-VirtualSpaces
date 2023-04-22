import { useState, useEffect } from 'react';
import {client as axios} from '../utils/axios'

export const useNotes = () => {

    const [notes, setNotes] = useState([]);

    async function post({text, status, placeId, date}) {
    const { data: { message }} = await axios.post('/v1/notes/create', {
            text: text,
            status: status,
            placeId: placeId,
            date: date
        })

        return message;

    }

    function setNote(note) {
    return post(note);
    }

    async function get() {
        const { data: { message }} = await axios.get('/v1/notes')
    
        const allNotes = [];
    
        Object
          .keys(message)
          .forEach((base) => {
            if (message[base].length === 0) allNotes.push(base)
            else message[base].forEach((specific) => {
                allNotes.push(`${specific} ${base}`)
            })
          })
    
          setNotes(allNotes)
      }
    
      function getNotes() {
        get()
      }
    
      useEffect(getNotes, [])

  return [notes, setNote];

}
