import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Hidden from '@material-ui/core/Hidden';

import mainLogo from './assets/upliftlogo_white.png';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  root: {flexGrow: 1},
  appBar: {
    opacity: 0.9,
    //zIndex: 2000,
  },
  mainLogo: {
    width: 'auto',
    height: '36px',
  },
  void: {flexGrow: 1},
  menuRoot:{
    width: '240px',
    height: '100%',
    backgroundColor: '#000000',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  aboutUsRoot: {
    backgroundColor: '#E8E8E8',
  },
  title: {
    margin: '16px 0 0 16px',
  },
  memberCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '16px 40px'
  },
  photoAvater: {
    width: '184px',
    height: '184px',
    margin: '8px',
  },
  positionText: {

  },
  nameText: {
    padding: '8px 0',
  },
  description: {
    padding: '8px 0',
  },
  avater: {
    width: '48px',
    height: '48px',
  },
}));

const Header = ()=>{
  const classes = useStyles();
  const [menu, setMenu] = useState(false);

  return(
    <div className={classes.root}>
      <AppBar elevation={1} className={classes.appBar}>
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button><img alt="mainLogo" src={mainLogo} className={classes.mainLogo}/></Button>
          </Link>
          <div className={classes.void}/>
          <Hidden smUp>
            <IconButton color='secondary' onClick={()=>{setMenu(true)}}>
              <MenuIcon/>
            </IconButton>
          </Hidden>
          <Hidden xsDown>
            <Link to="/about_us" style={{ textDecoration: 'none' }}>
              <Button><Typography color="secondary">ABOUT US</Typography></Button>
            </Link>
            <Button component="a" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdp9IGlmr40sKBNglhP4l4miEhvObej8xiZ1wNPQXhB7wfaEQ/viewform">
              <Typography color="secondary">CONTACT</Typography>
            </Button>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={menu} onClose={()=>{setMenu(false)}}>
        <div className={classes.menuRoot}>
          <div className={classes.drawerHeader}>
            <IconButton color='secondary' onClick={()=>{setMenu(false)}}>
              <ChevronRightIcon/>
            </IconButton>
          </div>
          <List>
            <Link to="/about_us" style={{ textDecoration: 'none' }}>
              <ListItem button onClick={()=>{setMenu(false)}}>
                <ListItemText>
                  <Typography color="secondary" variant="h6">ABOUT US</Typography>
                </ListItemText>
              </ListItem>
            </Link>
            <ListItem button onClick={()=>{setMenu(false)}} component="a" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/forms/d/e/1FAIpQLSdp9IGlmr40sKBNglhP4l4miEhvObej8xiZ1wNPQXhB7wfaEQ/viewform">
              <ListItemText>
                <Typography color="secondary" variant="h6">CONTACT</Typography>
              </ListItemText>
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  )
};

export default Header;