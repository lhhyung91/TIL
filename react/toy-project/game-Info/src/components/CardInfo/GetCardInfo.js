import axios from "axios";
import React from "react";

export default async function GetCardInfo() {
  // const response = await axios.get(
  //   "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Dark Magician"
  // );

  // const response = await axios.get(
  //   "https://db.ygoprodeck.com/api/v7/cardinfo.php"
  // );

  // const response = await axios.get(
  //   "https://db.ygoprodeck.com/api/v7/cardinfo.php?name=Lava Golem"
  // );

  //   const response = await axios.get(
  //     `    https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${searchWord}
  // `
  //   );

  const response = await axios.get(
    "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-eyes"
  );

  const allCard = response.data.data;

  // console.log(response);
  // console.log(response.data.data.id);
  console.log(response.data.data[0]);
  // console.log(response.data.data[0].card_images[0].image_url);

  return allCard;
}
