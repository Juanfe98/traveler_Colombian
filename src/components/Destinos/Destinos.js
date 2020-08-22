import React from 'react';
import classes from './Destinos.module.css';
import img from '../../assets/img/ciudad_perdida.jpeg';
const destinos = (props) => {
  let card = null;
  const destinos = props.destinos;
  if (destinos !== null) {
    card = destinos.map((destinos) => {
      return destinos.location.map(({ place }) => {
        return place.map((place, index) => {
          return (
            <div className={classes.cardGridSpace} key={index}>
              <div className={classes.num}>{place.id}</div>
              <a
                className={classes.card}
                href="https://codetheweb.blog/2017/10/06/html-syntax/"
                style={{ backgroundImage: 'url(' + img + ')' }}
              >
                <div>
                  <h1>{place.name}</h1>
                  <p>{place.detail}</p>
                  <div className={classes.date}>6 Oct 2017</div>
                  <div className={classes.tags}>
                    <div className={classes.tag}>TRAVEL</div>
                    <div className={classes.tag}>COLOMBIA</div>
                  </div>
                </div>
              </a>
            </div>
          );
        });
      });
    });
  }
  return (
    <div>
      <section className={classes.cardsWrapper}>
        {/* desde aqui */}
        {card}
        {/* Hasta aqui */}
      </section>
    </div>
    // ,,,,,,,,,,,,,,,,,,,,
    // <div className={classes.Container}>
    //   {/* //Aca mapeo la informacion de los lugares */}
    //   <div styles="backgroundColor=#000000">
    //     {/* la imagen y el titulo debe ser enviada via props, despues de hacer una peticion al back */}
    //     <img
    //       src={img}
    //       alt="props.ciudad"
    //     />
    //     <h1 className={classes.CardTittle}>Titulo</h1>
    //   </div>
    //   <div styles="backgroundColor=#000000">
    //     {/* la imagen y el titulo debe ser enviada via props, despues de hacer una peticion al back */}
    //     <img src={img} alt="props.ciudad" />
    //     <h1 className={classes.CardTittle}>Titulo</h1>
    //   </div>
    //   <div styles="backgroundColor=#000000">
    //     {/* la imagen y el titulo debe ser enviada via props, despues de hacer una peticion al back */}
    //     <img src={img} alt="props.ciudad" />
    //     <h1 className={classes.CardTittle}>Titulo</h1>
    //   </div>
    //   <div styles="backgroundColor=#000000">
    //     {/* la imagen y el titulo debe ser enviada via props, despues de hacer una peticion al back */}
    //     <img src={img} alt="props.ciudad" />
    //     <h1 className={classes.CardTittle}>Titulo</h1>
    //   </div>
    //   <div></div>
    //   <div></div>
    // </div>
  );
};
export default destinos;
