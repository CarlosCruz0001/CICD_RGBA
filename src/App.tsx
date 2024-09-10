import React from 'react';
import styles from './App.module.css';
import ColorPanel from "./components/colorPanel/index";



function App() {

  const initialColor = {
    red: 0,
    green: 0,
    blue: 0,
    alpha: 0.8
  };
  
  return (
    <div className={styles.App}>
      <ColorPanel color={initialColor}></ColorPanel>
    </div>
  );
}

export default App;
