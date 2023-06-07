import React, { useState } from "react";
import styles from "./dashboard.module.css";
import NewProd from "./NewProd";

const App = () => {
  const [isClick, setIsClick] = useState(true)

  const handleForm = () => {
    setIsClick(!isClick)
  }

  return (
    <div className={styles.dashboard}>
      <div className={styles.heading}>
        <span className={styles.title}>Admin Dashboard</span>
        <button className={`${styles.button} ${isClick ? styles.hide : ''}`} onClick={handleForm}>Add Item</button>
      </div>
      {
        isClick ? <NewProd isClick={isClick} setIsClick={setIsClick} /> : ''
      }
    </div>
  );
};

export default App;
