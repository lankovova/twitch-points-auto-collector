const acpClicksElement = document.querySelector("#clicks");

const formTimesString = (clicks) => (clicks === 1 ? "time" : "times");

const setClicksText = (clicks = 0) => `${clicks} ${formTimesString(clicks)}`;

chrome.storage.sync.get(["collectPointsClicks"], (res) => {
  acpClicksElement.innerHTML = setClicksText(res.collectPointsClicks);
});

chrome.storage.onChanged.addListener(function (changes) {
  if (changes.collectPointsClicks) {
    const clicks = changes.collectPointsClicks.newValue;
    acpClicksElement.innerHTML = setClicksText(clicks);
  }
});
