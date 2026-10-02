/* ========================================================== */
/* COSTA SMART RASTREADORES - ARQUIVO JAVASCRIPT (script.js)  */
/* Controla a lógica do carrossel automático do Hero e interações */
/* ========================================================== */

/**
 * Array de objetos contendo os dados de cada slide do carrossel principal.
 * Configurado com detalhes em azul tecnológico para atender à preferência do cliente.
 */
const carouselSlides = [
    {
        bg: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=1920&auto=format&fit=crop",
        badgeStyle: "bg-sky-500/20 text-sky-400 border-sky-500/30",
        badge: "Atendimento Empresas & Pessoa Física",
        title: "Rastreamento Inteligente para <span class='text-sky-400'>Sua Frota</span> e Seu Carro.",
        desc: "Segurança satelital 24 horas. Atendemos desde frotas corporativas completas até veículos particulares com monitoramento pelo celular e bloqueio remoto imediato."
    },
    {
        bg: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?q=80&w=1920&auto=format&fit=crop",
        badgeStyle: "bg-sky-500/20 text-sky-400 border-sky-500/30",
        badge: "Solução Comercial para Frotas",
        title: "Gestão Completa de <span class='text-sky-400'>Frotas Corporativas</span>.",
        desc: "Monitore rotas em tempo real, reduza custos operacionais de combustível e tenha total controle sobre seus caminhões e utilitários."
    },
    {
        bg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1920&auto=format&fit=crop",
        badgeStyle: "bg-sky-500/20 text-sky-400 border-sky-500/30",
        badge: "Solução para Carros Particulares",
        title: "Proteção Absoluta para o seu <span class='text-sky-400'>Carro Particular</span>.",
        desc: "Tranquilidade total para você e sua família. Aplicativo simples e intuitivo no celular com alerta de ignição e recuperação veicular."
    }
];

// Variável de controle do slide atual
let currentSlide = 0;

// Seleção dos elementos do DOM que serão alterados pelo carrossel
const bgElement = document.getElementById('m1-carousel-bg');
const badgeElement = document.getElementById('m1-badge');
const titleElement = document.getElementById('m1-title');
const descElement = document.getElementById('m1-desc');

/**
 * Função responsável por atualizar o slide ativo com base no índice fornecido.
 * @param {number} index - Índice do slide (0, 1 ou 2)
 */
function setCarouselSlide(index) {
    currentSlide = index;
    const slide = carouselSlides[currentSlide];
    
    // Verifica se os elementos existem antes de modificar suas propriedades
    if (bgElement) {
        bgElement.style.backgroundImage = `url('${slide.bg}')`;
        badgeElement.className = `inline-block px-3.5 py-1.5 rounded-full text-xs font-bold border uppercase tracking-widest mb-4 ${slide.badgeStyle}`;
        badgeElement.innerText = slide.badge;
        titleElement.innerHTML = slide.title;
        descElement.innerText = slide.desc;

        // Atualiza a aparência visual dos indicadores (bolinhas) do carrossel em azul
        for (let i = 0; i < carouselSlides.length; i++) {
            const dot = document.getElementById(`m1-dot-${i}`);
            if (dot) {
                if (i === currentSlide) {
                    dot.className = "w-8 h-2 rounded-full bg-sky-400 transition-all";
                } else {
                    dot.className = "w-3 h-2 rounded-full bg-neutral-600 transition-all";
                }
            }
        }
    }
}

// Inicializa a troca automática de slides a cada 5 segundos (5000 milissegundos)
setInterval(() => {
    currentSlide = (currentSlide + 1) % carouselSlides.length;
    setCarouselSlide(currentSlide);
}, 5000);