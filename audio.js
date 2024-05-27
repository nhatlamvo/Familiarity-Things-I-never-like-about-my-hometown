let currentAudio = null;

function playAudio(audioId) {
  let audioElement = document.getElementById(audioId);
  let playingSpan = document.getElementById(`playing${audioId.slice(-1)}`);

  if (currentAudio && currentAudio !== audioElement) {
    currentAudio.pause();
    playingSpan.innerHTML = "";
  }

  if (audioElement.paused) {
    audioElement.play();
    currentAudio = audioElement;
    playingSpan.innerHTML = "";
  } else {
    audioElement.pause();
    currentAudio = null;
    playingSpan.innerHTML = "";
  }
}
