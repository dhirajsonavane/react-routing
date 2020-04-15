import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },

  button: {
    textDecoration: "none",
    color: '#fff',
    paddingLeft: 10
  },
}));

const NavBar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            React Material UI - Routing
          </Typography>

          <Link to="/" className={classes.button}>
            Home
          </Link>
          <Link to="/contact" className={classes.button}>
            Contact
          </Link>
          <Link to="/users" className={classes.button}>
            Users
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
