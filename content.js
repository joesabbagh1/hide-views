console.log("Chrome extension go?");

setInterval(() => {
  var elements = document.querySelectorAll(
    '[aria-label*="View Tweet analytics"]'
  );
  for (el of elements) {
    el.parentElement.remove();
  }
}, 100);
