import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import IconButton from '@material-ui/core/IconButton';

const styles = theme =>({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: "#3494E6",
    background: "-webkit-linear-gradient(to right, #3494E6, #EC6EAD)",
    background: "linear-gradient(to right, #3494E6, #EC6EAD)"
  },
  grow: {
    flexGrow: 1,
    margin: "auto"
  }
});

class Header extends Component{
  constructor(props){
    super(props);

    this.smoothScroll = ref => {
      ref.current.scrollIntoView({behavior: "smooth"})
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className= {classes.appBar}>
          <Toolbar>
          <div className={classes.grow}>
            <Button color="inherit" onClick={() => {this.smoothScroll(this.props.projectrefs)}}>Projects</Button>
            <Button color="inherit">Resume</Button>
          </div>    
            <IconButton href="https://github.com/jasoncorneliog" color="inherit" className={classes.socialIcons}>
              <FontAwesomeIcon icon={['fab', 'github']} />
            </IconButton>
            <IconButton href="https://www.linkedin.com/in/jasoncorneliog" color="inherit" className={classes.socialIcons}>
              <FontAwesomeIcon icon={['fab', 'linkedin']} />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);