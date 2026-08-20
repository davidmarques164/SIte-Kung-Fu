let currentIndex = 0;
const cards = document.querySelectorAll('.carousel-card');
const totalCards = cards.length;
let isAuthenticated = false;
let isGraduationsExpanded = false;

const newsDetails = [
    {
        title: "Torneio Estadual de Artes Marciais 2026",
        text: "<p>Edital oficial divulgado pela comissão organizadora. As disputas ocorrerão nas modalidades de formas individuais, armas tradicionais e combate full-contact com regulamento unificado.</p><p>As inscrições devem ser confirmadas pelo responsável credenciado de cada escola até o final do próximo mês.</p>"
    },
    {
        title: "Seminário Geral de Aperfeiçoamento Técnico",
        text: "<p>Módulo imersivo destinado a praticantes a partir da faixa azul e mestres de grau Dan. O foco envolverá biomecânica aplicada a defesas, controle articular e técnicas tradicionais de curta distância.</p>"
    },
    {
        title: "Novo Regulamento Técnico e de Arbitragem",
        text: "<p>Revisão anual das diretrizes de arbitragem e critérios de pontuação técnica em bancas examinadoras. Todas as escolas credenciadas devem adotar a padronização imediatamente.</p>"
    },
    {
        title: "Banca Examinadora para Graus Dan (1º ao 5º Dan)",
        text: "<p>Instruções e critérios para submissão de currículo marcial, dissertação técnica e avaliação prática sob supervisão dos mestres de grau superior.</p>"
    },
    {
        title: "Escolas e Dojos Credenciados para 2026",
        text: "<p>Relação atualizada de polos autorizados a ministrar o currículo oficial e aplicar exames de faixas com certificação reconhecida pela federação.</p>"
    }
];

const dataBase = {
    estilo: {
        title: "Estilo & Filosofia",
        text: "<p>A linhagem foca na união da técnica refinada com o condicionamento de impacto, preservando as raízes marciais tradicionais e sua aplicação marcial direta.</p>"
    },
    filiacao: {
        title: "Árvore Genealógica & Filiação",
        text: "<p>Registro genealógico dos mestres fundadores, detalhando as linhagens ancestrais diretas e as gerações sucessoras reconhecidas pela federação.</p>"
    },
    escolas: {
        title: "Escolas e Dojos Credenciados",
        text: "<p>Relação oficial de centros de treinamento credenciados sob supervisão técnica dos mestres de grau Dan registrados.</p>"
    },
    graduacoes_geral: {
        title: "Sistema Geral de Graduações & Dans",
        text: "<p>Estrutura curricular completa de avaliação marcial da escola Garra de Águia. Compreende o percurso formativo das faixas coloridas (Branca à Marrom), a consagração da Faixa Preta e os graus superiores de maestria técnica (1º ao 5º Dan).</p><p>Explore o carrossel acima ou selecione as faixas no menu lateral para visualizar os critérios detalhados de cada grau.</p>"
    },
    'Faixa Branca': {
        title: "Faixa Branca",
        text: "<p>O início da jornada no Kung Fu Garra de Águia.</p><p>Foco na postura básica, disciplina, flexibilidade inicial e adaptação aos comandos e rituais tradicionais do dojo.</p>"
    },
    'Faixa Amarela': {
        title: "Faixa Amarela",
        text: "<p>Desenvolvimento das bases e consolidação dos movimentos fundamentais.</p><p>O praticante aprimora o equilíbrio, deslocamentos em posições fundamentais (Ma Bu, Gong Bu) e primeiros blocos de defesa e ataque.</p>"
    },
    'Faixa Verde': {
        title: "Faixa Verde",
        text: "<p>Refinamento técnico, velocidade e aprofundamento nos conceitos tradicionais.</p><p>Estudo dos princípios de garras, pontos de alavanca e coordenação motora refinada.</p>"
    },
    'Faixa Vermelha': {
        title: "Faixa Vermelha",
        text: "<p>Desenvolvimento de energia, força e transição para técnicas dinâmicas.</p><p>Início do trabalho de potência muscular, velocidade de impacto e transições fluidas de formas.</p>"
    },
    'Faixa Azul': {
        title: "Faixa Azul",
        text: "<p>Fluidez, aplicação prática de combate e técnicas intermediárias.</p><p>Módulo imersivo de combate contínuo, projeções, controle articular e esquivas rápidas.</p>"
    },
    'Faixa Roxa': {
        title: "Faixa Roxa",
        text: "<p>Maturidade técnica, agilidade e formas avançadas do estilo.</p><p>Aprofundamento no manejo de armas tradicionais (bastão, sabre) e combinações de alta velocidade.</p>"
    },
    'Faixa Marrom': {
        title: "Faixa Marrom",
        text: "<p>Preparação final e domínio integral dos fundamentos marciais.</p><p>Polimento de detalhes técnicos, capacidade de auxílio na instrução e resistência física avançada.</p>"
    },
    'Faixa Preta': {
        title: "Faixa Preta",
        text: "<p>Consagração do praticante, liderança e autodomínio marcial.</p><p>O praticante atinge a maestria dos fundamentos básicos e intermediários, iniciando a fase de preservador da linhagem.</p>"
    },
    'Preta 1º Dan': {
        title: "Faixa Preta 1º Dan",
        text: "<p>Início da maestria técnica e compromisso com o aperfeiçoamento da arte.</p><p>Aprofundamento nos segredos internos das formas e desenvolvimento pedagógico marcial.</p>"
    },
    'Preta 2º Dan': {
        title: "Faixa Preta 2º Dan",
        text: "<p>Aprofundamento na precisão técnica, aplicações de combate e transmissão de conhecimento.</p><p>Capacidade de formação de novos alunos e condução autônoma de treinos técnicos.</p>"
    },
    'Preta 3º Dan': {
        title: "Faixa Preta 3º Dan",
        text: "<p>Consolidação da condição de instrutor e maturidade na filosofia marcial.</p><p>Refinamento em armas duplas e articulação teórica sobre a história e filosofia da linhagem.</p>"
    },
    'Preta 4º Dan': {
        title: "Faixa Preta 4º Dan",
        text: "<p>Domínio pleno das formas tradicionais, armas avançadas e liderança na escola.</p><p>Supervisão técnica de exames regionais e contribuição ativa no conselho de mestres.</p>"
    },
    'Preta 5º Dan': {
        title: "Faixa Preta 5º Dan",
        text: "<p>Grau de mestre, síntese de sabedoria técnica, teórica e legado na linhagem.</p><p>Reconhecimento pleno da autoridade marcial, sabedoria filosófica e representação oficial da federação.</p>"
    }
};

function toggleSidebar() {
    const sidebar = document.getElementById('appSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    sidebar.classList.toggle('collapsed');
    
    if (window.innerWidth <= 768) {
        if (!sidebar.classList.contains('collapsed')) {
            overlay.classList.add('active');
        } else {
            overlay.classList.remove('active');
        }
    }
}

function showCarouselMode(mode) {
    const c1 = document.getElementById('carouselContainer');
    const c2 = document.getElementById('kungfuCarouselWrapper');

    if (mode === 'graduacoes') {
        c1.style.display = 'none';
        c2.style.display = 'flex';
        initKungFuCarousel();
    } else {
        c1.style.display = 'flex';
        c2.style.display = 'none';
        updateCarousel();
    }
}

function toggleGraduationsDropdown() {
    const memberGraduations = document.getElementById('memberGraduations');
    const graduacoesGeneralItem = document.getElementById('graduacoesGeneralItem');
    
    isGraduationsExpanded = !isGraduationsExpanded;
    
    if (isGraduationsExpanded) {
        memberGraduations.style.display = "flex";
        graduacoesGeneralItem.classList.add('open');
    } else {
        memberGraduations.style.display = "none";
        graduacoesGeneralItem.classList.remove('open');
    }
    
    showCarouselMode('graduacoes');
    const firstBelt = document.querySelector('.kf-slide .kf-item');
    if (firstBelt) {
        syncToBelt(firstBelt.dataset.name);
    } else {
        loadContent('graduacoes_geral');
    }
}

/* --- SINCRONIZAÇÃO TOTAL DE 3 VIAS (MENU, CARROSSEL E CAIXA DE TEXTO) --- */
function highlightSidebarBelt(beltName) {
    document.querySelectorAll('#memberGraduations .sub-menu-item').forEach(item => {
        if (item.getAttribute('data-belt') === beltName) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    if (['estilo', 'filiacao', 'escolas'].includes(beltName)) {
        document.querySelectorAll('#memberGraduations .sub-menu-item').forEach(i => i.classList.remove('active'));
    }
}

function syncToBelt(beltName, shouldRotateCarousel = true) {
    showCarouselMode('graduacoes');
    highlightSidebarBelt(beltName);

    // 1. Atualizar a caixa de texto inferior
    const titleEl = document.getElementById('contentTitle');
    const bodyEl = document.getElementById('contentText');
    if (dataBase[beltName]) {
        titleEl.innerText = dataBase[beltName].title;
        bodyEl.innerHTML = dataBase[beltName].text;
    }

    // 2. Girar o carrossel Kung Fu para a faixa correspondente
    if (shouldRotateCarousel) {
        const kfSlide = document.querySelector(".kf-slide");
        if (kfSlide) {
            const items = Array.from(kfSlide.querySelectorAll(".kf-item"));
            const targetIndex = items.findIndex(item => item.getAttribute('data-name') === beltName);
            
            if (targetIndex > 0) {
                for (let i = 0; i < targetIndex; i++) {
                    kfSlide.appendChild(kfSlide.firstElementChild);
                }
            }
            const activeItem = kfSlide.querySelector(".kf-item");
            if (activeItem) {
                const kfBaseBg = document.querySelector(".kf-base-bg");
                kfBaseBg.style.backgroundImage = `url('${activeItem.dataset.img}')`;
                updateKfContent(activeItem.dataset.name, activeItem.dataset.des);
            }
        }
    }

    if (window.innerWidth <= 768) {
        const sidebar = document.getElementById('appSidebar');
        const overlay = document.getElementById('sidebarOverlay');
        sidebar.classList.add('collapsed');
        overlay.classList.remove('active');
    }
}

function onBeltClick(beltName) {
    syncToBelt(beltName, true);
}

/* --- LÓGICA DO CARROSSEL 1 (3D COVERFLOW DE NOTÍCIAS) --- */
function updateCarousel() {
    const isMobile = window.innerWidth <= 768;
    const offset1 = isMobile ? 125 : 240;
    const offset2 = isMobile ? 175 : 280;
    const scaleCenter = isMobile ? 1.04 : 1.08;
    const scaleSide1 = isMobile ? 0.78 : 0.85;
    const scaleSide2 = isMobile ? 0.65 : 0.70;
    const rotateAngle = isMobile ? 26 : 32;

    cards.forEach((card, index) => {
        let offset = index - currentIndex;
        
        if (offset > Math.floor(totalCards / 2)) offset -= totalCards;
        if (offset < -Math.floor(totalCards / 2)) offset += totalCards;

        const absOffset = Math.abs(offset);

        if (absOffset === 0) {
            card.style.transform = `translateX(0px) scale(${scaleCenter}) rotateY(0deg) translateZ(40px)`;
            card.style.opacity = '1';
            card.style.zIndex = '10';
            card.style.filter = 'none';
            card.style.boxShadow = '0 15px 35px rgba(229, 9, 20, 0.4), inset 0 1px 1px rgba(255, 255, 255, 0.3)';
            card.style.borderColor = 'rgba(229, 9, 20, 0.8)';
        } else if (absOffset === 1) {
            const translateX = offset * offset1;
            const rotateY = offset * -rotateAngle;
            card.style.transform = `translateX(${translateX}px) scale(${scaleSide1}) rotateY(${rotateY}deg) translateZ(0px)`;
            card.style.opacity = isMobile ? '0.7' : '0.65';
            card.style.zIndex = '5';
            card.style.filter = isMobile ? 'none' : 'blur(1px)';
            card.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.8)';
            card.style.borderColor = 'var(--gloss-border)';
        } else {
            const translateX = offset * offset2;
            const rotateY = offset * -(rotateAngle + 12);
            card.style.transform = `translateX(${translateX}px) scale(${scaleSide2}) rotateY(${rotateY}deg) translateZ(-60px)`;
            card.style.opacity = isMobile ? '0.15' : '0.2';
            card.style.zIndex = '1';
            card.style.filter = 'blur(2px)';
            card.style.boxShadow = 'none';
            card.style.borderColor = 'transparent';
        }
    });
}

function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalCards) % totalCards;
    updateCarousel();
}

function showNews(index) {
    currentIndex = index;
    updateCarousel();
    const news = newsDetails[index];
    document.getElementById('contentTitle').innerText = news.title;
    document.getElementById('contentText').innerHTML = news.text;
}

/* --- LÓGICA DO CARROSSEL 2 (KUNG FU EXPANSIVO) --- */
let isKfAnimating = false;
let kfInitialized = false;

function initKungFuCarousel() {
    const kfBaseBg = document.querySelector(".kf-base-bg");
    const kfSlide = document.querySelector(".kf-slide");
    const firstItem = kfSlide.querySelector(".kf-item");
    if (!firstItem) return;

    kfBaseBg.style.backgroundImage = `url('${firstItem.dataset.img}')`;
    updateKfContent(firstItem.dataset.name, firstItem.dataset.des);
    highlightSidebarBelt(firstItem.dataset.name);
    kfInitialized = true;
}

function updateKfContent(name, des) {
    const titleElem = document.querySelector(".kf-content-wrapper .kf-name");
    const desElem = document.querySelector(".kf-content-wrapper .kf-des");
    if (!titleElem || !desElem) return;

    titleElem.textContent = name;
    desElem.textContent = des;

    titleElem.style.animation = "none";
    desElem.style.animation = "none";
    void titleElem.offsetWidth;
    titleElem.style.animation = "";
    desElem.style.animation = "";
}

function handleKfNext() {
    if (isKfAnimating) return;
    isKfAnimating = true;

    const kfBaseBg = document.querySelector(".kf-base-bg");
    const kfAnimBg = document.querySelector(".kf-anim-bg");
    const kfSlide = document.querySelector(".kf-slide");
    const items = kfSlide.querySelectorAll(".kf-item");
    const currentImg = items[0].dataset.img;
    const nextItem = items[1];
    const nextImg = nextItem.dataset.img;

    kfBaseBg.style.backgroundImage = `url('${currentImg}')`;
    kfAnimBg.style.backgroundImage = `url('${nextImg}')`;
    kfAnimBg.className = "kf-bg-layer kf-anim-bg kf-animating-expand";

    kfSlide.appendChild(items[0]);
    updateKfContent(nextItem.dataset.name, nextItem.dataset.des);

    highlightSidebarBelt(nextItem.dataset.name);
    const titleEl = document.getElementById('contentTitle');
    const bodyEl = document.getElementById('contentText');
    if (dataBase[nextItem.dataset.name]) {
        titleEl.innerText = dataBase[nextItem.dataset.name].title;
        bodyEl.innerHTML = dataBase[nextItem.dataset.name].text;
    }

    setTimeout(() => {
        kfBaseBg.style.backgroundImage = `url('${nextImg}')`;
        kfAnimBg.className = "kf-bg-layer kf-anim-bg";
        isKfAnimating = false;
    }, 700);
}

function handleKfPrev() {
    if (isKfAnimating) return;
    isKfAnimating = true;

    const kfBaseBg = document.querySelector(".kf-base-bg");
    const kfAnimBg = document.querySelector(".kf-anim-bg");
    const kfSlide = document.querySelector(".kf-slide");
    const items = kfSlide.querySelectorAll(".kf-item");
    const currentImg = items[0].dataset.img;
    const prevItem = items[items.length - 1];
    const prevImg = prevItem.dataset.img;

    kfBaseBg.style.backgroundImage = `url('${prevImg}')`;
    kfAnimBg.style.backgroundImage = `url('${currentImg}')`;
    kfAnimBg.className = "kf-bg-layer kf-anim-bg kf-animating-shrink";

    kfSlide.prepend(prevItem);
    updateKfContent(prevItem.dataset.name, prevItem.dataset.des);

    highlightSidebarBelt(prevItem.dataset.name);
    const titleEl = document.getElementById('contentTitle');
    const bodyEl = document.getElementById('contentText');
    if (dataBase[prevItem.dataset.name]) {
        titleEl.innerText = dataBase[prevItem.dataset.name].title;
        bodyEl.innerHTML = dataBase[prevItem.dataset.name].text;
    }

    setTimeout(() => {
        kfAnimBg.className = "kf-bg-layer kf-anim-bg";
        isKfAnimating = false;
    }, 700);
}

function accessActiveGraduation() {
    const kfSlide = document.querySelector(".kf-slide");
    const activeItem = kfSlide.querySelector(".kf-item");
    if (activeItem) {
        syncToBelt(activeItem.dataset.name, false);
    }
}

/* --- AUTH & CONTEÚDO GERAL --- */
function toggleAuth() {
    isAuthenticated = !isAuthenticated;
    const authBtnText = document.getElementById('authBtnText');
    const authBtn = document.getElementById('authBtn');
    const graduacoesGeneralItem = document.getElementById('graduacoesGeneralItem');
    const memberGraduations = document.getElementById('memberGraduations');

    if (isAuthenticated) {
        authBtnText.innerText = "Sair";
        authBtn.style.background = "linear-gradient(180deg, #444 0%, #222 100%)";
        authBtn.style.borderColor = "rgba(255, 255, 255, 0.2)";
        graduacoesGeneralItem.style.display = "flex";
        memberGraduations.style.display = "none";
        isGraduationsExpanded = false;
        graduacoesGeneralItem.classList.remove('open');
    } else {
        authBtnText.innerText = "Entrar no Portal";
        authBtn.style.background = "linear-gradient(180deg, #ff2a2a 0%, var(--red-primary) 100%)";
        authBtn.style.borderColor = "rgba(229, 9, 20, 0.4)";
        graduacoesGeneralItem.style.display = "none";
        memberGraduations.style.display = "none";
        isGraduationsExpanded = false;
        graduacoesGeneralItem.classList.remove('open');
        showCarouselMode('noticias');
        document.querySelectorAll('.menu-item').forEach(i => i.classList.remove('active'));
    }
}

function loadContent(key) {
    const titleEl = document.getElementById('contentTitle');
    const bodyEl = document.getElementById('contentText');

    if (key === 'estilo' || key === 'filiacao' || key === 'escolas') {
        showCarouselMode('noticias');
        document.querySelectorAll('#memberGraduations .sub-menu-item').forEach(i => i.classList.remove('active'));
    }

    if (dataBase[key]) {
        titleEl.innerText = dataBase[key].title;
        bodyEl.innerHTML = dataBase[key].text;
    } else {
        titleEl.innerText = key;
        bodyEl.innerHTML = `<p>Exibindo conteúdo oficial, matriz de formas, técnicas de defesa e critérios de exame para <strong>${key}</strong>.</p>`;
    }

    if (window.innerWidth <= 768 && key !== 'graduacoes_geral') {
        const sidebar = document.getElementById('appSidebar');
        const overlay = document.getElementById('sidebarOverlay');
        sidebar.classList.add('collapsed');
        overlay.classList.remove('active');
    }
}

/* --- TOUCH & SWIPE EM AMBOS OS CARROSSEIS --- */
let touchStartX = 0;
let touchEndX = 0;
const c1Section = document.getElementById('carouselContainer');
const c2Section = document.getElementById('kfContainer');

function setupSwipe(element, onNext, onPrev) {
    element.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    element.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const swipeThreshold = 40;
        if (touchEndX < touchStartX - swipeThreshold) onNext();
        if (touchEndX > touchStartX + swipeThreshold) onPrev();
    }, { passive: true });
}

setupSwipe(c1Section, () => moveSlide(1), () => moveSlide(-1));
setupSwipe(c2Section, handleKfNext, handleKfPrev);

window.addEventListener('resize', () => {
    updateCarousel();
});

updateCarousel();
