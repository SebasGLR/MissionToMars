document.addEventListener('mousemove', function(e) {
    const stars = document.querySelector('.stars');
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    stars.style.transform = `translate(-${x / 10}%, -${y / 10}%)`;
});