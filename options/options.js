const NUMBERS = "1234567890";
document.addEventListener("keydown", (event) => {
  if (NUMBERS.includes(event.key)) {
    const screenHeight = document.documentElement.scrollHeight;
    const oneScreenItem = screenHeight / 9;
    const targetScroll = oneScreenItem * event.key;
    window.scrollTo(0, targetScroll);
  }
});
