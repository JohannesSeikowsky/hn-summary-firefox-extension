const providers = document.querySelectorAll('input[name="provider"]');

async function loadProvider() {
  const { provider = "chatgpt" } = await browser.storage.local.get("provider");
  document.querySelector(`input[value="${provider}"]`).checked = true;
}

for (const input of providers) {
  input.addEventListener("change", async () => {
    await browser.storage.local.set({ provider: input.value });
    document.querySelector("#status").textContent = "Saved";
  });
}

loadProvider();
