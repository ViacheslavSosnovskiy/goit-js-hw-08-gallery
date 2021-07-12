// --------- затормозить --------
_.throttle;
// ------------------------------
const OutputRef = document.querySelector(".js-coords");
let mouseMove = 0;

const throttledOnMouseMove = _.throttle(onMouseMove, 500);
window.addEventListener("mousemove", throttledOnMouseMove);

function onMouseMove(event) {
  mouseMove += 1;
}

// --- ждет пока закончишь печатать ---
_.debounce;
// ------------------------------------

const inputRef = document.querySelector(".js-class");
inputRef.addEventListener("input", _.debounce(oninputChange, 2000));

// function oninputChange(event) {
//   inputInvocationCounter; += 1;
// }
