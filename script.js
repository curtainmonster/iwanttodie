function createFallingFace() {
    const faceContainer = document.getElementById('face-container');
    const face = document.createElement('img');
    face.src = 'image/phone.png'; // Path to your face image
    face.classList.add('falling-face');
    
    // Random horizontal position
    face.style.left = Math.random() * 100 + 'vw';
    
    // Apply animation and add to the container
    face.style.animation = `fall ${Math.random() * 3 + 2}s linear`;
    
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
    for (let i = 0; i < 30; i++) { // Adjust number of faces
        setTimeout(createFallingFace, i * 100); // Staggered wave effect
    }
}

// Run the faceWave function on page load
window.onload = faceWave;
