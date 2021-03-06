(function() {

  const houseElem = document.querySelector('.house');
  let maxScrollValue;

  const resizeHandler = function() {
    maxScrollValue = document.body.offsetHeight - window.innerHeight;
  }

  window.addEventListener('scroll', function() {
    const zMove = pageYOffset / maxScrollValue * 980 - 490;
    houseElem.style.transform = `translateZ(${zMove}vw)`;
  });

  window.addEventListener('resize', resizeHandler);
  resizeHandler();
})();