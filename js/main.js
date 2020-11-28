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
const FONT_WEIGHT_BOLD = document.querySelector('#bold');
const FONT_STYLE_ITALIC = document.querySelector('#italic');
const TEXT_DECORATION_UNDERLINE = document.querySelector('#underline');

const PREVIEW_BTN = document.querySelector('#preview-btn');

// update fields value to the preview button
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

// hover states
PREVIEW_BTN.addEventListener('mouseenter', () => {
  PREVIEW_BTN.style.backgroundColor = HOVER_COLOR.value;
});

PREVIEW_BTN.addEventListener('mouseleave', () => {
  PREVIEW_BTN.style.backgroundColor = '#ffffff';
});

// text decoration controls: bold, italics, underline
FONT_WEIGHT_BOLD.addEventListener('click', () => {
  if (PREVIEW_BTN.style.fontWeight !== 'bold') {
    FONT_WEIGHT_BOLD.classList.add('active');
    PREVIEW_BTN.style.fontWeight = 'bold';
  } else {
    FONT_WEIGHT_BOLD.classList.remove('active');
    PREVIEW_BTN.style.fontWeight = 'normal';
  }
})

FONT_STYLE_ITALIC.addEventListener('click', () => {
  if (PREVIEW_BTN.style.fontStyle !== 'italic') {
    FONT_STYLE_ITALIC.classList.add('active');
    PREVIEW_BTN.style.fontStyle = 'italic';
  } else {
    FONT_STYLE_ITALIC.classList.remove('active');
    PREVIEW_BTN.style.fontStyle = 'normal';
  }
})

TEXT_DECORATION_UNDERLINE.addEventListener('click', () => {
  if (PREVIEW_BTN.style.textDecoration !== 'underline') {
    TEXT_DECORATION_UNDERLINE.classList.add('active');
    PREVIEW_BTN.style.textDecoration = 'underline';
  } else {
    TEXT_DECORATION_UNDERLINE.classList.remove('active');
    PREVIEW_BTN.style.textDecoration = 'none';
  }
})
