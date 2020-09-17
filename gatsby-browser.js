exports.shouldUpdateScroll = () => false
exports.onRouteUpdate = ({location, prevLocation}) => {
  console.log(location.pathname)
  if (location.pathname === "/") {
    window.scrollTo(0, 0);
  } else if (location.pathname !== "/") {
    const toTop = document.getElementById('to-top').offsetTop;
    console.log(toTop);
    window.scrollTo(0, toTop);
  }
}
