const TEXT_FIELD = document.querySelector('#btn-text');
const FONT_FAMILY = document.querySelector('#font-family');
const FONT_SIZE = document.querySelector('#font-size');
const FONT_COLOR = document.querySelector('#font-color');
const BORDER_COLOR = document.querySelector('#border-color');
const BG_COLOR = document.querySelector('#bg-color');
const HOVER_COLOR = document.querySelector('#hover-color');
const BORDER_RADIUS = document.querySelector('#border-radius');
const BORDER_WIDTH = document.querySelector('#border-width');
const BORDER_STYLE = document.querySelector('#border-style');
const FONT_STYLE = document.getElementsByClassName("font-style");

const PREVIEW_BTN = document.querySelector('#preview-btn');

PREVIEW_BTN.addEventListener('mouseenter', () => {
  PREVIEW_BTN.style.backgroundColor = HOVER_COLOR.value;
})

PREVIEW_BTN.addEventListener('mouseleave', () => {
  PREVIEW_BTN.style.backgroundColor = '#ffffff';
})

TEXT_FIELD.addEventListener('input', () => {
  if (TEXT_FIELD.value) {
    PREVIEW_BTN.innerText = TEXT_FIELD.value;
  } else {
    PREVIEW_BTN.innerText = 'TEXT BUTTON';
  }
});

FONT_FAMILY.addEventListener('change', () => {
  PREVIEW_BTN.style.fontFamily = FONT_FAMILY.options[FONT_FAMILY.selectedIndex].text;
});

BORDER_STYLE.addEventListener('change', () => {
  PREVIEW_BTN.style.borderStyle = BORDER_STYLE.options[BORDER_STYLE.selectedIndex].text;
});

FONT_SIZE.addEventListener('input', () => {
  PREVIEW_BTN.style.fontSize = FONT_SIZE.value + 'px';
});

FONT_COLOR.addEventListener('input', () => {
  PREVIEW_BTN.style.color = FONT_COLOR.value;
});

BORDER_COLOR.addEventListener('input', () => {
  PREVIEW_BTN.style.borderColor = BORDER_COLOR.value;
});

BG_COLOR.addEventListener('input', () => {
  PREVIEW_BTN.style.backgroundColor = BG_COLOR.value;
});

BORDER_RADIUS.addEventListener('input', () => {
  PREVIEW_BTN.style.borderRadius = BORDER_RADIUS.value + 'px';
});

BORDER_WIDTH.addEventListener('input', () => {
  PREVIEW_BTN.style.borderWidth = BORDER_WIDTH.value + 'px';
});

// for (let style of FONT_STYLE) {
//   style.addEventListener('click', () => {
//     // Toggle .active class
//     if (style.classList.contains('active')) {
//       style.classList.remove('active');
//       PREVIEW_BTN.style.fontStyle = 'normal';
//     } else {
//       style.classList.add('active');
//       PREVIEW_BTN.style.fontStyle = style.value;
//     }
//   })
// }
