import { useState, useEffect } from 'react';
import axios from '../utils/axios'

export const usePlaces = () => {

    const [places, setPlaces] = useState([]);

    async function post({startupId, type}) {
    const { data: { message }} = await axios.post('/places/add', {
        startupId: startupId,
        type: type
    })

    return message;

    }

    function setPlace(place) {
    return post(place);
    }

    async function get() {
        const { data: { message }} = await axios.get('/places')
    
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

}
