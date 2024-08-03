import React from 'react';
import styles from './App.module.css';
import ColorPanel from "./components/colorPanel/index";



function App() {

  const initialColor = {
    red: 100,
    green: 150,
    blue: 200,
    alpha: 0.8
  };
  
  return (
    <div className={styles.App}>
      <ColorPanel color={initialColor}></ColorPanel>
    </div>
  );
}

export default App;
