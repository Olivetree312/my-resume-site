//simple "database" of frogs
const frogs = {
  small: {
    img: "images/smolest.jpg",
    title: "Paedophryne amauensis",
    desc: "The smolest frog. Pocket-sized. Crimes: being too tiny."
  },
  big: {
    img: "images/biggest.jpg",
    title: "Conraua goliath",
    desc: "The biggest frog. Built like a beanbag chair. Very majestic."
  },
  cute: {
    img: "images/cutest.jpg",
    title: "Breviceps macrops",
    desc: "No. 1 cutie. Says 'whee' a lot. Has never done anything wrong in its life."
  },
  loud: {
    img: "images/loudest.jpg",
    title: "Eleutherodactylus coqui",
    desc: "The loudmouth. 80 to 100 decibels per croak. Not someone you want serenading outside your window."
  },
  weird: {
    img: "images/weirdo.jpg",
    title: "Barbourula kalimantanensis",
    desc: "The weirdo. Devoid of lungs. Stares directly into your soul. Unbothered."
  },
  og: {
    img: "images/og.jpg",
    title: "Triadobatrachus massinoti",
    desc: "The OG model. 250 million years your elder. Slightly extinct. Classic frog design. Timeless."
  }
};

function openModal(frogKey) {
  const modal = document.getElementById("frogModal");
  const imgEl = document.getElementById("modalImg");
  const titleEl = document.getElementById("modalTitle");
  const descEl = document.getElementById("modalDesc");

  const frog = frogs[frogKey];
  if (!frog) return;

  imgEl.src = frog.img;
  imgEl.alt = frogKey + " frog";
  titleEl.textContent = frog.title;
  descEl.textContent = frog.desc;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = document.getElementById("frogModal");
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

// Close when clicking the dark background
document.addEventListener("click", (e) => {
  const modal = document.getElementById("frogModal");
  if (modal.classList.contains("open") && e.target === modal) {
    closeModal();
  }
});

//optional: close with Esc
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});

// Keep existing functions, but make them call openModal
function small() { openModal("small"); }
function big()   { openModal("big"); }
function cute()  { openModal("cute"); }
function loud()  { openModal("loud"); }
function weird() { openModal("weird"); }
function og()    { openModal("og"); }

