import React, { useState } from "react";
import axios from "axios";
import Venue from "./Venue";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  container: {
    width: "80%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  cards: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  form: {
    margin: "3rem 0",
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
}));

const Search = () => {
  const classes = useStyles();
  const [input, setInput] = useState();
  const [venues, setVenues] = useState();

  const getVenues = async () => {
    const response = await axios.get(
      "https://api.foursquare.com/v2/venues/search",
      {
        params: {
          client_id: process.env.REACT_APP_FOURSQUARE_ID,
          client_secret: process.env.REACT_APP_FOURSQUARE_SECRET,
          query: input,
          ll: "36.7665832,2.954818",
          radius: 100000,
          v: 20201025,
        },
      }
    );
    setVenues(response.data.response.venues);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getVenues();
  };

  return (
    <div className={classes.container}>
      <Paper component="form" className={classes.form}>
        <InputBase
          className={classes.input}
          placeholder="Search Venues"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={(e) => setInput(e.target.value)}
        />
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          onClick={(e) => handleSearch(e)}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <div className={classes.cards}>
        {venues &&
          venues.map((venue) => {
            return <Venue key={venue.id} venue={venue} search={input} />;
          })}
      </div>
    </div>
  );
};

export default Search;
