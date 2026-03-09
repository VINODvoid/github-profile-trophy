abstract class BaseError {
  readonly status!: number;
  readonly message!: string;

  render(): string {
    return this.renderPage();
  }

  protected renderPage(): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${this.status} — GitHub Profile Trophy</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      background-color: #080808;
      background-image: radial-gradient(circle, #161616 1px, transparent 1px);
      background-size: 28px 28px;
      color: #d8d8d8;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 48px 24px;
    }
    .eyebrow {
      font-family: 'SF Mono', 'Fira Code', 'Courier New', monospace;
      font-size: 9px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #444;
      margin-bottom: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }
    .eyebrow::before, .eyebrow::after {
      content: '';
      display: inline-block;
      width: 20px;
      height: 1px;
      background: #c9a96e;
      opacity: 0.4;
    }
    .code {
      font-size: 96px;
      font-weight: 200;
      letter-spacing: -0.05em;
      line-height: 1;
      color: #efefef;
      margin-bottom: 16px;
    }
    .label {
      font-size: 13px;
      color: #555;
      letter-spacing: 0.04em;
      margin-bottom: 8px;
      font-family: 'SF Mono', 'Fira Code', 'Courier New', monospace;
      text-transform: uppercase;
    }
    .detail {
      font-size: 13px;
      color: #444;
      margin-bottom: 44px;
      max-width: 320px;
      line-height: 1.6;
    }
    a.back {
      font-family: 'SF Mono', 'Fira Code', 'Courier New', monospace;
      font-size: 9px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #555;
      text-decoration: none;
      border-bottom: 1px solid #222;
      padding-bottom: 2px;
      transition: color 0.15s, border-color 0.15s;
    }
    a.back:hover { color: #c9a96e; border-color: #c9a96e; }
  </style>
</head>
<body>
  <p class="eyebrow">GitHub Profile Trophy</p>
  <h1 class="code">${this.status}</h1>
  <p class="label">${this.message}</p>
  ${this.renderContent()}
  <a class="back" href="/">Return home</a>
</body>
</html>`;
  }

  protected renderContent(): string {
    return "";
  }
}

export class Error400 extends BaseError {
  readonly status = 400;
  readonly message = "Bad Request";

  constructor(private readonly baseUrl = "/") {
    super();
  }

  render(): string {
    const base = JSON.stringify(this.baseUrl);
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GitHub Profile Trophy</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg: #080808;
      --surface: #0e0e0e;
      --surface-2: #121212;
      --border: #1e1e1e;
      --border-2: #282828;
      --text: #d8d8d8;
      --muted: #555;
      --subtle: #2a2a2a;
      --accent: #c9a96e;
      --accent-dim: rgba(201,169,110,0.08);
      --accent-glow: rgba(201,169,110,0.15);
      --green: #5db896;
      --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
      --mono: 'SF Mono', 'Fira Code', 'JetBrains Mono', 'Courier New', monospace;
    }
    html { height: 100%; }
    body {
      font-family: var(--font);
      background-color: var(--bg);
      background-image: radial-gradient(circle, #161616 1px, transparent 1px);
      background-size: 28px 28px;
      color: var(--text);
      min-height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 80px 24px 64px;
    }
    header {
      text-align: center;
      margin-bottom: 52px;
      max-width: 480px;
    }
    .wordmark {
      font-family: var(--mono);
      font-size: 9px;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 28px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
    }
    .wordmark::before {
      content: '';
      display: inline-block;
      width: 16px;
      height: 1px;
      background: var(--accent);
      opacity: 0.5;
    }
    .wordmark::after {
      content: '';
      display: inline-block;
      width: 16px;
      height: 1px;
      background: var(--accent);
      opacity: 0.5;
    }
    header h1 {
      font-size: 30px;
      font-weight: 300;
      letter-spacing: -0.03em;
      color: #efefef;
      line-height: 1.2;
      margin-bottom: 12px;
    }
    header p {
      font-size: 13px;
      color: var(--muted);
      letter-spacing: 0.02em;
      line-height: 1.7;
    }
    main {
      width: 100%;
      max-width: 480px;
      position: relative;
    }
    /* Top accent line */
    main::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent 0%, var(--accent) 40%, var(--accent) 60%, transparent 100%);
      opacity: 0.35;
      z-index: 1;
    }
    .panel {
      background: var(--surface);
      border: 1px solid var(--border);
      border-top: none;
      padding: 26px 30px;
    }
    .panel + .panel {
      border-top: 1px solid var(--subtle);
    }
    .panel-label {
      font-family: var(--mono);
      font-size: 9px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 14px;
    }
    /* URL row */
    .url-wrap {
      display: flex;
      align-items: stretch;
      border: 1px solid var(--border);
      background: var(--bg);
    }
    .url-sigil {
      font-family: var(--mono);
      font-size: 10px;
      color: var(--accent);
      opacity: 0.55;
      padding: 0 12px;
      display: flex;
      align-items: center;
      border-right: 1px solid var(--border);
      background: var(--surface-2);
      user-select: none;
      letter-spacing: 0.05em;
    }
    .url-text {
      font-family: var(--mono);
      font-size: 11px;
      color: var(--green);
      padding: 10px 12px;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      letter-spacing: 0.01em;
      line-height: 1.4;
    }
    .copy-btn {
      font-family: var(--mono);
      font-size: 9px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      padding: 0 16px;
      background: transparent;
      color: var(--muted);
      border: none;
      border-left: 1px solid var(--border);
      cursor: pointer;
      transition: color 0.15s, background 0.15s;
      white-space: nowrap;
    }
    .copy-btn:hover { color: var(--accent); background: var(--accent-dim); }
    .copy-feedback {
      font-family: var(--mono);
      font-size: 9px;
      letter-spacing: 0.12em;
      color: var(--accent);
      margin-top: 9px;
      height: 13px;
      opacity: 0.7;
    }
    form { display: flex; flex-direction: column; gap: 20px; }
    .field { display: flex; flex-direction: column; gap: 7px; }
    label {
      font-family: var(--mono);
      font-size: 9px;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--muted);
    }
    label .opt {
      opacity: 0.4;
      font-size: 8px;
      letter-spacing: 0.1em;
    }
    input {
      font-family: var(--font);
      font-size: 14px;
      padding: 10px 12px;
      background: var(--bg);
      border: 1px solid var(--border);
      color: var(--text);
      outline: none;
      -webkit-appearance: none;
      border-radius: 0;
      transition: border-color 0.15s, box-shadow 0.15s;
    }
    input:focus {
      border-color: var(--accent);
      box-shadow: 0 0 0 3px var(--accent-dim);
    }
    input::placeholder { color: var(--subtle); }
    .hint {
      font-size: 11px;
      color: var(--muted);
      line-height: 1.5;
    }
    .hint a {
      color: var(--accent);
      opacity: 0.65;
      text-decoration: none;
      border-bottom: 1px solid rgba(201,169,110,0.25);
      transition: opacity 0.15s;
    }
    .hint a:hover { opacity: 1; }
    .form-footer {
      display: flex;
      align-items: center;
      gap: 16px;
      padding-top: 4px;
    }
    button[type="submit"] {
      font-family: var(--mono);
      font-size: 10px;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      padding: 12px 28px;
      background: transparent;
      color: var(--text);
      border: 1px solid var(--border-2);
      cursor: pointer;
      transition: border-color 0.15s, color 0.15s, background 0.15s;
    }
    button[type="submit"]:hover {
      border-color: var(--accent);
      color: var(--accent);
      background: var(--accent-dim);
    }
    footer {
      margin-top: 36px;
      font-family: var(--mono);
      font-size: 9px;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: #272727;
      text-align: center;
    }
  </style>
</head>
<body>
  <header>
    <p class="wordmark">GitHub Profile Trophy</p>
    <h1>Generate your trophy card</h1>
    <p>Visualise your GitHub stats as dynamic trophies<br>for your profile README</p>
  </header>
  <main>
    <div class="panel">
      <p class="panel-label">Output URL</p>
      <div class="url-wrap">
        <span class="url-sigil">GET</span>
        <span class="url-text" id="url-display">${this.baseUrl}?username=USERNAME</span>
        <button class="copy-btn" type="button" id="copy-btn">Copy</button>
      </div>
      <p class="copy-feedback" id="copy-feedback"></p>
    </div>
    <div class="panel">
      <p class="panel-label">Configure</p>
      <form action="${this.baseUrl}" method="get">
        <div class="field">
          <label for="username">GitHub username</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="e.g. torvalds"
            required
            autocomplete="off"
            autocapitalize="none"
            spellcheck="false"
          >
        </div>
        <div class="field">
          <label for="theme">Theme <span class="opt">— optional</span></label>
          <input type="text" name="theme" id="theme" placeholder="e.g. onedark, nord, flat">
          <p class="hint">Browse all themes in the <a href="https://github.com/ryo-ma/github-profile-trophy?tab=readme-ov-file#apply-theme" target="_blank" rel="noopener">documentation</a></p>
        </div>
        <div class="form-footer">
          <button type="submit">Generate</button>
        </div>
      </form>
    </div>
  </main>
  <footer>
    <p>Open source &mdash; ryo-ma/github-profile-trophy</p>
  </footer>
  <script>
    const copyBtn = document.getElementById('copy-btn');
    const feedback = document.getElementById('copy-feedback');
    const usernameInput = document.getElementById('username');
    const urlDisplay = document.getElementById('url-display');
    const base = ${base};

    usernameInput.addEventListener('input', () => {
      const val = usernameInput.value.trim();
      urlDisplay.textContent = val
        ? base + '?username=' + encodeURIComponent(val)
        : base + '?username=USERNAME';
    });

    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(urlDisplay.textContent).then(() => {
        feedback.textContent = '// copied to clipboard';
        setTimeout(() => { feedback.textContent = ''; }, 2000);
      });
    });
  </script>
</body>
</html>`;
  }
}

export class Error419 extends BaseError {
  readonly status = 419;
  readonly message = "Rate Limit Exceeded";

  protected renderContent(): string {
    return `<p class="detail">Too many requests. Please wait a moment and try again.</p>`;
  }
}

export class Error404 extends BaseError {
  readonly status = 404;
  readonly message = "Not Found";

  constructor(readonly content?: string) {
    super();
  }

  protected renderContent(): string {
    return this.content ? `<p class="detail">${this.content}</p>` : "";
  }
}
