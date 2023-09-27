const colorInput = document.getElementById("favcolor");

colorInput.addEventListener("input", function () {
  // Get the selected color value from the input element
  const selectedColor = colorInput.value;

  // Update the background color of the entire page
  document.body.style.backgroundColor = selectedColor;
});
