// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

console.log("Chrome extension go?");

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message.txt);
  if (message.txt === "hello") {
    setInterval(() => {
      var elements = document.querySelectorAll(
        '[aria-label*="View Tweet analytics"]'
      );
      for (el of elements) {
        console.log(el, "        ");
        el.parentElement.remove();
      }
    }, 100);
  }
}
