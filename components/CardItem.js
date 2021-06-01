import React from 'react';
import styles from '../styles/Card.module.css'

function CardItem(props) {
  return (
    <>
      <li className={styles.cards__item}>
        <a className={styles.cards__item__a} to={props.path}>
          <figure className={styles.cards__item__pic__wrap} data-category={props.label}>
            <img
              className={styles.cards__item__img}
              alt='Schems'
              src={props.src}
            />
          </figure>
          <div className={styles.cards__item__info}>
            <h5  className={styles.cards__item__text}>{props.text}</h5>
          </div>
        </a>
      </li>
    </>
  );
}

export default CardItem;
