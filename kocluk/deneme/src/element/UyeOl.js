import React, { useState } from 'react';

function UyeOl() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Üye Olma Bilgileri:', { email, password });
    // Burada form gönderimini işleyeceğiniz kodları ekleyebilirsiniz
  };

  return (
    <div>
      <h2>Üye Ol</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Şifre:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Üye Ol</button>
      </form>
    </div>
  );
}

export default UyeOl;
