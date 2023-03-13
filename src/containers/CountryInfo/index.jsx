import { useLocation, useNavigate, useParams } from "react-router-dom";

const index = ({ item }) => {
  const navigate = useNavigate();
  const { name } = useParams(); 
  const back = () => {
    navigate("/");
  };
  return (
    <div>
      <div>
        <button onClick={back}> Back </button>
        <img src="" alt="" />
        <div>
          <h1> {item} </h1>
          <p>Native Name: </p>
          <p>Populatio: </p>
          <p>Region: </p>
          <p>Sub Region: </p>
          <p>Capital: </p>
          <p>Top Level </p>
          <p>Currencies: </p>
          <p>Languages: </p>
        </div>
        <div>
          <p>Border Countries: </p>
        </div>
      </div>
    </div>
  );
};

export default index;
