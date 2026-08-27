# Farwell Pools & Spas Website Redesign

This package contains the complete source code for the Farwell Pools & Spas homepage concept.

## The beginner workflow

### 1. Install the two programs you need

- Download Node.js 22 LTS or newer from https://nodejs.org/en/download
- Download Visual Studio Code from https://code.visualstudio.com/

Node.js includes `npm`, so you do not need to install npm separately.

### 2. Open this project

1. Unzip the downloaded source package.
2. Open Visual Studio Code.
3. Choose **File → Open Folder**.
4. Select the `Farwell-Pools-Website-Source` folder.
5. In VS Code, choose **Terminal → New Terminal**.

### 3. Install the project

Run this once in the VS Code terminal:

```bash
npm install
```

### 4. Start the website on your computer

Run:

```bash
npm run dev
```

The terminal will show an address such as `http://localhost:5173`. Hold Command and click that address to open the website.

To stop the local website, return to the terminal and press **Control+C**.

### 5. Edit the website

- Edit `app/page.tsx` to change words, links, phone numbers, sections, and image URLs.
- Edit `app/globals.css` to change colors, spacing, fonts, and responsive design.
- Edit `app/layout.tsx` to change the browser-tab title and description.

Save a file with **Command+S**. While `npm run dev` is running, the browser normally refreshes automatically.

### 6. Add your own images

1. Create a folder called `images` inside `public`.
2. Put approved image files in `public/images`.
3. Replace an external image URL with a local path such as `/images/pool-hero.jpg`.

Do this before a commercial launch so the website does not depend on images hosted by the old website.

## Production build

```bash
npm run build
npm run start
```

## Publish with Cloudflare Workers

1. Create a Cloudflare account at https://dash.cloudflare.com/.
2. In the VS Code terminal, sign in:

```bash
npx wrangler login
```

3. Publish the website:

```bash
npm run deploy
```

Cloudflare will return a temporary `workers.dev` website address. You can later connect a purchased domain from the Worker settings in the Cloudflare dashboard.

## Main files

- `app/page.tsx` — homepage content and structure
- `app/globals.css` — complete visual design and responsive styles
- `app/layout.tsx` — document title and metadata
- `package.json` — dependencies and scripts

## Image note

The current concept references project photographs and the Farwell logo from the existing `farwellpools.com` website. Before a commercial launch, download the approved original high-resolution assets, place them in `public/`, and update the image paths in `app/page.tsx` and `app/globals.css`.

## Navigation note

Testimonials, FAQs, Service Request, and Openings & Closings currently link to the original Farwell website. They can be replaced with redesigned internal pages as those pages are built.

## Troubleshooting

- `node: command not found`: install Node.js, close VS Code completely, and reopen it.
- `npm install` fails: confirm that `node --version` shows 22.13 or newer.
- The website does not open: make sure `npm run dev` is still running and use the exact local address shown in the terminal.
- A photo does not appear: check the filename, capitalization, and path. macOS and hosting servers may treat uppercase and lowercase letters differently.
