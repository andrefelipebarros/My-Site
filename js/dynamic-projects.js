// Lista de Projetos 
const projetos = [
    {
        "id": 1,
        "titulo": "VavaHelper - Frontend",
        "descricao": "Interface desenvolvida para auxiliar jogadores iniciantes de Valorant. O frontend é intuitivo, responsivo e conecta com a API para exibir dicas, tutoriais e recursos.",
        "tecnologias": ["TypeScript", "React", "CSS"],
        "status": "andamento",
        "link": "https://github.com/VavaHelper",
        "link2": "https://github.com/VavaHelper",
        "imagem": "./img/VavaHelper.png"
    },
    {
        "id": 2,
        "titulo": "VavaHelper - Backend",
        "descricao": "API desenvolvida em Java para fornecer dados e dicas ao frontend do VavaHelper. Gerencia informações úteis aos jogadores e fornece rotas organizadas para consumo.",
        "tecnologias": ["Java", "Spring Boot", "SQL", "JSON"],
        "status": "andamento",
        "link": "https://github.com/VavaHelper/Vava-API",
        "link2": "https://github.com/VavaHelper/Vava-API",
        "imagem": "./img/VavaHelper.png"
    },
    {
        "id": 3,
        "titulo": "SecureTimeNotes - Frontend",
        "descricao": "Interface moderna e responsiva para gerenciamento de anotações. Permite criar, editar, organizar notas, usar cronômetro e visualizar calendário.",
        "tecnologias": ["TypeScript", "Angular", "CSS"],
        "status": "andamento",
        "link": "https://github.com/andrefelipebarros/SecureTimeNotes",
        "link2": "https://securetimenotes.netlify.app/",
        "imagem": "./img/SecureTimeNotes.png"
    },
    {
        "id": 4,
        "titulo": "SecureTimeNotes - Backend",
        "descricao": "Backend responsável pelo gerenciamento das notas, usuários e funcionalidades como cronômetro e calendário, utilizando Java e Spring Boot.",
        "tecnologias": ["Java", "SQL", "Spring Boot"],
        "status": "concluido",
        "link": "https://github.com/andrefelipebarros/SecureTimeNotes",
        "link2": "https://securetimenotes.up.railway.app/swagger",
        "imagem": "./img/SecureTimeNotes.png"
    },
    {
        "id": 5,
        "titulo": "Hórus - Frontend",
        "descricao": "O Projeto Hórus promove a cibersegurança, oferecendo uma aplicação mobile e artigos para usuários, desenvolvedores e empresas que buscam proteção no ambiente digital.",
        "tecnologias": ["TypeScript", "React", "Cibersegurança", "Artigos Técnicos"],
        "status": "concluido",
        "link": "https://www.instagram.com/projeto_horusuva/",
        "link2": "https://projeto-horus-web.vercel.app/",
        "imagem": "./img/horus.jpg"
    },
    {
        "id": 6,
        "titulo": "UserCRUD - Backend",
        "descricao": "CRUD básico de usuários utilizando Spring Boot. Implementa criptografia de senhas com Bcrypt e validação de palavras ofensivas no nome. Seguro e funcional.",
        "tecnologias": ["Java", "Spring Boot", "BCrypt", "REST"],
        "status": "concluído",
        "link": "https://github.com/andrefelipebarros/UserCRUD-Seguro",
        "link2": "https://first-full-stack-project.up.railway.app/docs",
        "imagem": "./img/usercrud.png"
    },
    {
        "id": 7,
        "titulo": "UserCRUD - Frontend",
        "descricao": "CRUD básico de usuários utilizando Spring Boot. Implementa criptografia de senhas com Bcrypt e validação de palavras ofensivas no nome. Seguro e funcional.",
        "tecnologias": ["TypeScript", "Angular", "CSS"],
        "status": "concluído",
        "link": "https://github.com/andrefelipebarros/UserCRUD-Seguro",
        "link2": "https://first-full-stack-project-angular.vercel.app/",
        "imagem": "./img/usercrud.png"
    }
];



// Variável global para a página atual
let currentPage = 0;

// Variáveis para swipe/drag
let startX = 0;
let isDragging = false;
const swipeThreshold = 50; // pixels para considerar o swipe

// Função para renderizar os projetos em páginas
function renderProjects(filteredProjects) {
    const projectContainer = document.querySelector('.project-container');
    projectContainer.innerHTML = '';

    // Define quantidade de projetos por página conforme a largura da tela:
    const projectsPerPage = window.innerWidth < 1280 ? 1 : 2;
    const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
    createIndicators(totalPages);

    // Divide os projetos em páginas
    for (let i = 0; i < totalPages; i++) {
        const startIndex = i * projectsPerPage;
        const endIndex = startIndex + projectsPerPage;
        const projectsToShow = filteredProjects.slice(startIndex, endIndex);

        const pageDiv = document.createElement('div');
        pageDiv.classList.add('project-page');
        // Exibe apenas a página ativa
        pageDiv.style.display = (i === 0) ? 'block' : 'none';

        projectsToShow.forEach(projeto => {
            const projectCard = `
                <div class="project-card">
                    <img src="${projeto.imagem}" alt="${projeto.titulo}" class="project-image">
                    <div class="project-info">
                        <h3>${projeto.titulo}</h3>
                        <p>${projeto.descricao}</p>
                        <p class="p-tag"><strong>${projeto.tecnologias.join(" / ")}</strong></p>
                        <a href="${projeto.link}" class="btn">GitHub</a>
                        <a href="${projeto.link2}" class="btn-s">Build</a>
                    </div>
                </div>
            `;
            pageDiv.innerHTML += projectCard;
        });

        projectContainer.appendChild(pageDiv);
    }

    // Inicializa a exibição na primeira página
    currentPage = 0;
    showPage(currentPage);
}

// Mudar a página com os botões
function changePage(direction) {
    const totalPages = document.querySelectorAll('.project-page').length;
    currentPage += direction;
    if (currentPage < 0) {
      currentPage = 0;
    } else if (currentPage >= totalPages) {
      currentPage = totalPages - 1;
    }
    showPage(currentPage);
  }

// Cria os indicadores do carrossel
function createIndicators(totalPages) {
    const indicatorsContainer = document.querySelector('.carousel-indicators');
    indicatorsContainer.innerHTML = '';

    for (let i = 0; i < totalPages; i++) {
        const indicator = document.createElement('span');
        indicator.addEventListener('click', () => {
            currentPage = i;
            showPage(currentPage);
        });
        indicatorsContainer.appendChild(indicator);
    }
    // Ativa o primeiro indicador
    if (indicatorsContainer.children.length > 0) {
        indicatorsContainer.children[0].classList.add('active');
    }
}

// Exibe a página especificada e atualiza os indicadores
function showPage(pageIndex) {
    const pages = document.querySelectorAll('.project-page');
    const indicators = document.querySelectorAll('.carousel-indicators span');

    pages.forEach((page, index) => {
        page.style.display = (index === pageIndex) ? 'block' : 'none';
    });

    indicators.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === pageIndex);
    });
}

// Função para tratar o swipe/drag
function handleSwipe(diffX) {
    if (diffX > swipeThreshold && currentPage > 0) {
        // Swipe para a direita: vai para a página anterior
        currentPage--;
        showPage(currentPage);
    } else if (diffX < -swipeThreshold && currentPage < document.querySelectorAll('.project-page').length - 1) {
        // Swipe para a esquerda: vai para a próxima página
        currentPage++;
        showPage(currentPage);
    }
}

// Eventos de mouse para desktop
const projectContainer = document.querySelector('.project-container');
projectContainer.addEventListener('mousedown', (e) => {
    startX = e.clientX;
    isDragging = true;
});
projectContainer.addEventListener('mouseup', (e) => {
    if (!isDragging) return;
    const diffX = e.clientX - startX;
    handleSwipe(diffX);
    isDragging = false;
});
projectContainer.addEventListener('mouseleave', () => {
    isDragging = false;
});

// Eventos de toque para dispositivos móveis
projectContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
});
projectContainer.addEventListener('touchend', (e) => {
    if (!isDragging) return;
    const diffX = e.changedTouches[0].clientX - startX;
    handleSwipe(diffX);
    isDragging = false;
});

// Função para filtrar projetos
function filterProjects() {
    const checkedFilters = Array.from(document.querySelectorAll('.filter-checkbox:checked')).map(cb => cb.value);
    const statusFilter = document.getElementById('status-filter').value;

    const filteredProjects = projetos.filter(projeto => {
        const techMatch = checkedFilters.length === 0 || projeto.tecnologias.some(tech => checkedFilters.includes(tech));
        const statusMatch = statusFilter === "todos" || projeto.status === statusFilter;
        return techMatch && statusMatch;
    });

    renderProjects(filteredProjects);
}

// Eventos dos filtros
document.querySelectorAll('.filter-checkbox').forEach(cb => {
    cb.addEventListener('change', filterProjects);
});
document.getElementById('status-filter').addEventListener('change', filterProjects);

// Inicializa com todos os projetos
renderProjects(projetos);

// Re-renderiza os projetos quando a janela for redimensionada para ajustar o número de itens por página
window.addEventListener('resize', () => {
    // Você pode optar por manter os filtros ativos ou renderizar todos novamente
    renderProjects(projetos);
});
