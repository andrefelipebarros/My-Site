window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) { // Se a página foi rolada mais de 50px
      navbar.classList.add('scrolled'); // Adiciona a classe scrolled
    } else {
      navbar.classList.remove('scrolled'); // Remove a classe scrolled
    }
});