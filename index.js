
document.addEventListener('DOMContentLoaded', function() {
  const input = document.getElementById('input');

  function clickAlert() {
    alert('I was clicked!');
  }
  input.addEventListener('click', clickAlert);

  
  function addingEventListener() {
    const input = document.getElementById('input');
input.addEventListener('click', function() {
  alert('I was clicked!');
});
  }

  function c() {
    alert('I was clicked!');
  }
  addingEventListener();
});