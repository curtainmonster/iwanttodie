// Function to create a falling face effect
function createFallingFace() {
    const faceContainer = document.getElementById('face-container');
    if (!faceContainer) return; // Ensure container exists

    const face = document.createElement('img');
    face.src = '';
    face.classList.add('falling-face');

    face.style.left = Math.random() * 100 + 'vw';
    face.style.animation = `fall ${Math.random() * 2 + 1}s linear`;

    faceContainer.appendChild(face);
    face.addEventListener('animationend', () => {
        face.style.opacity = '0';
        setTimeout(() => face.remove(), 1000);
    });
}

// Create a wave of faces on page load
function faceWave() {
    for (let i = 0; i < 60; i++) {
        setTimeout(createFallingFace, i * 200); // Speed up timing for more frequent faces
    }
}

function toggleDropdown(dropdownId) {
    const dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
    }
}

function toggleSubsection(subsectionId) {
    const subsections = document.querySelectorAll('#questions > div');
    subsections.forEach(subsection => subsection.style.display = 'none');

    const activeSubsection = document.getElementById(subsectionId);
    if (activeSubsection) {
        activeSubsection.style.display = 'block';
    }
}

// Initialize animations and effects on page load
// window.onload = function() {
//     faceWave();
// };
