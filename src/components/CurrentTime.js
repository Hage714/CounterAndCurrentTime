import React, { useState, useEffect } from 'react';

function CurrentTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Update every second

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1>The current time is: {currentTime.toLocaleTimeString()}</h1>
    </div>
  );
}

export default CurrentTime;
