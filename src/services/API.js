import axios from 'axios';
const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const getPosts = async () => {
  const response = await instance.get('posts');
  return response.data;
};

export const getPostbyId = async postId => {
  const response = await instance.get(`posts/${postId}`);
  return response.data;
};

export const getPostComments = async postId => {
  const response = await instance.get(`posts/${postId}/comments`);
  return response.data;
};
