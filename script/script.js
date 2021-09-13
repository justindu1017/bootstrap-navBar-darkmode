const grayOutToggle = () => {
  document.querySelector("#coverer").classList.toggle("grayOut");
};
const closeGrayOut = () => {
  const coverer = document.querySelector("#coverer");
  if (coverer.classList.contains("grayOut")) {
    coverer.classList.toggle("grayOut");
  }
};
nightMode = () => {
  document.querySelector("body").classList.toggle("dark");
};
