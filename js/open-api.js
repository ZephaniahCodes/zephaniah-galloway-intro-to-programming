const output = document.getElementById("output");

const breedsBtn = document.getElementById("breedsBtn");
const imagesBtn = document.getElementById("imagesBtn");


// API 1: BREEDS
breedsBtn.addEventListener("click", async function () {
    output.innerHTML = "Loading cat breeds...";

    try {
        const res = await fetch("https://api.thecatapi.com/v1/breeds");
        const data = await res.json();

        output.innerHTML = "<h2>Cat Breeds</h2>";

        data.slice(0, 12).forEach(breed => {
            output.innerHTML += `
                <p><strong>${breed.name}</strong> - ${breed.origin || "Unknown"}</p>
            `;
        });

    } catch (err) {
        output.innerHTML = "Error loading breeds.";
    }
});


// API 2: IMAGES
imagesBtn.addEventListener("click", async function () {
    output.innerHTML = "Loading cat images...";

    try {
        const res = await fetch("https://api.thecatapi.com/v1/images/search?limit=6");
        const data = await res.json();

        output.innerHTML = "<h2>Random Cats</h2>";

        data.forEach(cat => {
            output.innerHTML += `
                <img src="${cat.url}" style="width:200px; margin:10px; border:2px solid #C0392B;">
            `;
        });

    } catch (err) {
        output.innerHTML = "Error loading images.";
    }
});