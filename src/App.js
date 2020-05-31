import React from 'react';
import styles from './App.module.css';
import Header from './components/Header';

const App = () => {
  return (
    <div className={styles.container}>
      <Header></Header>
    </div>
  );
}

export default App;
