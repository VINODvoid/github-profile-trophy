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
      font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif;
      background: #f5f5f5;
      color: #18181b;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 48px 24px;
      -webkit-font-smoothing: antialiased;
    }
    .tag {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 20px;
      padding: 4px 12px;
      font-size: 11px;
      font-weight: 500;
      color: #737373;
      margin-bottom: 24px;
    }
    .code {
      font-size: 88px;
      font-weight: 700;
      letter-spacing: -0.04em;
      line-height: 1;
      color: #18181b;
      margin-bottom: 12px;
    }
    .label {
      font-size: 18px;
      font-weight: 500;
      color: #18181b;
      margin-bottom: 8px;
    }
    .detail {
      font-size: 14px;
      color: #737373;
      margin-bottom: 36px;
      max-width: 340px;
      line-height: 1.6;
    }
    a.back {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      font-weight: 500;
      color: #18181b;
      text-decoration: none;
      background: #fff;
      border: 1px solid #e5e5e5;
      border-radius: 6px;
      padding: 8px 16px;
      transition: background 0.12s, border-color 0.12s;
    }
    a.back:hover { background: #f5f5f5; border-color: #d4d4d4; }
  </style>
</head>
<body>
  <span class="tag">GitHub Profile Trophy</span>
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
      --bg: #f5f5f5;
      --surface: #ffffff;
      --border: #e5e5e5;
      --border-focus: #18181b;
      --text: #18181b;
      --muted: #737373;
      --subtle: #a3a3a3;
      --placeholder: #d4d4d4;
      --tag-bg: #f0f0f0;
      --code-bg: #fafafa;
      --font: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif;
      --mono: 'SF Mono', 'Fira Code', 'JetBrains Mono', monospace;
    }
    body {
      font-family: var(--font);
      background: var(--bg);
      color: var(--text);
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48px 20px;
      -webkit-font-smoothing: antialiased;
    }
    /* ── Header ── */
    header {
      text-align: center;
      margin-bottom: 32px;
      max-width: 420px;
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 4px 12px;
      font-size: 11px;
      font-weight: 500;
      color: var(--muted);
      letter-spacing: 0.02em;
      margin-bottom: 20px;
    }
    .badge-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #22c55e;
    }
    header h1 {
      font-size: 28px;
      font-weight: 600;
      letter-spacing: -0.03em;
      color: var(--text);
      line-height: 1.2;
      margin-bottom: 10px;
    }
    header p {
      font-size: 14px;
      color: var(--muted);
      line-height: 1.6;
    }
    /* ── Card ── */
    .card {
      width: 100%;
      max-width: 420px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04);
    }
    .section {
      padding: 24px;
    }
    .section + .section {
      border-top: 1px solid var(--border);
    }
    .section-label {
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      color: var(--subtle);
      margin-bottom: 12px;
    }
    /* ── URL display ── */
    .url-row {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .method-badge {
      flex-shrink: 0;
      font-family: var(--mono);
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.06em;
      color: #16a34a;
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 4px;
      padding: 3px 7px;
    }
    .url-box {
      display: flex;
      flex: 1;
      align-items: stretch;
      background: var(--code-bg);
      border: 1px solid var(--border);
      border-radius: 6px;
      overflow: hidden;
    }
    .url-text {
      font-family: var(--mono);
      font-size: 11.5px;
      color: #525252;
      padding: 8px 12px;
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      line-height: 1.5;
    }
    .copy-btn {
      font-family: var(--font);
      font-size: 11px;
      font-weight: 500;
      color: var(--muted);
      padding: 0 12px;
      background: transparent;
      border: none;
      border-left: 1px solid var(--border);
      cursor: pointer;
      transition: color 0.12s, background 0.12s;
      white-space: nowrap;
    }
    .copy-btn:hover { color: var(--text); background: #f5f5f5; }
    .copy-feedback {
      font-size: 11px;
      color: #16a34a;
      margin-top: 8px;
      height: 14px;
    }
    /* ── Form ── */
    form { display: flex; flex-direction: column; gap: 16px; }
    .field { display: flex; flex-direction: column; gap: 6px; }
    label {
      font-size: 13px;
      font-weight: 500;
      color: var(--text);
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .opt-tag {
      font-size: 10px;
      font-weight: 400;
      color: var(--subtle);
      background: var(--tag-bg);
      border-radius: 4px;
      padding: 1px 6px;
    }
    input {
      font-family: var(--font);
      font-size: 14px;
      padding: 9px 12px;
      background: var(--surface);
      border: 1px solid var(--border);
      border-radius: 6px;
      color: var(--text);
      outline: none;
      -webkit-appearance: none;
      transition: border-color 0.15s, box-shadow 0.15s;
    }
    input:focus {
      border-color: var(--border-focus);
      box-shadow: 0 0 0 3px rgba(24,24,27,0.06);
    }
    input::placeholder { color: var(--placeholder); }
    .hint {
      font-size: 12px;
      color: var(--subtle);
      line-height: 1.5;
    }
    .hint a {
      color: var(--muted);
      text-decoration: underline;
      text-underline-offset: 2px;
      text-decoration-color: var(--border);
      transition: color 0.12s;
    }
    .hint a:hover { color: var(--text); text-decoration-color: var(--text); }
    /* ── Button ── */
    button[type="submit"] {
      font-family: var(--font);
      font-size: 14px;
      font-weight: 500;
      padding: 10px 20px;
      background: var(--text);
      color: #ffffff;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      align-self: flex-start;
      transition: opacity 0.15s;
      letter-spacing: -0.01em;
    }
    button[type="submit"]:hover { opacity: 0.82; }
    /* ── Footer ── */
    footer {
      margin-top: 20px;
      font-size: 12px;
      color: var(--subtle);
      text-align: center;
    }
    footer a {
      color: var(--muted);
      text-decoration: none;
    }
    footer a:hover { color: var(--text); }
  </style>
</head>
<body>
  <header>
    <div class="badge">
      <span class="badge-dot"></span>
      GitHub Profile Trophy
    </div>
    <h1>Generate your trophy card</h1>
    <p>Visualise your GitHub stats as dynamic trophies in your profile README</p>
  </header>
  <div class="card">
    <div class="section">
      <p class="section-label">Endpoint</p>
      <div class="url-row">
        <span class="method-badge">GET</span>
        <div class="url-box">
          <span class="url-text" id="url-display">${this.baseUrl}?username=USERNAME</span>
          <button class="copy-btn" type="button" id="copy-btn">Copy</button>
        </div>
      </div>
      <p class="copy-feedback" id="copy-feedback"></p>
    </div>
    <div class="section">
      <p class="section-label">Configure</p>
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
          <label for="theme">Theme <span class="opt-tag">optional</span></label>
          <input type="text" name="theme" id="theme" placeholder="e.g. onedark, nord, flat">
          <p class="hint">Browse all themes in the <a href="https://github.com/ryo-ma/github-profile-trophy?tab=readme-ov-file#apply-theme" target="_blank" rel="noopener">documentation</a></p>
        </div>
        <button type="submit">Generate trophies</button>
      </form>
    </div>
  </div>
  <footer>
    Open source &mdash; <a href="https://github.com/ryo-ma/github-profile-trophy" target="_blank" rel="noopener">ryo-ma/github-profile-trophy</a>
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
        feedback.textContent = 'Copied to clipboard';
        copyBtn.textContent = 'Copied';
        setTimeout(() => {
          feedback.textContent = '';
          copyBtn.textContent = 'Copy';
        }, 2000);
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
