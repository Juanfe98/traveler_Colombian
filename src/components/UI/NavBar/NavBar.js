import React from 'react';
import classes from './NavBar.module.css';

const navBar = (props) => {
  return (
    <nav className={classes.NavBar}>
      <section className={classes.info}>
        <img
          src="https://codetheweb.blog/assets/img/icon2.png"
          alt="Logo App"
        />
        <h1>Conoce Colombia &mdash; La Aplicación Para Viajeros</h1>
      </section>
      <ul>
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 1</a>
        </li>
        <li>
          <a href="#">Link 1</a>
        </li>
      </ul>
    </nav>
  );
};

export default navBar;
