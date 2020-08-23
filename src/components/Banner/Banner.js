import React from 'react';
import image from '../../assets/img/banner.jpeg';
import classes from './Banner.module.css';

const banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.contentBanner}>
        <h1>Conoce Colombia! </h1>
      </div>
      <div className={classes.textContainer}>
        <p className={classes.subtitleBanner}>Bienvenido, Viajero!</p>
        <p className={classes.textBanner}>
          El propósito de esta app, es crear un repositorio de todos los lugares
          por visitar en este hermoso país (Colombia). Pero esto solo lo
          logragremos con tu ayuda. Agrega todos los sitios que tu consideres
          merecen ser descubiertos o visitados!
        </p>
      </div>
    </div>
  );
};
export default banner;
