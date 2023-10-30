import { useEffect, useState } from "react";

function App() {
  const [stateOne, setStateOne] = useState(450);
  const [stateTwo, setStateTwo] = useState(800);

  useEffect(function () {
    const endTime = Date.now() + 3000; // 3 seconds

    const tick = setInterval(function () {
      const currentTime = Date.now();
      const remainingTime = endTime - currentTime;

      if (remainingTime <= 0) {
        setStateOne(450);
        clearInterval(tick);
      } else {
        setStateOne(Math.round(450 - (450 * remainingTime) / 3000));
      }
    }, 10); // Update every 10 milliseconds
  }, []);

  useEffect(function () {
    const endTime = Date.now() + 3000; // 3 seconds

    const tick = setInterval(function () {
      const currentTime = Date.now();
      const remainingTime = endTime - currentTime;

      if (remainingTime <= 0) {
        setStateTwo(800);
        clearInterval(tick);
      } else {
        setStateTwo(Math.round(800 - (800 * remainingTime) / 3000));
      }
    }, 10); // Update every 10 milliseconds
  }, []);

  return (
    <div>
      <div>{stateOne}</div>
      <div>{stateTwo}</div>
    </div>
  );
}

export default App;
