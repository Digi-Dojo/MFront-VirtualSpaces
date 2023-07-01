import { useState, useEffect } from 'react';
import {client as axios} from '../utils/axios'

export function usePlaces () {

    const [places, setPlaces] = useState([]);

    async function post({startupId, type}) {

      return await axios.post('/v1/places/create', {
          startupId: startupId,
          type: type
      })
    }

    async function addPlace(place) {
      return post(place);
    }
    
    return {addPlace};
}
