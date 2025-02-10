// call the text area first, i.e naming
const textAreaE1 = document.getElementById("textarea");
const titleE1 = document.getElementById("title");

// the counter naming
const totalCountE1 = document.getElementById("total-Count");
const remainingCountE1 = document.getElementById("remaining-Count");
// add event listeners
textAreaE1.addEventListener("keyup", () => {
  updateCounter();
});

// return function
function updateCounter() {
  // since the max lenght attibute cant be called directly you "." with the name
  const maxLength = textAreaE1.maxLength;
  const currentLength = textAreaE1.value.length;

  totalCountE1.innerText = currentLength;
  remainingCountE1.innerText = maxLength - currentLength;

  totalCountE1.innerText = currentLength;
  remainingCountE1.innerText = maxLength - currentLength;

  if (textAreaE1.value.length === textAreaE1.maxLength) {
    titleE1.innerText = "Counted";
  } else {
    titleE1.innerText = "The counter";
  }
}
