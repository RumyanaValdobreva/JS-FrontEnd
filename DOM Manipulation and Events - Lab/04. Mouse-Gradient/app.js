function attachGradientEvents() {
    const gradient = document.getElementById('gradient');
    const result = document.getElementById('result');

    gradient.addEventListener('mousemove', (event) => {
        const currentPosition = event.offsetX;
        const width = gradient.clientWidth;

        const percentage = Math.floor((currentPosition / width) * 100);

        result.textContent = `${percentage}%`;
    });
}