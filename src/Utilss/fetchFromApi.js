    import axios from 'axios';
   const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
   

  



  const options = {
    
    url: BASE_URL,
    params: {
     
      maxResults: '50'
    },
    headers: {
      'content-type': 'application/octet-stream',
      'X-RapidAPI-Key':'9bb1ca68e3msh4e50d200a38ead9p163e9fjsn3563576f88ca',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  
    return data;
  };