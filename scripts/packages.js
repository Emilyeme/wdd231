const container = document.getElementById("packages-container");

async function fetchPackages() {
  try {
    const response = await fetch("packages.json");
    if (!response.ok) throw new Error("Failed to fetch package data.");
    const data = await response.json();

    container.innerHTML = data.map(pkg => `
      <div class="tour-package">
        <h3>${pkg.title}</h3>
        <img src="${pkg.image}" alt="${pkg.title}" loading="lazy">
        <iframe width="560" height="315" src="${pkg.video}" frameborder="0" allowfullscreen></iframe>
        <p>${pkg.description}</p>
        <p>${pkg.duration} | From ${pkg.price}</p>
        <button class="btn" data-id="${pkg.id}">View Details</button>
      </div>
    `).join("");

    // Store package data in local storage
    localStorage.setItem("fremerPackages", JSON.stringify(data));
  } catch (error) {
    console.error("Error fetching packages:", error);
    container.innerHTML = "<p>Unable to load tour packages at this time.</p>";
  }
}

fetchPackages();
document.addEventListener("click", e => {
  if (e.target.classList.contains("btn")) {
    const id = parseInt(e.target.dataset.id);
    const data = JSON.parse(localStorage.getItem("fremerPackages"));
    const selected = data.find(p => p.id === id);
    showModal(selected);
  }
});

function showModal(pkg) {
  const modal = document.getElementById("modal");
  const body = document.getElementById("modal-body");
  body.innerHTML = `
    <h3>${pkg.title}</h3>
    <img src="${pkg.image}" alt="${pkg.title}" style="width:100%">
    <p>${pkg.description}</p>
    <p>${pkg.duration} | ${pkg.price}</p>
  `;
  modal.classList.add("show");
}

document.querySelector(".close-btn").addEventListener("click", () => {
  document.getElementById("modal").classList.remove("show");
});
