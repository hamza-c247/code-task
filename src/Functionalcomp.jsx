import { useState } from 'react';

const FunctionalComp = () => {
  
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <h4>Functional Component</h4>
      <button onClick={increaseCount}>+</button>
      {count}
      <button onClick={decreaseCount}>-</button>
    </div>
  );
};
export default FunctionalComp;
