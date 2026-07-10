# QT-1.6 — Simulating Quantum Entanglement & Correlation Statistics

Live project website for RIT Quant-A-Thon 2026, Problem QT-1.6.

## Files

- `index.html` — the page structure and content
- `style.css` — all styling (dark "quantum indigo" theme)
- `script.js` — chart data (real simulation output) + chart rendering + terminal output block
- `chart.min.js` — Chart.js v4.4.4 library, bundled locally so the site has zero external dependencies and never breaks due to a CDN being blocked
- `.nojekyll` — tells GitHub Pages to serve the files as-is, without running Jekyll processing

## How to publish with GitHub Pages

1. Upload **all files in this folder** to the root of your repository (`priyanraj-hub/rithackathon`), keeping the filenames exactly as they are.
2. Commit the files to the `main` branch.
3. In the repository (not your account settings): **Settings → Pages**.
4. Under "Build and deployment": Source = `Deploy from a branch`, Branch = `main`, Folder = `/ (root)`.
5. Click **Save**, then wait 1–2 minutes.
6. Your site goes live at:
   `https://priyanraj-hub.github.io/rithackathon/`

## Data integrity

Every chart on this page uses the exact numeric results (CHSH values, concurrence values, quantum/classical detection error probabilities) produced by an actual execution of `qt16_simulation.py`. Nothing on this page is fabricated or approximated — the embedded arrays in `script.js` are a direct copy of `qt16_results.npz`.
