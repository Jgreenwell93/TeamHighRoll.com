// Get the modal
const alecModal = document.getElementById("alecModal");
const alexModal = document.getElementById("alexModal");
const aubreyModal = document.getElementById("aubreyModal");
const charlieModal = document.getElementById("charlieModal");
const garretModal = document.getElementById("garretModal");
const josephModal = document.getElementById("josephModal");
const michaelModal = document.getElementById("michaelModal");
const nickModal = document.getElementById("nickModal");
const royModal = document.getElementById("royModal");
const treyModal = document.getElementById("treyModal");

// Get the button that opens the modal
const alecBtn = document.getElementById("alecBtn");
const alexBtn = document.getElementById("alexBtn");
const aubreyBtn = document.getElementById("aubreyBtn");
const charlieBtn = document.getElementById("charlieBtn");
const garretBtn = document.getElementById("garretBtn");
const josephBtn = document.getElementById("josephBtn");
const michaelBtn = document.getElementById("michaelBtn");
const nickBtn = document.getElementById("nickBtn");
const royBtn = document.getElementById("royBtn");
const treyBtn = document.getElementById("treyBtn");

// gets all modals to globally set the display to none on close
const modals = document.getElementsByClassName("modal");

// Get the <span> element that closes the modal
const close = document.getElementsByClassName("close");

// When the user clicks on <span> (x), close the modal
// for each element with the class "close" add an onclick event listener that performs function
for (let i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function () {
    // for each element with the class "modal" when onclick event is triggered set display to none
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
  }
  });
}

// When the user clicks on the button, open the modal
alecBtn.onclick = function () {
  alecModal.style.display = "block";
}
alexBtn.onclick = function () {
  alexModal.style.display = "block";
}
aubreyBtn.onclick = function () {
  aubreyModal.style.display = "block";
}
charlieBtn.onclick = function () {
  charlieModal.style.display = "block";
}
garretBtn.onclick = function () {
  garretModal.style.display = "block";
}
josephBtn.onclick = function () {
  josephModal.style.display = "block";
}
michaelBtn.onclick = function () {
  michaelModal.style.display = "block";
}
nickBtn.onclick = function () {
  nickModal.style.display = "block";
}
royBtn.onclick = function () {
  royModal.style.display = "block";
}
treyBtn.onclick = function () {
  treyModal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
  if (event.target == alecModal) {
    alecModal.style.display = "none";
  }
  else if (event.target == alexModal) {
    alexModal.style.display = "none";
  }
  else if (event.target == aubreyModal) {
    aubreyModal.style.display = "none";
  }
  else if (event.target == charlieModal) {
    charlieModal.style.display = "none";
  }
  else if (event.target == garretModal) {
    garretModal.style.display = "none";
  }
  else if (event.target == josephModal) {
    josephModal.style.display = "none";
  }
  else if (event.target == michaelModal) {
    michaelModal.style.display = "none";
  }
  else if (event.target == nickModal) {
    nickModal.style.display = "none";
  }
  else if (event.target == royModal) {
    royModal.style.display = "none";
  }
  else if (event.target == treyModal) {
    treyModal.style.display = "none";
  }
}