function createFallingFace() {
    const faceContainer = document.getElementById('face-container');
    const face = document.createElement('img');
    face.src = 'images/banana.png'; // Corrected path to your face image
    face.classList.add('falling-face');
    
    // Random horizontal position
    face.style.left = Math.random() * 100 + 'vw';
    
    // Apply animation and add to the container
    face.style.animation = `fall ${Math.random() * 2 + 1}s linear`;
    
    // Append face to the container
    faceContainer.appendChild(face);

    // Remove face after animation completes
    face.addEventListener('animationend', () => {
        face.style.opacity = '0'; // Start fading out
        setTimeout(() => face.remove(), 2000); // Remove after fade out
    });
}

// Create a wave of faces on page load
function faceWave() {
    for (let i = 0; i < 30; i++) { // Adjust number of faces // changed value from 30 to 60
        setTimeout(createFallingFace, i * 50); // Staggered wave effect // changed value from 100 to 600
    }
}

// Run the faceWave function on page load
window.onload = faceWave;

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

    const cursorFollow = document.getElementById('cursor-follow');

// Show the cursor-follow image when the mouse moves
document.addEventListener('mousemove', (event) => {
    cursorFollow.style.display = 'block'; // Show the image
    cursorFollow.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
});

// Optionally hide it when the mouse leaves the window
document.addEventListener('mouseleave', () => {
    cursorFollow.style.display = 'none';
});

// Optionally show it when the mouse enters the window again
document.addEventListener('mouseenter', () => {
    cursorFollow.style.display = 'block';
});
}
