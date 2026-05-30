const modalBtns = document.querySelectorAll(".close-btn-overlay");
const openModal1 = document.getElementById("piece01");
const openModal2 = document.getElementById("piece02");
const openModal3 = document.getElementById("piece03");
const openModal4 = document.getElementById("piece04");
const openModal5 = document.getElementById("piece05");
const openModal6 = document.getElementById("piece06");
const openModal7 = document.getElementById("piece07");
const openModal8 = document.getElementById("piece08");
const openModal9 = document.getElementById("piece09");
const openModal10 = document.getElementById("piece10");
const modal1 = document.getElementById("page1");
const modal2 = document.getElementById("page2");
const modal3 = document.getElementById("page3");
const modal4 = document.getElementById("page4");
const modal5 = document.getElementById("page5");
const modal6 = document.getElementById("page6");
const modal7 = document.getElementById("page7");
const modal8 = document.getElementById("page8");
const modal9 = document.getElementById("page9");
const modal10 = document.getElementById("page10");
let curModal = null;

function showModal(modalId) {
  curModal = document.getElementById(modalId);
  curModal.style.display = "block";
}

function hideModal() {
  if (curModal) {
    curModal.style.display = "none";
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }
  }
}

modalBtns.forEach((btn) => {
  btn.addEventListener("click", hideModal);
});

openModal1.addEventListener("click", () => showModal("page1"));
openModal2.addEventListener("click", () => showModal("page2"));
openModal3.addEventListener("click", () => showModal("page3"));
openModal4.addEventListener("click", () => showModal("page4"));
openModal5.addEventListener("click", () => showModal("page5"));
openModal6.addEventListener("click", () => showModal("page6"));
openModal7.addEventListener("click", () => showModal("page7"));
openModal8.addEventListener("click", () => showModal("page8"));
openModal9.addEventListener("click", () => showModal("page9"));
openModal10.addEventListener("click", () => showModal("page10"));

function openPage(pageNumber) {
  const url = `page${pageNumber}.html`;
  window.open(
    url,
    `page${pageNumber}`,
    "toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height=700"
  );
}

function on1() {
  openPage(1);
}

function off1() {
  hideModal();
}

function on2() {
  openPage(2);
}

function off2() {
  hideModal();
}

function on3() {
  openPage(3);
}

function off3() {
  hideModal();
}

function on4() {
  openPage(4);
}

function off4() {
  hideModal();
}

function on5() {
  openPage(5);
}

function off5() {
  hideModal();
}

function on6() {
  openPage(6);
}

function off6() {
  hideModal();
}

function on7() {
  openPage(7);
}

function off7() {
  hideModal();
}

function on8() {
  openPage(8);
}

function off8() {
  hideModal();
}

function on9() {
  openPage(9);
}

function off9() {
  hideModal();
}

function on10() {
  openPage(10);
}

function off10() {
  hideModal();
}
