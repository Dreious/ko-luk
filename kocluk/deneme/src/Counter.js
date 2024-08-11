import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Butona {count} kez tıkladınız</p>
      <button onClick={() => setCount(count + 1)}>
    
        Arttır
      </button>
    </div>
  );
}

export default Counter;
