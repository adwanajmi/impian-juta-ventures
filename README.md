# Impian Juta Ventures — Company Profile Website

Landing page for Malaysian CIDB contractor company profile.

## Project Structure

```
impian-juta-ventures/
├── index.html          ← Main HTML page
├── css/
│   └── style.css       ← All styles
├── js/
│   └── main.js         ← Scroll animations & nav
├── .vscode/
│   ├── settings.json   ← VS Code editor settings
│   └── extensions.json ← Recommended extensions
└── README.md
```

## Getting Started in VS Code

1. Open the folder in VS Code:
   ```
   File → Open Folder → select impian-juta-ventures/
   ```

2. Install recommended extensions when prompted (bottom-right popup),
   or go to Extensions tab and search each one manually.

3. Right-click `index.html` → **Open with Live Server**
   (or click **Go Live** button at the bottom status bar)

4. Your browser will open at `http://127.0.0.1:5500`

## Deploy to GitHub Pages

1. Create a new GitHub repo (e.g. `impian-juta-ventures`)
2. Upload all files (keep the folder structure)
3. Go to **Settings → Pages**
4. Under *Source*, select `main` branch → root folder → Save
5. Site goes live at: `https://yourusername.github.io/impian-juta-ventures`

## Customising for Another Company

To reuse this template for a different contractor:

| What to change      | Where                        |
|---------------------|------------------------------|
| Company name        | `index.html` — nav, hero, footer |
| Registration numbers| `index.html` — about & reg cards |
| Projects list       | `index.html` — experience table  |
| Director names      | `index.html` — team section      |
| Contact info        | `index.html` — contact section   |
| Brand colours       | `css/style.css` — `:root` variables |
