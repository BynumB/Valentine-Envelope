window.addEventListener("DOMContentLoaded", () => {
  const envelope = document.querySelector(".envelope");
  const card = document.getElementById("card");
  const openText = envelope.querySelector(".open-text");

  // Reset page
  envelope.classList.remove("open");
  card.classList.remove("show");
  card.classList.add("hidden");
  openText.style.display = "block";

  let heartsInterval = null;

  // Click handler
  envelope.addEventListener("click", () => {
    // Open flap
    envelope.classList.add("open");
    openText.style.display = "none";

    // Show card after flap animation
    setTimeout(() => {
      card.classList.remove("hidden");
      card.classList.add("show");

      // Start hearts once
      if (!heartsInterval) {
        heartsInterval = spawnHearts();
        
        startSlideshow();
      }
    }, 600);
  });
});

function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  const card = document.getElementById("card");

  envelope.classList.add("open");

  // Reveal card after flap opens
  setTimeout(() => {
    card.classList.remove("hidden");
  }, 1000);
}

// ===== Button responses =====
function yesAnswer() {
  // hide the buttons
  document.querySelector(".buttons").style.display = "none";

  // show the response or confirmation
  const response = document.getElementById("response");
  response.innerHTML = "Are you sure? 💖<br>" +
                       "<button onclick='confirmYes()'>Yes, I’m sure 😍</button>" +
                       "<button onclick='cancelYes()'>Cancel 🙃</button>";
}

function maybeAnswer() {
  document.querySelector(".buttons").style.display = "none";
  document.getElementById("response").innerText = "Hmm… maybe you’ll decide later 🤔";
}

function noAnswer() {
  document.querySelector(".buttons").style.display = "none";
  document.getElementById("response").innerText = "Oh no 🙃";
}

function confirmYes() {
  const response = document.getElementById("response");
  response.innerText = "Yay! 💕 You clicked YES!";

  launchConfetti(); // 🎉 trigger confetti
}

function cancelYes() {
  document.getElementById("response").innerText = "";
  // optional: show original buttons again
  document.querySelector(".buttons").style.display = "flex";
}

// ===== Floating Hearts =====
function spawnHearts() {
  const container = document.querySelector(".container");

  return setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = Math.random() * 80 + 10 + "%";
    heart.style.fontSize = Math.random() * 20 + 15 + "px";
    heart.innerText = "❤️‍🔥";
    container.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 3000);
  }, 400);
}

// ===== Tech Twist ===== \\
console.log("%c> execute valentine_protocol", "color: #fa810f; font-size: 18px; font-weight: bold;");

// Background image reveal
const bannerImages = document.querySelectorAll(".banner-img");
let bannerIndex = 0;

function showNextBannerImage() {
  if (bannerIndex < bannerImages.length) {
    bannerImages[bannerIndex].style.opacity = "1"; // reveal image
    bannerIndex++;
    setTimeout(showNextBannerImage, 1500); // 1.5 seconds between images
  }
}

// Confetti \\
function launchConfetti() {
  const container = document.getElementById("confetti-container");

  for (let i = 0; i < 100; i++) { // 100 pieces of confetti
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    // random position and color
    confetti.style.left = Math.random() * window.innerWidth + "px";
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`; // rainbow
    confetti.style.left = Math.random() * window.innerWidth + "px";              // random horizontal start
    confetti.style.animationDuration = (2 + Math.random() * 2) + "s";           // random fall speed
    
    container.appendChild(confetti);

    // remove confetti after animation
    confetti.addEventListener("animationend", () => {
      confetti.remove();
    });
  }
}

// Start on page load \\
window.onload = showNextBannerImage;

window.addEventListener('DOMContentLoaded', () => {
  const verse = document.getElementById('verse');
  
  // Animate into view
  setTimeout(() => {
    verse.style.opacity = 1;
    verse.style.left = '25px'; // slides slightly closer to envelope
  }, 500); // delay a little after load
});