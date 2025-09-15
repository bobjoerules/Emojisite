const colorInput = document.getElementById("favcolor");
const glassesbtn = document.getElementById("sunglassesbtn")
const glasses = document.getElementById("glasses")
const noaccessbtn = document.getElementById("noaccess")
const reye = document.getElementById("reye")
const leye = document.getElementById("leye")
const disr = document.getElementById("disr")
const disl = document.getElementById("disl")
const winkl = document.getElementById("winkl")
const grinbtn = document.getElementById("grinbtn")
const griningbtn = document.getElementById("griningbtn")
const accessories = document.getElementById('accessories')
const mouth = document.getElementById('mouth')
let mouthblockerl = 0
let mouthblockerr = 0

glassesbtn.addEventListener("click", () => {
  if (glasses.src.split("/").pop() === 'Sunglasses.png'){
    glasses.src='images/nothing.png'
    reye.style.display = "block";
    leye.style.display = "block";
  }else{
    glasses.src='images/Face Accessories/Sunglasses.png'
    reye.style.display = "none";
    leye.style.display = "none";
  }
});

noaccessbtn.addEventListener("click", () => {
  glasses.src='images/nothing.png'
  accessories.src='images/nothing.png'
  reye.style.display = "block";
  leye.style.display = "block";
});

document.getElementById('joytearsbtn').onclick = () => {
  console.log(accessories)
  if(accessories.src.split('/').pop() === 'Joy%20Tears.png'){
    accessories.src='images/nothing.png'
  }else{
    accessories.src='images/Face Accessories/Joy Tears.png'
    accessories.style.zIndex = 6;
    glasses.style.zIndex = 5;
  }
};

document.getElementById('ROFLtearsbtn').onclick = () => {
  if(accessories.src.split('/').pop() === 'ROFL%20Tears.png'){
    accessories.src='images/nothing.png'
    accessories.style.zIndex = 6;
    glasses.style.zIndex = 5;
  }else{
    accessories.src='images/Face Accessories/ROFL Tears.png'
    accessories.style.zIndex = 5;
    glasses.style.zIndex = 6;
  }
}

document.getElementById('sweat').onclick = () => {
  if(accessories.src.split('/').pop() === 'Sweat.png'){
    accessories.src='images/nothing.png'
  }else{
    accessories.src='images/Face Accessories/Sweat.png'
    accessories.style.zIndex = 6;
    glasses.style.zIndex = 5;
  }
}

grinbtn.onclick = () => {
  mouth.src='images/Mouth/Grin Mouth.png';
  disableeyes()
}
griningbtn.onclick = () => {
  mouth.src='images/Mouth/Grinning Mouth.png'
  disableeyes()
}

document.getElementById('heartsmilebtn').onclick = () => {
  mouth.src='images/Mouth/Heart Smile.png'
  enableeyes()
}
document.getElementById('largesmilebtn').onclick = () => {
  mouth.src='images/Mouth/Large Smile.png'
  enableeyes()
}
document.getElementById('smallsmilebtn').onclick = () => {
  mouth.src='images/Mouth/Small Smile.png'
    enableeyes()
}
document.getElementById('yumbtn').onclick = () => {
  mouth.src='images/Mouth/Yum Mouth.png'
  enableeyes()
}
document.getElementById('nonemouthbtn').onclick = () => {
  mouth.src='images/nothing.png'
  enableeyes()
}
document.getElementById('sunglassessmilebtn').onclick = () => {
  mouth.src='images/Mouth/Sunglasses Smile.png'
  enableeyes()
}

document.getElementById('disl').onclick = () => {
  leye.src='images/Left Eyes/Disappointed L Eye.png';
  if(mouthblockerl === 0){
    mouthblockerl ++;
    disablemouth()
  }
}
document.getElementById('disr').onclick = () => {
  reye.src='images/Right Eyes/Disappointed R Eye.png'
  if(mouthblockerr === 0){
    mouthblockerr ++;
    disablemouth()
  }
}
document.getElementById('winkl').onclick = () => {
  leye.src='images/Left Eyes/Wink L Eye.png';
  if(mouthblockerl === 0){
    mouthblockerl ++;
    disablemouth()
  }
}

function disableeyes() {
  winkl.disabled = true;
  winkl.style.backgroundColor = 'red';
  winkl.style.opacity = 0.5;
  winkl.style.cursor = 'default';
  disr.disabled = true;
  disr.style.backgroundColor = 'red';
  disr.style.opacity = 0.5;
  disr.style.cursor = 'default';
  disl.disabled = true;
  disl.style.backgroundColor = 'red';
  disl.style.opacity = 0.5;
  disl.style.cursor = 'default';
}

function enableeyes() {
  winkl.disabled = false;
  winkl.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
  winkl.style.opacity = 1;
  winkl.style.cursor = 'pointer';
  disr.disabled = false;
  disr.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  disr.style.opacity = 1;
  disr.style.cursor = 'pointer';
  disl.disabled = false;
  disl.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
  disl.style.opacity = 1;
  disl.style.cursor = 'pointer';
}

function disablemouth() {
  grinbtn.disabled = true;
  grinbtn.style.backgroundColor = 'red';
  grinbtn.style.opacity = 0.5;
  grinbtn.style.cursor = 'default';
  griningbtn.disabled = true;
  griningbtn.style.backgroundColor = 'red';
  griningbtn.style.opacity = 0.5;
  griningbtn.style.cursor = 'default';
}

function enableMouth(side) {
  if (side === "r") {
    mouthblockerr = 0;
  }else{
    mouthblockerl = 0;
  }
  enablemouth();
}

function enablemouth() {
  if ((mouthblockerr === 0) && (mouthblockerl === 0)){
    grinbtn.disabled = false;
    grinbtn.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    grinbtn.style.opacity = 1;
    grinbtn.style.cursor = 'pointer';
    griningbtn.disabled = false;
    griningbtn.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
    griningbtn.style.opacity = 1;
    griningbtn.style.cursor = 'pointer';
  }
}

colorInput.addEventListener("input", function () {
  const selectedColor = colorInput.value;
  document.body.style.backgroundColor = selectedColor;
});

dragElement(document.getElementById("settings"));

function clearemoji() {
  document.querySelectorAll('button').forEach(btn => {
    if (btn.textContent.trim().toLowerCase() === 'none') {
      btn.click();
    }
  });
}

function download() {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const images = [
    document.getElementById("face"),
    document.getElementById("mouth"),
    document.getElementById("leye"),
    document.getElementById("reye"),
    document.getElementById("glasses"),
    document.getElementById("accessories"),
    document.getElementById("highlights")
  ];

  images.forEach(img => {
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
  });

  const combinedImage = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = combinedImage;
  link.download = "newemoji.png";
  link.click();
}

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