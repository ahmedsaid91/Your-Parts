import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export const fetchItems = async () => {
  const response = await axios.get(`${API_BASE_URL}/posts?_limit=10`);
  return response.data;
};

export const fetchImg = async () => {
  const response = await axios.get(`${API_BASE_URL}/photos?_limit=10`);
  return response.data;
};

export const deletePost = async (id: number) => {
    const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`);
    console.log('Delete request successful:', response.data);
    return response.data;
};
export const updatePost = async (postId:number,postBody:string) => {

    const response = await axios.put(
      `https://jsonplaceholder.typicode.com/posts/${postId}`,
      {
        id: postId,
        title: 'Updated Title', // Update title as needed
        body: postBody, // Update body as needed
        userId: 1,
      },
      {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    return response.data;

  
};
export const addPost = async (postBody:string) => {

  const response = await axios.post(
    `https://jsonplaceholder.typicode.com/posts`,
    {
      title: 'Updated Title', // Update title as needed
      body: postBody, // Update body as needed
      userId: 1,
    },
    {
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }
  );
  return response.data;


};