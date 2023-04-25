import { useState, useEffect } from 'react';
import {client as axios} from '../utils/axios'

export const usePlaces = () => {

    const [places, setPlaces] = useState([]);
/*
    async function post({startupId, type}) {
    const { data: { message }} = await axios.post('/v1/places/create', {
        startupId: startupId,
        type: type
    })

    return message;

    }

    function setPlace(place) {
      return post(place);
    }

*/

    async function fetch() {
      const { data } = await axios.get('/v1/places/getAll');
      setPlaces(data);
    }

    function fetchNotes() {
      fetch();
    }

      useEffect(fetchNotes, []);

      return [places, setPlaces];
};
/*

    async function get() {
      const { data: { message }} = await axios.get('/v1/places')
    
      const allPlaces = [];
    
      Object
        .keys(message)
        .forEach((base) => {
          if (message[base].length === 0) allPlaces.push(base)
          else message[base].forEach((specific) => {
            allPlaces.push(`${specific} ${base}`)
          })
        })
  
        setPlaces(allPlaces)
    }
    
    function getPlaces() {
      get()
    }
    
    useEffect(getPlaces, [])

    return [places, setPlace];



}*/
