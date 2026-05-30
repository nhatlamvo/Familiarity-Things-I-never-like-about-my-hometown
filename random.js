// random.js
// This script randomizes the order of the buttons in the main section
// while preserving the surrounding repeating separator text.

function randomizeMainButtons() {
  const mainParagraph = document.querySelector(".main p");
  if (!mainParagraph) return;

  const buttonEntries = [];
  let separatorText = "";

  Array.from(mainParagraph.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      separatorText += node.textContent;
      return;
    }

    if (node.nodeType === Node.ELEMENT_NODE && node.tagName === "BUTTON") {
      buttonEntries.push({
        separator: separatorText,
        buttonHtml: node.outerHTML,
      });
      separatorText = "";
    }
  });

  const trailingSeparator = separatorText;

  if (buttonEntries.length === 0) return;

  // Shuffle the buttons while keeping the separator text structure intact.
  for (let i = buttonEntries.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [buttonEntries[i], buttonEntries[j]] = [buttonEntries[j], buttonEntries[i]];
  }

  mainParagraph.innerHTML = buttonEntries
    .map((entry) => `${entry.separator}${entry.buttonHtml}`)
    .join("") + trailingSeparator;

  // Save a snapshot of the HTML immediately after shuffling (this contains the original '~' separators).
  // We only set this once so subsequent re-runs (e.g., slider changes) can reapply replacements from the original.
  if (!mainParagraph.dataset.originalWithTildes) {
    mainParagraph.dataset.originalWithTildes = mainParagraph.innerHTML;
  }
}


// Functions for alternating symbols in the main paragraph, replacing the original '~' separators.
function replaceAsciiSeparators() {
  const mainParagraph = document.querySelector(".main p");
  if (!mainParagraph) return;

  // Use the original-with-tildes snapshot if present so we can reapply replacements repeatedly.
  const baseHtml = mainParagraph.dataset.originalWithTildes || mainParagraph.innerHTML;

  const alternateSymbols = ["~", "*", "/", "=", "#", "`", ",", "."];

  const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Slider value can scale separator length: default base is 20 (see slider default).
  const sliderVal = (typeof window.separatorWidthValue === 'number') ? window.separatorWidthValue : 20;
  const scale = sliderVal / 20; // default length, can be adjusted for different scaling behavior.

  // Replace on the base HTML string, returning a new HTML string.
  const replaced = baseHtml.replace(/~+/g, (match) => {
    const originalLength = match.length;

    // Compute new length from slider scale and add a small random jitter to keep variety.
    const jitter = Math.floor(Math.random() * 5) - 1; // -2..+2
    const computed = Math.max(1, Math.round(originalLength * scale) + jitter);

    const minSymbols = 1;
    const symbolCount = Math.max(minSymbols, Math.min(alternateSymbols.length, Math.ceil(Math.random() * 6)));
    const selectedSymbols = shuffleArray([...alternateSymbols]).slice(0, symbolCount);

    const replacementChars = [];
    for (let i = 0; i < computed; i += 1) {
      replacementChars.push(pickRandom(selectedSymbols));
    }

    return replacementChars.join("");
  });

  mainParagraph.innerHTML = replaced;
}

function initRandomMainAscii() {
  randomizeMainButtons();
  replaceAsciiSeparators();
}

document.addEventListener("DOMContentLoaded", initRandomMainAscii);

// Hookup for separator width slider: expose value and update display
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("separatorWidth");
  const display = document.getElementById("separatorWidthValue");
  if (!slider || !display) return;

  const update = () => {
    const v = parseInt(slider.value, 10) || 20;
    display.textContent = String(v);
    // expose globally for optional use in replaceAsciiSeparators
    window.separatorWidthValue = v;
  };

  slider.addEventListener("input", update);
  update();
});
 
// Re-run separator replacement when slider changes, debounced to avoid excessive updates
let _sepDebounce = null;
const runReplaceDebounced = () => {
  if (_sepDebounce) clearTimeout(_sepDebounce);
  _sepDebounce = setTimeout(() => {
    replaceAsciiSeparators();
  }, 120);
};

document.addEventListener("input", (e) => {
  if (e.target && e.target.id === "separatorWidth") runReplaceDebounced();
});
