import { useState, useEffect } from 'react';
import {client as axios} from '../utils/axios'

export function usePlaces () {

    const [places, setPlaces] = useState([]);

    async function post({startupId, type}) {

      return axios.post('/v1/places/create', {
          startupId: startupId,
          type: type
      }).then(response => {

        getPlaces();
        return response;

      })
    }

    function setPlace(place) {
      return post(place);
    }

    async function get() {
      const { data } = await axios.get('/v1/places/getAll');
      setPlaces(data);  
    }

    function getPlaces() {
      get()
    }

    useEffect(getPlaces, []);
    
    return [places, setPlace];
}
