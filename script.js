function toggleMobileMenu(){
    document.getElementById("menu").classList.toggle("active");
}

document.addEventListener('DOMContentLoaded', (event) => {
    const texts = document.querySelectorAll('#cycling-text p');
    let currentIndex = 0;

    function cycleText() {
        texts.forEach((text, index) => {
            text.style.display = (index === currentIndex) ? 'block' : 'none';
        });

        currentIndex = (currentIndex + 1) % texts.length;
    }

    cycleText();
    setInterval(cycleText, 3000); 
});

