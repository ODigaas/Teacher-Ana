/* =========================================================
   DADOS — EDITE AQUI
   ========================================================= */

// 📚 LIVROS: troque "cover" (imagem da capa) e "pdf" (link do arquivo)
const BOOKS = [
  { title: "21St Century Communication 2", level: "Intermediário", cover: "img/capas/21St_Century_Comms2.jpg",   pdf: "pdfs/21St_Century_Comms2.pdf" },
  { title: "A Little Princess",level: "Leitura",       cover: "img/capas/ALittlePrincess.jpg",   pdf: "pdfs/ALittlePrincess.pdf" },
];

// 🎵 PLAYLISTS: troque "thumb" e "url" (link da playlist no YouTube)
const PLAYLISTS = [
  { title: "Food & Drinks", tag: "Vocabulário",        thumb: "img/playlists/Food&Drinks.jpg",   url: "https://www.youtube.com/playlist?list=PLKObAj8oxd7Y" },
  { title: "Simple Past",    tag: "Vocabulário", thumb: "img/playlists/SimplePast.jpg",  url: "https://www.youtube.com/playlist?list=PLUxz3vdpPCs0" },
  { title: "Simple Future",           tag: "Vocabulário",     thumb: "img/playlists/SimpleFuture.jpg", url: "https://www.youtube.com/playlist?list=PLImXN2hk3zcs" },
  { title: "Simple Present",           tag: "Vocabulário",     thumb: "img/playlists/SimplePresent.jpg", url: "https://www.youtube.com/playlist?list=PLVcv8FUgi24k" },
  { title: "Comparatives",           tag: "Vocabulário",     thumb: "img/playlists/Comparatives.jpg", url: "https://www.youtube.com/playlist?list=PLb6lWVl-XpC0" },
  { title: "Superlatives",           tag: "Vocabulário",     thumb: "img/playlists/Superlatives.jpg", url: "https://www.youtube.com/playlist?list=PLGqCVWsn6p1U" },
  { title: "Modal verbs",           tag: "Vocabulário",     thumb: "img/playlists/Modal.jpg", url: "https://www.youtube.com/playlist?list=PLL-bA-DZUqEQ" },
  { title: "Preposition of place & movement",           tag: "Vocabulário",     thumb: "img/playlists/Place.jpg", url: "https://www.youtube.com/playlist?list=PLDWfxwj9r-M8" },
  { title: "Family Members",           tag: "Vocabulário",     thumb: "img/playlists/Family.jpg", url: "https://www.youtube.com/playlist?list=PLImXN2hk3zcs" },
  { title: "Feelings",           tag: "Vocabulário",     thumb: "img/playlists/Feelings.jpg", url: "https://www.youtube.com/playlist?list=PLJVPemoym9E4" },
];

// 🃏 FLASHCARDS: adicione quantas pastas e cards quiser
// level: "basico" | "intermediario" | "dificil"
const FLASHCARD_DECKS = [
  {
    id: "cores", emoji: "🎨", title: "Cores", level: "basico", description: "Vocabulário básico de cores",
    cards: [
      { q: "Vermelho", a: "Red" },
      { q: "Azul", a: "Blue" },
      { q: "Amarelo", a: "Yellow" },
      { q: "Verde", a: "Green" },
      { q: "Roxo", a: "Purple" },
      { q: "Laranja", a: "Orange" },
      { q: "Cinza", a: "Gray / Grey" },
      { q: "Rosa", a: "Pink" },
      { q: "Preto", a: "Black" },
      { q: "Branco", a: "White" },
      { q: "Marrom", a: "Brown" },
      { q: "Dourado", a: "Gold" },
    ],
  },
  {
    id: "animais", emoji: "🐾", title: "Animais", level: "basico", description: "Bichos domésticos e selvagens",
    cards: [
      { q: "Cachorro", a: "Dog" },
      { q: "Gato", a: "Cat" },
      { q: "Cavalo", a: "Horse" },
      { q: "Coelho", a: "Rabbit" },
      { q: "Tartaruga", a: "Turtle" },
      { q: "Pássaro", a: "Bird" },
      { q: "Peixe", a: "Fish" },
      { q: "Vaca", a: "Cow" },
      { q: "Porco", a: "Pig" },
      { q: "Leão", a: "Lion" },
      { q: "Macaco", a: "Monkey" },
      { q: "Elefante", a: "Elephant" },
    ],
  },
  {
    id: "irregulares", emoji: "⚡", title: "Verbos Irregulares", level: "intermediario", description: "Passado simples e particípio",
    cards: [
      { q: "Go", a: "Went · Gone" },
      { q: "Eat", a: "Ate · Eaten" },
      { q: "Write", a: "Wrote · Written" },
      { q: "Buy", a: "Bought · Bought" },
      { q: "See", a: "Saw · Seen" },
      { q: "Take", a: "Took · Taken" },
      { q: "Speak", a: "Spoke · Spoken" },
      { q: "Begin", a: "Began · Begun" },
      { q: "Drink", a: "Drank · Drunk" },
      { q: "Know", a: "Knew · Known" },
      { q: "Forget", a: "Forgot · Forgotten" },
      { q: "Think", a: "Thought · Thought" },
    ],
  },
  {
    id: "frases", emoji: "💬", title: "Frases do Dia a Dia", level: "intermediario", description: "Expressões úteis de conversação",
    cards: [
      { q: "Prazer em te conhecer", a: "Nice to meet you" },
      { q: "Quanto custa?", a: "How much is it?" },
      { q: "Pode repetir, por favor?", a: "Could you repeat that, please?" },
      { q: "Estou só olhando", a: "I'm just looking" },
      { q: "Sem problemas", a: "No worries" },
      { q: "Com licença", a: "Excuse me" },
      { q: "Onde fica o banheiro?", a: "Where is the restroom?" },
      { q: "Estou atrasado(a)", a: "I'm running late" },
      { q: "Pode falar mais devagar?", a: "Could you speak more slowly?" },
      { q: "A conta, por favor", a: "The check, please" },
      { q: "Tanto faz", a: "It doesn't matter / Whatever" },
      { q: "Até mais tarde!", a: "See you later!" },
    ],
  },
  {
    id: "viagem", emoji: "✈️", title: "Viagem & Aeroporto", level: "intermediario", description: "Vocabulário para viajar",
    cards: [
      { q: "Passagem", a: "Ticket" },
      { q: "Cartão de embarque", a: "Boarding pass" },
      { q: "Bagagem de mão", a: "Carry-on (bag)" },
      { q: "Portão de embarque", a: "Gate" },
      { q: "Voo atrasado", a: "Delayed flight" },
      { q: "Alfândega", a: "Customs" },
      { q: "Escala", a: "Layover" },
      { q: "Fazer check-in", a: "To check in" },
      { q: "Ida e volta", a: "Round trip" },
      { q: "Assento na janela", a: "Window seat" },
      { q: "Esteira de bagagens", a: "Baggage claim" },
      { q: "Reserva (hotel)", a: "Booking / Reservation" },
    ],
  },
  {
    id: "phrasal", emoji: "🧩", title: "Phrasal Verbs", level: "dificil", description: "Verbos com preposições e sentidos novos",
    cards: [
      { q: "Give up", a: "Desistir" },
      { q: "Look forward to", a: "Aguardar ansiosamente" },
      { q: "Run out of", a: "Ficar sem (algo acabar)" },
      { q: "Put off", a: "Adiar" },
      { q: "Figure out", a: "Descobrir / Entender" },
      { q: "Come up with", a: "Ter (uma ideia), inventar" },
      { q: "Get along with", a: "Dar-se bem com" },
      { q: "Turn down", a: "Recusar" },
      { q: "Carry on", a: "Continuar" },
      { q: "Break down", a: "Quebrar (máquina) / Desabar emocionalmente" },
      { q: "Look up to", a: "Admirar (alguém)" },
      { q: "Call off", a: "Cancelar" },
    ],
  },
  {
    id: "idioms", emoji: "🔥", title: "Idioms & Expressões", level: "dificil", description: "Expressões idiomáticas nativas",
    cards: [
      { q: "Break a leg", a: "Boa sorte!" },
      { q: "Piece of cake", a: "Moleza / Muito fácil" },
      { q: "Hit the books", a: "Estudar muito" },
      { q: "Once in a blue moon", a: "Muito raramente" },
      { q: "Under the weather", a: "Indisposto(a) / Meio doente" },
      { q: "Cost an arm and a leg", a: "Custar os olhos da cara" },
      { q: "Spill the beans", a: "Contar o segredo / Dar com a língua nos dentes" },
      { q: "Call it a day", a: "Encerrar por hoje" },
      { q: "The ball is in your court", a: "A decisão é sua" },
      { q: "Bite the bullet", a: "Encarar algo difícil" },
      { q: "Beat around the bush", a: "Enrolar / Fazer rodeios" },
      { q: "Let the cat out of the bag", a: "Revelar um segredo sem querer" },
    ],
  },
  {
    id: "false-friends", emoji: "🎭", title: "Falsos Cognatos", level: "dificil", description: "Palavras que enganam",
    cards: [
      { q: "Pretend", a: "Fingir (não “pretender”)" },
      { q: "Actually", a: "Na verdade (não “atualmente”)" },
      { q: "Push", a: "Empurrar (não “puxar”)" },
      { q: "Parents", a: "Pais (não “parentes”)" },
      { q: "Library", a: "Biblioteca (não “livraria”)" },
      { q: "Exquisite", a: "Requintado (não “esquisito”)" },
      { q: "Lunch", a: "Almoço (não “lanche”)" },
      { q: "College", a: "Faculdade (não “colégio”)" },
      { q: "Costume", a: "Fantasia (não “costume”)" },
      { q: "Realize", a: "Perceber (não “realizar”)" },
      { q: "Assist", a: "Ajudar (não “assistir”)" },
      { q: "Sensible", a: "Sensato (não “sensível”)" },
    ],
  },
];

// Rótulos e cores das categorias de nível
const LEVELS = {
  basico:        { label: "Básico" },
  intermediario: { label: "Intermediário" },
  dificil:       { label: "Difícil" },
};

/* =========================================================
   ROTEAMENTO (Início <-> Materiais via hash)
   ========================================================= */
const pages = { home: document.getElementById("page-home"), materiais: document.getElementById("page-materiais") };

function showPage(name) {
  Object.entries(pages).forEach(([k, el]) => el.classList.toggle("active", k === name));
  document.querySelectorAll("[data-nav]").forEach(a => a.classList.toggle("active", a.dataset.nav === name));
}
function route() {
  showPage(location.hash === "#materiais" ? "materiais" : "home");
  window.scrollTo({ top: 0 });
}

document.addEventListener("click", e => {
  const nav = e.target.closest("[data-nav]");
  const scroll = e.target.closest("[data-scroll]");
  if (nav) { e.preventDefault(); history.pushState(null, "", "#" + nav.dataset.nav); route(); }
  if (scroll) {
    e.preventDefault();
    if (!pages.home.classList.contains("active")) { history.pushState(null, "", "#home"); showPage("home"); }
    document.getElementById(scroll.dataset.scroll).scrollIntoView({ behavior: "smooth" });
  }
});
window.addEventListener("popstate", route);
route();

/* =========================================================
   ABAS
   ========================================================= */
document.querySelectorAll(".tab").forEach(tab => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", t === tab));
    document.querySelectorAll(".tab-panel").forEach(p => p.classList.toggle("active", p.id === "tab-" + tab.dataset.tab));
  });
});

/* =========================================================
   CATÁLOGOS (Livros e Playlists)
   ========================================================= */
const fallbackImg = (label, ratio) =>
  `this.onerror=null;this.src='data:image/svg+xml;utf8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${ratio}"><rect width="100%" height="100%" fill="#2c2680"/><text x="50%" y="50%" fill="#ff8a7a" font-family="sans-serif" font-size="14" text-anchor="middle">${label}</text></svg>`
  )}'`;

document.getElementById("books-grid").innerHTML = BOOKS.map(b => `
  <a class="item-card" href="${b.pdf}" target="_blank" rel="noopener">
    <img class="item-cover" src="${b.cover}" alt="Capa: ${b.title}" loading="lazy" onerror="${fallbackImg("CAPA DO LIVRO", "0 0 300 400")}">
    <div class="item-body"><span>${b.level}</span><h4>${b.title}</h4></div>
  </a>`).join("");

document.getElementById("playlists-grid").innerHTML = PLAYLISTS.map(p => `
  <a class="item-card" href="${p.url}" target="_blank" rel="noopener">
    <img class="item-cover wide" src="${p.thumb}" alt="Playlist: ${p.title}" loading="lazy" onerror="${fallbackImg("THUMBNAIL DA PLAYLIST", "0 0 320 180")}">
    <div class="item-body"><span>▶ ${p.tag}</span><h4>${p.title}</h4></div>
  </a>`).join("");

/* =========================================================
   FLASHCARDS — LÓGICA DO JOGO
   ========================================================= */
const el = id => document.getElementById(id);
const screens = { folders: el("fc-folders"), game: el("fc-game"), result: el("fc-result") };
const card = el("fc-card");
const answers = el("fc-answers");

let state = { deck: null, queue: [], index: 0, right: 0, wrong: 0, flipped: false, locked: false };

function showScreen(name) {
  Object.entries(screens).forEach(([k, s]) => s.classList.toggle("hidden", k !== name));
}

// Embaralhamento Fisher-Yates
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Tela 1: renderiza as pastas (com filtro por nível)
let currentLevel = "todos";
const levelFilter = el("fc-levels");

function renderFolders() {
  const decks = FLASHCARD_DECKS.filter(d => currentLevel === "todos" || d.level === currentLevel);
  screens.folders.innerHTML = decks.length ? decks.map(d => `
    <button class="folder" data-deck="${d.id}">
      <span class="level-badge level-${d.level}">${LEVELS[d.level]?.label ?? d.level}</span>
      <span class="folder-emoji" aria-hidden="true">${d.emoji}</span>
      <h3>${d.title}</h3>
      <p>${d.description} · ${d.cards.length} cards</p>
    </button>`).join("") : `<p class="empty">Nenhuma pasta neste nível ainda.</p>`;
  levelFilter.classList.remove("hidden");
  showScreen("folders");
}

levelFilter.addEventListener("click", e => {
  const btn = e.target.closest("[data-level]");
  if (!btn) return;
  currentLevel = btn.dataset.level;
  levelFilter.querySelectorAll("[data-level]").forEach(b => b.setAttribute("aria-pressed", b === btn));
  renderFolders();
});

screens.folders.addEventListener("click", e => {
  const btn = e.target.closest("[data-deck]");
  if (btn) startDeck(btn.dataset.deck);
});

// Tela 2: inicia o jogo
function startDeck(id) {
  const deck = FLASHCARD_DECKS.find(d => d.id === id);
  state = { deck, queue: shuffle(deck.cards), index: 0, right: 0, wrong: 0, flipped: false, locked: false };
  el("fc-title").textContent = `${deck.title} · ${LEVELS[deck.level]?.label ?? ""}`;
  levelFilter.classList.add("hidden");
  showScreen("game");
  renderCard();
}

function renderCard() {
  const c = state.queue[state.index];
  state.flipped = false;
  card.classList.remove("flipped");
  answers.classList.remove("show");
  // espera a volta do flip antes de trocar o texto (evita mostrar a resposta)
  setTimeout(() => {
    el("fc-front").textContent = c.q;
    el("fc-back").textContent = c.a;
    card.classList.remove("enter"); void card.offsetWidth; card.classList.add("enter");
    state.locked = false;
  }, state.index === 0 ? 0 : 350);
  el("fc-counter").textContent = `${state.index + 1} / ${state.queue.length}`;
  el("fc-progress").style.width = `${(state.index / state.queue.length) * 100}%`;
}

function flip() {
  if (state.flipped || state.locked) return;
  state.flipped = true;
  card.classList.add("flipped");
  answers.classList.add("show");
}
card.addEventListener("click", flip);
card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); flip(); } });

// Validação: registra no placar invisível e avança
answers.addEventListener("click", e => {
  const btn = e.target.closest("[data-answer]");
  if (!btn || !state.flipped || state.locked) return;
  state.locked = true;
  btn.dataset.answer === "right" ? state.right++ : state.wrong++;
  state.index++;
  if (state.index >= state.queue.length) showResult();
  else renderCard();
});

// Tela 3: feedback final
function showResult() {
  el("fc-progress").style.width = "100%";
  const total = state.right + state.wrong;
  el("fc-right").textContent = state.right;
  el("fc-wrong").textContent = state.wrong;
  el("fc-pct").textContent = Math.round((state.right / total) * 100) + "%";
  el("fc-result-theme").textContent = `Tema: ${state.deck.title} · ${total} cards`;
  setTimeout(() => { levelFilter.classList.add("hidden"); showScreen("result"); }, 300);
}

el("fc-ok").addEventListener("click", renderFolders);
el("fc-exit").addEventListener("click", renderFolders);

renderFolders();
el("year").textContent = new Date().getFullYear();
