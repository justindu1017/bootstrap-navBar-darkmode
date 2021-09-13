const grayOutToggle = () => {
  document.querySelector("#coverer").classList.toggle("grayOut");
};
const closeGrayOut = () => {
  const coverer
  if(document.querySelector("#coverer").classList.contains("grayOut")){
    document.querySelector("#coverer").classList.toggle("grayOut")
  }
};
nightMode = () => {
  document.querySelector("body").classList.toggle("dark");
};
