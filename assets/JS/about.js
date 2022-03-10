// Gets all modals
const modals = document.getElementsByClassName("modal");
// Get the pseudo button that opens the modal
const openBtn = document.getElementsByClassName("card-link-photo");
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

// When the user clicks on the player photo/ pseudo button, open the corresponding modal. modal elements must be in the same order as card elements in html doc
for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener("click", function (event) {
    // for each element with the class "modal" when onclick event is triggered set display to none
    for (let i = 0; i < modals.length; i++) {
      if (event.target == openBtn[i]){
        modals[i].style.display = "block";
      }
  }
  });
}

// When the user clicks anywhere outside of the open modal, close it
for (let i = 0; i < modals.length; i++) {
  modals[i].addEventListener("click", function (event) {
    // for each element with the class "modal" when onclick event is triggered set display to none
      if (event.target == modals[i]){
        modals[i].style.display = "none";
      }
  
  });
}