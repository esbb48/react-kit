// import axios from 'axios';

// const server = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   'Content-Type': 'application/json',
// });

// export default server;

const mockPromise = (path, data) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ path, data });
    }, 1000);
  });

export const mockServer = {
  get: mockPromise,
  post: mockPromise,
  put: mockPromise,
  delete: mockPromise,
};
