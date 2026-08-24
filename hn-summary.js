async function addSummaryLinks() {
  const { provider = "chatgpt" } = await browser.storage.local.get("provider");

  for (const titleLink of document.querySelectorAll("span.titleline > a")) {
    const storyRow = titleLink.closest("tr.athing");
    const subtext = storyRow?.nextElementSibling?.querySelector("span.subline");

    if (!subtext || subtext.querySelector(".hn-summary-link")) continue;

    const summaryLink = document.createElement("a");
    summaryLink.className = "hn-summary-link";
    summaryLink.textContent = "summary";
    summaryLink.dataset.articleUrl = titleLink.href;
    setSummaryUrl(summaryLink, provider);
    summaryLink.target = "_blank";
    summaryLink.rel = "noopener noreferrer";

    subtext.append(" | ", summaryLink);
  }
}

function setSummaryUrl(link, provider) {
  const baseUrl = provider === "claude" ? "https://claude.ai/new?q=" : "https://chatgpt.com/?q=";
  link.href = `${baseUrl}${encodeURIComponent(
    `Summarize this article: ${link.dataset.articleUrl}`
  )}`;
}

browser.storage.onChanged.addListener((changes, areaName) => {
  if (areaName !== "local" || !changes.provider) return;

  for (const link of document.querySelectorAll(".hn-summary-link")) {
    setSummaryUrl(link, changes.provider.newValue ?? "chatgpt");
  }
});

addSummaryLinks();
