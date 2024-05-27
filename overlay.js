const modalBtns = document.querySelectorAll(".closes button"); // Select all close buttons
const openModal1 = document.getElementById("piece01"); // phrases from the list
const openModal2 = document.getElementById("piece02");
const openModal3 = document.getElementById("piece03");
const openModal4 = document.getElementById("piece04");
const openModal5 = document.getElementById("piece05");
const openModal6 = document.getElementById("piece06");
const openModal7 = document.getElementById("piece07");
const openModal8 = document.getElementById("piece08");
const openModal9 = document.getElementById("piece09");
const openModal10 = document.getElementById("piece10");
const modal1 = document.getElementById("video01");
const modal2 = document.getElementById("video02");
const modal3 = document.getElementById("video03");
const modal4 = document.getElementById("video04");
const modal5 = document.getElementById("video05");
const modal6 = document.getElementById("video06");
const modal7 = document.getElementById("video07");
const modal8 = document.getElementById("video08");
const modal9 = document.getElementById("video09");
const modal10 = document.getElementById("video10");
let curModal = null;

//Function to show a specific modal
function showModal(modalId) {
  curModal = document.getElementById(modalId);
  curModal.style.display = "block";
}

//Function to hide the currently visible modal
function hideModal() {
  if (curModal) {
    curModal.style.display = "none";
    currentAudio.pause(); /*stop current audio when closing the overlay and */
    currentAudio = null; /*allow the new audio to play when clicked */
    // currentAudio.currentTime = 0;
  }
}

// Loop through all close buttons and add event listener
modalBtns.forEach((btn) => {
  btn.addEventListener("click", hideModal);
});

// Open modal 1 on button click
openModal1.addEventListener("click", () => showModal("video01"));

// Open modal 2 on button click
openModal2.addEventListener("click", () => showModal("video02"));

// Open modal 3 on button click
openModal3.addEventListener("click", () => showModal("video03"));

// Open modal 4 on button click
openModal4.addEventListener("click", () => showModal("video04"));

// Open modal 5 on button click
openModal5.addEventListener("click", () => showModal("video05"));
//////////////////////////////////
// Open modal 6 on button click
openModal6.addEventListener("click", () => showModal("video06"));

// Open modal 7 on button click
openModal7.addEventListener("click", () => showModal("video07"));

// Open modal 8 on button click
openModal8.addEventListener("click", () => showModal("video08"));

// Open modal 9 on button click
openModal9.addEventListener("click", () => showModal("video09"));

// Open modal 10 on button click
openModal10.addEventListener("click", () => showModal("video10"));

// //////////////////////////////////////////////////////
// // Close modal on button click (can be looped for all close buttons)
// modalBtns[0].addEventListener("click", () => hideModal("video01"));

// // Add similar event listener for the close button of modal 2
// modalBtns[1].addEventListener("click", () => hideModal("video02"));
