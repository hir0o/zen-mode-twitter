const css = `
[aria-label="トレンド"] > * > *:not(:first-child) {
  display: none;
}
[aria-label="新しいツイートがあります。ピリオドキーを押すとタイムラインの先頭に移動し、ツイートが表示されます"] {
  display: none;
}
[data-testid="tweet"] [role="group"] > * > * > * > *:nth-child(2) {
  display: none;
}
[aria-label="メインメニュー"] [aria-label="調べたいものを検索"], [aria-label="メインメニュー"] [aria-label="通知"], [aria-label="メインメニュー"] [aria-label="ダイレクトメッセージ"] {
  display: none;
}
[aria-label="undefined件の未読項目"] {
  display: none;
}
`;

const style = document.createElement("style");
style.type = "text/css";
style.appendChild(document.createTextNode(css));
const head = document.querySelector("head");
head.appendChild(style);
