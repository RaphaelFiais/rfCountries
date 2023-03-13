import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

const CardCountry = ({item}) => {
  const navigate = useNavigate()
  const infoCountry = () => {
    navigate('/country')
  };

  return (
    <Container onClick={infoCountry}>
      <figure>
        <img src={item.flags.svg} alt="" />
      </figure>
      <div className="infoCountry">
        <h2>{item.name.common}</h2>
        <p><span>Population: </span>{item.population}</p>
        <p><span>Region: </span>{item.region}</p>
        <p><span>Capital: </span>{item.capital}</p>
      </div>
    </Container>
  );
};

export default CardCountry;
