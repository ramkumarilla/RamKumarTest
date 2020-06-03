import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const drawerWidth = 200;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
});

class PermanentDrawer extends React.Component {
  state = {
    anchor: 'left',
  };

  handleChange = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

   handleMenu = (event) => {
     console.log('handel menu called');
     
   
  };

  render() {
    const { classes } = this.props;
    const { anchor } = this.state;

    return (
      
        <AppBar
                    position="absolute"
                    className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
                >
                    <Toolbar>
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" component='a' href="/home" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
                    {/* <Typography variant="title" color="inherit" noWrap>
                     Home
                    </Typography> */}
          <Button color="inherit" component='a' href="/home">Home </Button>
          <Button color="inherit" component='a' href="/vendor">VendorList</Button>
          <Button color="inherit" component='a' href="/add-vendor">Add Vendor</Button>

                    </Toolbar>
                </AppBar>
    );
  }
}

PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);