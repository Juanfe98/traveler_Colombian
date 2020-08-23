import React, { Component } from 'react';
import NavBar from '../UI/NavBar/NavBar';
import Destinos from '../../components/Destinos/Destinos';
import Banner from '../Banner/Banner';
import axios from 'axios';
import classes from './TravelerHelper.module.css';

class TravelerHelper extends Component {
  state = {
    flag: true,
    destinos: null,
  };

  componentDidMount() {
    if (this.state.destinos === null) {
      axios
        .get('https://travelcolombia.firebaseio.com/results.json')
        .then((response) => {
          console.log(response.data);
          this.setState({ destinos: response.data });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <Banner />
        <Destinos destinos={this.state.destinos} />
      </div>
    );
  }
}
export default TravelerHelper;
