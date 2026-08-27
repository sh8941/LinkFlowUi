import api from "./api";

export const createShortUrl = async (shortUrl) => {
  const response = await
    api.post('/api/url',
      {
        'longUrl': shortUrl
      },
      {}
    );
  return response;
}

export const deleteShortUrl = async (shortUrl) => {
  const response = await
    api.delete('/api/url/' + shortUrl,
      {}
    );
  return response;
}

export const myUrls = async (page, size) => {
  const response = await api.get('/api/url/my', {
    params: {
      pageSize: size,
      page: page
    }
  });
  return response.data;
}

export const myUrlClicks = async (startDate, endDate) => {
  const response = await api.get('/clicks/my-url-clicks', {
    params: {
      startDate: startDate,
      endDate: endDate
    }
  });
  return response;
}