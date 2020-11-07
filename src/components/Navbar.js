import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RoomIcon from "@material-ui/icons/Room";
import { Link } from "react-router-dom";

const Navbar = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height: "4rem",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: " #f6f5f5",
      textDecoration: "none",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <RoomIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Places
          </Typography>
          <Button color="inherit">
            <Link className={classes.link} to="/">
              Home
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.link} to="/map">
              Map
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.link} to="/search">
              Search
            </Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.link} to="/favorite">
              Favorite
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
