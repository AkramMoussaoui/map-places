import React, { useState, useEffect } from "react";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import axios from "axios";
import { useDispatch } from "react-redux";
import { ADD_MARKER } from "../Redux/Actions/markerActions";
import { ADD_FAVORITE } from "../Redux/Actions/favoriteActions";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginBottom: "3rem",
    boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
  },
});

const Venue = ({ venue, search }) => {
  const classes = useStyles();
  const [image, setImage] = useState();
  const dispatch = useDispatch();
  const random = (max) => parseInt(Math.random() * max);

  const addMarker = (actionType) => {
    dispatch({
      type: actionType,
      payload: {
        id: venue.id,
        lon: venue.location.lng,
        lat: venue.location.lat,
        name: venue.name,
      },
    });
  };

  useEffect(() => {
    const getImage = async () => {
      const response = await axios.get(
        "https://api.unsplash.com/photos/random",
        {
          params: {
            client_id: process.env.REACT_APP_UNSPLASH_TOKEN,
            query: search,
            count: 30,
          },
        }
      );
      setImage(response.data[random(30)].urls.small);
    };
    getImage();
  }, []);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {venue.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          onClick={() => addMarker(ADD_MARKER)}
          size="small"
          color="primary"
        >
          Set Marker
        </Button>
        <Button
          onClick={() => addMarker(ADD_FAVORITE)}
          size="small"
          color="primary"
        >
          Favorite
        </Button>
      </CardActions>
    </Card>
  );
};

export default Venue;
