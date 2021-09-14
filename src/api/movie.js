import sendRequest from './sendRequest';

export const getMoviesByName = async (name, page) => {
  const response = await sendRequest({
    method: 'GET',
    params: {s: name.toLowerCase(), page},
  });
  return response.data;
};

export const getMovieById = async id => {
  const response = await sendRequest({
    method: 'GET',
    params: {i: id.toLowerCase()},
  });

  return response.data;
};
