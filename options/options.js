document.addEventListener("keydown", (event) => {
  const screenHeight = document.documentElement.scrollHeight;
  const oneScreenItem = screenHeight / 9;
  const targetScroll = oneScreenItem * event.key;
  window.scrollTo(0, targetScroll);
});
