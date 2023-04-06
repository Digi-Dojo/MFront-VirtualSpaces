import axios from '../utils/axios'

export const usePlaces = () => {

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

  return setPlace;

}
