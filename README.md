# Cathy Li – Photography Portfolio

A simple website with no build tools: three files plus a folder of photos.

## What each file does

- `index.html` – the content (chapters, photo titles, About, Contact)
- `style.css` – the look (colors, fonts, spacing)
- `script.js` – the full-screen photo viewer
- `images/` – a folder of your photos (you create this)

## Add your photos

Export each photo as a JPG (about 2000 px on the long side) and save it in an `images` folder using these exact names:

| Chapter | Photo | File name |
|---|---|---|
| East Coast | Skyline Drive | `skyline-drive.jpg` |
| East Coast | The Sun Stayed to Watch | `sun-stayed-to-watch.jpg` |
| East Coast | Palm Trees Aren't Scared | `palm-trees-arent-scared.jpg` |
| East Coast | Melting Chimneys | `melting-chimneys.jpg` |
| East Coast | Sunday, New England | `sunday-new-england.jpg` |
| West Coast | Leaking Harbor | `leaking-harbor.jpg` |
| West Coast | City Hall | `city-hall.jpg` |
| West Coast | Monica from Afar | `monica-from-afar.jpg` |
| West Coast | The Bird Knows Something We Don't | `bird-knows-something.jpg` |
| In Between | Sponsored Afternoon | `sponsored-afternoon.jpg` |
| In Between | Forty Shades of Green | `forty-shades-of-green.jpg` |
| In Between | Grand Entry (from the basement) | `grand-entry.jpg` |
| In Between | Been Ruling Since 1700 | `been-ruling-since-1700.jpg` |
| In Between | London, Casapueblo Fog | `casapueblo-fog.jpg` |
| Home | Lantern Night (We Belong) | `lantern-night.jpg` |
| Home | Where the Skies Are Blue | `where-the-skies-are-blue.jpg` |
| Home | Compagnie Herve KOUBI | `compagnie-herve-koubi.jpg` |
| Home | Midnight Exhale | `midnight-exhale.jpg` |
| Home | Biscuit On the Go | `biscuit-on-the-go.jpg` |
| Home | Swirl of Joy | `swirl-of-joy.jpg` |

Until a photo is added, the site shows a grey box with the file name it expects, so you can add them a few at a time.

## Common edits (all in `index.html`)

- **Remove a photo:** delete its whole `<figure class="photo"> ... </figure>` block.
- **Add a photo:** copy a `<figure>` block, paste it where you want it, and change the file name, alt text, title, and place.
- **Chapter descriptions:** the one-line notes under each chapter title are drafts. Rewrite them in your own words.
- **Contact:** the email is `hal417@pitt.edu`. You may want a non-school address that will still work after you graduate. LinkedIn and Instagram links are in a commented-out block in the Contact section.

## Put it online with GitHub Pages (free)

1. In your repository, click **Add file → Upload files** and drag in `index.html`, `style.css`, `script.js`, and the `images` folder. Click **Commit changes**.
2. Go to **Settings → Pages**.
3. Under **Branch**, choose `main` and `/ (root)`, then click **Save**.
4. Wait a minute or two. Your site will be at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/`.

If you name the repository `YOUR-USERNAME.github.io`, the address becomes the shorter `https://YOUR-USERNAME.github.io/`, which looks cleaner on a resume.

## Tips

- File names are case-sensitive online: `Photo.JPG` and `photo.jpg` are different files.
- Your signature in the corner of each photo is part of the image file, so it will show on the site if it's in the exported JPG.
