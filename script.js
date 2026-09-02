const welcome = document.getElementById("welcome");
const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
const enterMusic = document.getElementById("enterMusic");
const enterSilent = document.getElementById("enterSilent");
const countdown = document.getElementById("countdown");
const songForm = document.getElementById("songForm");

let musicOn = false;

function updateMusicIcon() {
  musicToggle.textContent = musicOn ? "❚❚" : "♪";
}

function enterSite(playMusic) {
  welcome.classList.add("hidden");

  if (!playMusic) return;

  music.play().then(() => {
    musicOn = true;
    updateMusicIcon();
  }).catch(() => {
    musicOn = false;
    updateMusicIcon();
  });
}

enterMusic.addEventListener("click", () => enterSite(true));
enterSilent.addEventListener("click", () => enterSite(false));

musicToggle.addEventListener("click", () => {
  if (musicOn) {
    music.pause();
    musicOn = false;
    updateMusicIcon();
    return;
  }

  music.play().then(() => {
    musicOn = true;
    updateMusicIcon();
  });
});

const eventDate = new Date("2027-02-27T16:00:00-03:00").getTime();

function updateCountdown() {
  const distance = eventDate - Date.now();

  if (distance <= 0) {
    countdown.innerHTML = "<div><strong>♥</strong><small>Hoy</small></div>";
    return;
  }

  const days = Math.floor(distance / 86400000);
  const hours = Math.floor((distance / 3600000) % 24);
  const minutes = Math.floor((distance / 60000) % 60);
  const seconds = Math.floor((distance / 1000) % 60);

  countdown.innerHTML = `
    <div><strong>${days}</strong><small>días</small></div>
    <div><strong>${hours}</strong><small>horas</small></div>
    <div><strong>${minutes}</strong><small>min</small></div>
    <div><strong>${seconds}</strong><small>seg</small></div>
  `;
}

updateCountdown();
setInterval(updateCountdown, 1000);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.14 });

document.querySelectorAll(".reveal").forEach(element => observer.observe(element));

document.addEventListener("click", event => {
  const trigger = event.target.closest("[data-modal]");
  if (!trigger) return;

  const modal = document.getElementById(trigger.dataset.modal);
  if (modal) modal.classList.add("active");
});

document.querySelectorAll(".modal").forEach(modal => {
  modal.addEventListener("click", event => {
    if (event.target === modal || event.target.classList.contains("close")) {
      modal.classList.remove("active");
    }
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    document.querySelectorAll(".modal.active").forEach(modal => modal.classList.remove("active"));
  }
});

if (songForm) {
  songForm.addEventListener("submit", event => {
    event.preventDefault();

    const formData = new FormData(songForm);
    const song = String(formData.get("song") || "").trim();
    const artist = String(formData.get("artist") || "").trim();
    const spotify = String(formData.get("spotify") || "").trim();
    const messageLines = [
      "Hola, quiero sugerir esta canción para la playlist del matrimonio de Cesar y Katherine:",
      `Canción: ${song}`,
      artist ? `Artista: ${artist}` : "",
      spotify ? `Link: ${spotify}` : ""
    ].filter(Boolean);
    const whatsappUrl = `https://wa.me/56959548664?text=${encodeURIComponent(messageLines.join("\n"))}`;

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    document.getElementById("musicModal").classList.remove("active");
    songForm.reset();
  });
}

const slides = Array.from(document.querySelectorAll(".slide"));
const dots = document.querySelector(".carousel-dots");
const prev = document.querySelector(".carousel-control.prev");
const next = document.querySelector(".carousel-control.next");
let activeSlide = 0;
let carouselTimer;

function buildDots() {
  slides.forEach((_, index) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Ver foto ${index + 1}`);
    dot.addEventListener("click", () => {
      showSlide(index);
      restartCarousel();
    });
    dots.appendChild(dot);
  });
}

function showSlide(index) {
  activeSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("active", slideIndex === activeSlide);
  });

  dots.querySelectorAll("button").forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === activeSlide);
  });
}

function restartCarousel() {
  window.clearInterval(carouselTimer);
  carouselTimer = window.setInterval(() => showSlide(activeSlide + 1), 4500);
}

if (slides.length && dots && prev && next) {
  buildDots();
  showSlide(0);
  restartCarousel();

  prev.addEventListener("click", () => {
    showSlide(activeSlide - 1);
    restartCarousel();
  });

  next.addEventListener("click", () => {
    showSlide(activeSlide + 1);
    restartCarousel();
  });
}
