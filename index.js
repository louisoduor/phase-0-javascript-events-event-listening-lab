
function addingEventListener() {
  const element = document.getElementById("button");
  element.addEventListener("click", handleButtonClick);
}

function handleButtonClick(event) {
  alert("Button clicked");
}

