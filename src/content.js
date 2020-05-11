(() => {
  const GATHER_POINTS_BTN_SELECTOR =
    '[data-test-selector="community-points-summary"] button.tw-button.tw-button--success.tw-interactive';
  const TRY_GATHER_POINTS_INTERVAL_MS = 3000;

  const increaseCollectPointsClicks = () => {
    chrome.storage.sync.get(["collectPointsClicks"], (result) => {
      const collectPointsClicks = result.collectPointsClicks || 0;
      chrome.storage.sync.set({
        collectPointsClicks: collectPointsClicks + 1,
      });
    });
  };

  const tryGatherPoints = () => {
    const gatherPointsBtn = document.querySelector(GATHER_POINTS_BTN_SELECTOR);

    if (!gatherPointsBtn) {
      return;
    }

    gatherPointsBtn.click();
    increaseCollectPointsClicks();
  };

  setInterval(tryGatherPoints, TRY_GATHER_POINTS_INTERVAL_MS);
})();
