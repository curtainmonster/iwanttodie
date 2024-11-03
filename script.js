// Function to create a falling face effect
function createFallingFace() {
    const faceContainer = document.getElementById('face-container');
    const face = document.createElement('img');
    face.src = 'images/Onion.jpg'; // Path to your face image
    face.classList.add('falling-face');
    
    // Set random horizontal position and animation
    face.style.left = Math.random() * 100 + 'vw';
    face.style.animation = `fall ${Math.random() * 2 + 1}s linear`;
    
    // Append face to container and add fade-out effect after animation
    faceContainer.appendChild(face);
    face.addEventListener('animationend', () => {
        face.style.opacity = '0';
        setTimeout(() => face.remove(), 1000); // Remove after fade-out
    });
}

// Create a wave of faces on page load
function faceWave() {
    for (let i = 0; i < 60; i++) { // Increased number of faces for effect
        setTimeout(createFallingFace, i * 600); // Adjusted stagger timing
    }
}

// Function to toggle dropdown visibility
function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}

// Function to toggle answer sections
function toggleSubsection(subsectionId) {
    const subsections = document.querySelectorAll('#questions > div');
    subsections.forEach(subsection => {
        subsection.style.display = 'none'; // Hide all subsections
    });

    const activeSubsection = document.getElementById(subsectionId);
    if (activeSubsection) {
        activeSubsection.style.display = 'block'; // Show the clicked subsection
    }
}
   
// Main function to initialize all animations and effects on page load
function run() {
    faceWave(); // Start falling faces
}

// Run the main function on page load
window.onload = run;
