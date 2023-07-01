import { useState, useEffect } from 'react';
import {client as axios} from '../utils/axios'

export function usePlaces () {

    const [places, setPlaces] = useState([]);



    async function get() {
      const { data } = await axios.get('/v1/places/getAll');
      setPlaces(data);  
    }

    function getPlaces() {
      get()
    }

    // useEffect(getPlaces, []);

    useEffect(() => {
      // Function to fetch places
      getPlaces();
  
      // Set up the interval to fetch places every 5 seconds
      const interval = setInterval(getPlaces, 5000);
  
      // Clean up the interval when the component unmounts
      return () => {
        clearInterval(interval);
      };
    }, []);
    
    return {places};
}
