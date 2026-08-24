# Hacker News Summary

A minimal Firefox extension that adds a **summary** link to Hacker News stories.

Choose ChatGPT or Claude when the extension is first installed. Clicking **summary** opens a new conversation with the article URL ready to summarize.

## Install locally

1. Open `about:debugging#/runtime/this-firefox` in Firefox.
2. Select **Load Temporary Add-on**.
3. Choose `manifest.json` from this folder.
4. Choose ChatGPT or Claude in the setup tab that opens.

Temporary add-ons are removed when Firefox restarts. For a persistent installation, use a Mozilla-signed `.xpi` file.

## Privacy

The extension runs only on `news.ycombinator.com`. It saves your chosen provider locally in Firefox and does not send data to any server.

## License

[MIT](LICENSE)
