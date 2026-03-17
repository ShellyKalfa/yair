document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const btn = this.querySelector('button');
    const originalText = btn.innerText;
    
    btn.innerText = 'Se trimite...';
    btn.style.background = '#27ae60';
    
    setTimeout(() => {
        alert('Mesajul a fost trimis cu succes! Vă vom contacta în cel mai scurt timp.');
        btn.innerText = originalText;
        btn.style.background = '#2a7da3';
        this.reset();
    }, 1500);
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 0';
        header.style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        header.style.padding = '15px 0';
    }
});