import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ButtonBase from '@material-ui/core/ButtonBase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './layouts/Header';

const styles = theme => ({
  content: {
    width: "100%",
    margin: "auto",
  },
  mainContainer: {
    background: "-webkit-linear-gradient(to right, #3494E6, #EC6EAD)",
    background: "linear-gradient(to right, #3494E6, #EC6EAD)"
  },
  appBarSpacer: theme.mixins.toolbar,
  selfImage: {
    borderRadius: "50%",
    display: "block",
    margin: "0 auto"
  },
  banner: {
    textAlign:"center",
    backgroundColor: "black",
    opacity: .7,
    width: "75%",
    margin: "auto",
    borderRadius: "10px"
  },
  bannerHeader: {
    fontSize: "66px",
    fontWeight: "bold",
    color: "white"
  },
  bannerDivider: {
    border: "none",
    borderTop: "5px dotted white",
    width: "50%",
    height: "1px",
    margin: "auto"
  },
  bannerText: {
    color: "white",
    fontSize: "30px",
    padding: "1em"
  },
  projContainer: {
    width: "50%",
    margin: "auto",
    color: "#444444",
    [theme.breakpoints.down('lg')]:{
      width: "80%"
    },
    [theme.breakpoints.down('sm')]:{
      width: "90%"
    },
  },
  projPara: {
    fontSize: "25px",
  },
  projOneGrid: {
    height:"250px",
    opacity: .85
  },
  projTwoGrid: {
    height: "250px",
    opacity: .85
  },
  projThreeGrid: {
    height: "250px",
    opacity: .85
  },
  projFourGrid: {  
    height: "250px",
    opacity: .85
  },
  projOneButton: {
    width: "100%",
    height: "100%",
    "&:hover, $projOne": {
      opacity: .9
    }
  },
  projTwoButton: {
    width: "100%",
    height: "100%",
    "&:hover, $projTwo": {
      opacity: .9
    }
  },
  projThreeButton: {
    width: "100%",
    height: "100%",
    "&:hover, $projThree": {
      opacity: .9
    }
  },
  projFourButton: {
    width: "100%",
    height: "100%",
    "&:hover, $projFour": {
      opacity: .9
    }
  },
  projOne: {
    background: "#833ab4",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    opacity: .75
  },
  projTwo: {
    backgroundColor: "#fcb045",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    opacity: .75
  },
  projThree: {
    backgroundColor: "#fd1d1d",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    opacity: .75
  },
  projFour: {
    backgroundColor: "#518EDD",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
    opacity: .75
  },
  projTitle: {
    fontSize: "45px",
  },
  footer: {
    margin: "auto",
    width: "80%",
    color: "#444444",
  },
  footerCopyRight: {
    float: "right"
  },
});

class MainPage extends Component {
  constructor(props){
    super(props);
    this.projectsRef = React.createRef();
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <Header projectrefs={this.projectsRef}/>
        <main className={classes.content}>
          <div className={classes.mainContainer}>
            <div className={classes.appBarSpacer} />
            <Grid container>
              <Grid item xs={12}>
                {/* <img src={ SelfImage }
                  alt="SelfImage"
                  className={classes.selfImage}
                /> */}
                <div className={classes.banner}>
                  <h1 className={classes.bannerHeader}>Hi, I'm Jason</h1>
                  <hr className={classes.bannerDivider} />
                  <p className={classes.bannerText}>A Student & Developer studying Software Engineering at CMU.</p>
                </div>
              </Grid>
            </Grid>
          </div>
          <div className={classes.projContainer} ref={this.projectsRef}>
            <Grid container>
              <Grid item xs={12}>
                <h1 className={classes.projHeader}>My Projects.</h1>
                <Divider />
                <p className={classes.projPara}>Here are some of the stuff I've been working on!</p>
              </Grid>     
              <Grid item md={8} sm = {12} xs={12} className={classes.projOneGrid}>
                <ButtonBase className={classes.projOneButton}>
                  <h2 className={classes.projTitle}><FontAwesomeIcon icon="comment-alt"></FontAwesomeIcon> Toons</h2>
                  <span className={classes.projOne}></span>
                </ButtonBase>
              </Grid>
              <Grid item md={4} sm = {12} xs={12} className={classes.projTwoGrid}>
                <ButtonBase className={classes.projTwoButton}>
                  <h2 className={classes.projTitle}>ABC</h2>
                  <span className={classes.projTwo}></span>
                </ButtonBase>
              </Grid>
              <Grid item md={4} sm = {12} xs={12} className={classes.projThreeGrid}>
                <ButtonBase className={classes.projThreeButton}>
                  <span className={classes.projThree}></span>
                </ButtonBase>
              </Grid>
              <Grid item md={8} sm = {12} xs={12} className={classes.projFourGrid}>
                <ButtonBase className={classes.projFourButton}>
                  <span className={classes.projFour}></span>
                </ButtonBase>
              </Grid>   
            </Grid>
          </div>
          <div className={classes.appBarSpacer} />
          <div className={classes.footer}>
            <Divider />
            <p className={classes.footerCopyRight}><FontAwesomeIcon icon="copyright"></FontAwesomeIcon> Jason Cornelio</p>
          </div>
        </main>
      </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainPage);