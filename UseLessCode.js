// From shazamCoreApi
// No longer required
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '68742e103cmshf9298f33b2d9fadp1c1eafjsn9e8f2bdbca19',
    'X-RapidAPI-Host': 'shazam-core.p.rapidapi.com',
  },
};
fetch('https://shazam-core.p.rapidapi.com/v1/charts/world', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));