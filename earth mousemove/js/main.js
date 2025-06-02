    const earth = document.querySelector('.earth');
    const stars = document.querySelector('.stars');

    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let currentStarsX = 0, currentStarsY = 0;

    const maxEarthTranslate = 30;
    const maxStarsTranslate = 10;

    document.addEventListener('mousemove', (e) => {
        const { innerWidth: w, innerHeight: h } = window;
        const x = (e.clientX - w / 2) / (w / 2);
        const y = (e.clientY - h / 2) / (h / 2);

        targetX = x;
        targetY = y;
    });

    function animate() {
        currentX += ((targetX * maxEarthTranslate) - currentX) * 0.05;
        currentY += ((targetY * maxEarthTranslate) - currentY) * 0.05;
        earth.style.transform = `translate(${currentX}px, ${currentY}px)`;

        currentStarsX += ((targetX * maxStarsTranslate) - currentStarsX) * 0.03;
        currentStarsY += ((targetY * maxStarsTranslate) - currentStarsY) * 0.03;
        stars.style.transform = `translate(${currentStarsX}px, ${currentStarsY}px)`;

        requestAnimationFrame(animate);
    }

    animate();

