import React, { Component } from 'react';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './App.css';
import malone from './malone2.png';
import Container from './Container';
import Input from './Input';
import Posty from './Components/Posty'


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #a2aec1;
  padding-bottom: 15px;
  margin-bottom: 10px;
`
const Block = styled.div`
  display: flex;
`

class App extends Component {
  render() {
    const {classes} = this.props;
    console.log(this.props)
    return (
        <Container>
          <marquee width="100%" direction="right">
          Post Malone is the best ever.
          </marquee>
          <img src={malone} className="App-logo" alt="logo" />
          <Center>
          <Input/>
          <Button variant="contained" color="primary" className={classes.button}>
            Boast
          </Button>
          <Button variant="contained" color="primary">
            Roast
          </Button>
        </Center>
        <Posty/>
        <marquee width="100%" direction="right">
          Post Malone is the best ever.
          </marquee>
        </Container>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
