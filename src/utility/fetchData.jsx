export const exerciseOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': import.meta.env.VITE_RAPID_API_KEY,
    'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com',
  },
};

export const fetchData = async (url, option) => {
  try {
    const res = await fetch(url, option);
    if (!res.ok) {
      throw new Error(`HTTP Error! Status: ${res.status}`);
    }
    return res.json();
  } catch (err) {
    console.error(`Custom Error: ${err.message} 💥`);
    throw err;
  }
};
