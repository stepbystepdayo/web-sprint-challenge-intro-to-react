// Write your Character component here
import React from "react";
import styled from "styled-components";

const Character = (props) => {
  const { data } = props;
  //   console.log(data);
  return (
    <Information>
      <Name>🚀 {data.name} 👾</Name>
      <h3>Gendar: {data.gender}</h3>
      <h3>Height: {data.height}</h3>
      <h3>Mass: {data.mass}</h3>
      <h3>Birth Year:{data.birth_year}</h3>
      <h3>Eye Color: {data.eye_color}</h3>
      <h3>Hair Color: {data.hair_color}</h3>
      <h3>Skin Color: {data.skin_color}</h3>
    </Information>
  );
};

export default Character;

const Information = styled.h2`
  background-color: black;
  color:white;
  filter: blur
  height: 30%;
  width: 33%;
  margin: 5px auto;
`;

const Name = styled.h2`
color: yellow;
`
