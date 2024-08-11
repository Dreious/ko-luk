import React, { useState } from 'react';
import styles from './Odeme.module.css';

function Odeme() {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation checks
    if (!cardNumber || !expiryDate || !cvv || !name) {
      setError('Lütfen tüm alanları doldurun.');
      return;
    }

    if (cardNumber.length !== 16) {
      setError('Geçerli bir kart numarası girin.');
      return;
    }

    if (cvv.length !== 3) {
      setError('Geçerli bir CVV girin.');
      return;
    }

    setError('');
    console.log('Payment Successful', { cardNumber, expiryDate, cvv, name });
    alert('Ödeme Başarılı!');
  };

  return (
    <div className={styles.paymentContainer}>
      <h2>Ödeme Yap</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Kart Numarası:</label>
          <input 
            type="text" 
            value={cardNumber} 
            onChange={(e) => setCardNumber(e.target.value)} 
            maxLength="16"
          />
        </div>
        <div>
          <label>Son Kullanma Tarihi:</label>
          <input 
            type="text" 
            placeholder="MM/YY"
            value={expiryDate} 
            onChange={(e) => setExpiryDate(e.target.value)} 
          />
        </div>
        <div>
          <label>CVV:</label>
          <input 
            type="text" 
            value={cvv} 
            onChange={(e) => setCvv(e.target.value)} 
            maxLength="3"
          />
        </div>
        <div>
          <label>Kart Üzerindeki İsim:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <button type="submit">Ödeme Yap</button>
      </form>
    </div>
  );
}

export default Odeme;
