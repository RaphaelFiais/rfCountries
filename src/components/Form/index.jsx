import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container, ContainerCountry } from "./style";
import CardCountry from "../CardCountry";

const CountryForm = () => {
  const [allCountry, setAllCountry] = useState([]);
  const [search, setSearch] = useState("");
  const [countryFiltred, setCountryFiltred] = useState([]);
  const [regionLabel, setRegionLabel] = useState("");

  useEffect(() => {
    const getCountry = async () => {
      await fetch("https://restcountries.com/v3.1/all")
        .then((resp) => resp.json())
        .then((data) => setAllCountry(data));
    };
    getCountry();
  }, []);

  const handleChange = async (event) => {
    const region = event.target.value;
    setRegionLabel(event.target.value);
    region
      ? await fetch(`https://restcountries.com/v3.1/region/${region}`)
          .then((resp) => resp.json())
          .then((data) => setAllCountry(data))
      : await fetch("https://restcountries.com/v3.1/all")
          .then((resp) => resp.json())
          .then((data) => setAllCountry(data));
  };

  const countryFilter = allCountry.filter((country) =>
    country.name.common.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <Container>
      <div className="search">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a country..."
        />
        <Box sx={{ minWidth: 140 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Region</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={regionLabel}
              label="Region"
              onChange={handleChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value={"africa"}>Africa</MenuItem>
              <MenuItem value={"america"}>Americas</MenuItem>
              <MenuItem value={"europe"}>Europe</MenuItem>
              <MenuItem value={"asia"}>Asia</MenuItem>
              <MenuItem value={"oceania"}>Oceania</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
      <ContainerCountry>
        {countryFiltred.length > 0
          ? countryFiltred.map((item) => (
              <CardCountry key={item.name.common} item={item} />
            ))
          : countryFilter.map((item) => (
              <CardCountry key={item.name.common} item={item} />
            ))}
      </ContainerCountry>
    </Container>
  );
};

export default CountryForm;
