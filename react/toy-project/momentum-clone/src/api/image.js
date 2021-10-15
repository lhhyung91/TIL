import axios from 'axios';

export default async function getList() {
  const { REACT_APP_IMAGE_API_KEY } = process.env;

  const apiAddress = 'https://api.unsplash.com';
  const accessKey = REACT_APP_IMAGE_API_KEY;
  const res = await axios.get(
    `${apiAddress}/photos/random?client_id=${accessKey}&query=nature&count=1`
  );
  return res;
}
