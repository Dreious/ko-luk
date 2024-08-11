import React, { useState } from 'react';

/*BURASI ÜYE GİRİŞİ YAPILINCA GİRİLEN MENÜ */

function Hoca_OgrenciSecme() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <h1>Hoca Öğrenci Seçme Bölümü</h1>
      <p>Butona {count} kez tıkladınız</p>
      <button onClick={() => setCount(count + 1)}>
    
        Arttır
      </button>
    </div>
  );
}

export default Hoca_OgrenciSecme;
