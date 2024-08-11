import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Kunduz from './Kunduz';
import LoginHome from './LoginHome';
import styles from './OgretmenSecme.module.css';

function OgretmenSecme() {
  const navigate = useNavigate();

  const goToPage = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <button onClick={() => goToPage('/kunduz')} className={styles.navLink}>Kunduz</button>
        <button onClick={() => goToPage('/loginhome')} className={styles.navLink}>LoginHome</button>
      </nav>
      <div className={styles.content}>
        <Routes>
          <Route path="/kunduz" element={<Kunduz />} />
          <Route path="/loginhome" element={<LoginHome />} />
        </Routes>
      </div>
      <div>
        <h1>Burası öğretmen seçme bölümü ardından ödeme sayfasına iletecek  </h1>
      <button onClick={()=>goToPage("/Odeme")}>Ödeme</button>
      </div>
    </div>
    
  );
}

export default OgretmenSecme;
