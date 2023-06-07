var vinylData; // Global variable to store the vinyl data

// Function to populate the vinyl divs with random data
function populateRandomVinyl() {
    // Get a random vinyl index
    var randomIndex = Math.floor(Math.random() * vinylData.length);
    
    // Get the random vinyl data
    var randomVinyl = vinylData[randomIndex];

    // Update the divs with the random vinyl data
    document.getElementById("number").textContent = randomVinyl.number;
    document.getElementById("acquiredplace").innerHTML = `Acquired at ${randomVinyl.acquiredplace},`; // Add the text 'Acquired at:'
    document.getElementById("acquiredyear").textContent = randomVinyl.acquiredyear;
    document.getElementById("artist").textContent = randomVinyl.artist;
    document.getElementById("title").textContent = randomVinyl.title;
    document.getElementById("releasedyear").textContent = randomVinyl.releasedyear;
    document.getElementById("genre").textContent = randomVinyl.genre;
    document.getElementById("media").textContent = randomVinyl.media;
    document.getElementById("cover").innerHTML = "";

    // Create and append the image element
    var coverImage = document.createElement("img");
    coverImage.src = randomVinyl.image;
    document.getElementById("cover").appendChild(coverImage);
}

// Function to handle button click event
function handleButtonClick() {
    populateRandomVinyl();
}

// Fetch the JSON data
fetch('vinylmetadata.json')
    .then(response => response.json())
    .then(jsonData => {
        vinylData = jsonData; // Store the vinyl data
        populateRandomVinyl(); // Populate initial random vinyl
    })
    .catch(error => console.log(error));