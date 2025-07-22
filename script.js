const colorInput = document.getElementById("favcolor");

colorInput.addEventListener("input", function () {
  // Get the selected color value from the input element
  const selectedColor = colorInput.value;

  // Update the background color of the entire page
  document.body.style.backgroundColor = selectedColor;
});

dragElement(document.getElementById("settings"));

function dragElement(elmnt) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

  elmnt.onmousedown = dragMouseDown;
  elmnt.ontouchstart = dragTouchStart;

  function dragMouseDown(e) {
    if (["INPUT", "SELECT", "TEXTAREA", "BUTTON", "LABEL"].includes(e.target.tagName)) return;

    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDragMouse;
  }

  function elementDragMouse(e) {
  e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    let newTop = elmnt.offsetTop - pos2;
    let newLeft = elmnt.offsetLeft - pos1;

    const minTop = 0;
    const minLeft = 0;
    const maxTop = window.innerHeight - elmnt.offsetHeight;
    const maxLeft = window.innerWidth - elmnt.offsetWidth;

    newTop = Math.min(Math.max(newTop, minTop), maxTop);
    newLeft = Math.min(Math.max(newLeft, minLeft), maxLeft);

    elmnt.style.top = newTop + "px";
    elmnt.style.left = newLeft + "px";
  }

  function dragTouchStart(e) {
    if (["INPUT", "SELECT", "TEXTAREA", "BUTTON", "LABEL"].includes(e.target.tagName)) return;

    e.preventDefault();
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;
    document.ontouchend = closeDragElement;
    document.ontouchmove = elementDragTouch;
  }

  function elementDragTouch(e) {
    e.preventDefault();
    pos1 = pos3 - e.touches[0].clientX;
    pos2 = pos4 - e.touches[0].clientY;
    pos3 = e.touches[0].clientX;
    pos4 = e.touches[0].clientY;

    let newTop = elmnt.offsetTop - pos2;
    let newLeft = elmnt.offsetLeft - pos1;

    const minTop = 0;
    const minLeft = 0;
    const maxTop = window.innerHeight - elmnt.offsetHeight;
    const maxLeft = window.innerWidth - elmnt.offsetWidth;

    newTop = Math.min(Math.max(newTop, minTop), maxTop);
    newLeft = Math.min(Math.max(newLeft, minLeft), maxLeft);

    elmnt.style.top = newTop + "px";
    elmnt.style.left = newLeft + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
    document.ontouchend = null;
    document.ontouchmove = null;
  }
}
