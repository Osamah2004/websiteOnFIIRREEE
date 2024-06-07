const jsConfetti = new JSConfetti();

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function exampleFunction() {
    for (let i = 0; i < 5; i++) {
        jsConfetti.addConfetti();
        await sleep(200);
    }
    typeWriterEffect('🔥🔥الف مبروك عالتخرج دكتور حمزة🔥🔥'); // Call typeWriterEffect after exampleFunction
}

function createFirework() {
    const firework = document.createElement('div');
    firework.classList.add('firework');

    // Randomize size
    const sizes = ['150vmin', '70vmin', '90vmin', '120vmin', '50vmin'];
    const size = sizes[Math.floor(Math.random() * sizes.length)];
    firework.style.setProperty('--finalSize', size);

    // Randomize colors
    const colors = ['yellow', 'khaki', 'white', 'lime', 'gold', 'mediumseagreen', 'pink', 'violet', 'fuchsia', 'orchid', 'plum', 'cyan', 'lightcyan', 'lightblue', 'PaleTurquoise', 'SkyBlue'];
    for (let i = 1; i <= 6; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        firework.style.setProperty(`--color${i}`, color);
    }

    // Randomize position
    const randomX = Math.random() * 100 + 'vw';
    firework.style.left = randomX;

    // Randomize y position from near the center to almost the top
    const randomY = (Math.random() * 50 - 50) + 'vmin';
    firework.style.setProperty('--y', randomY);

    document.body.appendChild(firework);

    // Remove firework after animation
    setTimeout(() => {
        firework.remove();
    }, 3000); // 3 seconds to match the animation duration
}

function startFireworks() {
    createFirework();
    const randomInterval = Math.random() * (600 - 100) + 100;
    setTimeout(startFireworks, randomInterval);
}

function typeWriterEffect(text) {
    let typewriterElement = document.getElementById('typewriter');
    if (!typewriterElement) {
        console.error('The element with id "typewriter" was not found.');
        return;
    }

    let i = 0;
    function typeNextCharacter() {
        if (i < text.length) {
            typewriterElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeNextCharacter, 100); // Adjust typing speed here
        } else {
            // Remove the border and animation from the typewriter element
            typewriterElement.style.borderRight = 'none';
            typewriterElement.style.animation = 'none';
            startFireworks(); // Call startFireworks after typeWriterEffect
        }
    }

    typeNextCharacter();
}

// Start the sequence
exampleFunction();
