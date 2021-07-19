const mapElement = document.querySelector('#mapId');
// @ts-ignore
const map = L.map(mapElement, {center: [0, 0], zoom: 0});
L.control
  .lasso({
    polygon: {
      smoothFactor: 1,
      noClip: false
    },
    intersect: false
  })
  .addTo(map);
map.on('lasso.finished', (event) => {
  console.log(event.layers);
});
const lassoControl = L.control.lasso().addTo(map);
const toggleLasso = document.querySelector('#toggleLasso');

// @ts-ignore
toggleLasso.addEventListener('click', () => {
  console.log("Test");
  if (lassoControl.enabled()) {
    lassoControl.disable();
  } else {
    lassoControl.enable();
  }
});
