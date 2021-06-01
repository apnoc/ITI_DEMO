import React from 'react';
import styles from '../styles/Card.module.css'
import CardItem from './CardItem';

function Cards() {
  return (
    <div className={styles.cards}>
      <h3 className={styles.header} >Schemes Of ITI</h3>
      <div className={styles.cards__container}>
        <div className={styles.cards__wrapper}>
          <ul className={styles.cards__items}>
            
            <CardItem
              src='images/img-4.jpg'
              text='APPRENTICESHIP TRAINING SCHEME '            
              path='/home'
            />
            <CardItem
              src='images/img-2.jpg'
              text='  CENTRE OF EXCELLENCE SCHEME(COE)'
              label='Adventure'      
              path='/home' 
           /> 
              <CardItem
              src='images/img-6.jpg'
              text=' MODULAR EMPLOYABLE SKILL (MES)   '      
             path='/home'
            />
          </ul>
          <ul className={styles.cards__items}>
            
            <CardItem
              src='images/img-3.jpg'
              text='PUBLIC PRIVATE PARTNERSHIP(PPP)'      
              path='/home'
            />
            <CardItem
              src='images/img-1.jpg'
              text=' Private Training Providers (PTPs)'                    
              path='/home'
            />
               <CardItem
              src='images/img-4.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'        
             path='/services'
              />            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
