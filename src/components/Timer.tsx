const Timer = () => {

  let timeSecond:number = 900;
  const time = document.querySelector("time");

  displayTime(timeSecond);

  const countDown = setInterval(() => {
    timeSecond--;
    displayTime(timeSecond);
    if (timeSecond == 0 || timeSecond < 1) {
      endCount();
      clearInterval(countDown);
    }
  }, 1000);

  function displayTime(second: number) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    time!.innerHTML = `
    ${min < 10 ? "0" : ""}${min}:${sec < 10 ? "0" : ""}${sec}
    `;
  }

  function endCount() {
      alert('Time up')
  }

  return (
    <button className="timer-item badge rounded-pill bg-dark">
      <time /> 
    </button>
  )
}


export default Timer
