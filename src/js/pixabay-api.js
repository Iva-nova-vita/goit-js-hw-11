const API_KEY = '43802191-554d301bd26f1aa24348b3f09';

export default function fetchPhotosByQuery(querySearch) {

    const searchParams = new URLSearchParams({
      key: API_KEY,
      q: querySearch,
      orientation: 'horizontal',
      safesearch: true,
    });
  
    let URL = `https://pixabay.com/api/?${searchParams}`;
  
    return fetch(URL)
      .then(res => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      });
  }