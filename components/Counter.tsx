'use client'; // Next 13 이상이면 이 선언 필요 (Client Component)

import { useState } from 'react';

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={() => setCount(count + 1)}>
        클릭 수: {count}
      </button>
    </div>
  );
};