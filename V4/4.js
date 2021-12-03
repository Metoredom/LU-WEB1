function hideInputs() {
  let inputs = document.getElementsByTagName("input");
  for (let i of inputs) {
    if (i.classList.contains('hide')) {
      i.style.display = 'none';
    }
  }
}
window.onload = hideInputs