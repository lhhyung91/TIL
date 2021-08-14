import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const StyledTime = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* color: #082766; */
  /* color: #ffffff; */
  /* color: #333333; */
  font-size: 100px;
  font-weight: 700;
  color: #ffffff;
  text-shadow: 0 0 7px #fff, 0 0 10px #fff, 0 0 21px #fff, 0 0 42px #082766,
    0 0 82px #082766, 0 0 92px #082766, 0 0 102px #082766, 0 0 151px #082766;
`;

export default function Time() {
  // const toDay = new Date();
  // const hours = toDay.getHours();
  // const minutes = toDay.getMinutes();
  // const second = toDay.getSeconds();

  // const [time, setTime] = useState(null);

  // // const localTime = toDay.toLocaleTimeString();
  // const localTime = moment().format("hh:mm:ss");

  // setInterval(() => {
  //   setTime(localTime);
  // }, 1000);

  const [time, setTime] = useState();

  // const date = new Date();
  // const localTime = date.toLocaleTimeString();

  const getTime = () => {
    const date = new Date();
    const localTime = date.toLocaleTimeString();
    setTime(localTime);
  };

  useEffect(() => {
    const timerId = setInterval(() => {
      getTime();
    }, 1000);
    return () => {
      clearInterval(timerId);
      // setInterval(() => {
      //   getTime();
      // }, 1000);
    };
  }, []);

  return <StyledTime>{time}</StyledTime>;
}
