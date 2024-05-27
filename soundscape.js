window.onload = function () {
  const audio = document.getElementById("myAudio");
  audio.play();
};
const volumeBar = document.getElementById("volume-bar");
const volumeIndicator = document.getElementById("volume-indicator");
const audio = document.getElementById("myAudio");

// Update volume and indicator on slider change
volumeBar.addEventListener("input", function () {
  const volume = parseFloat(volumeBar.value);
  audio.volume = volume;
  volumeIndicator.style.width = `${volume * 100}%`; // Set indicator width based on volume value
});

// Update indicator on audio volume change (optional)
audio.addEventListener("volumechange", function () {
  volumeIndicator.style.width = `${audio.volume * 100}%`;
});

// Set initial volume indicator width based on audio volume
volumeIndicator.style.width = `${audio.volume * 100}%`;
