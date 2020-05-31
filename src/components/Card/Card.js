import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

const Card = ({ title, children }) => <div className={styles.container}>
  <div className={styles.header}>{title}</div>
  <div className={styles.body}>
    {children}
  </div>
</div>

Card.propTypes = {
  title: PropTypes.string.isRequired
}

export default Card;