import axios from "axios";
    
export async function getRandomUser() {
    const options = {
        method: 'GET',
        url: 'https://axesso-walmart-data-service.p.rapidapi.com/wlm/walmart-lookup-product',
        params: {
          url: 'https://www.walmart.com/ip/Media-Remote-for-PlayStation-5/381848762'
        },
        headers: {
          'X-RapidAPI-Key': '3aecde6be5mshd115bfbf03535f2p136ec1jsne38728eab5e6',
          'X-RapidAPI-Host': 'axesso-walmart-data-service.p.rapidapi.com'
        }
      };
      
      try {
          const response = await axios.request(options);
          console.log(response.data);
      } catch (error) {
          console.error(error);
      }
}