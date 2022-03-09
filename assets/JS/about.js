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

// Get the pseudo button that opens the modal
const openBtn = document.getElementsByClassName("card-link-photo");

// gets all modals to globally set the display to none on close
const modals = document.getElementsByClassName("modal");

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName("close");

// When the user clicks on <span> (x), close the modal
// for each element with the class "close" add an onclick event listener that performs function
for (let i = 0; i < closeBtn.length; i++) {
  closeBtn[i].addEventListener("click", function () {
    // for each element with the class "modal" when onclick event is triggered set display to none
    for (let i = 0; i < modals.length; i++) {
      modals[i].style.display = "none";
  }
  });
}


// When the user clicks on the player photo/ pseudo button, open the corresponding modal. modal elements must be in the same order as card elemtns
for (let m = 0; m < openBtn.length; m++) {
  openBtn[m].addEventListener("click", function (event) {
    // for each element with the class "modal" when onclick event is triggered set display to none
    for (let m = 0; m < modals.length; m++) {
      if (event.target == openBtn[m]){
        modals[m].style.display = "block";
      }
  }
  });
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