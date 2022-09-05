const startTimer = () => {
  const timerInSeconds = parseInt(prompt("Enter timer you want to set"));
  let timerCountdown = timerInSeconds;
  console.log(isNaN(timerInSeconds));

  if (!isNaN(timerInSeconds))
    setInterval(() => {
      console.log(timerCountdown);
      timerCountdown--;
      document.getElementById(
        "app"
      ).innerHTML = `<h1>Timer : ${timerCountdown}</h1>`;
      if (interval == 0) {
        clearInterval(timerInterval);
      }
    }, 1e3);
  else alert("NaN");

  console.log(interval);
  setTimeout(() => {
    console.log(document.getElementById("audio"));
    document.getElementById("audio").play();
    alert("Timer Ends");
  }, timerInSeconds * 1e3);
};
