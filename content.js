chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  if (message.txt === "hello") {
    setInterval(() => {
      var elements = document.querySelectorAll(
        '[aria-label*="View Tweet analytics"]'
      );
      for (el of elements) {
        el.parentElement.remove();
      }
    }, 100);
  }
}
