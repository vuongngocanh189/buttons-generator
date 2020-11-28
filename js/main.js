// const TEXT = document.querySelector('text').value;
// const FONT = document.querySelector('font-family').value;
const data = {
  'text': document.getElementById('text').value,
  'font': document.getElementById('font-family').value,
  'font-size': document.getElementById('range').value,
  'font-color': document.getElementById('font-color').value,
  'border-color': document.getElementById('border-color').value,
  'bg-color': document.getElementById('bg-color').value,
  'hover-color': document.getElementById('hover-color').value,
}

window.data = data; // For testing in the browser
