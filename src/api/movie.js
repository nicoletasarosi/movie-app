import sendRequest from './sendRequest';

export const getMoviesByName = async (name, page) => {
  try {
    const response = await sendRequest({
      method: 'GET',
      params: {s: name.toLowerCase(), page},
    });

    return response.data;
  } catch (err) {
    alert(JSON.stringify(err));
    console.error('error', JSON.stringify(err));
  }
};

export const getMovieById = async id => {
  try {
    const response = await sendRequest({
      method: 'GET',
      params: {i: id.toLowerCase()},
    });

    return response.data;
  } catch (err) {
    alert(JSON.stringify(err));
    console.error('error', JSON.stringify(err));
  }
};
