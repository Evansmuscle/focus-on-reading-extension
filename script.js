const startButton = document.querySelector(".extension-start--button");
const container = document.querySelector(".extension-container");
const selectingModeAlert = document.querySelector(".selecting-process-alert");

startButton.addEventListener("click", async (_e) => {
  container.classList.add("hidden");
  selectingModeAlert.classList.remove("hidden");
  document.body.style.width = "max-content";
  document.body.style.padding = "1rem 2rem";

  const selectionSpan = document.createElement("span");
  selectionSpan.classList.add("selection-layer");

  document.body.appendChild(selectionSpan);

  await chrome.devtools.inspectedWindow.eval("console.log('inspected');");
});
