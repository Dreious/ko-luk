import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './UyeGirisi.module.css';

function UyeGirisi() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Üye Girişi Bilgileri:', { email, password, role });

    // Email, şifre ve rol kontrolü
    if (email === "ekn.berke@hotmail.com" && password === "1" && role === "Öğrenci") {
      console.log("Congrats!");
      navigate('/OgretmenSecme'); 
    } 
    else     if (email === "ekn.berke@hotmail.com" && password === "1" && role === "Öğretmen") {
      console.log("Congrats!");
      navigate('/loginhomeogretmen'); 
    } 
    
    else {
      console.log("Invalid login credentials");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Üye Girişi</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Şifre:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className={styles.formGroup}>
          <label>Rol:</label>
          <div>
            <input 
              type="radio" 
              id="ogrenci" 
              name="role" 
              value="Öğrenci" 
              checked={role === "Öğrenci"} 
              onChange={(e) => setRole(e.target.value)} 
            />
            <label htmlFor="ogrenci">Öğrenci</label>
          </div>
          <div>
            <input 
              type="radio" 
              id="ogretmen" 
              name="role" 
              value="Öğretmen" 
              checked={role === "Öğretmen"} 
              onChange={(e) => setRole(e.target.value)} 
            />
            <label htmlFor="ogretmen">Öğretmen</label>
          </div>
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}

export default UyeGirisi;
