import { useState, useEffect } from 'react';
import {client as axios} from '../utils/axios'

export const usePlaces = ({placeId}) => {

    const [place, setPlace] = useState([]);

    async function get() {
      const { data } = await axios.get(`/v1/places/${placeId}`);
      setPlace(data);
    }

    function getPlace() {
      if(placeId)
        get();
    }

    useEffect(() => {
      getPlace();
      console.log(placeId)

    }, [placeId]);


  return {place}

}