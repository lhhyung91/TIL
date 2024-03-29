import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import styled from 'styled-components';

const StyleImage = styled.img`
  width: 100vw;
  height: 100vh;
  /* text-align: center; */
`;

export default function BackGroundImage() {
  const { REACT_APP_IMAGE_API_KEY } = process.env;
  const [image, setImgae] = useState(null);

  const apiAddress = 'https://api.unsplash.com';
  const accessKey = REACT_APP_IMAGE_API_KEY;

  const getData = async () => {
    const res = await axios.get(
      `${apiAddress}/photos/random?client_id=${accessKey}&query=nature&count=1`
    );
    setImgae(res.data[0].urls.regular);
  };

  useEffect(() => {
    getData();
  }, []);

  return <StyleImage src={image} alt='image' style={{ vw: 100 }}></StyleImage>;
}
