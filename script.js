// Stub de données des ramens
const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "images/shoyu.jpg",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "images/miso.jpg",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "images/tonkotsu.jpg",
  },
];

// Fonction pour afficher les images des ramens
function displayRamens() {
  const ramenMenu = document.getElementById("ramen-menu");
  ramenMenu.innerHTML = ""; // Nettoyer avant d'afficher

  ramens.forEach((ramen) => {
    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(img);
  });
}

// Fonction pour afficher les détails du ramen sélectionné
function handleClick(ramen) {
  const detailContainer = document.getElementById("ramen-detail");
  document.getElementById("ramen-name").textContent = ramen.name;
  document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
  document.getElementById("ramen-image").src = ramen.image;
  document.getElementById("ramen-rating").textContent = ramen.rating
    ? ramen.rating + "/" + "10"
    : "Not rated yet";
  document.getElementById("ramen-comment").textContent = ramen.comment
    ? ramen.comment
    : "No comment";
  detailContainer.classList.remove("hidden");
}

// Fonction pour gérer l'ajout d'un nouveau ramen
function addSubmitListener() {
  document
    .getElementById("ramen-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const restaurant = document.getElementById("restaurant").value;
      const rating = document.getElementById("rating").value;
      const comment = document.getElementById("comment").value;
      const imageUpload = document.getElementById("imageUpload").files[0];

      if (!imageUpload) {
        alert("Please add an image");
        return;
      }

      const reader = new FileReader();
      reader.onload = function (e) {
        const newRamen = {
          id: ramens.length + 1,
          name,
          restaurant,
          image: e.target.result,
          rating,
          comment,
        };

        ramens.push(newRamen);
        displayRamens();
      };

      reader.readAsDataURL(imageUpload);

      // Réinitialiser le formulaire
      this.reset();
    });
}

// Fonction principale pour initialiser l'application
function main() {
  displayRamens();
  addSubmitListener();
}

// Attendre que le DOM soit chargé avant d'exécuter `main`
document.addEventListener("DOMContentLoaded", main);
