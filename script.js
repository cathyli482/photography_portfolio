// Footer year updates itself
document.getElementById("year").textContent = new Date().getFullYear();

const allPhotos = Array.from(document.querySelectorAll(".photo"));
const gallery = Array.from(document.querySelectorAll(".chapter .photo"));
const lightbox = document.getElementById("lightbox");
const lbImg = document.getElementById("lb-img");
const lbCaption = document.getElementById("lb-caption");
let current = 0;

// If a photo file can't be found, show the grey placeholder instead of a broken icon
allPhotos.forEach((fig) => {
  const img = fig.querySelector("img");
  const markMissing = () => fig.classList.add("missing");
  img.addEventListener("error", markMissing);
  if (img.complete && img.naturalWidth === 0) markMissing();
});

// Put the photo at position `index` into the viewer
function show(index) {
  current = index;
  const fig = gallery[index];
  const img = fig.querySelector("img");
  lbImg.src = img.src;
  lbImg.alt = img.alt;
  lbCaption.innerHTML = fig.querySelector("figcaption").innerHTML;
}

// Move forward (+1) or back (-1), wrapping around and skipping missing photos
function step(direction) {
  const total = gallery.length;
  let next = current;
  for (let i = 0; i < total; i++) {
    next = (next + direction + total) % total;
    if (!gallery[next].classList.contains("missing")) {
      show(next);
      return;
    }
  }
}

// Click a photo in a chapter to open it
gallery.forEach((fig, index) => {
  fig.querySelector("img").addEventListener("click", () => {
    if (fig.classList.contains("missing")) return;
    show(index);
    lightbox.showModal();
  });
});

lightbox.querySelector(".lb-close").addEventListener("click", () => lightbox.close());
lightbox.querySelector(".lb-prev").addEventListener("click", () => step(-1));
lightbox.querySelector(".lb-next").addEventListener("click", () => step(1));

// Keyboard: arrow keys to browse (Esc to close is built into <dialog>)
lightbox.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") step(-1);
  if (e.key === "ArrowRight") step(1);
});

// Click the dark area outside the photo to close
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.close();
});
