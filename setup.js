document.querySelector("#setup-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const provider = new FormData(event.currentTarget).get("provider");
  await browser.storage.local.set({ provider });
  window.close();
});
