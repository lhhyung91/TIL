import GetCardInfo from "components/CardInfo/GetCardInfo";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledCardImageContainer = styled.ul`
  /* margin-top: 50px; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 100vw;
  height: 100%;
  background-image: url(/assets/bg3.jpg);
  /* background-repeat: no-repeat; */
  background-size: 100%;
  /* background-position: cover; */
`;

const StyledCardImageList = styled.li`
  width: 500px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function CardImageList() {
  const [cardImageList, setCardImageList] = useState(null);

  useEffect(() => {
    const getfetch = async () => {
      const data = await GetCardInfo();
      // setCardImageList(data[0].card_images[0].image_url);
      setCardImageList(data);
    };
    getfetch();
  }, []);

  if (!cardImageList) return null;
  console.log(cardImageList);
  console.log(cardImageList.map((data) => data.id));
  console.log(cardImageList.length);
  return (
    <StyledCardImageContainer>
      {cardImageList.map((data) => (
        <StyledCardImageList key={data.id} id={data.id}>
          <img alt={data.name} src={data.card_images[0].image_url}></img>;
        </StyledCardImageList>
      ))}
    </StyledCardImageContainer>
  );
}
