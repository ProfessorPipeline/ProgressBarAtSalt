import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function App() {
  useEffect(() => {
    const progressDiv = document.getElementById("progress");
    const daysLeftSpan = document.getElementById("daysLeft");

    const totalDays = 89;
    const startDate = new Date('2024-07-01T00:00:00'); // Start date

    function updateProgress() {
      const now = new Date();
      const elapsedDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24)); // Calculating elapsed days
      const daysLeft = totalDays - elapsedDays;

      const percentage = (elapsedDays / totalDays) * 100;

      console.log(`Elapsed Days: ${elapsedDays}`);
      console.log(`Days Left: ${daysLeft}`);
      console.log(`Percentage: ${percentage}%`);

      daysLeftSpan.textContent = `${daysLeft} days left`;
      progressDiv.style.width = `${percentage}%`;

      requestAnimationFrame(updateProgress);
    }

    updateProgress();
  }, []);

  return (
    <div id="main">
      <span id="daysLeft"></span>
      <div id="border">
        <div id="progress"></div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
