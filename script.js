/* =========================================================
   DADOS — EDITE AQUI
   ========================================================= */

// 📚 LIVROS: troque "cover" (imagem da capa) e "pdf" (link do arquivo)
// level (usado no filtro): "Básico" | "Intermediário" | "Avançado" | "Leitura" | "Resumo"
const BOOKS = [
  { title: "Empower 2nd A1 Student", level: "Básico", cover: "img/capas/Empower_2nd_A1_Student.jpg",   pdf: "pdfs/Empower_2nd_A1_Student.pdf" },  
  { title: "Empower 2nd A1 Workbook", level: "Básico", cover: "img/capas/Empower_2nd_A1_Workbook.jpg",   pdf: "pdfs/Empower_2nd_A1_Workbook.pdf" },  
  { title: "Empower 2nd A2 Workbook", level: "Básico", cover: "img/capas/Empower_2nd_A2_Workbook.jpg",   pdf: "pdfs/Empower_2nd_A2_Workbook.pdf" },  
  { title: "Empower 2nd A2 Student", level: "Básico", cover: "img/capas/Empower_2nd_A2_Student.jpg",   pdf: "pdfs/Empower_2nd_A2_Student.pdf" },  
  { title: "Empower 2nd B1 Student", level: "Intermediário", cover: "img/capas/Empower_2nd_B1_Student.jpg",   pdf: "pdfs/Empower_2nd_B1_Student.pdf" },    
  { title: "Empower 2nd B1 Workbook", level: "Intermediário", cover: "img/capas/Empower_2nd_B1_Workbook.jpg",   pdf: "pdfs/Empower_2nd_B1_Workbook.pdf" },    
  { title: "Empower 2nd B2 Workbook", level: "Intermediário", cover: "img/capas/Empower_2nd_B2_Workbook.jpg",   pdf: "pdfs/Empower_2nd_B2_Workbook.pdf" },
  { title: "Empower 2nd B2 Student", level: "Intermediário", cover: "img/capas/Empower_2nd_B2_Student.jpg",   pdf: "pdfs/Empower_2nd_B2_Student.pdf" },  
  { title: "Empower 2nd C1 Workbook", level: "Avançado", cover: "img/capas/Empower_2nd_C1_Workbook.jpg",   pdf: "pdfs/Empower_2nd_C1_Workbook.pdf" },
  { title: "Empower 2nd C1 Student", level: "Avançado", cover: "img/capas/Empower_2nd_C1_Student.jpg",   pdf: "pdfs/Empower_2nd_C1_Student.pdf" },
  { title: "21St Century Communication 2", level: "Intermediário", cover: "img/capas/21St_Century_Comms2.jpg",   pdf: "pdfs/21St_Century_Comms2.pdf" },
  { title: "Engage Starter", level: "Básico", cover: "img/capas/Engage_starter.jpg",   pdf: "pdfs/Engage_starter.pdf" },
  { title: "Empower A1", level: "Resumo", cover: "img/capas/Empower_A1.jpg",   pdf: "pdfs/Empower_A1.pdf" },
  { title: "A Journey to the Centre of the Earth",level: "Leitura",       cover: "img/capas/CentreoftheEarth.jpg",   pdf: "pdfs/CentreoftheEarth.html" },
  { title: "Little Women",level: "Leitura",       cover: "img/capas/LittleWomen.jpg",   pdf: "pdfs/LittleWomen.html" },
  { title: "The Secret Garden",level: "Leitura",       cover: "img/capas/SecretGarden.jpg",   pdf: "pdfs/SecretGarden.html" },
  { title: "Crime and Punishment",level: "Leitura",       cover: "img/capas/Crime&Punishment.jpg",   pdf: "pdfs/Crime&Punishment.html" },
  { title: "Great Expectations",level: "Leitura",       cover: "img/capas/GreatExpectations.jpg",   pdf: "pdfs/GreatExpectations.html" },
  { title: "Metamorphosis",level: "Leitura",       cover: "img/capas/Metamorphosis.jpg",   pdf: "pdfs/Metamorphosis.html" },
  { title: "Peter Pan",level: "Leitura",       cover: "img/capas/PeterPan.jpg",   pdf: "pdfs/PeterPan.html" },
  { title: "The Adventures of Sherlock Holmes",level: "Leitura",       cover: "img/capas/SherlockHolmes.jpg",   pdf: "pdfs/SherlockHolmes.html" },
  { title: "The Count of Monte Cristo",level: "Leitura",       cover: "img/capas/MonteCristo.jpg",   pdf: "pdfs/MonteCristo.html" },
  { title: "The strange case of Dr. Jekyll and Mr. Hyde",level: "Leitura",       cover: "img/capas/DrJekyll&Mr.Hyde.jpg",   pdf: "pdfs/DrJekyll&Mr.Hyde.html" },
  { title: "Wuthering Heights",level: "Leitura",       cover: "img/capas/Wuthering_Heights.jpg",   pdf: "pdfs/Wuthering_Heights.html" },  
  { title: "A Little Princess",level: "Leitura",       cover: "img/capas/ALittlePrincess.jpg",   pdf: "pdfs/ALittlePrincess.html" },
  { title: "Frankenstein",level: "Leitura",       cover: "img/capas/Frankenstein.jpg",   pdf: "pdfs/Frankenstein.html" },
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

// 🃏 FLASHCARDS IMPORTADOS DO PDF "Flashcards.pdf"
// Nível conforme anotado no PDF: Iniciante (A1/A2) → "basico", Intermediário (B1/B2) → "intermediario", Avançado (C1/C2) → "dificil"
const PDF_DECKS = [
 {
  "id": "leitura-lista-a",
  "emoji": "📖",
  "title": "Vocabulário de Leitura · Lista A",
  "level": "dificil",
  "description": "Vocabulário do livro com exemplos",
  "cards": [
   {
    "q": "Boon",
    "a": "Dádiva, bênção, favor",
    "ex": [
     "Exemplo: Finding a rare spellbook was a true boon for the young witch."
    ]
   },
   {
    "q": "Briefing",
    "a": "Instrução, reunião informativa",
    "ex": [
     "Exemplo: The master gave a quick briefing before the mission."
    ]
   },
   {
    "q": "Cast",
    "a": "Lançar (magia), elenco, engessar",
    "ex": [
     "Significado 1 (Magia): She can cast powerful illusions.",
     "Significado 2 (Médico): He had to wear a plaster cast on his broken arm."
    ]
   },
   {
    "q": "Bask",
    "a": "Aquecer-se, regalar-se, aproveitar (o sol ou um elogio)",
    "ex": [
     "Exemplo: The cat loves to bask in the warm sunlight."
    ]
   },
   {
    "q": "Touch down",
    "a": "Aterrissar, pousar",
    "ex": [
     "Significado 1 (Voo): The flying broomstick is about to touch down.",
     "Significado 2 (Esportes): The player managed to touch down for a score."
    ]
   },
   {
    "q": "Embroidery",
    "a": "Bordado",
    "ex": [
     "Exemplo: Her cloak was decorated with intricate magical embroidery."
    ]
   },
   {
    "q": "Lace",
    "a": "Renda, cordão (de sapato)",
    "ex": [
     "Exemplo: The edges of her dress were trimmed with delicate lace."
    ]
   },
   {
    "q": "Hamlets",
    "a": "Vilarejos, povoados pequenos",
    "ex": [
     "Exemplo: The traveling merchants visited several small hamlets."
    ]
   },
   {
    "q": "Artisan",
    "a": "Artesão",
    "ex": [
     "Exemplo: Only a master artisan could craft such a fine inkwell."
    ]
   },
   {
    "q": "It would appear",
    "a": "Aparenta ser, pelo jeito",
    "ex": [
     "Exemplo: It would appear that our lesson has been canceled."
    ]
   },
   {
    "q": "Inquire",
    "a": "Perguntar, indagar, averiguar",
    "ex": [
     "Exemplo: I would like to inquire about the cost of the ingredients."
    ]
   },
   {
    "q": "Soar",
    "a": "Planar, voar alto, disparar (preços)",
    "ex": [
     "Exemplo: The dragon began to soar high above the mountains."
    ]
   },
   {
    "q": "Cobblestones",
    "a": "Paralelepípedos",
    "ex": [
     "Exemplo: The horse's hooves clicked against the old cobblestones."
    ]
   },
   {
    "q": "Stride along",
    "a": "Caminhar a passos largos e firmes",
    "ex": [
     "Exemplo: He decided to stride along the forest path with confidence."
    ]
   },
   {
    "q": "Bestest",
    "a": "O/a melhor de todos (forma informal/infantil de best)",
    "ex": [
     "Exemplo: She is my bestest friend in the magic academy."
    ]
   },
   {
    "q": "Indeed",
    "a": "De fato, realmente",
    "ex": [
     "Exemplo: That was a difficult spell, indeed."
    ]
   },
   {
    "q": "Wand",
    "a": "Varinha (mágica)",
    "ex": [
     "Exemplo: She waved her wand to activate the protective circle."
    ]
   },
   {
    "q": "Rummage",
    "a": "Revirar, vasculhar",
    "ex": [
     "Exemplo: He had to rummage through his bag to find his notes."
    ]
   },
   {
    "q": "What it takes",
    "a": "O que é preciso, capacidade",
    "ex": [
     "Exemplo: Do you think she has what it takes to become a true witch?"
    ]
   },
   {
    "q": "Head on home",
    "a": "Ir direto para casa",
    "ex": [
     "Exemplo: It's getting dark, let's head on home."
    ]
   },
   {
    "q": "Crawling",
    "a": "Engatinhando, repleto (de insetos/gente)",
    "ex": [
     "Exemplo: The old dungeon was crawling with spiders."
    ]
   },
   {
    "q": "Inexcusable",
    "a": "Inescusável, inexoforável, imperdoável",
    "ex": [
     "Exemplo: Breaking the ancient laws of magic is inexcusable."
    ]
   },
   {
    "q": "Bumpkins",
    "a": "Caipiras, pessoas rústicas do interior",
    "ex": [
     "Exemplo: The city dwellers looked down on the country bumpkins."
    ]
   },
   {
    "q": "Strand us",
    "a": "Deixar-nos na mão, encalhar-nos",
    "ex": [
     "Exemplo: If the spell fails, it will strand us in the middle of nowhere."
    ]
   },
   {
    "q": "Cap off",
    "a": "Coroar, finalizar com chave de ouro, tampar",
    "ex": [
     "Significado 1 (Finalizar): To cap off the evening, they created fireworks.",
     "Significado 2 (Tampar): Don't forget to cap off the ink bottle."
    ]
   },
   {
    "q": "Attire",
    "a": "Traje, vestimenta",
    "ex": [
     "Exemplo: The students wore formal black attire for the ceremony."
    ]
   },
   {
    "q": "Merely",
    "a": "Apenas, meramente",
    "ex": [
     "Exemplo: It was merely a beginner's mistake."
    ]
   },
   {
    "q": "Baseboard",
    "a": "Rodapé",
    "ex": [
     "Exemplo: The tiny mouse hid behind the wooden baseboard."
    ]
   },
   {
    "q": "Your face is beet red",
    "a": "Seu rosto está vermelho como um tomate (ou beterraba)",
    "ex": [
     "Exemplo: Why are you blushing? Your face is beet red!"
    ]
   },
   {
    "q": "Hang in there",
    "a": "Agente firme, não desista",
    "ex": [
     "Exemplo: Hang in there, the hardest part of the exam is almost over."
    ]
   },
   {
    "q": "Impose",
    "a": "Impor, abusar (da boa vontade)",
    "ex": [
     "Exemplo: I hope my visit doesn't impose on your schedule."
    ]
   },
   {
    "q": "Dashed to pieces",
    "a": "Reduzido a pedaços, estilhaçado",
    "ex": [
     "Exemplo: The fragile glass bottle was dashed to pieces on the floor."
    ]
   },
   {
    "q": "Busted",
    "a": "Pego no flagra, quebrado",
    "ex": [
     "Significado 1 (Flagrado): He got busted trying to sneak into the forbidden library.",
     "Significado 2 (Quebrado): My magical compass is busted."
    ]
   },
   {
    "q": "Skylight",
    "a": "Clarabóia, janela no teto",
    "ex": [
     "Exemplo: Moonlight poured through the attic skylight."
    ]
   },
   {
    "q": "Made it up",
    "a": "Inventou (uma história/mentira)",
    "ex": [
     "Exemplo: Don't believe him, he just made it up."
    ]
   },
   {
    "q": "Move over",
    "a": "Dar espaço, chegar para lá",
    "ex": [
     "Exemplo: Move over so I can sit on the bench too."
    ]
   },
   {
    "q": "Hopping up and down",
    "a": "Pulando de alegria / de um pé para o outro",
    "ex": [
     "Exemplo: The children were hopping up and down when they saw the magic show."
    ]
   },
   {
    "q": "Pertaining",
    "a": "Referente a, pertinente a",
    "ex": [
     "Exemplo: Documents pertaining to ancient spells must be kept safe."
    ]
   },
   {
    "q": "Neatly",
    "a": "Ordenadamente, caprichosamente",
    "ex": [
     "Exemplo: Her books were stacked neatly on the shelf."
    ]
   },
   {
    "q": "Bedclothes",
    "a": "Roupa de cama",
    "ex": [
     "Exemplo: She washed all the bedclothes before winter arrived."
    ]
   },
   {
    "q": "Hailed",
    "a": "Aclamado, saudado, ou chamado (granizo/taxi)",
    "ex": [
     "Significado 1 (Saudado): The young wizard was hailed as a hero.",
     "Significado 2 (Meteorologia): It hailed heavily yesterday afternoon."
    ]
   },
   {
    "q": "Strewn",
    "a": "Espalhado, juncado",
    "ex": [
     "Exemplo: Parchments were strewn across the messy desk."
    ]
   },
   {
    "q": "Briar",
    "a": "Sarça, arbusto espinhoso",
    "ex": [
     "Exemplo: The old castle was hidden behind a thick wall of briars."
    ]
   },
   {
    "q": "Branches",
    "a": "Galhos, ramos",
    "ex": [
     "Exemplo: The bird built its nest in the high branches of the tree."
    ]
   },
   {
    "q": "Stave off",
    "a": "Espantar, afastar (um mal ou perigo)",
    "ex": [
     "Exemplo: They drank hot tea to stave off the cold."
    ]
   },
   {
    "q": "Rinse your face",
    "a": "Lavar o rosto",
    "ex": [
     "Exemplo: Go rinse your face with cold water to wake up."
    ]
   },
   {
    "q": "Floaty",
    "a": "Fluido, leve, que flutua",
    "ex": [
     "Exemplo: She wore a light, floaty dress fit for warm weather."
    ]
   },
   {
    "q": "Fetch",
    "a": "Buscar, trazer",
    "ex": [
     "Exemplo: Can you fetch my notebook from the other room?"
    ]
   },
   {
    "q": "Give me the creeps",
    "a": "Me dá arrepios (medo/estranheza)",
    "ex": [
     "Exemplo: Dark and silent forests always give me the creeps."
    ]
   },
   {
    "q": "Moisture",
    "a": "Umidade",
    "ex": [
     "Exemplo: Keep the magical seeds away from moisture."
    ]
   },
   {
    "q": "Tray",
    "a": "Bandeja",
    "ex": [
     "Exemplo: She carried a tray with cups of hot tea."
    ]
   },
   {
    "q": "Pours",
    "a": "Chove forte (ou despeja)",
    "ex": [
     "Significado 1 (Chuva): It pours every time we plan an outdoor trip.",
     "Significado 2 (Líquido): He pours some ink into the well."
    ]
   },
   {
    "q": "Quiets down",
    "a": "Acalma-se, silencia",
    "ex": [
     "Exemplo: The noisy classroom quiets down when the teacher enters."
    ]
   },
   {
    "q": "Responding",
    "a": "Respondendo",
    "ex": [
     "Exemplo: She is responding to the letter from the guild."
    ]
   },
   {
    "q": "Helping out",
    "a": "Dando uma força, ajudando",
    "ex": [
     "Exemplo: Thanks for helping out with the potion preparation."
    ]
   },
   {
    "q": "Prescribed Designs",
    "a": "Desenhos/padrões prescritos (regrados)",
    "ex": [
     "Exemplo: You must follow the prescribed designs to draw a safe rune."
    ]
   },
   {
    "q": "Embroiled",
    "a": "Envolvido (em confusão/problemas)",
    "ex": [
     "Exemplo: He found himself embroiled in a political dispute."
    ]
   },
   {
    "q": "Conceived",
    "a": "Concebido, idealizado",
    "ex": [
     "Exemplo: The plan was brilliantly conceived by the master mage."
    ]
   },
   {
    "q": "Prompting",
    "a": "Incitando, motivando, induzindo",
    "ex": [
     "Exemplo: Her words served as prompting for him to try the spell again."
    ]
   },
   {
    "q": "Renounce",
    "a": "Renunciar, abrir mão",
    "ex": [
     "Exemplo: He had to renounce his title to join the order."
    ]
   },
   {
    "q": "Band together",
    "a": "Unir-se, juntar forças",
    "ex": [
     "Exemplo: The villagers decided to band together against the monster."
    ]
   },
   {
    "q": "Populace",
    "a": "População, povo",
    "ex": [
     "Exemplo: The safety of the populace is the council's top priority."
    ]
   },
   {
    "q": "Spread",
    "a": "Espalhar, propagar",
    "ex": [
     "Exemplo: Rumors spread fast in a small magical town."
    ]
   },
   {
    "q": "Wielded",
    "a": "Empunhado, manejado",
    "ex": [
     "Exemplo: The staff was wielded by an experienced sorcerer."
    ]
   },
   {
    "q": "Innate",
    "a": "Inato, natural",
    "ex": [
     "Exemplo: She has an innate talent for drawing magical circles."
    ]
   },
   {
    "q": "Proliferate",
    "a": "Proliferar, multiplicar-se rapidamente",
    "ex": [
     "Exemplo: Magical creatures tend to proliferate in untamed forests."
    ]
   },
   {
    "q": "Thrust",
    "a": "Impulso, estocada, empurrão forte",
    "ex": [
     "Exemplo: With a sudden thrust, he opened the heavy door."
    ]
   },
   {
    "q": "Anew",
    "a": "De novo, recomeçar",
    "ex": [
     "Exemplo: They had to start their research all anew."
    ]
   },
   {
    "q": "Sparks",
    "a": "Faíscas",
    "ex": [
     "Exemplo: Striking the flint created tiny sparks."
    ]
   },
   {
    "q": "Bear",
    "a": "Suportar, carregar, urso",
    "ex": [
     "Significado 1 (Suportar): I cannot bear seeing you struggle.",
     "Significado 2 (Animal): A wild bear wandered near the camp."
    ]
   },
   {
    "q": "Counsel",
    "a": "Conselho, assessorar",
    "ex": [
     "Exemplo: Always seek counsel before making dangerous choices."
    ]
   },
   {
    "q": "Summed up",
    "a": "Resumido",
    "ex": [
     "Exemplo: His entire adventure was summed up in a single page."
    ]
   },
   {
    "q": "Rather",
    "a": "Em vez disso, preferivelmente, bastante",
    "ex": [
     "Exemplo: I would rather study at home than go out."
    ]
   },
   {
    "q": "Harm",
    "a": "Dano, mal, prejudicar",
    "ex": [
     "Exemplo: The protective spell caused no harm to the children."
    ]
   },
   {
    "q": "Thus",
    "a": "Assim, deste modo",
    "ex": [
     "Exemplo: She followed the instructions, and thus the spell worked."
    ]
   },
   {
    "q": "Tools",
    "a": "Ferramentas",
    "ex": [
     "Exemplo: A good painter takes care of his brushes and tools."
    ]
   },
   {
    "q": "Lamp",
    "a": "Luminária, lâmpada, lampião",
    "ex": [
     "Exemplo: He lit the oil lamp to read by night."
    ]
   },
   {
    "q": "Carriages",
    "a": "Carruagens",
    "ex": [
     "Exemplo: The street was filled with elegant horse-drawn carriages."
    ]
   },
   {
    "q": "Tomes",
    "a": "Volumes (de livros pesados/antigos), compêndios",
    "ex": [
     "Exemplo: The library shelf was filled with dusty, ancient tomes."
    ]
   },
   {
    "q": "Vault",
    "a": "cofre, abóbada subterrânea",
    "ex": [
     "Exemplo: Valuable spells are kept locked inside the secure vault."
    ]
   },
   {
    "q": "Trial",
    "a": "Julgamento, teste, provação",
    "ex": [
     "Exemplo: She must pass a difficult trial to earn her badge."
    ]
   },
   {
    "q": "In order to",
    "a": "A fim de, para",
    "ex": [
     "Exemplo: In order to cast the spell, you need total focus."
    ]
   },
   {
    "q": "Quarters",
    "a": "Aposentos, alojamentos",
    "ex": [
     "Exemplo: The apprentices returned to their sleeping quarters."
    ]
   },
   {
    "q": "Ought to",
    "a": "Deveria (indicação moral ou expectativa)",
    "ex": [
     "Exemplo: You ought to apologize for breaking her chalk."
    ]
   },
   {
    "q": "Tidy",
    "a": "Arrumado, limpo",
    "ex": [
     "Exemplo: Keep your workspace clean and tidy."
    ]
   },
   {
    "q": "Though",
    "a": "Embora, no entanto",
    "ex": [
     "Exemplo: Though it was hard, she didn't give up."
    ]
   },
   {
    "q": "Rest up",
    "a": "Descansar bem, recuperar as energias",
    "ex": [
     "Exemplo: Make sure you rest up before tomorrow's exam."
    ]
   },
   {
    "q": "Recoil",
    "a": "Recuar, sobressaltar-se",
    "ex": [
     "Exemplo: He instinctively recoiled when the potion hissed."
    ]
   },
   {
    "q": "Everyone's on about",
    "a": "Todo mundo está falando sobre",
    "ex": [
     "Exemplo: Everyone's on about the new flying broom model."
    ]
   },
   {
    "q": "Strains",
    "a": "Tensões, melodias, cepas",
    "ex": [
     "Significado 1 (Tensão/Esforço): Her eyes felt tired from the strains of reading.",
     "Significado 2 (Música): We heard soft strains of music coming from inside."
    ]
   },
   {
    "q": "Spring",
    "a": "Mola, primavera, saltar",
    "ex": [
     "Significado 1 (Estação/Salto): Flowers bloom in spring.",
     "Significado 2 (Mecânica): The mechanical trap was triggered by a hidden spring."
    ]
   },
   {
    "q": "Contraptions",
    "a": "Engenhocas, tralhas mecânicas",
    "ex": [
     "Exemplo: The inventor's desk was covered in strange metal contraptions."
    ]
   },
   {
    "q": "Throughout",
    "a": "Por todo(a), ao longo de",
    "ex": [
     "Exemplo: Magic exists throughout the entire kingdom."
    ]
   },
   {
    "q": "Nibs",
    "a": "Penas (de metal para tinteiro), pontas",
    "ex": [
     "Exemplo: She keeps a box of sharp steel nibs for calligraphy."
    ]
   },
   {
    "q": "Quire",
    "a": "Caderno (de papel), resma de papel",
    "ex": [
     "Exemplo: He bought a fresh quire of parchment for his drafts."
    ]
   },
   {
    "q": "Notepad",
    "a": "Bloco de notas",
    "ex": [
     "Exemplo: She jotted down the potion recipe in her notepad."
    ]
   },
   {
    "q": "Uneasy",
    "a": "Inquieto, desconfortável",
    "ex": [
     "Exemplo: The strange silence in the woods made him feel uneasy."
    ]
   },
   {
    "q": "Clock mark",
    "a": "Marca de relógio (ou indicador temporal)",
    "ex": [
     "Exemplo: Look at the clock mark, we are running late."
    ]
   },
   {
    "q": "Sigil",
    "a": "Sigilo, símbolo mágico",
    "ex": [
     "Exemplo: She carved a protective sigil into the wooden floor."
    ]
   },
   {
    "q": "Outer",
    "a": "Externo, de fora",
    "ex": [
     "Exemplo: Guard the outer walls of the tower carefully."
    ]
   },
   {
    "q": "Etched",
    "a": "Gravado, entalhado",
    "ex": [
     "Exemplo: Runes were etched deeply into the stone tablet."
    ]
   },
   {
    "q": "Feats",
    "a": "Façanhas, proezas",
    "ex": [
     "Exemplo: Performing such complex magic is no small feat."
    ]
   },
   {
    "q": "Wobbly",
    "a": "Bamba, instável, vacilante",
    "ex": [
     "Exemplo: The table leg is wobbly, we need to fix it."
    ]
   },
   {
    "q": "Jumbly",
    "a": "Desordenado, misturado, confuso",
    "ex": [
     "Exemplo: The drawer was full of a jumbly assortment of magic items."
    ]
   },
   {
    "q": "Foal",
    "a": "Potro (filhote de cavalo)",
    "ex": [
     "Exemplo: The newborn foal ran across the green meadow."
    ]
   },
   {
    "q": "Falters",
    "a": "Vacila, hesita, fraqueja",
    "ex": [
     "Exemplo: Her voice falters whenever she speaks in public."
    ]
   },
   {
    "q": "Bounding",
    "a": "Saltitando, galopando com saltos",
    "ex": [
     "Exemplo: The rabbit went bounding through the tall grass."
    ]
   },
   {
    "q": "Join",
    "a": "Juntar-se, unir",
    "ex": [
     "Exemplo: Would you like to join our study group?"
    ]
   },
   {
    "q": "Spot on",
    "a": "Em cheio, perfeito, exato",
    "ex": [
     "Exemplo: Your prediction about the weather was spot on."
    ]
   },
   {
    "q": "Peers",
    "a": "Pares, colegas, contemplar",
    "ex": [
     "Significado 1 (Colegas): She respects the opinion of her peers.",
     "Significado 2 (Olhar fixamente): He peers through the keyhole."
    ]
   },
   {
    "q": "Watch them closely",
    "a": "Observá-los de perto",
    "ex": [
     "Exemplo: Watch them closely so they don't make mistakes with the fire spell."
    ]
   },
   {
    "q": "Delve",
    "a": "Investigar a fundo, mergulhar (num assunto)",
    "ex": [
     "Exemplo: Let's delve deeper into the history of forbidden spells."
    ]
   },
   {
    "q": "Seabad",
    "a": "Fundo do mar",
    "ex": [
     "Exemplo: Sunken ruins lie quietly at the seabad."
    ]
   },
   {
    "q": "Nothing so fleet as a rumor",
    "a": "Nada corre tão rápido quanto um boato",
    "ex": [
     "Exemplo: Within minutes, the whole town knew—nothing so fleet as a rumor."
    ]
   },
   {
    "q": "Brimmed caps",
    "a": "Chapéus de aba larga",
    "ex": [
     "Exemplo: The travelers wore dark brimmed caps to shield their faces."
    ]
   },
   {
    "q": "What says you?",
    "a": "O que me diz? / Qual é a sua opinião?",
    "ex": [
     "Exemplo: We head north at dawn, what says you?"
    ]
   },
   {
    "q": "Flourishes",
    "a": "Floreios, ornamentos, prospera",
    "ex": [
     "Significado 1 (Ornamentos): He added delicate flourishes to his signature.",
     "Significado 2 (Prosperar): Plants flourishes in rich soil."
    ]
   },
   {
    "q": "Abode",
    "a": "Moradia, residência",
    "ex": [
     "Exemplo: Welcome to my humble abode."
    ]
   },
   {
    "q": "Within",
    "a": "Dentro de, no interior",
    "ex": [
     "Exemplo: True magic comes from within the heart."
    ]
   },
   {
    "q": "Get on with it",
    "a": "Ir direto ao ponto, continuar logo com algo",
    "ex": [
     "Exemplo: Stop wasting time and get on with it!"
    ]
   },
   {
    "q": "Range",
    "a": "Alcance, variedade, cordilheira",
    "ex": [
     "Exemplo: The spell has a very limited range."
    ]
   },
   {
    "q": "Upward",
    "a": "Para cima",
    "ex": [
     "Exemplo: She looked upward at the soaring birds."
    ]
   },
   {
    "q": "Inward",
    "a": "Para dentro, interiormente",
    "ex": [
     "Exemplo: Take a deep inward breath and relax."
    ]
   },
   {
    "q": "Midair",
    "a": "No ar (enquanto voava/caindo)",
    "ex": [
     "Exemplo: The bird caught the insect in midair."
    ]
   },
   {
    "q": "Will be a breeze",
    "a": "Será moleza / muito fácil",
    "ex": [
     "Exemplo: Don't worry about the test, it will be a breeze."
    ]
   },
   {
    "q": "Bristles",
    "a": "Cerdas (de pincel/vassoura), eriçar-se",
    "ex": [
     "Exemplo: The brush has soft nylon bristles."
    ]
   },
   {
    "q": "Runs deep",
    "a": "É profundo, vai fundo",
    "ex": [
     "Exemplo: Their friendship runs deep after years of studying together."
    ]
   },
   {
    "q": "Backwoods",
    "a": "Regiões remotas, sertão, cafundós",
    "ex": [
     "Exemplo: They live in a small cabin deep in the backwoods."
    ]
   },
   {
    "q": "Beneath",
    "a": "Embaixo de, sob",
    "ex": [
     "Exemplo: Keys were hidden beneath the heavy doormat."
    ]
   },
   {
    "q": "Grasp",
    "a": "Compreensão, alcance, agarrar",
    "ex": [
     "Exemplo: The concept of spatial magic is beyond my grasp right now."
    ]
   },
   {
    "q": "I got a lump in my stomach",
    "a": "Estou com um nó no estômago (ansioso/tenso)",
    "ex": [
     "Exemplo: Before the big presentation, I got a lump in my stomach."
    ]
   },
   {
    "q": "I am having seconds",
    "a": "Estou mudando de ideia (ou repetindo o prato)",
    "ex": [
     "Exemplo: At first I wanted to go, but now I am having seconds (thoughts)."
    ]
   },
   {
    "q": "Smears",
    "a": "Borrões, manchas, manchar",
    "ex": [
     "Exemplo: Ink smears ruined her clean parchment."
    ]
   },
   {
    "q": "Turn to",
    "a": "Recorrer a, virar-se para",
    "ex": [
     "Exemplo: You can always turn to your mentor for advice."
    ]
   },
   {
    "q": "All along",
    "a": "O tempo todo, desde o início",
    "ex": [
     "Exemplo: I knew the truth all along."
    ]
   },
   {
    "q": "Tapered",
    "a": "Afunilado, cônico",
    "ex": [
     "Exemplo: The candle had a long, tapered shape."
    ]
   },
   {
    "q": "Staff",
    "a": "Cajado, equipe de funcionários",
    "ex": [
     "Significado 1 (Cajado): The wizard leaned heavily on his wooden staff.",
     "Significado 2 (Equipe): The school staff organized the festival."
    ]
   },
   {
    "q": "Mud",
    "a": "Lama, barro",
    "ex": [
     "Exemplo: His boots were covered in thick mud."
    ]
   },
   {
    "q": "Vile",
    "a": "Vil, desprezível, repulsivo",
    "ex": [
     "Exemplo: Using dark magic for personal gain is vile."
    ]
   },
   {
    "q": "Sprouted",
    "a": "Brotou, germinou",
    "ex": [
     "Exemplo: Tiny green leaves sprouted from the seed overnight."
    ]
   },
   {
    "q": "Tetrad",
    "a": "Tétrade (grupo de quatro)",
    "ex": [
     "Exemplo: The ritual requires a tetrad of powerful elements."
    ]
   },
   {
    "q": "Rubble",
    "a": "Ruínas, escombros",
    "ex": [
     "Exemplo: The old wall collapsed into piles of dusty rubble."
    ]
   },
   {
    "q": "Coalescing",
    "a": "Coalescendo, unindo-se, fundindo-se",
    "ex": [
     "Exemplo: The magical energy started coalescing into a bright sphere."
    ]
   },
   {
    "q": "Nurtures",
    "a": "Nutre, alimenta, zela pelo crescimento",
    "ex": [
     "Exemplo: A good teacher nurtures curiosity in students."
    ]
   },
   {
    "q": "Miríade",
    "a": "Miríade (grande quantidade, infinidade)",
    "ex": [
     "Exemplo: A myriad of stars lit up the night sky."
    ]
   },
   {
    "q": "Aegis",
    "a": "Égide, proteção, patrocínio",
    "ex": [
     "Exemplo: The research was conducted under the aegis of the magical council."
    ]
   },
   {
    "q": "Master",
    "a": "Mestre, dominar",
    "ex": [
     "Exemplo: It takes years to master advanced transmutation."
    ]
   },
   {
    "q": "Up to",
    "a": "Até, encarregado de, dependendo de",
    "ex": [
     "Exemplo: It is up to you to decide your path."
    ]
   },
   {
    "q": "Sylph",
    "a": "Silfo (criatura elemental do ar)",
    "ex": [
     "Exemplo: Legends say a gentle sylph guides travelers of the wind."
    ]
   },
   {
    "q": "Savoring the words",
    "a": "Saboreando as palavras (lendo/falando com prazer)",
    "ex": [
     "Exemplo: She read the poem slowly, savoring the words."
    ]
   },
   {
    "q": "Settlement",
    "a": "Assentamento, povoado, acordo",
    "ex": [
     "Exemplo: They reached a small mining settlement by dusk."
    ]
   },
   {
    "q": "Shoal",
    "a": "Cardume, banco de areia",
    "ex": [
     "Exemplo: A colorful shoal of fish swam past the coral reef."
    ]
   },
   {
    "q": "Watchover",
    "a": "Vigília, proteção, cuidar de",
    "ex": [
     "Exemplo: The statue serves as a watchover for the city gates."
    ]
   },
   {
    "q": "Flocked",
    "a": "Afluíram, reuniram-se em bandos/multidão",
    "ex": [
     "Exemplo: Students flocked to the courtyard to see the demonstration."
    ]
   },
   {
    "q": "Ahead",
    "a": "Adiante, à frente",
    "ex": [
     "Exemplo: Keep moving ahead and you will find the exit."
    ]
   },
   {
    "q": "Your hopes up",
    "a": "Suas esperanças (comum na expressão don't get your hopes up)",
    "ex": [
     "Exemplo: Don't get your hopes up too high before checking the results."
    ]
   }
  ]
 },
 {
  "id": "leitura-lista-b",
  "emoji": "📖",
  "title": "Vocabulário de Leitura · Lista B",
  "level": "dificil",
  "description": "Vocabulário do livro com exemplos",
  "cards": [
   {
    "q": "Avert",
    "a": "Evitar, desviar (o olhar ou um desastre)",
    "ex": [
     "Exemplo: He managed to avert a catastrophe with a quick spell."
    ]
   },
   {
    "q": "Dead end",
    "a": "Beco sem saída, impasse",
    "ex": [
     "Exemplo: This search path is a dead end, let's try another clue."
    ]
   },
   {
    "q": "Chase us down",
    "a": "Perseguir-nos até alcançar",
    "ex": [
     "Exemplo: Run faster, the guards are trying to chase us down!"
    ]
   },
   {
    "q": "Get dragged",
    "a": "Ser arrastado (literal ou figurativamente para uma situação)",
    "ex": [
     "Exemplo: I didn't want to go, but I got dragged into their argument."
    ]
   },
   {
    "q": "Get a hold of yourself",
    "a": "Controlar-se, recompor-se",
    "ex": [
     "Exemplo: Get a hold of yourself, panicking won't solve anything!"
    ]
   },
   {
    "q": "Mixed up",
    "a": "Confuso, envolvido em confusão",
    "ex": [
     "Exemplo: Don't get mixed up with those shady magicians."
    ]
   },
   {
    "q": "Unschooled",
    "a": "Sem instrução formal, sem escola",
    "ex": [
     "Exemplo: He was unschooled in formal magic theory, but very creative."
    ]
   },
   {
    "q": "Redraw",
    "a": "Redesenhar",
    "ex": [
     "Exemplo: You made a mistake in the circle; you must redraw it."
    ]
   },
   {
    "q": "Double back",
    "a": "Voltar atrás, fazer o caminho inverso",
    "ex": [
     "Exemplo: We missed the turning point, let's double back."
    ]
   },
   {
    "q": "Seek out",
    "a": "Procurar ativamente, buscar",
    "ex": [
     "Exemplo: She went out to seek out rare herbs in the woods."
    ]
   },
   {
    "q": "Bygone",
    "a": "Passado, antigo (frequentemente em bygone days)",
    "ex": [
     "Exemplo: They spoke of old traditions from bygone eras."
    ]
   },
   {
    "q": "Dusk",
    "a": "Crepúsculo, entardecer",
    "ex": [
     "Exemplo: The lanterns are lit automatically at dusk."
    ]
   },
   {
    "q": "Maze",
    "a": "Labirinto",
    "ex": [
     "Exemplo: The castle corridors felt like an endless maze."
    ]
   },
   {
    "q": "Clutching at my sides",
    "a": "Segurando as costelas (de tanto rir ou por dor/cansaço)",
    "ex": [
     "Exemplo: The joke was so funny we were clutching at our sides."
    ]
   },
   {
    "q": "Took it out",
    "a": "Retirou, tirou de dentro (ou descontou em alguém)",
    "ex": [
     "Exemplo: She took it out of her pocket and showed the magical token."
    ]
   },
   {
    "q": "Unfit",
    "a": "Inapto, inadequado",
    "ex": [
     "Exemplo: This damaged wand is completely unfit for use."
    ]
   },
   {
    "q": "Looking out",
    "a": "Olhando para fora, vigiando/protegendo",
    "ex": [
     "Exemplo: He stood by the window, looking out at the rain."
    ]
   },
   {
    "q": "Fuzzy",
    "a": "Embaçado, confuso, felpudo",
    "ex": [
     "Exemplo: My memories of that strange night are still fuzzy."
    ]
   },
   {
    "q": "Full-fledged",
    "a": "Plenamente qualificado, completo (ex: mago formado)",
    "ex": [
     "Exemplo: She is now a full-fledged witch with her own license."
    ]
   },
   {
    "q": "Penned up",
    "a": "Enclausurado, confinado",
    "ex": [
     "Exemplo: The magical beasts felt restless being penned up all day."
    ]
   },
   {
    "q": "Pouting about",
    "a": "Fazendo manha, emburrado sobre algo",
    "ex": [
     "Exemplo: Stop pouting about losing the game and try again."
    ]
   },
   {
    "q": "Crummy",
    "a": "Ruim, ordinário, xexelento",
    "ex": [
     "Exemplo: I had a crummy day until I found this nice spellbook."
    ]
   },
   {
    "q": "Grip of",
    "a": "Garra de, domínio de",
    "ex": [
     "Exemplo: The city fell under the grip of a strange winter."
    ]
   },
   {
    "q": "It won't hurt to try",
    "a": "Não custa tentar",
    "ex": [
     "Exemplo: We've never cast this spell before, but it won't hurt to try."
    ]
   },
   {
    "q": "I mean",
    "a": "Digo, quero dizer",
    "ex": [
     "Exemplo: The test is tomorrow—I mean, day after tomorrow."
    ]
   },
   {
    "q": "Pliable",
    "a": "Maleável, flexível",
    "ex": [
     "Exemplo: Magical clay remains pliable until baked by fire."
    ]
   },
   {
    "q": "Way to snag a solution",
    "a": "Maneira de descolar/conseguir uma solução",
    "ex": [
     "Exemplo: Thinking outside the box is a great way to snag a solution."
    ]
   },
   {
    "q": "Snag",
    "a": "Pegar, fisgar, obstáculo imprevisto",
    "ex": [
     "Exemplo: We hit a small snag while preparing the potion ingredients."
    ]
   },
   {
    "q": "Bounce",
    "a": "Saltar, ressaltar",
    "ex": [
     "Exemplo: The magic ball began to bounce across the stone floor."
    ]
   },
   {
    "q": "Strike out",
    "a": "Fracassar, tentar e errar (noisebol / beisebol ou iniciativa)",
    "ex": [
     "Exemplo: If our first plan fails, we might strike out completely."
    ]
   },
   {
    "q": "Sprout",
    "a": "Brotar, germinar",
    "ex": [
     "Exemplo: Seeds will sprout quickly in warm, moist earth."
    ]
   },
   {
    "q": "Refrain",
    "a": "Abster-se, reprimir-se",
    "ex": [
     "Exemplo: Please refrain from touching the exhibits in the museum."
    ]
   },
   {
    "q": "Nodding off",
    "a": "Cochilando, pegando no sono",
    "ex": [
     "Exemplo: He was so tired during the lecture that he kept nodding off."
    ]
   },
   {
    "q": "Buckle down",
    "a": "Trabalhar duro, aplicar-se com afinco",
    "ex": [
     "Exemplo: It's time to buckle down and finish studying for finals."
    ]
   },
   {
    "q": "Cookpot",
    "a": "Panela de cozinha",
    "ex": [
     "Exemplo: She stirred the soup inside a large iron cookpot."
    ]
   },
   {
    "q": "Get this straight",
    "a": "Entender direito, esclarecer as coisas",
    "ex": [
     "Exemplo: Let's get this straight: did you lose the spellbook or hide it?"
    ]
   }
  ]
 },
 {
  "id": "leitura-lista-c",
  "emoji": "📖",
  "title": "Vocabulário de Leitura · Lista C",
  "level": "dificil",
  "description": "Vocabulário do livro com exemplos",
  "cards": [
   {
    "q": "Warranted",
    "a": "Justificado, fundamentado",
    "ex": [
     "Exemplo: Her strict reaction was completely warranted."
    ]
   },
   {
    "q": "Sweeping away",
    "a": "Varrendo para longe, eliminando",
    "ex": [
     "Exemplo: The wind was sweeping away the fallen leaves."
    ]
   },
   {
    "q": "In the least",
    "a": "Nem um pouco, minimamente",
    "ex": [
     "Exemplo: I wasn't scared in the least."
    ]
   },
   {
    "q": "Dabble",
    "a": "Arriscar-se em algo, aventurar-se superficialmente",
    "ex": [
     "Exemplo: He likes to dabble in alchemy during his free time."
    ]
   },
   {
    "q": "Damp",
    "a": "Úmido",
    "ex": [
     "Exemplo: The dungeon walls were cold and damp."
    ]
   },
   {
    "q": "Scram",
    "a": "Cair fora, mandar-se",
    "ex": [
     "Exemplo: Scram! The guards are coming this way!"
    ]
   },
   {
    "q": "Racket",
    "a": "Confusão, barulho estrondoso",
    "ex": [
     "Exemplo: What is all that racket coming from the workshop?"
    ]
   },
   {
    "q": "Keep it down",
    "a": "Fazer menos barulho, falar mais baixo",
    "ex": [
     "Exemplo: Please keep it down, the librarian is watching."
    ]
   },
   {
    "q": "Current",
    "a": "Correnteza, atual",
    "ex": [
     "Exemplo: The river current was too strong to swim across."
    ]
   },
   {
    "q": "Lone",
    "a": "Solitário, único",
    "ex": [
     "Exemplo: A lone tower stood on top of the distant hill."
    ]
   },
   {
    "q": "Pine",
    "a": "Pinheiro, definhar (de saudade)",
    "ex": [
     "Significado 1 (Árvore): Tall pine trees surrounded the magical cabin.",
     "Significado 2 (Definhar): She began to pine for her hometown."
    ]
   },
   {
    "q": "Windowway",
    "a": "Vão da janela",
    "ex": [
     "Exemplo: A small bird perched on the wooden windowway."
    ]
   },
   {
    "q": "On site",
    "a": "No local",
    "ex": [
     "Exemplo: Repairs will be done on site this afternoon."
    ]
   },
   {
    "q": "Dwell",
    "a": "Habitar, morar",
    "ex": [
     "Exemplo: Strange creatures dwell in the deep forest."
    ]
   },
   {
    "q": "Rejoicing",
    "a": "Regozijando-se, celebrando",
    "ex": [
     "Exemplo: The townspeople were rejoicing after the festival."
    ]
   },
   {
    "q": "Hastens to grow",
    "a": "Apressa-se a crescer",
    "ex": [
     "Exemplo: With magical fertilizer, the plant hastens to grow."
    ]
   },
   {
    "q": "Utmost",
    "a": "Máximo, extremo",
    "ex": [
     "Exemplo: Handle these delicate ingredients with the utmost care."
    ]
   },
   {
    "q": "Put some heart into it",
    "a": "Coloque vontade/paixão nisso",
    "ex": [
     "Exemplo: Don't just draw mechanically, put some heart into it!"
    ]
   },
   {
    "q": "Swept downstream",
    "a": "Arrastado pela correnteza rio abaixo",
    "ex": [
     "Exemplo: The floating basket was swept downstream."
    ]
   },
   {
    "q": "Knocked out",
    "a": "Desmaiado, nocauteado, fora de uso",
    "ex": [
     "Exemplo: The heavy blow left him knocked out on the floor."
    ]
   },
   {
    "q": "Beyond her",
    "a": "Acima da capacidade dela, incompreensível",
    "ex": [
     "Exemplo: That advanced spell is still beyond her level."
    ]
   },
   {
    "q": "Pull it off",
    "a": "Conseguir realizar algo difícil, dar certo",
    "ex": [
     "Exemplo: It's a risky plan, but I think we can pull it off."
    ]
   },
   {
    "q": "Just cool it",
    "a": "Acalme-se, maneire",
    "ex": [
     "Exemplo: Just cool it, there's no need to get angry."
    ]
   },
   {
    "q": "Back off",
    "a": "Afastar-se, recuar",
    "ex": [
     "Exemplo: Back off, the magical trap is unstable!"
    ]
   },
   {
    "q": "Crimson",
    "a": "Carmesim, vermelho-escuro",
    "ex": [
     "Exemplo: Her cloak was dyed in a deep crimson shade."
    ]
   },
   {
    "q": "Hereby",
    "a": "Por meio deste (termo formal)",
    "ex": [
     "Exemplo: I hereby declare this exam officially open."
    ]
   }
  ]
 },
 {
  "id": "leitura-lista-d-volume-3",
  "emoji": "📖",
  "title": "Vocabulário de Leitura · Lista D (Volume 3)",
  "level": "dificil",
  "description": "Vocabulário do livro com exemplos",
  "cards": [
   {
    "q": "Tremble",
    "a": "Tremer",
    "ex": [
     "Exemplo: His hands began to tremble as he held the cursed artifact."
    ]
   },
   {
    "q": "Naught",
    "a": "Nada (arcaico/formal)",
    "ex": [
     "Exemplo: All their hard work came to naught."
    ]
   },
   {
    "q": "Memory fades",
    "a": "A memória se apaga / desvanece",
    "ex": [
     "Exemplo: As years pass, details of the event memory fades."
    ]
   },
   {
    "q": "Pennants",
    "a": "Flâmulas, bandeirolas",
    "ex": [
     "Exemplo: Colorful pennants decorated the festival square."
    ]
   },
   {
    "q": "Solely",
    "a": "Unicamente, exclusivamente",
    "ex": [
     "Exemplo: This book was written solely for advanced apprentices."
    ]
   },
   {
    "q": "Uphold",
    "a": "Defender, sustentar, manter (regras)",
    "ex": [
     "Exemplo: Knights and wizards must uphold the code of the kingdom."
    ]
   },
   {
    "q": "Therefore",
    "a": "Portanto",
    "ex": [
     "Exemplo: It started to rain; therefore, we moved indoors."
    ]
   },
   {
    "q": "Falter",
    "a": "Hesitar, vacilar",
    "ex": [
     "Exemplo: Do not falter when facing difficult choices."
    ]
   },
   {
    "q": "How fitting",
    "a": "Que apropriado / calha bem",
    "ex": [
     "Exemplo: You found a key shaped like a lock? How fitting!"
    ]
   },
   {
    "q": "Impertinência",
    "a": "Impertinência, insolência",
    "ex": [
     "Exemplo: The apprentice was scolded for her impertinence."
    ]
   },
   {
    "q": "Rash",
    "a": "Precipitado, impetuoso, erupção na pele",
    "ex": [
     "Significado 1 (Impetuoso): Making decisions when angry is a rash move.",
     "Significado 2 (Pele): The toxic plant caused a red rash on his arm."
    ]
   },
   {
    "q": "At best",
    "a": "Na melhor das hipóteses",
    "ex": [
     "Exemplo: This broken wand is useful as firewood at best."
    ]
   },
   {
    "q": "Bestowing",
    "a": "Conferindo, concedendo, outorgando",
    "ex": [
     "Exemplo: The master was bestowing awards upon the best students."
    ]
   },
   {
    "q": "Ring any bells?",
    "a": "Soa familiar? / Lembra alguma coisa?",
    "ex": [
     "Exemplo: Have you heard the name \"Cornelius\"? Ring any bells?"
    ]
   },
   {
    "q": "Swift",
    "a": "Rápido, veloz",
    "ex": [
     "Exemplo: She made a swift movement to catch the falling bottle."
    ]
   },
   {
    "q": "Charred",
    "a": "Carbonizado, queimado",
    "ex": [
     "Exemplo: The fireplace was filled with charred pieces of wood."
    ]
   },
   {
    "q": "Tatters",
    "a": "Retalhos, farrapos",
    "ex": [
     "Exemplo: His old cloak was torn into tatters."
    ]
   },
   {
    "q": "Crumble",
    "a": "Esfarelar, desmoronar",
    "ex": [
     "Exemplo: The old dry bread began to crumble in his hands."
    ]
   },
   {
    "q": "Resume",
    "a": "Retomar, currículo",
    "ex": [
     "Significado 1 (Retomar): Let's resume our lesson after a short break.",
     "Significado 2 (Trabalho): She handed her resume to the guild master."
    ]
   },
   {
    "q": "Repercussion",
    "a": "Repercussão, consequência",
    "ex": [
     "Exemplo: Breaking the seal will have severe repercussions."
    ]
   },
   {
    "q": "Tread",
    "a": "Pisar, caminhar",
    "ex": [
     "Exemplo: Tread carefully, the floorboards are old."
    ]
   },
   {
    "q": "My nerves are shot",
    "a": "Meus nervos estão esgotados / no limite",
    "ex": [
     "Exemplo: After dealing with those unruly kids, my nerves are shot."
    ]
   },
   {
    "q": "At stake",
    "a": "Em jogo, em risco",
    "ex": [
     "Exemplo: The safety of the entire village is at stake."
    ]
   },
   {
    "q": "Pull off",
    "a": "Realizar com sucesso (já listado como pull it off)",
    "ex": [
     "Exemplo: Nobody thought they could win, but they pull off a miracle."
    ]
   },
   {
    "q": "Deemed",
    "a": "Julgado, considerado, ajuizado",
    "ex": [
     "Exemplo: The experiment was deemed too dangerous to continue."
    ]
   },
   {
    "q": "Haste",
    "a": "Pressa, urgência",
    "ex": [
     "Exemplo: Haste makes waste; take your time drawing the runes."
    ]
   },
   {
    "q": "Lax",
    "a": "Laxo, negligente, descuidado",
    "ex": [
     "Exemplo: Security in the outer courtyard was too lax."
    ]
   },
   {
    "q": "Dislodged",
    "a": "Desalojado, deslocado",
    "ex": [
     "Exemplo: A falling stone dislodged the ancient mechanism."
    ]
   },
   {
    "q": "Rending",
    "a": "Rasgando violentamente, dilacerando",
    "ex": [
     "Exemplo: We heard a loud rending sound as the wooden door broke."
    ]
   },
   {
    "q": "Wearing off",
    "a": "Desvanecendo-se, passando o efeito",
    "ex": [
     "Exemplo: The magical disguise potion is wearing off fast."
    ]
   },
   {
    "q": "Ruse",
    "a": "Artifício, estratagema, armação",
    "ex": [
     "Exemplo: His friendly attitude was just a use to trick us."
    ]
   },
   {
    "q": "Planning to go off to",
    "a": "Planejando ir embora para",
    "ex": [
     "Exemplo: She is planning to go off to study in the capital."
    ]
   },
   {
    "q": "Doorknob",
    "a": "Maçaneta da porta",
    "ex": [
     "Exemplo: Turn the doorknob clockwise to unlock it."
    ]
   },
   {
    "q": "Up on the third floor",
    "a": "Lá no terceiro andar",
    "ex": [
     "Exemplo: The restricted library section is up on the third floor."
    ]
   },
   {
    "q": "Scratch",
    "a": "Arranhar, risco, do zero (from scratch)",
    "ex": [
     "Exemplo: If you ruin the drawing, you must start over from scratch."
    ]
   },
   {
    "q": "Tranquileaf",
    "a": "Folha tranquilizante (termo fantástico comum em histórias)",
    "ex": [
     "Exemplo: Brew a tea using tranquileaf to calm your nerves."
    ]
   },
   {
    "q": "Dyes",
    "a": "Corantes, tinturas",
    "ex": [
     "Exemplo: Natural dyes are used to color the magical robes."
    ]
   },
   {
    "q": "Turned my storehouse inside out",
    "a": "Revirou meu depósito de cabeça para baixo"
   },
   {
    "q": "Exemplo",
    "a": "Someone searched for the artifact and turned my storehouse inside out"
   },
   {
    "q": "I happened across",
    "a": "Por acaso eu encontrei / cruzei com",
    "ex": [
     "Exemplo: I happened across an old spell scroll in the forest."
    ]
   },
   {
    "q": "Tinge",
    "a": "Matiz, leve tom, coloração suave",
    "ex": [
     "Exemplo: The potion had a faint tinge of blue."
    ]
   },
   {
    "q": "Hang on a tick",
    "a": "Espere um segundo / um instante",
    "ex": [
     "Exemplo: Hang on a tick, let me check my notes."
    ]
   },
   {
    "q": "Seafoam",
    "a": "Espuma do mar",
    "ex": [
     "Exemplo: The waves crashed, leaving white seafoam on the sand."
    ]
   },
   {
    "q": "Azuremoon",
    "a": "Lua azulada (nome fantástico de lua)",
    "ex": [
     "Exemplo: The ritual must be performed under the light of the azuremoon."
    ]
   },
   {
    "q": "Roaming scallop",
    "a": "Vieiras errantes (molusco marinho/fantástico)",
    "ex": [
     "Exemplo: Shell collectors searched the shallows for a roaming scallop."
    ]
   },
   {
    "q": "Shells",
    "a": "Conchas",
    "ex": [
     "Exemplo: She decorated her desk with colorful sea shells."
    ]
   },
   {
    "q": "Wyrm",
    "a": "Serpe, dragão ancestral sem asas",
    "ex": [
     "Exemplo: Legends warn of an ancient wyrm sleeping beneath the mountain."
    ]
   },
   {
    "q": "Peruse",
    "a": "Ler com atenção, examinar detalhadamente",
    "ex": [
     "Exemplo: Feel free to peruse the library catalog."
    ]
   },
   {
    "q": "Don't take this the wrong way",
    "a": "Não leve a mal",
    "ex": [
     "Exemplo: Don't take this the wrong way, but your drawing needs a lot of work."
    ]
   },
   {
    "q": "Twinned",
    "a": "Emparelhado, duplo, gêmeo",
    "ex": [
     "Exemplo: They wore twinned rings that shared a magical link."
    ]
   },
   {
    "q": "Wager",
    "a": "Apostar",
    "ex": [
     "Exemplo: I wager she finishes the potion before anyone else."
    ]
   },
   {
    "q": "Palm quire",
    "a": "Bloco de notas de bolso / palma da mão",
    "ex": [
     "Exemplo: He wrote a quick reminder in his pocket palm quire."
    ]
   },
   {
    "q": "Acuity",
    "a": "Acuidade, agudeza (mental/visual)",
    "ex": [
     "Exemplo: Solving complex runes requires high mental acuity."
    ]
   },
   {
    "q": "Cloud your face",
    "a": "Enublar seu rosto (expressão de preocupação/tristeza)",
    "ex": [
     "Exemplo: Don't let doubt cloud your face during the test."
    ]
   },
   {
    "q": "Plucking",
    "a": "Colhendo (flores/frutas) ou beliscando/puxando cordas",
    "ex": [
     "Exemplo: She was plucking petals from the magical flower."
    ]
   },
   {
    "q": "Flutter",
    "a": "Flutuar levemente, bater asas",
    "ex": [
     "Exemplo: Butterflies began to flutter around the garden."
    ]
   },
   {
    "q": "Stem",
    "a": "Haste, caule, conter/reprimir",
    "ex": [
     "Significado 1 (Planta): Cut the flower by the stem.",
     "Significado 2 (Conter): Measures were taken to stem the flow of rumors."
    ]
   },
   {
    "q": "Iron out flaws",
    "a": "Eliminar falhas, corrigir defeitos",
    "ex": [
     "Exemplo: We need to iron out flaws in the spell design before testing it."
    ]
   },
   {
    "q": "Oh, my!",
    "a": "Nossa! / Meu Deus! (expressão de surpresa)",
    "ex": [
     "Exemplo: Oh, my! That was a powerful explosion."
    ]
   },
   {
    "q": "Advising",
    "a": "Aconselhando, orientando",
    "ex": [
     "Exemplo: The mentor spent hours advising her young apprentice."
    ]
   },
   {
    "q": "Gauge",
    "a": "Medir, avaliar, calibre",
    "ex": [
     "Exemplo: Use this tool to gauge the magical pressure in the container."
    ]
   },
   {
    "q": "Perceive",
    "a": "Perceber, notar",
    "ex": [
     "Exemplo: Can you perceive the hidden trap on the floor?"
    ]
   },
   {
    "q": "Whose",
    "a": "De quem",
    "ex": [
     "Exemplo: Whose wand was left on the classroom desk?"
    ]
   },
   {
    "q": "Unaided",
    "a": "Sem ajuda, por conta própria",
    "ex": [
     "Exemplo: She managed to lift the heavy stone unaided."
    ]
   },
   {
    "q": "Thee",
    "a": "Tu / ti (pronome arcaico)",
    "ex": [
     "Exemplo: I offer this spell book to thee, faithful student."
    ]
   },
   {
    "q": "Words of thanks",
    "a": "Palavras de agradecimento",
    "ex": [
     "Exemplo: He offered warm words of thanks to his teacher."
    ]
   },
   {
    "q": "Two birds with one stone",
    "a": "Matar dois coelhos com uma cajadada só",
    "ex": [
     "Exemplo: By studying on the train, she hit two birds with one stone."
    ]
   },
   {
    "q": "Two needs with one deed",
    "a": "Resolver duas necessidades com um único ato",
    "ex": [
     "Exemplo: Cleaning the library serves two needs with one deed: exercise and tidiness."
    ]
   },
   {
    "q": "Pigtails",
    "a": "Marias-chiquinhas (penteado de trancinhas)",
    "ex": [
     "Exemplo: She tied her hair into two neat pigtails."
    ]
   },
   {
    "q": "Despise",
    "a": "Desprezar, odiar",
    "ex": [
     "Exemplo: He despises those who use magic to cheat others."
    ]
   },
   {
    "q": "The head of the family",
    "a": "O chefe da família",
    "ex": [
     "Exemplo: The head of the family signed the admission papers for the academy."
    ]
   },
   {
    "q": "Imbue",
    "a": "Imbuir, infundir, saturar (com uma qualidade)",
    "ex": [
     "Exemplo: You must imbue the crystal with your own energy."
    ]
   },
   {
    "q": "Thus",
    "a": "Assim (já listado anteriormente)"
   },
   {
    "q": "An ally that never betrays",
    "a": "Um aliado que nunca trai",
    "ex": [
     "Exemplo: A well-written book is an ally that never betrays."
    ]
   },
   {
    "q": "Edict",
    "a": "Édito, decreto oficial",
    "ex": [
     "Exemplo: The king issued an edict banning unregistered spells."
    ]
   },
   {
    "q": "Devised",
    "a": "Concebido, planejado, inventado",
    "ex": [
     "Exemplo: They devised a clever way to bypass the lock."
    ]
   },
   {
    "q": "Vessels",
    "a": "Embarcações, recipientes, vasos sanguíneos",
    "ex": [
     "Exemplo: Glass vessels are used to store volatile potions."
    ]
   },
   {
    "q": "Yawns",
    "a": "Bocejos, bocejar",
    "ex": [
     "Exemplo: He tried to hide his yawns during the late-night lecture."
    ]
   },
   {
    "q": "Skimp",
    "a": "Economizar excessivamente, poupar com mesquinharia",
    "ex": [
     "Exemplo: Do not skimp on ingredients if you want the potion to work."
    ]
   },
   {
    "q": "Erbe",
    "a": "(Termo que costuma aparecer como ervas / herbe em variações arcaicas)",
    "ex": [
     "Exemplo: Collect fresh erbe from the southern hillsides."
    ]
   },
   {
    "q": "World of problems",
    "a": "Mundo de problemas",
    "ex": [
     "Exemplo: Ignoring safety rules will lead you into a world of problems."
    ]
   },
   {
    "q": "Subsided",
    "a": "Acalmou-se, diminuiu (tempestade, dor, cheia)",
    "ex": [
     "Exemplo: After the storm subsided, they went outside."
    ]
   },
   {
    "q": "Told on me",
    "a": "Dedurou-me, entregou-me",
    "ex": [
     "Exemplo: My little brother told on me when I broke the vase."
    ]
   },
   {
    "q": "Bugging me",
    "a": "Incomodando-me, enchendo o saco",
    "ex": [
     "Exemplo: Stop bugging me, I'm trying to concentrate on my drawing!"
    ]
   },
   {
    "q": "They are sharp",
    "a": "Eles são afiados / espertos",
    "ex": [
     "Exemplo: Be careful what you say around the elders, they are sharp."
    ]
   },
   {
    "q": "Under wraps",
    "a": "Em segredo, sob sigilo",
    "ex": [
     "Exemplo: Keep this new spell formula strictly under wraps."
    ]
   },
   {
    "q": "Shortcut",
    "a": "Atalho",
    "ex": [
     "Exemplo: We took a shortcut through the gardens to save time."
    ]
   },
   {
    "q": "Marvel",
    "a": "Marvilhar-se, maravilha",
    "ex": [
     "Exemplo: We stood there to marvel at the floating castle."
    ]
   }
  ]
 },
 {
  "id": "leitura-volume-4-complementos",
  "emoji": "📖",
  "title": "Vocabulário de Leitura · Volume 4 & Complementos",
  "level": "dificil",
  "description": "Vocabulário do livro com exemplos",
  "cards": [
   {
    "q": "Mating",
    "a": "Acasalamento",
    "ex": [
     "Exemplo: Springtime is the period of mating for many forest creatures."
    ]
   },
   {
    "q": "Scale-wolves",
    "a": "Lobos-com-escamas (criatura fantástica)",
    "ex": [
     "Exemplo: Travelers must watch out for aggressive scale-wolves in the caves."
    ]
   },
   {
    "q": "Knocking off",
    "a": "Derrubando, largando o trabalho (expediente)",
    "ex": [
     "Significado 1 (Derrubar): He kept knocking off books from the shelf.",
     "Significado 2 (Terminar o trabalho): What time are you knocking off today?"
    ]
   },
   {
    "q": "Steadier",
    "a": "Mais firme, mais estável",
    "ex": [
     "Exemplo: Practice daily to make your hand steadier when drawing runes."
    ]
   },
   {
    "q": "Pitch",
    "a": "Tom (de voz), piche, arremessar",
    "ex": [
     "Exemplo: Her voice rose in pitch when she got excited."
    ]
   },
   {
    "q": "Same few",
    "a": "Os mesmos poucos (de sempre)",
    "ex": [
     "Exemplo: Only the same few students volunteered to clean up."
    ]
   },
   {
    "q": "Recall",
    "a": "Lembrar, recordar",
    "ex": [
     "Exemplo: I cannot recall where I left my spell components."
    ]
   },
   {
    "q": "Strikes",
    "a": "Golpes, atinge, ataca",
    "ex": [
     "Exemplo: Lightning strikes the highest tower during the storm."
    ]
   },
   {
    "q": "Beeline",
    "a": "Linha reta (ir direto a um lugar)",
    "ex": [
     "Exemplo: He made a beeline for the snack table."
    ]
   },
   {
    "q": "Needn't",
    "a": "Não precisa (contração de need not)",
    "ex": [
     "Exemplo: You needn't worry about the test; you are well prepared."
    ]
   },
   {
    "q": "Otherwise",
    "a": "Caso contrário, de outra forma",
    "ex": [
     "Exemplo: Hurry up, otherwise we will miss the carriage."
    ]
   },
   {
    "q": "Beyond me",
    "a": "Acima da minha compreensão",
    "ex": [
     "Exemplo: Advanced calculus is completely beyond me."
    ]
   },
   {
    "q": "Remarkable",
    "a": "Notável, extraordinário",
    "ex": [
     "Exemplo: Her progress in magic theory is truly remarkable."
    ]
   },
   {
    "q": "Condone",
    "a": "Condonar, tolerar (algo errado)",
    "ex": [
     "Exemplo: The academy does not condone breaking safety protocols."
    ]
   },
   {
    "q": "Novel way",
    "a": "Maneira inovadora / original",
    "ex": [
     "Exemplo: He found a novel way to solve the equation."
    ]
   },
   {
    "q": "Tainted",
    "a": "Contaminado, manchado, corrompido",
    "ex": [
     "Exemplo: Do not drink water from that tainted well."
    ]
   },
   {
    "q": "Much obliged",
    "a": "Muito obrigado (expressão educada/clássica)",
    "ex": [
     "Exemplo: Much obliged for carrying these heavy books for me."
    ]
   },
   {
    "q": "Don't get the wrong idea",
    "a": "Não entenda mal",
    "ex": [
     "Exemplo: Don't get the wrong idea, I'm only helping because I have to."
    ]
   },
   {
    "q": "Three days hence",
    "a": "Daqui a três dias (hence = a partir de agora)",
    "ex": [
     "Exemplo: The grand festival will take place three days hence."
    ]
   },
   {
    "q": "Assemble",
    "a": "Reunir-se, montar",
    "ex": [
     "Exemplo: Assemble in the courtyard when the bell rings."
    ]
   },
   {
    "q": "Nigh",
    "a": "Próximo, iminente (arcaico)",
    "ex": [
     "Exemplo: The time of the great examination is drawing nigh."
    ]
   },
   {
    "q": "Fret",
    "a": "Preocupar-se, afligir-se",
    "ex": [
     "Exemplo: Don't fret over small mistakes in your drafts."
    ]
   },
   {
    "q": "Ligers",
    "a": "Ligeros / híbridos de leão e tigres (ou criaturas fantásticas semelhantes)",
    "ex": [
     "Exemplo: Exotic beasts like ligers are kept in royal menageries."
    ]
   },
   {
    "q": "One shot",
    "a": "Uma única chance, tiro único",
    "ex": [
     "Exemplo: We only have one shot to activate the portal correctly."
    ]
   },
   {
    "q": "What spirit!",
    "a": "Que ânimo! / Que garra!",
    "ex": [
     "Exemplo: Look at her working hard all night—what spirit!"
    ]
   },
   {
    "q": "The devil of it",
    "a": "O problema principal / a parte mais difícil e irritante",
    "ex": [
     "Exemplo: We found the hidden door, but the devil of it is finding the key."
    ]
   },
   {
    "q": "End up",
    "a": "Acabar (parar em alguma situação inesperada)",
    "ex": [
     "Exemplo: If you don't read the map, you will end up lost in the woods."
    ]
   },
   {
    "q": "Gleaming",
    "a": "Brilhante, luzidio",
    "ex": [
     "Exemplo: The silver sword was gleaming under the moonlight."
    ]
   },
   {
    "q": "Proctor",
    "a": "Fiscal de prova, inspetor",
    "ex": [
     "Exemplo: The strict proctor walked down the rows of desks."
    ]
   },
   {
    "q": "Pure chance",
    "a": "Pura coincidência / acaso",
    "ex": [
     "Exemplo: Meeting her in the library was pure chance."
    ]
   },
   {
    "q": "Serve as",
    "a": "Servir como",
    "ex": [
     "Exemplo: This broken branch will serve as a walking stick."
    ]
   },
   {
    "q": "Peek",
    "a": "Espiar, dar uma olhadinha rápida",
    "ex": [
     "Exemplo: Take a quick peek inside the room to see if they're ready."
    ]
   },
   {
    "q": "Not quite",
    "a": "Não exatamente / não bem",
    "ex": [
     "Exemplo: Is the potion ready? — Not quite, it needs more stirring."
    ]
   },
   {
    "q": "Inhabits",
    "a": "Habita",
    "ex": [
     "Exemplo: A mysterious spirit inhabits the old abandoned lighthouse."
    ]
   },
   {
    "q": "Remnant",
    "a": "Vestígio, remanescente, sobra",
    "ex": [
     "Exemplo: They found a remnant of an ancient spell scroll."
    ]
   },
   {
    "q": "Set foot",
    "a": "Pôr os pés (em algum lugar)",
    "ex": [
     "Exemplo: Never set foot in the restricted chambers again."
    ]
   },
   {
    "q": "Breeding",
    "a": "Reprodução, criação (de animais)",
    "ex": [
     "Exemplo: The breeding season of these magical creatures starts in spring."
    ]
   },
   {
    "q": "Wintering",
    "a": "Passando o inverno",
    "ex": [
     "Exemplo: Migratory birds are wintering in the southern marshes."
    ]
   },
   {
    "q": "Fledgling",
    "a": "Filhote que aprende a voar / iniciado inexperiente",
    "ex": [
     "Exemplo: The fledgling wizard made a few mistakes during his first flight."
    ]
   },
   {
    "q": "Flock",
    "a": "Bando (de aves), rebanho",
    "ex": [
     "Exemplo: A large flock of birds flew across the horizon."
    ]
   },
   {
    "q": "Take off",
    "a": "Descolar, decolar, tirar (roupa)",
    "ex": [
     "Significado 1 (Decolar): The broomstick is ready to take off.",
     "Significado 2 (Tirar): Take off your wet cloak by the fire."
    ]
   },
   {
    "q": "Alter",
    "a": "Alterar, modificar",
    "ex": [
     "Exemplo: Do not alter the magic circle once it is drawn."
    ]
   },
   {
    "q": "Boss me around",
    "a": "Mandar em mim, chefiar autoritariamente",
    "ex": [
     "Exemplo: Stop trying to boss me around, I can work by myself."
    ]
   },
   {
    "q": "Dismiss",
    "a": "Dispensar, demitir, rejeitar",
    "ex": [
     "Exemplo: The teacher decided to dismiss the class early."
    ]
   },
   {
    "q": "Bicker",
    "a": "Discutir por bobagens, turrar",
    "ex": [
     "Exemplo: The apprentices always bicker over who gets to use the clean inkwell."
    ]
   },
   {
    "q": "Plead",
    "a": "Suplicar, implorar",
    "ex": [
     "Exemplo: He began to plead for another chance to take the test."
    ]
   },
   {
    "q": "Chore",
    "a": "Tarefa doméstica / obrigação chata",
    "ex": [
     "Exemplo: Cleaning the ink bottles is my least favorite chore."
    ]
   },
   {
    "q": "Talk me up",
    "a": "Falar bem de mim, promover minha imagem",
    "ex": [
     "Exemplo: Thanks for trying to talk me up to the guild master."
    ]
   },
   {
    "q": "Ultimately",
    "a": "No fim das contas, ultimamente",
    "ex": [
     "Significado 1 (No fim das contas): Ultimately, hard work brings better results.",
     "Significado 2 (Recentemente): Ultimately, she has been studying late every night."
    ]
   },
   {
    "q": "Stray",
    "a": "Desviar-se, perdido (animal de rua)",
    "ex": [
     "Significado 1 (Desviar): Make sure not to stray from the safe path.",
     "Significado 2 (Animal): They found a lost stray cat near the door."
    ]
   },
   {
    "q": "Traverse",
    "a": "Atravessar, percorrer",
    "ex": [
     "Exemplo: They had to traverse a dangerous mountain ridge."
    ]
   },
   {
    "q": "Proceed",
    "a": "Prosseguir, continuar",
    "ex": [
     "Exemplo: You may proceed to the next stage of the test."
    ]
   },
   {
    "q": "Peered",
    "a": "Espiou, olhou com atenção (passado de peer)",
    "ex": [
     "Exemplo: She peered through the thick fog to see the road."
    ]
   },
   {
    "q": "Maw",
    "a": "Górgola, fauces (boca enorme de um monstro)",
    "ex": [
     "Exemplo: The beast opened its wide maw and roared."
    ]
   },
   {
    "q": "Warped",
    "a": "Deformado, distorcido",
    "ex": [
     "Exemplo: The wet wooden board became warped over time."
    ]
   },
   {
    "q": "Flourished",
    "a": "Prosperou (já visto com flourishes)",
    "ex": [
     "Exemplo: The town flourished under the protection of skilled mages."
    ]
   },
   {
    "q": "Highest caliber",
    "a": "Da mais alta qualidade / nível mais alto",
    "ex": [
     "Exemplo: Only materials of the highest caliber are used for these wands."
    ]
   },
   {
    "q": "Clad",
    "a": "Vestido, revestido",
    "ex": [
     "Exemplo: The guards were clad in shiny steel armor."
    ]
   },
   {
    "q": "Grant",
    "a": "Conceder, outorgar",
    "ex": [
     "Exemplo: The council decided to grant her a research license."
    ]
   },
   {
    "q": "Snaking",
    "a": "Serpenteando, sinuoso",
    "ex": [
     "Exemplo: A snaking path led up the steep hill."
    ]
   },
   {
    "q": "Hallowed",
    "a": "Sagrado, consagrado",
    "ex": [
     "Exemplo: They entered the hallowed halls of the ancient academy."
    ]
   },
   {
    "q": "Bigotry",
    "a": "Intolerância, preconceito",
    "ex": [
     "Exemplo: Education is the best weapon against ignorance and bigotry."
    ]
   },
   {
    "q": "Strife",
    "a": "Conflito, discórdia",
    "ex": [
     "Exemplo: Years of strife left the region divided."
    ]
   },
   {
    "q": "Sorrow",
    "a": "Tristeza, pesar",
    "ex": [
     "Exemplo: She felt deep sorrow when her favorite book was lost."
    ]
   },
   {
    "q": "Scrape away",
    "a": "Raspar, remover raspando",
    "ex": [
     "Exemplo: Use a knife to *scrape away the dried wax from the table."
    ]
   },
   {
    "q": "Orient yourself",
    "a": "Orientar-se, situar-se",
    "ex": [
     "Exemplo: Look at the map to orient yourself in the forest."
    ]
   },
   {
    "q": "According",
    "a": "Conforme, de acordo com",
    "ex": [
     "Exemplo: According to the rules, safety comes first."
    ]
   },
   {
    "q": "Step off",
    "a": "Afastar-se, dar um passo para trás/fora",
    "ex": [
     "Exemplo: Step off the platform before the mechanism activates."
    ]
   },
   {
    "q": "Fell off",
    "a": "Caiu (de algum lugar)",
    "ex": [
     "Exemplo: The book fell off the edge of the shelf."
    ]
   },
   {
    "q": "Scribbles",
    "a": "Rabiscos, gatafunhos",
    "ex": [
     "Exemplo: The notebook page was filled with messy scribbles."
    ]
   },
   {
    "q": "Sustenance",
    "a": "Sustento, alimento",
    "ex": [
     "Exemplo: They carried enough dry bread for sustenance during the journey."
    ]
   },
   {
    "q": "Not my business",
    "a": "Não é da minha conta",
    "ex": [
     "Exemplo: If they want to argue, it's not my business."
    ]
   },
   {
    "q": "Grasping",
    "a": "Agarrando, compreendendo",
    "ex": [
     "Exemplo: He was grasping the railing tightly during the storm."
    ]
   },
   {
    "q": "Going on ahead",
    "a": "Indo na frente",
    "ex": [
     "Exemplo: You guys go ahead, I'll catch up later. -> Exemplo: Going on ahead will let us secure a good spot."
    ]
   },
   {
    "q": "Keep out",
    "a": "Fique de fora, proibido entrar",
    "ex": [
     "Exemplo: A warning sign read: Keep out of the restricted zone."
    ]
   },
   {
    "q": "Soaring off",
    "a": "Voando alto para longe",
    "ex": [
     "Exemplo: The giant bird spread its wings and started soaring off."
    ]
   },
   {
    "q": "Unpredictably",
    "a": "De forma imprevisível",
    "ex": [
     "Exemplo: Wild magical energy behaves unpredictably."
    ]
   },
   {
    "q": "There's something to that",
    "a": "Tem fundamento / há verdade nisso",
    "ex": [
     "Exemplo: Your theory sounds crazy, but there's something to that."
    ]
   },
   {
    "q": "You're up next",
    "a": "É a sua vez agora",
    "ex": [
     "Exemplo: Take a deep breath—you're up next for the oral exam."
    ]
   },
   {
    "q": "I'm not cut out for this",
    "a": "Não levo jeito para isso / Não sirvo para isso",
    "ex": [
     "Exemplo: Trying to fix delicate clockwork makes me think I'm not cut out for this."
    ]
   },
   {
    "q": "I've got nothing",
    "a": "Estou sem ideias / Não tenho nada",
    "ex": [
     "Exemplo: I tried thinking of a solution, but I've got nothing."
    ]
   },
   {
    "q": "Top it all off",
    "a": "Para coroar tudo / Para piorar ou melhorar ainda mais",
    "ex": [
     "Exemplo: It rained all day, and to top it all off, we missed our train."
    ]
   },
   {
    "q": "Crumbled away",
    "a": "Desmoronou, desintegrou-se com o tempo",
    "ex": [
     "Exemplo: The ancient stone wall had crumbled away over the centuries."
    ]
   },
   {
    "q": "Awareness",
    "a": "Consciência, percepção",
    "ex": [
     "Exemplo: Spatial awareness is crucial when drawing large runes."
    ]
   },
   {
    "q": "Slips",
    "a": "Escorregões, falhas, deslizes",
    "ex": [
     "Exemplo: One tiny slip of the pen can ruin the entire spell circle."
    ]
   },
   {
    "q": "Barred",
    "a": "Barrado, proibido, trancado",
    "ex": [
     "Exemplo: The main entrance was barred from the inside."
    ]
   },
   {
    "q": "Come up",
    "a": "Surgir, emparelhar, aproximar-se",
    "ex": [
     "Significado 1 (Surgir): A new problem has come up with the formula.",
     "Significado 2 (Aproximar-se): Come up closer so you can see the details."
    ]
   },
   {
    "q": "On the spot",
    "a": "No ato, na hora, imediatamente",
    "ex": [
     "Exemplo: He managed to invent a clever excuse right on the spot."
    ]
   },
   {
    "q": "Balled up",
    "a": "Amassado em formato de bola",
    "ex": [
     "Exemplo: She threw the failed drawing away as a balled up piece of paper."
    ]
   }
  ]
 },
 {
  "id": "frutas-basico",
  "emoji": "🍎",
  "title": "Frutas & Vegetais",
  "level": "basico",
  "description": "Nível Básico (A1/A2)",
  "cards": [
   {
    "q": "Apple",
    "a": "Maçã"
   },
   {
    "q": "Banana",
    "a": "Banana"
   },
   {
    "q": "Grape",
    "a": "Uva"
   },
   {
    "q": "Lemon",
    "a": "Limão amarelo / Limão siciliano"
   },
   {
    "q": "Orange",
    "a": "Laranja"
   },
   {
    "q": "Strawberry",
    "a": "Morango"
   },
   {
    "q": "Carrot",
    "a": "Cenoura"
   },
   {
    "q": "Garlic",
    "a": "Alho"
   },
   {
    "q": "Lettuce",
    "a": "Alface"
   },
   {
    "q": "Onion",
    "a": "Cebola"
   },
   {
    "q": "Potato",
    "a": "Batata"
   },
   {
    "q": "Tomato",
    "a": "Tomate"
   },
   {
    "q": "Bean",
    "a": "Feijão / Vagem"
   }
  ]
 },
 {
  "id": "frutas-intermediario",
  "emoji": "🍎",
  "title": "Frutas & Vegetais",
  "level": "intermediario",
  "description": "Nível Intermediário (B1/B2)",
  "cards": [
   {
    "q": "Cherry",
    "a": "Cereja"
   },
   {
    "q": "Melon",
    "a": "Melão"
   },
   {
    "q": "Peach",
    "a": "Pêssego"
   },
   {
    "q": "Pear",
    "a": "Pera"
   },
   {
    "q": "Plum",
    "a": "Ameixa"
   },
   {
    "q": "Broccoli",
    "a": "Brócolis"
   },
   {
    "q": "Cabbage",
    "a": "Repolho"
   },
   {
    "q": "Cucumber",
    "a": "Pepino"
   },
   {
    "q": "Pepper",
    "a": "Pimentão / Pimenta"
   },
   {
    "q": "Spinach",
    "a": "Espinafre"
   },
   {
    "q": "Zucchini",
    "a": "Abobrinha"
   },
   {
    "q": "Pea",
    "a": "Ervilha"
   }
  ]
 },
 {
  "id": "frutas-dificil",
  "emoji": "🍎",
  "title": "Frutas & Vegetais",
  "level": "dificil",
  "description": "Nível Avançado (C1/C2)",
  "cards": [
   {
    "q": "Berry",
    "a": "Fruta vermelha / Baga (Termo genérico para frutas pequenas)"
   },
   {
    "q": "Citrus",
    "a": "Cítrico (Termo de classificação/família)"
   },
   {
    "q": "Fig",
    "a": "Figo"
   },
   {
    "q": "Celery",
    "a": "Aipo / Salsão (Menos comum na culinária básica do dia a dia)"
   },
   {
    "q": "Chickpea",
    "a": "Grão-de-bico"
   },
   {
    "q": "Lentil",
    "a": "Lentilha"
   },
   {
    "q": "Soybean",
    "a": "Soja (Termo mais específico ligado a agricultura, grãos ou indústria)"
   }
  ]
 },
 {
  "id": "transportes-basico",
  "emoji": "🚗",
  "title": "Transportes",
  "level": "basico",
  "description": "Nível Básico (A1/A2)",
  "cards": [
   {
    "q": "Airplane",
    "a": "Avião"
   },
   {
    "q": "Bicycle",
    "a": "Bicicleta"
   },
   {
    "q": "Boat",
    "a": "Barco"
   },
   {
    "q": "Bus",
    "a": "Ônibus"
   },
   {
    "q": "Car",
    "a": "Carro"
   },
   {
    "q": "Helicopter",
    "a": "Helicóptero"
   },
   {
    "q": "Motorcycle",
    "a": "Motocicleta / Moto"
   },
   {
    "q": "Police car",
    "a": "Carro de polícia"
   },
   {
    "q": "Rocket",
    "a": "Foguete"
   },
   {
    "q": "Ship",
    "a": "Navio"
   },
   {
    "q": "Taxi",
    "a": "Táxi"
   },
   {
    "q": "Train",
    "a": "Trem"
   },
   {
    "q": "Truck",
    "a": "Caminhão"
   }
  ]
 },
 {
  "id": "transportes-intermediario",
  "emoji": "🚗",
  "title": "Transportes",
  "level": "intermediario",
  "description": "Nível Intermediário (B1/B2)",
  "cards": [
   {
    "q": "Ambulance",
    "a": "Ambulância"
   },
   {
    "q": "Canoe",
    "a": "Canoa"
   },
   {
    "q": "Delivery van",
    "a": "Van de entregas"
   },
   {
    "q": "Electric car",
    "a": "Carro elétrico"
   },
   {
    "q": "Fire engine",
    "a": "Carro de bombeiros"
   },
   {
    "q": "Jeep",
    "a": "Jipe"
   },
   {
    "q": "Limousine",
    "a": "Limusine"
   },
   {
    "q": "Metro / Subway",
    "a": "Metrô"
   },
   {
    "q": "Minivan",
    "a": "Minivan"
   },
   {
    "q": "Pickup truck",
    "a": "Caminhonete / Picape"
   },
   {
    "q": "Sailboat",
    "a": "Veleiro"
   },
   {
    "q": "Scooter",
    "a": "Lambreta / Patinete motorizado"
   },
   {
    "q": "Skateboard",
    "a": "Skateboard / Skate"
   },
   {
    "q": "Spaceship",
    "a": "Nave espacial"
   },
   {
    "q": "Speedboat",
    "a": "Lancha"
   },
   {
    "q": "Submarine",
    "a": "Submarino"
   },
   {
    "q": "Tractor",
    "a": "Trator"
   },
   {
    "q": "Tricycle",
    "a": "Triciclo"
   },
   {
    "q": "Van",
    "a": "Van / Perua"
   },
   {
    "q": "Yacht",
    "a": "Iate"
   }
  ]
 },
 {
  "id": "transportes-dificil",
  "emoji": "🚗",
  "title": "Transportes",
  "level": "dificil",
  "description": "Nível Avançado (C1/C2)",
  "cards": [
   {
    "q": "Cruise ship",
    "a": "Navio de cruzeiro"
   },
   {
    "q": "Ferry",
    "a": "Balsa / Ferry-boat"
   },
   {
    "q": "Forklift",
    "a": "Empilhadeira (Veículo industrial)"
   },
   {
    "q": "Hot air balloon",
    "a": "Balão de ar quente (Recreativo/específico)"
   },
   {
    "q": "Raft",
    "a": "Balsa / Jangada (Embarcação específica)"
   },
   {
    "q": "Sleigh",
    "a": "Trenó (Cultural/sazonal)"
   },
   {
    "q": "Snowmobile",
    "a": "Moto de neve (Contexto geográfico específico)"
   },
   {
    "q": "Tram / Streetcar",
    "a": "Bonde (Transporte público tradicional/histórico)"
   }
  ]
 },
 {
  "id": "numeros-basico",
  "emoji": "🔢",
  "title": "Números por Extenso",
  "level": "basico",
  "description": "Escreva o número por extenso",
  "cards": [
   {
    "q": "7",
    "a": "Seven"
   },
   {
    "q": "14",
    "a": "Fourteen"
   },
   {
    "q": "32",
    "a": "Thirty-two"
   },
   {
    "q": "85",
    "a": "Eighty-five"
   },
   {
    "q": "126",
    "a": "One hundred twenty-six"
   },
   {
    "q": "419",
    "a": "Four hundred nineteen"
   },
   {
    "q": "632",
    "a": "Six hundred thirty-two"
   },
   {
    "q": "974",
    "a": "Nine hundred seventy-four"
   },
   {
    "q": "1,450",
    "a": "One thousand, four hundred fifty"
   },
   {
    "q": "3,892",
    "a": "Three thousand, eight hundred ninety-two"
   },
   {
    "q": "7,104",
    "a": "Seven thousand, one hundred four"
   },
   {
    "q": "9,631",
    "a": "Nine thousand, six hundred thirty-one"
   },
   {
    "q": "15,420",
    "a": "Fifteen thousand, four hundred twenty"
   },
   {
    "q": "48,705",
    "a": "Forty-eight thousand, seven hundred five"
   },
   {
    "q": "92,360",
    "a": "Ninety-two thousand, three hundred sixty"
   },
   {
    "q": "125,840",
    "a": "One hundred twenty-five thousand, eight hundred forty"
   },
   {
    "q": "543,119",
    "a": "Five hundred forty-three thousand, one hundred nineteen"
   },
   {
    "q": "876,025",
    "a": "Eight hundred seventy-six thousand, twenty-five"
   },
   {
    "q": "1,204,500",
    "a": "One million, two hundred four thousand, five hundred"
   },
   {
    "q": "6,789,123",
    "a": "Six million, seven hundred eighty-nine thousand, one hundred twenty-three"
   }
  ]
 },
 {
  "id": "phrasal-pdf-basico",
  "emoji": "🧩",
  "title": "Phrasal Verbs (Definições)",
  "level": "basico",
  "description": "Nível Básico (A1/A2)",
  "cards": [
   {
    "q": "Wake up",
    "a": "To stop sleeping or become fully alert",
    "ex": [
     "Example: I usually wake up early in the morning before sunrise."
    ]
   },
   {
    "q": "Look up",
    "a": "To search for information in a book or online",
    "ex": [
     "Example: Look up the definition of the word in the glossary."
    ]
   },
   {
    "q": "Turn down",
    "a": "To refuse an offer or reduce the volume",
    "ex": [
     "Example: He had to turn down the invitation due to extra work."
    ]
   },
   {
    "q": "Take off",
    "a": "To remove clothing or for an aircraft/broomstick to depart",
    "ex": [
     "Example: Make sure to take off your wet boots before coming inside."
    ]
   },
   {
    "q": "Give up",
    "a": "To stop trying or surrender",
    "ex": [
     "Example: Even when the test is hard, never give up."
    ]
   },
   {
    "q": "Call off",
    "a": "To cancel an event or arrangement",
    "ex": [
     "Example: They had to call off the outdoor trip because of the storm."
    ]
   },
   {
    "q": "Calm down",
    "a": "To become or cause to become relaxed and less agitated",
    "ex": [
     "Example: Take a deep breath and try to calm down."
    ]
   },
   {
    "q": "Grow up",
    "a": "To mature or pass from childhood to adulthood",
    "ex": [
     "Example: She wants to become an explorer when she grows up."
    ]
   },
   {
    "q": "Hold on",
    "a": "To grip tightly or wait",
    "ex": [
     "Example: Hold on to the railing so you don't slip on the stairs."
    ]
   },
   {
    "q": "Pick up",
    "a": "To lift something from the ground, or collect someone",
    "ex": [
     "Example: Please pick up your pen from the floor."
    ]
   }
  ]
 },
 {
  "id": "phrasal-pdf-intermediario",
  "emoji": "🧩",
  "title": "Phrasal Verbs (Definições)",
  "level": "intermediario",
  "description": "Nível Intermediário (B1/B2)",
  "cards": [
   {
    "q": "Ask out",
    "a": "To invite someone on a date",
    "ex": [
     "Example: He finally decided to ask out his coworker for dinner."
    ]
   },
   {
    "q": "Blow up",
    "a": "To explode, or to become suddenly very angry",
    "ex": [
     "Example: The old fuse box could blow up if overloaded."
    ]
   },
   {
    "q": "Break down",
    "a": "To stop functioning or to lose emotional control",
    "ex": [
     "Example: My old motorcycle decided to break down on the highway."
    ]
   },
   {
    "q": "Bring up",
    "a": "To mention a topic in conversation or raise a child",
    "ex": [
     "Example: Don't forget to bring up the budget issue during the meeting."
    ]
   },
   {
    "q": "Carry on",
    "a": "To continue an activity or task",
    "ex": [
     "Example: Please carry on with your studies while I check the notes."
    ]
   },
   {
    "q": "Catch up",
    "a": "To reach the same level or state as someone else",
    "ex": [
     "Example: I stayed up late to catch up on my reading assignments."
    ]
   },
   {
    "q": "Check out",
    "a": "To examine something, or to pay and leave a hotel",
    "ex": [
     "Example: You should check out that new magical bookstore downtown."
    ]
   },
   {
    "q": "Cheer up",
    "a": "To become or make someone become happier",
    "ex": [
     "Example: A hot cup of tea always helps to cheer up a gloomy day."
    ]
   },
   {
    "q": "Cut down",
    "a": "To reduce the size, amount, or consumption of something",
    "ex": [
     "Example: He needs to cut down on drinking too much coffee."
    ]
   },
   {
    "q": "Fill out",
    "a": "To complete a form or document by writing information",
    "ex": [
     "Example: Please fill out this registration card before entering the library."
    ]
   },
   {
    "q": "Find out",
    "a": "To discover or obtain information",
    "ex": [
     "Example: We need to find out who left the back door unlocked."
    ]
   },
   {
    "q": "Get along",
    "a": "To have a harmonious relationship with someone",
    "ex": [
     "Example: The new apprentices get along very well with each other."
    ]
   },
   {
    "q": "Get away",
    "a": "To escape or take a short vacation",
    "ex": [
     "Example: We are planning to get away to the mountains this weekend."
    ]
   },
   {
    "q": "Go on",
    "a": "To continue happening or to proceed",
    "ex": [
     "Example: What is going on in the hallway right now?"
    ]
   },
   {
    "q": "Hang on",
    "a": "To wait for a short moment",
    "ex": [
     "Example: Hang on a second while I grab my notebook."
    ]
   },
   {
    "q": "Keep on",
    "a": "To continue doing something persistently",
    "ex": [
     "Example: Keep on practicing and your handwriting will improve."
    ]
   },
   {
    "q": "Leave out",
    "a": "To omit or exclude someone or something",
    "ex": [
     "Example: Make sure not to leave out any important details in your report."
    ]
   },
   {
    "q": "Look after",
    "a": "To take care of or watch over someone/something",
    "ex": [
     "Example: Can you look after my plant while I am on vacation?"
    ]
   },
   {
    "q": "Look forward to",
    "a": "To await eagerly with excitement",
    "ex": [
     "Example: I look forward to reading the next volume of the story."
    ]
   },
   {
    "q": "Make up",
    "a": "To invent a story, or to reconcile after an argument",
    "ex": [
     "Example: Don't believe his excuse; he just made it up."
    ]
   },
   {
    "q": "Move on",
    "a": "To leave a place or start a new phase in life",
    "ex": [
     "Example: It's time to finish this topic and move on to the next chapter."
    ]
   },
   {
    "q": "Pass away",
    "a": "To die (a polite expression)",
    "ex": [
     "Example: His grandfather passed away peacefully last winter."
    ]
   },
   {
    "q": "Point out",
    "a": "To direct attention toward something specific",
    "ex": [
     "Example: The teacher was quick to point out the error in the calculation."
    ]
   },
   {
    "q": "Put off",
    "a": "To postpone or delay an event",
    "ex": [
     "Example: We had to put off the exam until next Tuesday."
    ]
   },
   {
    "q": "Run out",
    "a": "To use up a supply completely so that nothing remains",
    "ex": [
     "Example: We are about to run out of ink for the quills."
    ]
   },
   {
    "q": "Set up",
    "a": "To arrange, establish, or build something",
    "ex": [
     "Example: Let's set up the experiment table near the window."
    ]
   },
   {
    "q": "Show up",
    "a": "To arrive or appear at a gathering or place",
    "ex": [
     "Example: Only a few students showed up for the early lecture."
    ]
   },
   {
    "q": "Sign up",
    "a": "To officially register for a course, club, or event",
    "ex": [
     "Example: I want to sign up for the advanced alchemy workshop."
    ]
   },
   {
    "q": "Work out",
    "a": "To exercise physically or successfully solve a problem",
    "ex": [
     "Example: Things will work out fine if you stay calm and focused."
    ]
   }
  ]
 },
 {
  "id": "phrasal-pdf-dificil",
  "emoji": "🧩",
  "title": "Phrasal Verbs (Definições)",
  "level": "dificil",
  "description": "Nível Avançado (C1/C2)",
  "cards": [
   {
    "q": "Back down",
    "a": "To withdraw from a commitment, argument, or position",
    "ex": [
     "Example: Refusing to back down, she defended her theory until the end."
    ]
   },
   {
    "q": "Close down",
    "a": "To permanently stop operating a business or building",
    "ex": [
     "Example: The historic shop had to close down last year."
    ]
   },
   {
    "q": "Come across",
    "a": "To find or meet by chance",
    "ex": [
     "Example: I happened to come across my old sketchbook in the attic."
    ]
   },
   {
    "q": "Count on",
    "a": "To rely or depend upon someone",
    "ex": [
     "Example: You can always count on your friends for support."
    ]
   },
   {
    "q": "Deal with",
    "a": "To handle, cope with, or take action regarding a problem",
    "ex": [
     "Example: She knows how to deal with difficult administrative tasks."
    ]
   },
   {
    "q": "Drop out",
    "a": "To leave a school, course, or race prematurely",
    "ex": [
     "Example: He decided not to drop out of the magical academy despite the hardship."
    ]
   },
   {
    "q": "End up",
    "a": "To finally arrive at a situation or place after a series of events",
    "ex": [
     "Example: If you don't use a map, you will end up lost in the woods."
    ]
   },
   {
    "q": "Figure out",
    "a": "To understand or solve a problem through thinking",
    "ex": [
     "Example: It took me hours to figure out the complex rune puzzle."
    ]
   },
   {
    "q": "Knock out",
    "a": "To render someone unconscious or exhaust completely",
    "ex": [
     "Example: The heavy physical workout completely knocked him out."
    ]
   },
   {
    "q": "Put up with",
    "a": "To tolerate or endure unpleasant circumstances or behavior",
    "ex": [
     "Example: I cannot put up with excessive noise while studying."
    ]
   },
   {
    "q": "Stand out",
    "a": "To be easily noticeable or exceptional",
    "ex": [
     "Example: Her bright crimson cloak made her stand out in the crowd."
    ]
   }
  ]
 },
 {
  "id": "verbos-basico",
  "emoji": "🏃",
  "title": "Verbos Essenciais",
  "level": "basico",
  "description": "Nível Básico (A1/A2)",
  "cards": [
   {
    "q": "Accept",
    "a": "Aceitar"
   },
   {
    "q": "Add",
    "a": "Adicionar"
   },
   {
    "q": "Answer",
    "a": "Responder"
   },
   {
    "q": "Arrive",
    "a": "Chegar"
   },
   {
    "q": "Ask",
    "a": "Perguntar / Pedir"
   },
   {
    "q": "Begin",
    "a": "Começar"
   },
   {
    "q": "Believe",
    "a": "Acreditar"
   },
   {
    "q": "Bite",
    "a": "Morder"
   },
   {
    "q": "Break",
    "a": "Quebrar"
   },
   {
    "q": "Bring",
    "a": "Trazer"
   },
   {
    "q": "Build",
    "a": "Construir"
   },
   {
    "q": "Buy",
    "a": "Comprar"
   },
   {
    "q": "Call",
    "a": "Chamar / Ligar"
   },
   {
    "q": "Carry",
    "a": "Carregar"
   },
   {
    "q": "Catch",
    "a": "Pegar / Capturar"
   },
   {
    "q": "Change",
    "a": "Mudar"
   },
   {
    "q": "Clean",
    "a": "Limpar"
   },
   {
    "q": "Close",
    "a": "Fechar"
   },
   {
    "q": "Come",
    "a": "Vir"
   },
   {
    "q": "Cook",
    "a": "Cozinhar"
   },
   {
    "q": "Copy",
    "a": "Copiar"
   },
   {
    "q": "Cost",
    "a": "Custar"
   },
   {
    "q": "Count",
    "a": "Contar"
   },
   {
    "q": "Cry",
    "a": "Chorar"
   },
   {
    "q": "Cut",
    "a": "Cortar"
   },
   {
    "q": "Dance",
    "a": "Dançar"
   },
   {
    "q": "Decide",
    "a": "Decidir"
   },
   {
    "q": "Do",
    "a": "Fazer"
   },
   {
    "q": "Draw",
    "a": "Desenhar"
   },
   {
    "q": "Drink",
    "a": "Beber"
   },
   {
    "q": "Drive",
    "a": "Dirigir"
   },
   {
    "q": "Drop",
    "a": "Deixar cair / Derrubar"
   },
   {
    "q": "Dry",
    "a": "Secar"
   },
   {
    "q": "Eat",
    "a": "Comer"
   },
   {
    "q": "End",
    "a": "Terminar"
   },
   {
    "q": "Enter",
    "a": "Entrar"
   },
   {
    "q": "Fall",
    "a": "Cair"
   },
   {
    "q": "Feed",
    "a": "Alimentar"
   },
   {
    "q": "Feel",
    "a": "Sentir"
   },
   {
    "q": "Fight",
    "a": "Lutar"
   },
   {
    "q": "Fill",
    "a": "Preencher / Encher"
   },
   {
    "q": "Find",
    "a": "Encontrar"
   },
   {
    "q": "Finish",
    "a": "Terminar / Concluir"
   },
   {
    "q": "Fly",
    "a": "Voar"
   },
   {
    "q": "Forget",
    "a": "Esquecer"
   },
   {
    "q": "Make",
    "a": "Fazer"
   },
   {
    "q": "Move",
    "a": "Mover / Mudar-se"
   },
   {
    "q": "Play",
    "a": "Jogar / Brincar / Tocar"
   },
   {
    "q": "Put",
    "a": "Colocar"
   },
   {
    "q": "Read",
    "a": "Ler"
   },
   {
    "q": "Run",
    "a": "Correr"
   },
   {
    "q": "Say",
    "a": "Dizer"
   },
   {
    "q": "See",
    "a": "Ver"
   },
   {
    "q": "Sell",
    "a": "Vender"
   },
   {
    "q": "Send",
    "a": "Enviar"
   },
   {
    "q": "Show",
    "a": "Mostrar"
   },
   {
    "q": "Sing",
    "a": "Cantar"
   },
   {
    "q": "Sit",
    "a": "Sentar"
   },
   {
    "q": "Sleep",
    "a": "Dormir"
   },
   {
    "q": "Speak",
    "a": "Falar"
   },
   {
    "q": "Stand",
    "a": "Ficar de pé"
   },
   {
    "q": "Start",
    "a": "Começar"
   },
   {
    "q": "Stop",
    "a": "Parar"
   },
   {
    "q": "Study",
    "a": "Estudar"
   },
   {
    "q": "Swim",
    "a": "Nadar"
   },
   {
    "q": "Take",
    "a": "Pegar / Levar"
   },
   {
    "q": "Talk",
    "a": "Conversar"
   },
   {
    "q": "Teach",
    "a": "Ensinar"
   },
   {
    "q": "Tell",
    "a": "Dizer / Contar"
   },
   {
    "q": "Think",
    "a": "Pensar"
   },
   {
    "q": "Try",
    "a": "Tentar"
   },
   {
    "q": "Understand",
    "a": "Entender"
   },
   {
    "q": "Use",
    "a": "Usar"
   },
   {
    "q": "Wait",
    "a": "Esperar"
   },
   {
    "q": "Walk",
    "a": "Caminhar"
   },
   {
    "q": "Want",
    "a": "Querer"
   },
   {
    "q": "Watch",
    "a": "Assistir / Observar"
   },
   {
    "q": "Wear",
    "a": "Vestir / Usar"
   },
   {
    "q": "Work",
    "a": "Trabalhar"
   },
   {
    "q": "Write",
    "a": "Escrever"
   }
  ]
 },
 {
  "id": "verbos-intermediario",
  "emoji": "🏃",
  "title": "Verbos Essenciais",
  "level": "intermediario",
  "description": "Nível Intermediário (B1/B2)",
  "cards": [
   {
    "q": "Act",
    "a": "Agir"
   },
   {
    "q": "Admit",
    "a": "Admitir"
   },
   {
    "q": "Advise",
    "a": "Aconselhar"
   },
   {
    "q": "Agree",
    "a": "Concordar"
   },
   {
    "q": "Allow",
    "a": "Permitir"
   },
   {
    "q": "Apologize",
    "a": "Pedir desculpas"
   },
   {
    "q": "Appear",
    "a": "Aparecer"
   },
   {
    "q": "Apply",
    "a": "Aplicar / Candidatar-se"
   },
   {
    "q": "Argue",
    "a": "Discutir / Argumentar"
   },
   {
    "q": "Assist",
    "a": "Ajudar / Auxiliar"
   },
   {
    "q": "Attack",
    "a": "Atacar"
   },
   {
    "q": "Attempt",
    "a": "Tentar"
   },
   {
    "q": "Attend",
    "a": "Comparecer / Participar"
   },
   {
    "q": "Attract",
    "a": "Atrair"
   },
   {
    "q": "Avoid",
    "a": "Evitar"
   },
   {
    "q": "Bake",
    "a": "Assar (no forno)"
   },
   {
    "q": "Bathe",
    "a": "Tomar banho"
   },
   {
    "q": "Beg",
    "a": "Suplicar / Pedir"
   },
   {
    "q": "Behave",
    "a": "Comportar-se"
   },
   {
    "q": "Belong",
    "a": "Pertencer"
   },
   {
    "q": "Bend",
    "a": "Dobrar / Curvar"
   },
   {
    "q": "Blend",
    "a": "Misturar / Batê-lo (liquidificador)"
   },
   {
    "q": "Bless",
    "a": "Abençoar"
   },
   {
    "q": "Blink",
    "a": "Piscar"
   },
   {
    "q": "Blow",
    "a": "Soprar"
   },
   {
    "q": "Boil",
    "a": "Ferver"
   },
   {
    "q": "Borrow",
    "a": "Pegar emprestado"
   },
   {
    "q": "Bother",
    "a": "Incomodar"
   },
   {
    "q": "Bounce",
    "a": "Quicar"
   },
   {
    "q": "Breathe",
    "a": "Respirar"
   },
   {
    "q": "Brush",
    "a": "Escovar"
   },
   {
    "q": "Burn",
    "a": "Queimar"
   },
   {
    "q": "Calculate",
    "a": "Calcular"
   },
   {
    "q": "Camp",
    "a": "Acampar"
   },
   {
    "q": "Care",
    "a": "Importar-se / Cuidar"
   },
   {
    "q": "Cause",
    "a": "Causar"
   },
   {
    "q": "Celebrate",
    "a": "Celebrar"
   },
   {
    "q": "Chase",
    "a": "Perseguir"
   },
   {
    "q": "Chat",
    "a": "Conversar / Bater papo"
   },
   {
    "q": "Cheat",
    "a": "Trapacear"
   },
   {
    "q": "Check",
    "a": "Verificar"
   },
   {
    "q": "Cheer",
    "a": "Aclamar / Torcer"
   },
   {
    "q": "Chew",
    "a": "Mastigar"
   },
   {
    "q": "Choose",
    "a": "Escolher"
   },
   {
    "q": "Clean",
    "a": "Limpar (já na lista, mas contexto geral)"
   },
   {
    "q": "Climb",
    "a": "Escalada / Subir"
   },
   {
    "q": "Collect",
    "a": "Coletar"
   },
   {
    "q": "Comb",
    "a": "Pentear"
   },
   {
    "q": "Combine",
    "a": "Combinar"
   },
   {
    "q": "Command",
    "a": "Comandar"
   },
   {
    "q": "Compare",
    "a": "Comparar"
   },
   {
    "q": "Compete",
    "a": "Competir"
   },
   {
    "q": "Complain",
    "a": "Reclamar"
   },
   {
    "q": "Complete",
    "a": "Completar"
   },
   {
    "q": "Confirm",
    "a": "Confirmar"
   },
   {
    "q": "Connect",
    "a": "Conectar"
   },
   {
    "q": "Consider",
    "a": "Considerar"
   },
   {
    "q": "Consist",
    "a": "Consistir"
   },
   {
    "q": "Contain",
    "a": "Conter"
   },
   {
    "q": "Continue",
    "a": "Continuar"
   },
   {
    "q": "Control",
    "a": "Controlar"
   },
   {
    "q": "Correct",
    "a": "Corrigir"
   },
   {
    "q": "Cover",
    "a": "Cobrir"
   },
   {
    "q": "Crash",
    "a": "Bater / Colidir"
   },
   {
    "q": "Create",
    "a": "Criar"
   },
   {
    "q": "Cross",
    "a": "Atravessar"
   },
   {
    "q": "Cure",
    "a": "Curar"
   },
   {
    "q": "Dare",
    "a": "Ousar"
   },
   {
    "q": "Deal",
    "a": "Lidar / Negociar"
   },
   {
    "q": "Decorate",
    "a": "Decorar"
   },
   {
    "q": "Decrease",
    "a": "Diminuir"
   },
   {
    "q": "Defend",
    "a": "Defender"
   },
   {
    "q": "Delay",
    "a": "Atrasar"
   },
   {
    "q": "Deliver",
    "a": "Entregar"
   },
   {
    "q": "Demand",
    "a": "Exigir"
   },
   {
    "q": "Deny",
    "a": "Negar"
   },
   {
    "q": "Depend",
    "a": "Depender"
   },
   {
    "q": "Describe",
    "a": "Descrever"
   },
   {
    "q": "Design",
    "a": "Projetar / Desenhar"
   },
   {
    "q": "Destroy",
    "a": "Destruir"
   },
   {
    "q": "Discover",
    "a": "Descobrir"
   },
   {
    "q": "Discuss",
    "a": "Discutir"
   },
   {
    "q": "Display",
    "a": "Exibir"
   },
   {
    "q": "Distribute",
    "a": "Distribuir"
   },
   {
    "q": "Dive",
    "a": "Mergulhar"
   },
   {
    "q": "Divide",
    "a": "Dividir"
   },
   {
    "q": "Dream",
    "a": "Sonhar"
   },
   {
    "q": "Earn",
    "a": "Ganhar (salário/mérito)"
   },
   {
    "q": "Educate",
    "a": "Educar"
   },
   {
    "q": "Elect",
    "a": "Eleger"
   },
   {
    "q": "Embarrass",
    "a": "Envergonhar"
   },
   {
    "q": "Embrace",
    "a": "Abraçar"
   },
   {
    "q": "Emphasize",
    "a": "Enfatizar"
   },
   {
    "q": "Employ",
    "a": "Empregar"
   },
   {
    "q": "Enable",
    "a": "Permitir / Possibilitar"
   },
   {
    "q": "Encourage",
    "a": "Encorajar"
   },
   {
    "q": "Enjoy",
    "a": "Desfrutar / Curtir"
   },
   {
    "q": "Ensure",
    "a": "Garantir"
   },
   {
    "q": "Establish",
    "a": "Estabelecer"
   },
   {
    "q": "Estimate",
    "a": "Estimar"
   },
   {
    "q": "Evaluate",
    "a": "Avaliar"
   },
   {
    "q": "Examine",
    "a": "Examinar"
   },
   {
    "q": "Exchange",
    "a": "Trocar"
   },
   {
    "q": "Excite",
    "a": "Empolgar"
   },
   {
    "q": "Excuse",
    "a": "Desculpar"
   },
   {
    "q": "Execute",
    "a": "Executar"
   },
   {
    "q": "Exercise",
    "a": "Exercitar-se"
   },
   {
    "q": "Exhibit",
    "a": "Exibir"
   },
   {
    "q": "Expand",
    "a": "Expandir"
   },
   {
    "q": "Expect",
    "a": "Esperar (expectativa)"
   },
   {
    "q": "Explain",
    "a": "Explicar"
   },
   {
    "q": "Explore",
    "a": "Explorar"
   },
   {
    "q": "Express",
    "a": "Expressar"
   },
   {
    "q": "Extend",
    "a": "Estender"
   },
   {
    "q": "Face",
    "a": "Enfrentar"
   },
   {
    "q": "Fail",
    "a": "Fracassar / Falhar"
   },
   {
    "q": "Fasten",
    "a": "Apertar / Prender"
   },
   {
    "q": "Favor",
    "a": "Favorecer"
   },
   {
    "q": "Fear",
    "a": "Temer"
   },
   {
    "q": "Fish",
    "a": "Pescar"
   },
   {
    "q": "Fit",
    "a": "Servir (tamanho) / Ajustar"
   },
   {
    "q": "Fix",
    "a": "Consertar / Fixar"
   },
   {
    "q": "Flash",
    "a": "Brilhar / Piscar"
   },
   {
    "q": "Flee",
    "a": "Fugir"
   },
   {
    "q": "Float",
    "a": "Flutuar"
   },
   {
    "q": "Flow",
    "a": "Fluir"
   },
   {
    "q": "Focus",
    "a": "Focar"
   },
   {
    "q": "Fold",
    "a": "Dobrar"
   },
   {
    "q": "Follow",
    "a": "Seguir"
   },
   {
    "q": "Force",
    "a": "Forçar"
   },
   {
    "q": "Forgive",
    "a": "Perdoar"
   },
   {
    "q": "Form",
    "a": "Formar"
   },
   {
    "q": "Found",
    "a": "Fundar"
   },
   {
    "q": "Freeze",
    "a": "Congelar"
   }
  ]
 },
 {
  "id": "verbos-dificil",
  "emoji": "🏃",
  "title": "Verbos Essenciais",
  "level": "dificil",
  "description": "Nível Avançado (C1/C2)",
  "cards": [
   {
    "q": "Balance",
    "a": "Equilibrar (Contexto de gerenciamento/estabilidade)"
   },
   {
    "q": "Bate",
    "a": "Bater / Cozinhar levemente (Termo culinário/técnico específico)"
   },
   {
    "q": "Bowie",
    "a": "Curvar-se (Termo mais literário/arcaico para reverência)"
   },
   {
    "q": "Claim",
    "a": "Reivindicar / Afirmar (Linguagem formal/jurídica/argumentativa)"
   },
   {
    "q": "Clear",
    "a": "Desobstruir / Esclarecer (Sentidos abstratos e técnicos)"
   },
   {
    "q": "Commit",
    "a": "Cometer / Comprometer-se (Uso formal e idiomático)"
   },
   {
    "q": "Concentrate",
    "a": "Concentrar-se (Estado cognitivo específico)"
   },
   {
    "q": "Creep",
    "a": "Rastejar / Andar furtivamente (Termo descritivo/literário)"
   },
   {
    "q": "Define",
    "a": "Definir (Contexto conceitual/técnico)"
   },
   {
    "q": "Demonstrate",
    "a": "Demonstrar (Contexto acadêmico/científico)"
   },
   {
    "q": "Detect",
    "a": "Detectar (Contexto analítico/investigativo)"
   },
   {
    "q": "Determine",
    "a": "Determinar (Contexto formal/decisório)"
   },
   {
    "q": "Develop",
    "a": "Desenvolver (Processos de longo prazo, ex: software, projetos)"
   },
   {
    "q": "Die",
    "a": "Morrer (Grave/formal, embora comum, gramaticalmente e lexicalmente exige tato em contextos sensíveis)"
   },
   {
    "q": "Dig",
    "a": "Cavar (Ação específica de solo/arqueologia, fora do básico)"
   },
   {
    "q": "Direct",
    "a": "Dirigir / Direcionar (Gestão ou orientação técnica)"
   },
   {
    "q": "Disappear",
    "a": "Desaparecer (Fenômeno ou narrativa avançada)"
   },
   {
    "q": "Emerse",
    "a": "Emergir (Variante técnica/científica)"
   },
   {
    "q": "Exist",
    "a": "Existir (Filosófico/abstrato)"
   }
  ]
 },
 {
  "id": "animais-pdf-basico",
  "emoji": "🦁",
  "title": "Animais & Natureza",
  "level": "basico",
  "description": "Nível Básico (A1/A2)",
  "cards": [
   {
    "q": "Ant",
    "a": "Formiga"
   },
   {
    "q": "Bat",
    "a": "Morcego"
   },
   {
    "q": "Bear",
    "a": "Urso"
   },
   {
    "q": "Bee",
    "a": "Abelha"
   },
   {
    "q": "Bird",
    "a": "Pássaro / Ave"
   },
   {
    "q": "Butterfly",
    "a": "Borboleta"
   },
   {
    "q": "Camel",
    "a": "Camelo"
   },
   {
    "q": "Cat",
    "a": "Gato"
   },
   {
    "q": "Cattle",
    "a": "Gado"
   },
   {
    "q": "Chicken",
    "a": "Galinha / Frango"
   },
   {
    "q": "Cow",
    "a": "Vaca"
   },
   {
    "q": "Crocodile",
    "a": "Crocodilo"
   },
   {
    "q": "Deer",
    "a": "Cervo / Veado"
   },
   {
    "q": "Dog",
    "a": "Cachorro / Cão"
   },
   {
    "q": "Dolphin",
    "a": "Golfinho"
   },
   {
    "q": "Donkey",
    "a": "Burro / Jumento"
   },
   {
    "q": "Duck",
    "a": "Pato"
   },
   {
    "q": "Eagle",
    "a": "Águia"
   },
   {
    "q": "Elephant",
    "a": "Elefante"
   },
   {
    "q": "Fish",
    "a": "Peixe"
   },
   {
    "q": "Fly",
    "a": "Mosca"
   },
   {
    "q": "Fox",
    "a": "Raposa"
   },
   {
    "q": "Frog",
    "a": "Sapo"
   },
   {
    "q": "Giraffe",
    "a": "Girafa"
   },
   {
    "q": "Goat",
    "a": "Cabra / Bode"
   },
   {
    "q": "Goose",
    "a": "Ganso"
   },
   {
    "q": "Gorilla",
    "a": "Gorila"
   },
   {
    "q": "Horse",
    "a": "Cavalo"
   },
   {
    "q": "Jellyfish",
    "a": "Água-viva / Medusa"
   },
   {
    "q": "Kangaroo",
    "a": "Canguru"
   },
   {
    "q": "Lion",
    "a": "Leão"
   },
   {
    "q": "Lizard",
    "a": "Lagarto"
   },
   {
    "q": "Monkey",
    "a": "Macaco"
   },
   {
    "q": "Mosquito",
    "a": "Mosquito / Pernilongo"
   },
   {
    "q": "Mouse",
    "a": "Rato"
   },
   {
    "q": "Owl",
    "a": "Coruja"
   },
   {
    "q": "Pig",
    "a": "Porco"
   },
   {
    "q": "Pigeon",
    "a": "Pombo"
   },
   {
    "q": "Rabbit",
    "a": "Coelho"
   },
   {
    "q": "Rat",
    "a": "Rato"
   },
   {
    "q": "Shark",
    "a": "Tubarão"
   },
   {
    "q": "Sheep",
    "a": "Ovelha"
   },
   {
    "q": "Snake",
    "a": "Cobra / Serpente"
   },
   {
    "q": "Spider",
    "a": "Aranha"
   },
   {
    "q": "Tiger",
    "a": "Tigre"
   },
   {
    "q": "Turtle",
    "a": "Tartaruga (aquática)"
   },
   {
    "q": "Whale",
    "a": "Baleia"
   },
   {
    "q": "Wolf",
    "a": "Lobo"
   },
   {
    "q": "Zebra",
    "a": "Zebra"
   }
  ]
 },
 {
  "id": "animais-pdf-intermediario",
  "emoji": "🦁",
  "title": "Animais & Natureza",
  "level": "intermediario",
  "description": "Nível Intermediário (B1/B2)",
  "cards": [
   {
    "q": "Baboon",
    "a": "Babuíno"
   },
   {
    "q": "Beaver",
    "a": "Castor"
   },
   {
    "q": "Bison",
    "a": "Bisão"
   },
   {
    "q": "Boar",
    "a": "Javali"
   },
   {
    "q": "Buffalo",
    "a": "Búfalo"
   },
   {
    "q": "Caterpillar",
    "a": "Lagarta"
   },
   {
    "q": "Cheetah",
    "a": "Guepardo / Chita"
   },
   {
    "q": "Chimpanzee",
    "a": "Chimpanzé"
   },
   {
    "q": "Cobra",
    "a": "Cobra / Naja"
   },
   {
    "q": "Cockroach",
    "a": "Barata"
   },
   {
    "q": "Cougar",
    "a": "Puma / Onça-parda"
   },
   {
    "q": "Crab",
    "a": "Caranguejo"
   },
   {
    "q": "Dinosaur",
    "a": "Dinossauro"
   },
   {
    "q": "Dove",
    "a": "Pomba"
   },
   {
    "q": "Dragonfly",
    "a": "Libélula"
   },
   {
    "q": "Eel",
    "a": "Enguia"
   },
   {
    "q": "Falcon",
    "a": "Falcão"
   },
   {
    "q": "Flamingo",
    "a": "Flamingo"
   },
   {
    "q": "Flea",
    "a": "Pulga"
   },
   {
    "q": "Goldfish",
    "a": "Peixe-dourado"
   },
   {
    "q": "Grasshopper",
    "a": "Gafanhoto"
   },
   {
    "q": "Gull",
    "a": "Gaivota"
   },
   {
    "q": "Hamster",
    "a": "Hamster"
   },
   {
    "q": "Hare",
    "a": "Lebre"
   },
   {
    "q": "Hawk",
    "a": "Gavião"
   },
   {
    "q": "Hedgehog",
    "a": "Ouriço-cacheiro"
   },
   {
    "q": "Heron",
    "a": "Garça"
   },
   {
    "q": "Hippopotamus",
    "a": "Hipopótamo"
   },
   {
    "q": "Hyena",
    "a": "Hiena"
   },
   {
    "q": "Iguana",
    "a": "Iguana"
   },
   {
    "q": "Jaguar",
    "a": "Onça-pintada / Jaguar"
   },
   {
    "q": "Koala",
    "a": "Coala"
   },
   {
    "q": "Ladybug",
    "a": "Joaninha"
   },
   {
    "q": "Lamb",
    "a": "Cordeiro"
   },
   {
    "q": "Leopard",
    "a": "Leopardo"
   },
   {
    "q": "Llama",
    "a": "Lhama"
   },
   {
    "q": "Lobster",
    "a": "Lagosta"
   },
   {
    "q": "Macaw",
    "a": "Arara"
   },
   {
    "q": "Mule",
    "a": "Mula"
   },
   {
    "q": "Octopus",
    "a": "Polvo"
   },
   {
    "q": "Opossum",
    "a": "Gambá"
   },
   {
    "q": "Ostrich",
    "a": "Avestruz"
   },
   {
    "q": "Otter",
    "a": "Lontra"
   },
   {
    "q": "Ox",
    "a": "Boi"
   },
   {
    "q": "Panther",
    "a": "Pantera"
   },
   {
    "q": "Parrot",
    "a": "Papagaio"
   },
   {
    "q": "Peacock",
    "a": "Pavão"
   },
   {
    "q": "Pelican",
    "a": "Pelicano"
   },
   {
    "q": "Penguin",
    "a": "Pinguim"
   },
   {
    "q": "Pony",
    "a": "Pônei"
   },
   {
    "q": "Porcupine",
    "a": "Ouriço-cacheiro / Porco-espinho"
   },
   {
    "q": "Puma",
    "a": "Puma"
   },
   {
    "q": "Python",
    "a": "Piton / Jiboia"
   },
   {
    "q": "Quail",
    "a": "Codorna"
   },
   {
    "q": "Raccoon",
    "a": "Guaxinim"
   },
   {
    "q": "Rhinoceros",
    "a": "Rinoceronte"
   },
   {
    "q": "Salmon",
    "a": "Salmão"
   },
   {
    "q": "Sardine",
    "a": "Sardinha"
   },
   {
    "q": "Scorpion",
    "a": "Escorpião"
   },
   {
    "q": "Seahorse",
    "a": "Cavalo-marinho"
   },
   {
    "q": "Seal",
    "a": "Foca"
   },
   {
    "q": "Shrimp",
    "a": "Camarão"
   },
   {
    "q": "Skunk",
    "a": "Gambá / Skunk"
   },
   {
    "q": "Snail",
    "a": "Caracol"
   },
   {
    "q": "Squid",
    "a": "Lula"
   },
   {
    "q": "Squirrel",
    "a": "Esquilo"
   },
   {
    "q": "Starfish",
    "a": "Estrela-do-mar"
   },
   {
    "q": "Stingray",
    "a": "Arraia"
   },
   {
    "q": "Stork",
    "a": "Cegonha"
   },
   {
    "q": "Swan",
    "a": "Cisne"
   },
   {
    "q": "Termite",
    "a": "Cupim"
   },
   {
    "q": "Toad",
    "a": "Sapo"
   },
   {
    "q": "Tortoise",
    "a": "Tartaruga terrestre"
   },
   {
    "q": "Trout",
    "a": "Truta"
   },
   {
    "q": "Turkey",
    "a": "Peru"
   },
   {
    "q": "Vulture",
    "a": "Urubu / Abutre"
   },
   {
    "q": "Walrus",
    "a": "Morsa"
   },
   {
    "q": "Wasp",
    "a": "Vespa"
   },
   {
    "q": "Woodpecker",
    "a": "Pica-pau"
   },
   {
    "q": "Worm",
    "a": "Minhoca / Verme"
   }
  ]
 },
 {
  "id": "animais-pdf-dificil",
  "emoji": "🦁",
  "title": "Animais & Natureza",
  "level": "dificil",
  "description": "Nível Avançado (C1/C2)",
  "cards": [
   {
    "q": "Ape",
    "a": "Primata / Símio"
   },
   {
    "q": "Clam",
    "a": "Concha / Amêijoa"
   },
   {
    "q": "Crane",
    "a": "Guindaste / Grou (ave)"
   },
   {
    "q": "Elk",
    "a": "Alce americano"
   },
   {
    "q": "Emu",
    "a": "Emu"
   },
   {
    "q": "Ferret",
    "a": "Furão"
   },
   {
    "q": "Gazelle",
    "a": "Gazela"
   },
   {
    "q": "Gecko",
    "a": "Lagartixa / Geco"
   },
   {
    "q": "Gerbil",
    "a": "Gerbo (roedor)"
   },
   {
    "q": "Grouse",
    "a": "Urogallo / Tetrao"
   },
   {
    "q": "Guanaco",
    "a": "Guanaco"
   },
   {
    "q": "Herring",
    "a": "Arenque"
   },
   {
    "q": "Hornet",
    "a": "Vespa gigante / Zangão"
   },
   {
    "q": "Hound",
    "a": "Cão de caça"
   },
   {
    "q": "Impala",
    "a": "Impala"
   },
   {
    "q": "Jackal",
    "a": "Chacal"
   },
   {
    "q": "Locust",
    "a": "Gafanhoto migratório"
   },
   {
    "q": "Louse",
    "a": "Piolho"
   },
   {
    "q": "Mallard",
    "a": "Pato-selvagem"
   },
   {
    "q": "Mammoth",
    "a": "Mamute"
   },
   {
    "q": "Manatee",
    "a": "Peixe-boi"
   },
   {
    "q": "Mandrill",
    "a": "Mandril"
   },
   {
    "q": "Mantis",
    "a": "Louva-a-deus"
   },
   {
    "q": "Marmot",
    "a": "Marmota"
   },
   {
    "q": "Marsupial",
    "a": "Marsupial"
   },
   {
    "q": "Meerkat",
    "a": "Suricato"
   },
   {
    "q": "Mink",
    "a": "Vison"
   },
   {
    "q": "Mole",
    "a": "Toupeira"
   },
   {
    "q": "Mongoose",
    "a": "Mangusto"
   },
   {
    "q": "Moose",
    "a": "Alce"
   },
   {
    "q": "Muskrat",
    "a": "Rato-almiscarado"
   },
   {
    "q": "Mustang",
    "a": "Cavalo mustang"
   },
   {
    "q": "Myna",
    "a": "Mainá (ave)"
   },
   {
    "q": "Narwhal",
    "a": "Narval"
   },
   {
    "q": "Newt",
    "a": "Tritão"
   },
   {
    "q": "Nightingale",
    "a": "Rouxinol"
   },
   {
    "q": "Oyster",
    "a": "Ostra"
   },
   {
    "q": "Partridge",
    "a": "Perdiz"
   },
   {
    "q": "Pheasant",
    "a": "Faisão"
   },
   {
    "q": "Pike",
    "a": "Lúcio (peixe)"
   },
   {
    "q": "Porpoise",
    "a": "Boto / Marsopa"
   },
   {
    "q": "Pronghorn",
    "a": "Antilocapra"
   },
   {
    "q": "Quelea",
    "a": "Quelea (ave)"
   },
   {
    "q": "Quokka",
    "a": "Quokka"
   },
   {
    "q": "Ram",
    "a": "Carneiro"
   },
   {
    "q": "Raven",
    "a": "Corvo (Sinônimo mais literário/específico)"
   },
   {
    "q": "Reindeer",
    "a": "Renas"
   },
   {
    "q": "Salamander",
    "a": "Salamandra"
   },
   {
    "q": "Viper",
    "a": "Víbora"
   },
   {
    "q": "Weasel",
    "a": "Doninha"
   },
   {
    "q": "Wombat",
    "a": "Wombat"
   },
   {
    "q": "Yak",
    "a": "Iac / Boi-almíscar"
   }
  ]
 },
 {
  "id": "roupas-basico",
  "emoji": "👕",
  "title": "Roupas & Acessórios",
  "level": "basico",
  "description": "Nível Básico (A1/A2)",
  "cards": [
   {
    "q": "Belt",
    "a": "Cinto"
   },
   {
    "q": "Blouse",
    "a": "Blusa"
   },
   {
    "q": "Boots",
    "a": "Botas"
   },
   {
    "q": "Cap",
    "a": "Boné"
   },
   {
    "q": "Coat",
    "a": "Casaco / Sobretudo"
   },
   {
    "q": "Dress",
    "a": "Vestido"
   },
   {
    "q": "Gloves",
    "a": "Luvas"
   },
   {
    "q": "Hat",
    "a": "Chapéu"
   },
   {
    "q": "Jacket",
    "a": "Jaqueta"
   },
   {
    "q": "Jeans",
    "a": "Calça jeans"
   },
   {
    "q": "Pants / Trousers",
    "a": "Calças"
   },
   {
    "q": "Pyjamas",
    "a": "Pijama"
   },
   {
    "q": "Scarf",
    "a": "Cachecol / Lenço"
   },
   {
    "q": "Shirt",
    "a": "Camisa (social)"
   },
   {
    "q": "Shoes",
    "a": "Sapatos"
   },
   {
    "q": "Shorts",
    "a": "Bermudas / Shorts"
   },
   {
    "q": "Skirt",
    "a": "Saia"
   },
   {
    "q": "Socks",
    "a": "Meias"
   },
   {
    "q": "Suit",
    "a": "Terno"
   },
   {
    "q": "Sweater",
    "a": "Blusa de lã / Suéter"
   },
   {
    "q": "T-shirt",
    "a": "Camiseta"
   },
   {
    "q": "Underwear",
    "a": "Roupa íntima"
   }
  ]
 },
 {
  "id": "roupas-intermediario",
  "emoji": "👕",
  "title": "Roupas & Acessórios",
  "level": "intermediario",
  "description": "Nível Intermediário (B1/B2)",
  "cards": [
   {
    "q": "Apron",
    "a": "Avental"
   },
   {
    "q": "Bathrobe",
    "a": "Roupão de banho"
   },
   {
    "q": "Bikini",
    "a": "Biquíni"
   },
   {
    "q": "Blazer",
    "a": "Blazer"
   },
   {
    "q": "Cardigan",
    "a": "Cardigã"
   },
   {
    "q": "Earmuffs",
    "a": "Protetores de ouvido (para o frio)"
   },
   {
    "q": "Flip-flops",
    "a": "Chinelos de dedo"
   },
   {
    "q": "High heels",
    "a": "Sapatos de salto alto"
   },
   {
    "q": "Hoodie",
    "a": "Moletom com capuz"
   },
   {
    "q": "Leggings",
    "a": "Calça legging"
   },
   {
    "q": "Mittens",
    "a": "Luvas de mittens (sem separação para os dedos)"
   },
   {
    "q": "Overalls",
    "a": "Jardineira / Macacão de trabalho"
   },
   {
    "q": "Raincoat",
    "a": "Capa de chuva"
   },
   {
    "q": "Sandals",
    "a": "Sandálias"
   },
   {
    "q": "Slippers",
    "a": "Pantufas"
   },
   {
    "q": "Sneakers",
    "a": "Tênis (esportivo/casual)"
   },
   {
    "q": "Swimsuits",
    "a": "Roupa de banho (geral)"
   },
   {
    "q": "Tie",
    "a": "Gravata"
   },
   {
    "q": "Tracksuit",
    "a": "Agasalho / Roupa de treino"
   },
   {
    "q": "Vest",
    "a": "Colete"
   }
  ]
 },
 {
  "id": "roupas-dificil",
  "emoji": "👕",
  "title": "Roupas & Acessórios",
  "level": "dificil",
  "description": "Nível Avançado (C1/C2)",
  "cards": [
   {
    "q": "Bathing suit",
    "a": "Maiô"
   },
   {
    "q": "Boxers",
    "a": "Cueca boxer"
   },
   {
    "q": "Briefs",
    "a": "Cueca slip"
   },
   {
    "q": "Camisole",
    "a": "Camisola leve / Regata de alça fina"
   },
   {
    "q": "Cloak",
    "a": "Capa (vestimenta longa histórica/fantasia)"
   },
   {
    "q": "Corset",
    "a": "espartilho"
   },
   {
    "q": "Cummerbund",
    "a": "Faixa de smoking"
   },
   {
    "q": "Dinner jacket",
    "a": "Paletó de smoking"
   },
   {
    "q": "Dungarees",
    "a": "Calça/macacão jeans de sarja"
   },
   {
    "q": "Gown",
    "a": "Vestido longo de festa / Vestido de gala"
   },
   {
    "q": "Kimono",
    "a": "Quimono"
   },
   {
    "q": "Pantyhose",
    "a": "Meia-calça"
   },
   {
    "q": "Parka",
    "a": "Parka (casaco forrado para o frio extremo)"
   },
   {
    "q": "Petticoat",
    "a": "Anágua / Saiote"
   },
   {
    "q": "Poncho",
    "a": "Poncho"
   },
   {
    "q": "Sarong",
    "a": "Saron / canga"
   },
   {
    "q": "Shawl",
    "a": "Xale"
   },
   {
    "q": "Stilettos",
    "a": "Sapatos de salto agulha"
   },
   {
    "q": "Suspenders",
    "a": "Suspensórios"
   },
   {
    "q": "Trench coat",
    "a": "Trench-coat (casaco impermeável clássico)"
   },
   {
    "q": "Turtleneck",
    "a": "Blusa de gola alta / Gola rolê"
   }
  ]
 },
 {
  "id": "profissoes-basico",
  "emoji": "👩‍⚕️",
  "title": "Profissões",
  "level": "basico",
  "description": "Nível Básico (A1/A2)",
  "cards": [
   {
    "q": "Actor / Actress",
    "a": "Ator / Atriz"
   },
   {
    "q": "Architect",
    "a": "Arquiteto"
   },
   {
    "q": "Baker",
    "a": "Padeiro"
   },
   {
    "q": "Chef / Cook",
    "a": "Chef / Cozinheiro"
   },
   {
    "q": "Dentist",
    "a": "Dentista"
   },
   {
    "q": "Doctor",
    "a": "Médico"
   },
   {
    "q": "Driver",
    "a": "Motorista"
   },
   {
    "q": "Engineer",
    "a": "Engenheiro"
   },
   {
    "q": "Farmer",
    "a": "Agricultor / Fazendeiro"
   },
   {
    "q": "Firefighter",
    "a": "Bombeiro"
   },
   {
    "q": "Hairdresser",
    "a": "Cabeleireiro"
   },
   {
    "q": "Journalist",
    "a": "Jornalista"
   },
   {
    "q": "Lawyer",
    "a": "Advogado"
   },
   {
    "q": "Mechanic",
    "a": "Mecânico"
   },
   {
    "q": "Nurse",
    "a": "Enfermeiro"
   },
   {
    "q": "Painter",
    "a": "Pintor"
   },
   {
    "q": "Pilot",
    "a": "Piloto"
   },
   {
    "q": "Police officer",
    "a": "policial"
   },
   {
    "q": "Secretary",
    "a": "Secretário"
   },
   {
    "q": "Singer",
    "a": "Cantor"
   },
   {
    "q": "Student",
    "a": "Estudante"
   },
   {
    "q": "Teacher / Professor",
    "a": "Professor"
   },
   {
    "q": "Waiter / Waitress",
    "a": "Garçom / Garçonete"
   }
  ]
 },
 {
  "id": "profissoes-intermediario",
  "emoji": "👩‍⚕️",
  "title": "Profissões",
  "level": "intermediario",
  "description": "Nível Intermediário (B1/B2)",
  "cards": [
   {
    "q": "Accountant",
    "a": "Contador"
   },
   {
    "q": "Barista",
    "a": "Barista"
   },
   {
    "q": "Carpenter",
    "a": "Carpinteiro"
   },
   {
    "q": "Electrician",
    "a": "Eletricista"
   },
   {
    "q": "Florist",
    "a": "Florista"
   },
   {
    "q": "Graphic designer",
    "a": "Designer gráfico"
   },
   {
    "q": "Lifeguard",
    "a": "Salva-vidas"
   },
   {
    "q": "Librarian",
    "a": "Bibliotecário"
   },
   {
    "q": "Manager",
    "a": "Gerente"
   },
   {
    "q": "Musician",
    "a": "Músico"
   },
   {
    "q": "Pharmacist",
    "a": "Farmacêutico"
   },
   {
    "q": "Photographer",
    "a": "Fotógrafo"
   },
   {
    "q": "Plumber",
    "a": "Encanador"
   },
   {
    "q": "Receptionist",
    "a": "Recepcionista"
   },
   {
    "q": "Scientist",
    "a": "Cientista"
   },
   {
    "q": "Software developer",
    "a": "Desenvolvedor de software"
   },
   {
    "q": "Tailor",
    "a": "Alfaiate"
   },
   {
    "q": "Translator",
    "a": "Tradutor"
   },
   {
    "q": "Veterinarian",
    "a": "Veterinário"
   }
  ]
 },
 {
  "id": "profissoes-dificil",
  "emoji": "👩‍⚕️",
  "title": "Profissões",
  "level": "dificil",
  "description": "Nível Avançado (C1/C2)",
  "cards": [
   {
    "q": "Actuary",
    "a": "Atuário (especialista em riscos financeiros)"
   },
   {
    "q": "Archaeologist",
    "a": "Arqueólogo"
   },
   {
    "q": "Astrophysicist",
    "a": "Astrofísico"
   },
   {
    "q": "Biochemist",
    "a": "Bioquímico"
   },
   {
    "q": "Cartographer",
    "a": "Cartógrafo"
   },
   {
    "q": "Chiropractor",
    "a": "Quiropraxista"
   },
   {
    "q": "Conservator",
    "a": "Conservador (de museu/arte)"
   },
   {
    "q": "Curator",
    "a": "Curador"
   },
   {
    "q": "Economist",
    "a": "Economista"
   },
   {
    "q": "Epidemiologist",
    "a": "Epidemiologista"
   },
   {
    "q": "Geologist",
    "a": "Geólogo"
   },
   {
    "q": "Metallurgist",
    "a": "Metalurgista"
   },
   {
    "q": "Meteorologist",
    "a": "Meteorologista"
   },
   {
    "q": "Notary",
    "a": "Tabelião / Notário"
   },
   {
    "q": "Pathologist",
    "a": "Patologista"
   },
   {
    "q": "Pharmacologist",
    "a": "Farmacologista"
   },
   {
    "q": "Radiologist",
    "a": "Radiologista"
   },
   {
    "q": "Statistician",
    "a": "Estatístico"
   },
   {
    "q": "Surgeon",
    "a": "Cirurgião"
   },
   {
    "q": "Urban planner",
    "a": "Urbanista"
   }
  ]
 },
 {
  "id": "adjetivos-basico",
  "emoji": "✨",
  "title": "Adjetivos",
  "level": "basico",
  "description": "Nível Básico (A1/A2)",
  "cards": [
   {
    "q": "Bad",
    "a": "Ruim"
   },
   {
    "q": "Big",
    "a": "Grande"
   },
   {
    "q": "Black",
    "a": "Preto"
   },
   {
    "q": "Blue",
    "a": "Azul"
   },
   {
    "q": "Cold",
    "a": "Frio"
   },
   {
    "q": "Easy",
    "a": "Fácil"
   },
   {
    "q": "Fast",
    "a": "Rápido"
   },
   {
    "q": "Fat",
    "a": "Gordo"
   },
   {
    "q": "Good",
    "a": "Bom"
   },
   {
    "q": "Green",
    "a": "Verde"
   },
   {
    "q": "Happy",
    "a": "Feliz"
   },
   {
    "q": "Hot",
    "a": "Quente"
   },
   {
    "q": "New",
    "a": "Novo"
   },
   {
    "q": "Old",
    "a": "Velho / Antigo"
   },
   {
    "q": "Red",
    "a": "Vermelho"
   },
   {
    "q": "Sad",
    "a": "Triste"
   },
   {
    "q": "Short",
    "a": "Curto / Baixo"
   },
   {
    "q": "Small",
    "a": "Pequeno"
   },
   {
    "q": "Tall",
    "a": "Alto"
   },
   {
    "q": "Warm",
    "a": "Morno / Acolhedor"
   },
   {
    "q": "White",
    "a": "Branco"
   },
   {
    "q": "Young",
    "a": "Jovem"
   }
  ]
 },
 {
  "id": "adjetivos-intermediario",
  "emoji": "✨",
  "title": "Adjetivos",
  "level": "intermediario",
  "description": "Nível Intermediário (B1/B2)",
  "cards": [
   {
    "q": "Angry",
    "a": "Bravo / Irritado"
   },
   {
    "q": "Bored",
    "a": "Entediado"
   },
   {
    "q": "Boring",
    "a": "Chato / Entediante"
   },
   {
    "q": "Bright",
    "a": "Brilhante / Inteligente"
   },
   {
    "q": "Busy",
    "a": "Ocupado"
   },
   {
    "q": "Careful",
    "a": "Cuidadoso"
   },
   {
    "q": "Cheap",
    "a": "Barato"
   },
   {
    "q": "Clean",
    "a": "Limpo"
   },
   {
    "q": "Clever",
    "a": "Esperto / Inteligente"
   },
   {
    "q": "Comfortable",
    "a": "Confortável"
   },
   {
    "q": "Dangerous",
    "a": "Perigoso"
   },
   {
    "q": "Dark",
    "a": "Escuro"
   },
   {
    "q": "Difficult",
    "a": "Difícil"
   },
   {
    "q": "Dirty",
    "a": "Sujo"
   },
   {
    "q": "Dry",
    "a": "Seco"
   },
   {
    "q": "Early",
    "a": "Cedo"
   },
   {
    "q": "Excited",
    "a": "Empolgado"
   },
   {
    "q": "Expensive",
    "a": "Caro"
   },
   {
    "q": "Famous",
    "a": "Famoso"
   },
   {
    "q": "Friendly",
    "a": "Amigável"
   },
   {
    "q": "Funny",
    "a": "Engraçado"
   },
   {
    "q": "Generous",
    "a": "Generoso"
   },
   {
    "q": "Gentle",
    "a": "Gentil / Suave"
   },
   {
    "q": "Hardworking",
    "a": "Trabalhador / Esforçado"
   },
   {
    "q": "Heavy",
    "a": "Pesado"
   },
   {
    "q": "Helpful",
    "a": "Útil / Prestativo"
   },
   {
    "q": "Honest",
    "a": "Honesto"
   },
   {
    "q": "Hungry",
    "a": "Com fome"
   },
   {
    "q": "Kind",
    "a": "Bondoso / Gentil"
   },
   {
    "q": "Lazy",
    "a": "Preguiçoso"
   },
   {
    "q": "Loud",
    "a": "Barulhento"
   },
   {
    "q": "Lucky",
    "a": "Sorte / Sortudo"
   },
   {
    "q": "Modern",
    "a": "Moderno"
   },
   {
    "q": "Narrow",
    "a": "Estreito"
   },
   {
    "q": "Nervous",
    "a": "Nervoso"
   },
   {
    "q": "Noisy",
    "a": "Barulhento"
   },
   {
    "q": "Old-fashioned",
    "a": "Antiquado"
   },
   {
    "q": "Patient",
    "a": "Paciente"
   },
   {
    "q": "Poor",
    "a": "Pobre"
   },
   {
    "q": "Popular",
    "a": "Popular"
   },
   {
    "q": "Quiet",
    "a": "Quieto / Silencioso"
   },
   {
    "q": "Rich",
    "a": "Rico"
   },
   {
    "q": "Rude",
    "a": "Educado / Grosso"
   },
   {
    "q": "Safe",
    "a": "Seguro"
   },
   {
    "q": "Serious",
    "a": "Sério"
   },
   {
    "q": "Sick",
    "a": "Doente"
   },
   {
    "q": "Slow",
    "a": "Lento"
   },
   {
    "q": "Soft",
    "a": "Macio / Suave"
   },
   {
    "q": "Strong",
    "a": "Forte"
   },
   {
    "q": "Stupid",
    "a": "Estúpido / Bobo"
   },
   {
    "q": "Sweet",
    "a": "Doce"
   },
   {
    "q": "Tired",
    "a": "Cansado"
   },
   {
    "q": "Ugly",
    "a": "Feio"
   },
   {
    "q": "Useful",
    "a": "Útil"
   },
   {
    "q": "Weak",
    "a": "Fraco"
   },
   {
    "q": "Wet",
    "a": "Molhado"
   },
   {
    "q": "Wide",
    "a": "Largo"
   }
  ]
 },
 {
  "id": "adjetivos-dificil",
  "emoji": "✨",
  "title": "Adjetivos",
  "level": "dificil",
  "description": "Nível Avançado (C1/C2)",
  "cards": [
   {
    "q": "Ambiguous",
    "a": "Ambíguo"
   },
   {
    "q": "Apparent",
    "a": "Aparente"
   },
   {
    "q": "Arbitrary",
    "a": "Arbitrário"
   },
   {
    "q": "Beneficial",
    "a": "Benéfico"
   },
   {
    "q": "Comprehensive",
    "a": "Abrangente / Completo"
   },
   {
    "q": "Conspicuous",
    "a": "Conspícuo / Chamativo"
   },
   {
    "q": "Controversial",
    "a": "Controverso"
   },
   {
    "q": "Cramped",
    "a": "Apertado / Espremido"
   },
   {
    "q": "Cunning",
    "a": "Astuto / Esperto (com malícia)"
   },
   {
    "q": "Deliberate",
    "a": "Deliberado / Intencional"
   },
   {
    "q": "Detrimental",
    "a": "Prejudicial"
   },
   {
    "q": "Diligent",
    "a": "Diligent / Esforçado e cuidadoso"
   },
   {
    "q": "Dubious",
    "a": "Duvidoso / Suspeito"
   },
   {
    "q": "Eloquent",
    "a": "Eloquente"
   },
   {
    "q": "Empathetic",
    "a": "Empático"
   },
   {
    "q": "Ephemeral",
    "a": "Efêmero / Passageiro"
   },
   {
    "q": "Exquisite",
    "a": "Exquisito / Requintado"
   },
   {
    "q": "Feasible",
    "a": "Viável / Possível"
   },
   {
    "q": "Fierce",
    "a": "Feroz / Intenso"
   },
   {
    "q": "Fragile",
    "a": "Frágil"
   },
   {
    "q": "Gargantuan",
    "a": "Gargantuesco / Enorme"
   },
   {
    "q": "Impartial",
    "a": "Imparcial"
   },
   {
    "q": "Inevitável",
    "a": "Inevitable (Inevitável)"
   },
   {
    "q": "Innovative",
    "a": "Inovador"
   },
   {
    "q": "Meticulous",
    "a": "Meticuloso / Detalhista"
   },
   {
    "q": "Nostalgic",
    "a": "Nostálgico"
   },
   {
    "q": "Obligatory",
    "a": "Obrigatório"
   },
   {
    "q": "Obsolete",
    "a": "Obsoleto"
   },
   {
    "q": "Ominous",
    "a": "Sinistro / Ameaçador"
   },
   {
    "q": "Perplexing",
    "a": "Perplexo / Confuso"
   },
   {
    "q": "Plausible",
    "a": "Plausível / Provável"
   },
   {
    "q": "Pragmatic",
    "a": "Pragmático"
   },
   {
    "q": "Prevalent",
    "a": "Prevalente / Comum"
   },
   {
    "q": "Resilient",
    "a": "Resiliente"
   },
   {
    "q": "Sceptical",
    "a": "Cético"
   },
   {
    "q": "Spontaneous",
    "a": "Espontâneo"
   },
   {
    "q": "Subtle",
    "a": "Sutil"
   },
   {
    "q": "Tedious",
    "a": "Tedioso / Enfadonho"
   },
   {
    "q": "Transparent",
    "a": "Transparente"
   },
   {
    "q": "Ubiquitous",
    "a": "Onipresente / Ubíquo"
   },
   {
    "q": "Vulnerable",
    "a": "Vulnerável"
   }
  ]
 },
 {
  "id": "superlativos-basico",
  "emoji": "🏆",
  "title": "Superlativos",
  "level": "basico",
  "description": "Nível Básico (A1/A2)",
  "cards": [
   {
    "q": "The biggest",
    "a": "O maior"
   },
   {
    "q": "The best",
    "a": "O melhor"
   },
   {
    "q": "The coldest",
    "a": "O mais frio"
   },
   {
    "q": "The easiest",
    "a": "O mais fácil"
   },
   {
    "q": "The fastest",
    "a": "O mais rápido"
   },
   {
    "q": "The fattest",
    "a": "O mais gordo"
   },
   {
    "q": "The fewest",
    "a": "O menor número (para contáveis)"
   },
   {
    "q": "The first",
    "a": "O primeiro (ordinal com sentido superlativo)"
   },
   {
    "q": "The funniest",
    "a": "O mais engraçado"
   },
   {
    "q": "The good (Irregular) -> The best",
    "a": "O melhor"
   },
   {
    "q": "The happiest",
    "a": "O mais feliz"
   },
   {
    "q": "The hottest",
    "a": "O mais quente"
   },
   {
    "q": "The last",
    "a": "O último"
   },
   {
    "q": "The least",
    "a": "O menos (oposto de mais)"
   },
   {
    "q": "The longest",
    "a": "O mais longo / comprido"
   },
   {
    "q": "The lowest",
    "a": "O mais baixo / inferior"
   },
   {
    "q": "The newest",
    "a": "O mais novo"
   },
   {
    "q": "The oldest",
    "a": "O mais velho / antigo"
   },
   {
    "q": "The poorest",
    "a": "O mais pobre"
   },
   {
    "q": "The richest",
    "a": "O mais rico"
   },
   {
    "q": "The saddest",
    "a": "O mais triste"
   },
   {
    "q": "The shortest",
    "a": "O mais curto / baixo"
   },
   {
    "q": "The smallest",
    "a": "O menor"
   },
   {
    "q": "The tallest",
    "a": "O mais alto (pessoas)"
   },
   {
    "q": "The worst",
    "a": "O pior (irregular de bad)"
   },
   {
    "q": "The youngest",
    "a": "O mais jovem"
   }
  ]
 },
 {
  "id": "superlativos-intermediario",
  "emoji": "🏆",
  "title": "Superlativos",
  "level": "intermediario",
  "description": "Nível Intermediário (B1/B2)",
  "cards": [
   {
    "q": "The most beautiful",
    "a": "O mais bonito"
   },
   {
    "q": "The most boring",
    "a": "O mais chato / entediante"
   },
   {
    "q": "The most careful",
    "a": "O mais cuidadoso"
   },
   {
    "q": "The most comfortable",
    "a": "O mais confortável"
   },
   {
    "q": "The most crowded",
    "a": "O mais lotado"
   },
   {
    "q": "The most dangerous",
    "a": "O mais perigoso"
   },
   {
    "q": "The most difficult",
    "a": "O mais difícil"
   },
   {
    "q": "The most exciting",
    "a": "O mais empolgante"
   },
   {
    "q": "The most expensive",
    "a": "O mais caro"
   },
   {
    "q": "The most famous",
    "a": "O mais famoso"
   },
   {
    "q": "The most helpful",
    "a": "O mais prestativo / útil"
   },
   {
    "q": "The most important",
    "a": "O mais importante"
   },
   {
    "q": "The most interesting",
    "a": "O mais interessante"
   },
   {
    "q": "The most modern",
    "a": "O mais moderno"
   },
   {
    "q": "The most popular",
    "a": "O mais popular"
   },
   {
    "q": "The most powerful",
    "a": "O mais poderoso"
   },
   {
    "q": "The most profitable",
    "a": "O mais lucrativo"
   },
   {
    "q": "The most successful",
    "a": "O mais bem-sucedido"
   },
   {
    "q": "The most surprising",
    "a": "O mais surpreendente"
   },
   {
    "q": "The most useful",
    "a": "O mais útil"
   }
  ]
 },
 {
  "id": "superlativos-dificil",
  "emoji": "🏆",
  "title": "Superlativos",
  "level": "dificil",
  "description": "Nível Avançado (C1/C2)",
  "cards": [
   {
    "q": "The absolute best",
    "a": "O absolutamente melhor (ênfase superlativa)"
   },
   {
    "q": "The most ambiguous",
    "a": "O mais ambíguo"
   },
   {
    "q": "The most comprehensive",
    "a": "O mais abrangente / completo"
   },
   {
    "q": "The most conspicuous",
    "a": "O mais chamativo / conspícuo"
   },
   {
    "q": "The most controversial",
    "a": "O mais controverso"
   },
   {
    "q": "The most detrimental",
    "a": "O mais prejudicial"
   },
   {
    "q": "The most eloquent",
    "a": "O mais eloquente"
   },
   {
    "q": "The most ephemeral",
    "a": "O mais efêmero / passageiro"
   },
   {
    "q": "The most exquisite",
    "a": "O mais requintado / exótico"
   },
   {
    "q": "The most feasible",
    "a": "O mais viável"
   },
   {
    "q": "The most meticulous",
    "a": "O mais meticuloso / detalhista"
   },
   {
    "q": "The most ominous",
    "a": "O mais sinistro / ameaçador"
   },
   {
    "q": "The most perplexing",
    "a": "O mais intrigante / perplexo"
   },
   {
    "q": "The most plausible",
    "a": "O mais plausível"
   },
   {
    "q": "The most prevalent",
    "a": "O mais prevalente / comum"
   },
   {
    "q": "The most resilient",
    "a": "O mais resiliente"
   },
   {
    "q": "The most sophisticated",
    "a": "O mais sofisticado"
   },
   {
    "q": "The most stringent",
    "a": "O mais rigoroso / estrito"
   },
   {
    "q": "The most subtle",
    "a": "O mais sutil"
   },
   {
    "q": "The most ubiquitous",
    "a": "O mais onipresente / ubíquo"
   },
   {
    "q": "The ultimate",
    "a": "O supremo / o ápice (superlativo conceitual)"
   }
  ]
 },
 {
  "id": "comparativos-basico",
  "emoji": "⚖️",
  "title": "Comparativos",
  "level": "basico",
  "description": "Nível Básico (A1/A2)",
  "cards": [
   {
    "q": "Bigger than",
    "a": "Maior que"
   },
   {
    "q": "Better than",
    "a": "Melhor que (irregular de good)"
   },
   {
    "q": "Colder than",
    "a": "Mais frio que"
   },
   {
    "q": "Easier than",
    "a": "Mais fácil que"
   },
   {
    "q": "Faster than",
    "a": "Mais rápido que"
   },
   {
    "q": "Fatter than",
    "a": "Mais gordo que"
   },
   {
    "q": "Fewer than",
    "a": "Menos que (para contáveis)"
   },
   {
    "q": "Funnier than",
    "a": "Mais engraçado que"
   },
   {
    "q": "Happier than",
    "a": "Mais feliz que"
   },
   {
    "q": "Hotter than",
    "a": "Mais quente que"
   },
   {
    "q": "Less than",
    "a": "Menos que (oposto de mais)"
   },
   {
    "q": "Longer than",
    "a": "Mais longo / comprido que"
   },
   {
    "q": "Newer than",
    "a": "Mais novo que"
   },
   {
    "q": "Older than",
    "a": "Mais velho / antigo que"
   },
   {
    "q": "Poorer than",
    "a": "Mais pobre que"
   },
   {
    "q": "Richer than",
    "a": "Mais rico que"
   },
   {
    "q": "Sadder than",
    "a": "Mais triste que"
   },
   {
    "q": "Shorter than",
    "a": "Mais curto / baixo que"
   },
   {
    "q": "Smaller than",
    "a": "Menor que"
   },
   {
    "q": "Taller than",
    "a": "Mais alto que (pessoas)"
   },
   {
    "q": "Worse than",
    "a": "Pior que (irregular de bad)"
   },
   {
    "q": "Younger than",
    "a": "Mais jovem que"
   }
  ]
 },
 {
  "id": "comparativos-intermediario",
  "emoji": "⚖️",
  "title": "Comparativos",
  "level": "intermediario",
  "description": "Nível Intermediário (B1/B2)",
  "cards": [
   {
    "q": "More beautiful than",
    "a": "Mais bonito(a) que"
   },
   {
    "q": "More boring than",
    "a": "Mais chato(a) / entediante que"
   },
   {
    "q": "More careful than",
    "a": "Mais cuidadoso(a) que"
   },
   {
    "q": "More comfortable than",
    "a": "Mais confortável que"
   },
   {
    "q": "More crowded than",
    "a": "Mais lotado(a) que"
   },
   {
    "q": "More dangerous than",
    "a": "Mais perigoso(a) que"
   },
   {
    "q": "More difficult than",
    "a": "Mais difícil que"
   },
   {
    "q": "More exciting than",
    "a": "Mais empolgante que"
   },
   {
    "q": "More expensive than",
    "a": "Mais caro(a) que"
   },
   {
    "q": "More famous than",
    "a": "Mais famoso(a) que"
   },
   {
    "q": "More helpful than",
    "a": "Mais prestativo(a) / útil que"
   },
   {
    "q": "More important than",
    "a": "Mais importante que"
   },
   {
    "q": "More interesting than",
    "a": "Mais interessante que"
   },
   {
    "q": "More modern than",
    "a": "Mais moderno(a) que"
   },
   {
    "q": "More popular than",
    "a": "Mais popular que"
   },
   {
    "q": "More powerful than",
    "a": "Mais poderoso(a) que"
   },
   {
    "q": "More profitable than",
    "a": "Mais lucrativo(a) que"
   },
   {
    "q": "More successful than",
    "a": "Mais bem-sucedido(a) que"
   },
   {
    "q": "More surprising than",
    "a": "Mais surpreendente que"
   },
   {
    "q": "More useful than",
    "a": "Mais útil que"
   }
  ]
 },
 {
  "id": "comparativos-dificil",
  "emoji": "⚖️",
  "title": "Comparativos",
  "level": "dificil",
  "description": "Nível Avançado (C1/C2)",
  "cards": [
   {
    "q": "Far more ambiguous than",
    "a": "Muito mais ambíguo que (ênfase forte)"
   },
   {
    "q": "Significantly more comprehensive than",
    "a": "Significativamente mais abrangente que"
   },
   {
    "q": "More conspicuous than",
    "a": "Mais chamativo / conspícuo que"
   },
   {
    "q": "More controversial than",
    "a": "Mais controverso que"
   },
   {
    "q": "Far more detrimental than",
    "a": "Muito mais prejudicial que"
   },
   {
    "q": "More eloquent than",
    "a": "Mais eloquente que"
   },
   {
    "q": "More ephemeral than",
    "a": "Mais efêmero / passageiro que"
   },
   {
    "q": "More exquisite than",
    "a": "Mais requintado / exótico que"
   },
   {
    "q": "More feasible than",
    "a": "Mais viável que"
   },
   {
    "q": "More meticulous than",
    "a": "Mais meticuloso / detalhista que"
   },
   {
    "q": "More ominous than",
    "a": "Mais sinistro / ameaçador que"
   },
   {
    "q": "More perplexing than",
    "a": "Mais intrigante / perplexo que"
   },
   {
    "q": "More plausible than",
    "a": "Mais plausível que"
   },
   {
    "q": "More prevalent than",
    "a": "Mais prevalente / comum que"
   },
   {
    "q": "More resilient than",
    "a": "Mais resiliente que"
   },
   {
    "q": "Significantly more sophisticated than",
    "a": "Significativamente mais sofisticado que"
   },
   {
    "q": "More stringent than",
    "a": "Mais rigoroso / estrito que"
   },
   {
    "q": "More subtle than",
    "a": "Mais sutil que"
   },
   {
    "q": "More ubiquitous than",
    "a": "Mais onipresente / ubíquo que"
   }
  ]
 },
 {
  "id": "participio-basico",
  "emoji": "📘",
  "title": "Particípio Passado",
  "level": "basico",
  "description": "Nível Básico (A1/A2)",
  "cards": [
   {
    "q": "Been",
    "a": "Sido / Estado (de Be)"
   },
   {
    "q": "Broken",
    "a": "Quebrado (de Break)"
   },
   {
    "q": "Bought",
    "a": "Comprado (de Buy)"
   },
   {
    "q": "Come",
    "a": "Vindo (de Come)"
   },
   {
    "q": "Done",
    "a": "Feito (de Do)"
   },
   {
    "q": "Eaten",
    "a": "Comido (de Eat)"
   },
   {
    "q": "Found",
    "a": "Encontrado (de Find)"
   },
   {
    "q": "Finished",
    "a": "Terminado / Concluído (regular de Finish)"
   },
   {
    "q": "Gotten / Got",
    "a": "Obtido / Conseguido (de Get)"
   },
   {
    "q": "Gone",
    "a": "Idó / Partindo (de Go)"
   },
   {
    "q": "Had",
    "a": "Tido (de Have)"
   },
   {
    "q": "Known",
    "a": "Conhecido / Sabido (de Know)"
   },
   {
    "q": "Lived",
    "a": "Vivido / Morado (regular de Live)"
   },
   {
    "q": "Made",
    "a": "Feito / Criado (de Make)"
   },
   {
    "q": "Met",
    "a": "Conhecido / Encontrado (alguém) (de Meet)"
   },
   {
    "q": "Played",
    "a": "Jogado / Tocado (regular de Play)"
   },
   {
    "q": "Read",
    "a": "Lido (de Read - grafia igual, som diferente)"
   },
   {
    "q": "Seen",
    "a": "Visto (de See)"
   },
   {
    "q": "Spoken",
    "a": "Falado (de Speak)"
   },
   {
    "q": "Started",
    "a": "Começado / Iniciado (regular de Start)"
   },
   {
    "q": "Taken",
    "a": "Tomado / Levado (de Take)"
   },
   {
    "q": "Washed",
    "a": "Lavado (regular de Wash)"
   },
   {
    "q": "Worked",
    "a": "Trabalhado (regular de Work)"
   },
   {
    "q": "Written",
    "a": "Escrito (de Write)"
   }
  ]
 },
 {
  "id": "participio-intermediario",
  "emoji": "📘",
  "title": "Particípio Passado",
  "level": "intermediario",
  "description": "Nível Intermediário (B1/B2)",
  "cards": [
   {
    "q": "Accepted",
    "a": "Aceito"
   },
   {
    "q": "Arrived",
    "a": "Chegado"
   },
   {
    "q": "Begun",
    "a": "Começado / Iniciado (de Begin)"
   },
   {
    "q": "Bidden",
    "a": "Convidado / Ordenado (de Bid)"
   },
   {
    "q": "Chosen",
    "a": "Escolhido (de Choose)"
   },
   {
    "q": "Closed",
    "a": "Fechado"
   },
   {
    "q": "Decided",
    "a": "Decidido"
   },
   {
    "q": "Done",
    "a": "Feito"
   },
   {
    "q": "Drawn",
    "a": "Desenhado (de Draw)"
   },
   {
    "q": "Driven",
    "a": "Dirigido (de Drive)"
   },
   {
    "q": "Eaten",
    "a": "Comido"
   },
   {
    "q": "Fallen",
    "a": "Caído (de Fall)"
   },
   {
    "q": "Felt",
    "a": "Sentido (de Feel)"
   },
   {
    "q": "Forgotten",
    "a": "Esquecido (de Forget)"
   },
   {
    "q": "Forgiven",
    "a": "Perdoado (de Forgive)"
   },
   {
    "q": "Frozen",
    "a": "Congelado (de Freeze)"
   },
   {
    "q": "Given",
    "a": "Dado (de Give)"
   },
   {
    "q": "Heard",
    "a": "Ouvido (de Hear)"
   },
   {
    "q": "Kept",
    "a": "Mantido / Guardado (de Keep)"
   },
   {
    "q": "Left",
    "a": "Deixado / PartidO (de Leave)"
   },
   {
    "q": "Lost",
    "a": "Perdido (de Lose)"
   },
   {
    "q": "Paid",
    "a": "Pago (de Pay)"
   },
   {
    "q": "Put",
    "a": "Colocado (de Put)"
   },
   {
    "q": "Run",
    "a": "Corrido (de Run)"
   },
   {
    "q": "Said",
    "a": "Dito (de Say)"
   },
   {
    "q": "Sent",
    "a": "Enviado (de Send)"
   },
   {
    "q": "Shown",
    "a": "Mostrado (de Show)"
   },
   {
    "q": "Sat",
    "a": "Sentado (de Sit)"
   },
   {
    "q": "Slept",
    "a": "Dormido (de Sleep)"
   },
   {
    "q": "Spent",
    "a": "Gasto / Passado (de Spend)"
   },
   {
    "q": "Stolen",
    "a": "Roubado (de Steal)"
   },
   {
    "q": "Swum",
    "a": "Nadado (de Swim)"
   },
   {
    "q": "Thought",
    "a": "Pensado (de Think)"
   },
   {
    "q": "Understood",
    "a": "Entendido (de Understand)"
   },
   {
    "q": "Worn",
    "a": "Usado / Vestido (de Wear)"
   },
   {
    "q": "Won",
    "a": "Vencido / Ganho (de Win)"
   }
  ]
 },
 {
  "id": "participio-dificil",
  "emoji": "📘",
  "title": "Particípio Passado",
  "level": "dificil",
  "description": "Nível Avançado (C1/C2)",
  "cards": [
   {
    "q": "Arisen",
    "a": "Surgido / Levantado (de Arise)"
   },
   {
    "q": "Awoken",
    "a": "Despertado (de Awake)"
   },
   {
    "q": "Borne",
    "a": "Suportado / Carregado (de Bear)"
   },
   {
    "q": "Bitten",
    "a": "Mordido (de Bite)"
   },
   {
    "q": "Blown",
    "a": "Soprado (de Blow)"
   },
   {
    "q": "Bound",
    "a": "Amarrado / Vinculado (de Bind)"
   },
   {
    "q": "Cast",
    "a": "Lançado / Atirado (de Cast)"
   },
   {
    "q": "Clung",
    "a": "Aderido / Agarrado (de Cling)"
   },
   {
    "q": "Crept",
    "a": "Rastejado / Andado furtivamente (de Creep)"
   },
   {
    "q": "Dealt",
    "a": "Lido com / Negociado (de Deal)"
   },
   {
    "q": "Dug",
    "a": "Cavado (de Dig)"
   },
   {
    "q": "Fled",
    "a": "Fugido (de Flee)"
   },
   {
    "q": "Flung",
    "a": "Arremessado (de Fling)"
   },
   {
    "q": "Forsaken",
    "a": "Abandonado (de Forsake)"
   },
   {
    "q": "Grown",
    "a": "Crescido (de Grow)"
   },
   {
    "q": "Hung",
    "a": "Pendurado (de Hang)"
   },
   {
    "q": "Kneelt / Kneeled",
    "a": "Ajoelhado (de Kneel)"
   },
   {
    "q": "Leapt / Leaped",
    "a": "Saltado (de Leap)"
   },
   {
    "q": "Meant",
    "a": "Significado / Intencionado (de Mean)"
   },
   {
    "q": "Mown",
    "a": "Cortado (grama) (de Mow)"
   },
   {
    "q": "Overcome",
    "a": "Superado (de Overcome)"
   },
   {
    "q": "Proved",
    "a": "Provado (de Prove)"
   },
   {
    "q": "Ridden",
    "a": "Andado (a cavalo/bicicleta) (de Ride)"
   },
   {
    "q": "Risen",
    "a": "Subido / Elevado (de Rise)"
   },
   {
    "q": "Sought",
    "a": "Buscado / Procurado (de Seek)"
   },
   {
    "q": "Shaken",
    "a": "Sacudido (de Shake)"
   },
   {
    "q": "Shrunk",
    "a": "Encolhido (de Shrink)"
   },
   {
    "q": "Sunk",
    "a": "Afundado (de Sink)"
   },
   {
    "q": "Slain",
    "a": "Morto / Assassinado (de Slay)"
   },
   {
    "q": "Slid",
    "a": "Deslizado (de Slide)"
   },
   {
    "q": "Sown",
    "a": "Semeado (de Sow)"
   },
   {
    "q": "Struck",
    "a": "Atingido / Golpeado (de Strike)"
   },
   {
    "q": "Striven",
    "a": "Esforçado (de Strive)"
   },
   {
    "q": "Sworn",
    "a": "Jurado (de Swear)"
   },
   {
    "q": "Torn",
    "a": "Rasgado (de Tear)"
   },
   {
    "q": "Treaded / Trodden",
    "a": "Pisado (de Tread)"
   },
   {
    "q": "Undergone",
    "a": "Submetido / Passado por (de Undergo)"
   },
   {
    "q": "Wept",
    "a": "Chorado (de Weep)"
   },
   {
    "q": "Wound",
    "a": "Enrolado / Ferido (de Wind)"
   },
   {
    "q": "Wriven / Woven",
    "a": "Tecido (de Weave)"
   }
  ]
 },
 {
  "id": "passado-basico",
  "emoji": "⏪",
  "title": "Simple Past",
  "level": "basico",
  "description": "Nível Básico (A1/A2)",
  "cards": [
   {
    "q": "Was / Were",
    "a": "Era / Estava (de Be)"
   },
   {
    "q": "Began",
    "a": "Começou (de Begin)"
   },
   {
    "q": "Bought",
    "a": "Comprou (de Buy)"
   },
   {
    "q": "Came",
    "a": "Veio (de Come)"
   },
   {
    "q": "Did",
    "a": "Fez (de Do)"
   },
   {
    "q": "Drank",
    "a": "Bebeu (de Drink)"
   },
   {
    "q": "Ate",
    "a": "Comeu (de Eat)"
   },
   {
    "q": "Found",
    "a": "Encontrou (de Find)"
   },
   {
    "q": "Finished",
    "a": "Terminou (regular de Finish)"
   },
   {
    "q": "Got",
    "a": "Conseguiu / Obteve (de Get)"
   },
   {
    "q": "Gave",
    "a": "Deu (de Give)"
   },
   {
    "q": "Went",
    "a": "Foi (de Go)"
   },
   {
    "q": "Had",
    "a": "Tinha / Teve (de Have)"
   },
   {
    "q": "Knew",
    "a": "Sabia / Conhecia (de Know)"
   },
   {
    "q": "Lived",
    "a": "Viveu / Morou (regular de Live)"
   },
   {
    "q": "Made",
    "a": "Fez / Criou (de Make)"
   },
   {
    "q": "Met",
    "a": "Conheceu / Encontrou (de Meet)"
   },
   {
    "q": "Played",
    "a": "Jogou / Tocou (regular de Play)"
   },
   {
    "q": "Read",
    "a": "Leu (de Read - grafia igual, pronúncia diferente)"
   },
   {
    "q": "Ran",
    "a": "Correu (de Run)"
   },
   {
    "q": "Said",
    "a": "Disse (de Say)"
   },
   {
    "q": "Saw",
    "a": "Viu (de See)"
   },
   {
    "q": "Spoke",
    "a": "Falou (de Speak)"
   },
   {
    "q": "Started",
    "a": "Começou (regular de Start)"
   },
   {
    "q": "Took",
    "a": "Pegou / Levou (de Take)"
   },
   {
    "q": "Washed",
    "a": "Lavou (regular de Wash)"
   },
   {
    "q": "Worked",
    "a": "Trabalhou (regular de Work)"
   },
   {
    "q": "Wrote",
    "a": "Escreveu (de Write)"
   }
  ]
 },
 {
  "id": "passado-intermediario",
  "emoji": "⏪",
  "title": "Simple Past",
  "level": "intermediario",
  "description": "Nível Intermediário (B1/B2)",
  "cards": [
   {
    "q": "Accepted",
    "a": "Aceitou (regular)"
   },
   {
    "q": "Asked",
    "a": "Perguntou / Pediu (regular)"
   },
   {
    "q": "Broke",
    "a": "Quebrou (de Break)"
   },
   {
    "q": "Brought",
    "a": "Trouxe (de Bring)"
   },
   {
    "q": "Built",
    "a": "Construiu (de Build)"
   },
   {
    "q": "Caught",
    "a": "Pegou / Capturou (de Catch)"
   },
   {
    "q": "Chose",
    "a": "Escolheu (de Choose)"
   },
   {
    "q": "Closed",
    "a": "Fechou (regular)"
   },
   {
    "q": "Decided",
    "a": "Decidiu (regular)"
   },
   {
    "q": "Drew",
    "a": "Desenhou (de Draw)"
   },
   {
    "q": "Drove",
    "a": "Dirigiu (de Drive)"
   },
   {
    "q": "Fell",
    "a": "Caiu (de Fall)"
   },
   {
    "q": "Felt",
    "a": "Sentiu (de Feel)"
   },
   {
    "q": "Flew",
    "a": "Voou (de Fly)"
   },
   {
    "q": "Forgot",
    "a": "Esqueceu (de Forget)"
   },
   {
    "q": "Forgave",
    "a": "Perdoou (de Forgive)"
   },
   {
    "q": "Froze",
    "a": "Congelou (de Freeze)"
   },
   {
    "q": "Grew",
    "a": "Cresceu (de Grow)"
   },
   {
    "q": "Heard",
    "a": "Ouviu (de Hear)"
   },
   {
    "q": "Kept",
    "a": "Manteve / Guardou (de Keep)"
   },
   {
    "q": "Left",
    "a": "Deixou / Partiu (de Leave)"
   },
   {
    "q": "Lost",
    "a": "Perdeu (de Lose)"
   },
   {
    "q": "Paid",
    "a": "Pagou (de Pay)"
   },
   {
    "q": "Put",
    "a": "Colocou (de Put)"
   },
   {
    "q": "Sent",
    "a": "Enviou (de Send)"
   },
   {
    "q": "Showed",
    "a": "Mostrou (regular)"
   },
   {
    "q": "Sat",
    "a": "Sentou (de Sit)"
   },
   {
    "q": "Slept",
    "a": "Dormiu (de Sleep)"
   },
   {
    "q": "Spent",
    "a": "Gastou / Passou (de Spend)"
   },
   {
    "q": "Stole",
    "a": "Roubou (de Steal)"
   },
   {
    "q": "Swam",
    "a": "Nadou (de Swim)"
   },
   {
    "q": "Thought",
    "a": "Pensou (de Think)"
   },
   {
    "q": "Understood",
    "a": "Entendeu (de Understand)"
   },
   {
    "q": "Woke",
    "a": "Acordou (de Wake)"
   },
   {
    "q": "Wore",
    "a": "Usou / Vestiu (de Wear)"
   },
   {
    "q": "Won",
    "a": "Venceu / Ganhou (de Win)"
   }
  ]
 },
 {
  "id": "passado-dificil",
  "emoji": "⏪",
  "title": "Simple Past",
  "level": "dificil",
  "description": "Nível Avançado (C1/C2)",
  "cards": [
   {
    "q": "Arose",
    "a": "Surgiu / Levantou-se (de Arise)"
   },
   {
    "q": "Awoke",
    "a": "Despertou (de Awake)"
   },
   {
    "q": "Bade",
    "a": "Convidou / Ordenou (de Bid)"
   },
   {
    "q": "Bound",
    "a": "Amarrou / Vinculou (de Bind)"
   },
   {
    "q": "Bit",
    "a": "Mordeu (de Bite)"
   },
   {
    "q": "Blew",
    "a": "Soprou (de Blow)"
   },
   {
    "q": "Cast",
    "a": "Lançou / Atirou (de Cast)"
   },
   {
    "q": "Clung",
    "a": "Aderiu / Agachou-se (de Cling)"
   },
   {
    "q": "Crept",
    "a": "Rastejou / Andou furtivamente (de Creep)"
   },
   {
    "q": "Dealt",
    "a": "Lidou / Negociou (de Deal)"
   },
   {
    "q": "Dug",
    "a": "Cavou (de Dig)"
   },
   {
    "q": "Fled",
    "a": "Fugiu (de Flee)"
   },
   {
    "q": "Flung",
    "a": "Arremessou (de Fling)"
   },
   {
    "q": "Forsook",
    "a": "Abandonou (de Forsake)"
   },
   {
    "q": "Hung",
    "a": "Pendurou (de Hang)"
   },
   {
    "q": "Knelt",
    "a": "Ajoelhou-se (de Kneel)"
   },
   {
    "q": "Leapt / Leaped",
    "a": "Saltou (de Leap)"
   },
   {
    "q": "Meant",
    "a": "Significado / Intencionou (de Mean)"
   },
   {
    "q": "Mowed",
    "a": "Cortou a grama (de Mow)"
   },
   {
    "q": "Overcame",
    "a": "Superou (de Overcome)"
   },
   {
    "q": "Proved",
    "a": "Provou (de Prove)"
   },
   {
    "q": "Rode",
    "a": "Andou a cavalo / de bicicleta (de Ride)"
   },
   {
    "q": "Rose",
    "a": "Subiu / Elevou-se (de Rise)"
   },
   {
    "q": "Sought",
    "a": "Buscou / Procurou (de Seek)"
   },
   {
    "q": "Shook",
    "a": "Sacudiu (de Shake)"
   },
   {
    "q": "Shrank",
    "a": "Encolheu (de Shrink)"
   },
   {
    "q": "Sank",
    "a": "Afundou (de Sink)"
   },
   {
    "q": "Slew",
    "a": "Matou / Assassinou (de Slay)"
   },
   {
    "q": "Slid",
    "a": "Deslizou (de Slide)"
   },
   {
    "q": "Sowed",
    "a": "Semeou (de Sow)"
   },
   {
    "q": "Struck",
    "a": "Atingiu / Golpear (de Strike)"
   },
   {
    "q": "Strove",
    "a": "Esforçou-se (de Strive)"
   },
   {
    "q": "Swore",
    "a": "Jurou (de Swear)"
   },
   {
    "q": "Tore",
    "a": "Rasgou (de Tear)"
   },
   {
    "q": "Trod",
    "a": "Pisou (de Tread)"
   },
   {
    "q": "Underwent",
    "a": "Submeteu-se / Passou por (de Undergo)"
   },
   {
    "q": "Wept",
    "a": "Chorou (de Weep)"
   },
   {
    "q": "Wound",
    "a": "Enrolou / Feriu (de Wind)"
   },
   {
    "q": "Wove",
    "a": "Teceu (de Weave)"
   }
  ]
 },
 {
  "id": "tarefas-basico",
  "emoji": "🧹",
  "title": "Tarefas Domésticas",
  "level": "basico",
  "description": "Nível Básico (A1/A2)",
  "cards": [
   {
    "q": "Clean the room",
    "a": "Limpar o quarto"
   },
   {
    "q": "Cook",
    "a": "Cozinhar"
   },
   {
    "q": "Do the dishes",
    "a": "Lavar a louça"
   },
   {
    "q": "Do the laundry",
    "a": "Lavar a roupa"
   },
   {
    "q": "Feed the pets",
    "a": "Alimentar os animais de estimação"
   },
   {
    "q": "Make the bed",
    "a": "Arumar a cama"
   },
   {
    "q": "Set the table",
    "a": "Arumar a mesa (para as refeições)"
   },
   {
    "q": "Sweep the floor",
    "a": "Varrer o chão"
   },
   {
    "q": "Take out the trash",
    "a": "Tirar / levar o lixo para fora"
   },
   {
    "q": "Wash the car",
    "a": "Lavar o carro"
   },
   {
    "q": "Water the plants",
    "a": "Regar as plantas"
   }
  ]
 },
 {
  "id": "tarefas-intermediario",
  "emoji": "🧹",
  "title": "Tarefas Domésticas",
  "level": "intermediario",
  "description": "Nível Intermediário (B1/B2)",
  "cards": [
   {
    "q": "Change the bedsheets",
    "a": "Trocar os lençóis da cama"
   },
   {
    "q": "Clear the table",
    "a": "Retirar a mesa (após a refeição)"
   },
   {
    "q": "Do the ironing",
    "a": "Passar a ferro"
   },
   {
    "q": "Dust the furniture",
    "a": "Tirar o pó dos móveis"
   },
   {
    "q": "Mop the floor",
    "a": "Passar pano no chão"
   },
   {
    "q": "Mow the lawn",
    "a": "Aparar / cortar a grama"
   },
   {
    "q": "Organize the closet",
    "a": "Organizar o armário / guarda-roupa"
   },
   {
    "q": "Polish the shoes",
    "a": "Engraxar os sapatos"
   },
   {
    "q": "Scrub the bathroom",
    "a": "Esfregar o banheiro"
   },
   {
    "q": "Take out the recycling",
    "a": "Separar / colocar a reciclagem para fora"
   },
   {
    "q": "Vacuum the carpet / rug",
    "a": "Passar aspirador no carpete / tapete"
   },
   {
    "q": "Wash the windows",
    "a": "Lavar as janelas"
   }
  ]
 },
 {
  "id": "tarefas-dificil",
  "emoji": "🧹",
  "title": "Tarefas Domésticas",
  "level": "dificil",
  "description": "Nível Avançado (C1/C2)",
  "cards": [
   {
    "q": "Clean out the gutters",
    "a": "Limpar as calhas (da casa)"
   },
   {
    "q": "Declutter the house",
    "a": "Fazer a destralhação / desapego da casa (organização profunda)"
   },
   {
    "q": "Defrost the freezer",
    "a": "Descongelar o freezer"
   },
   {
    "q": "Do the upholstery cleaning",
    "a": "Fazer a limpeza de estofados / sofás"
   },
   {
    "q": "Hedge trimming",
    "a": "Aparar as cerca-vivas / arbustos"
   },
   {
    "q": "Polish the silverware",
    "a": "Polir a prataria"
   },
   {
    "q": "Pressure wash the driveway",
    "a": "Lavar a calçada / entrada de garagem com lavadora de alta pressão"
   },
   {
    "q": "Scour the oven",
    "a": "Desengordurar / esfregar o forno profundamente"
   },
   {
    "q": "Shampoo the carpets",
    "a": "Fazer a lavagem profissional (com extratora) de carpetes"
   },
   {
    "q": "Wash the drapes / curtains",
    "a": "Lavar as cortinas e reposteiros"
   }
  ]
 },
 {
  "id": "esportes-basico",
  "emoji": "⚽",
  "title": "Esportes",
  "level": "basico",
  "description": "Nível Básico (A1/A2)",
  "cards": [
   {
    "q": "Basketball",
    "a": "Basquete"
   },
   {
    "q": "Baseball",
    "a": "Beisebol"
   },
   {
    "q": "Cycling",
    "a": "Ciclismo"
   },
   {
    "q": "Football (US) / American football",
    "a": "Futebol americano"
   },
   {
    "q": "Football (UK) / Soccer",
    "a": "Futebol"
   },
   {
    "q": "Golf",
    "a": "Golfe"
   },
   {
    "q": "Gymnastics",
    "a": "Ginástica"
   },
   {
    "q": "Running",
    "a": "Corrida"
   },
   {
    "q": "Swimming",
    "a": "Natação"
   },
   {
    "q": "Tennis",
    "a": "Tênis"
   },
   {
    "q": "Volleyball",
    "a": "Vôlei"
   }
  ]
 },
 {
  "id": "esportes-intermediario",
  "emoji": "⚽",
  "title": "Esportes",
  "level": "intermediario",
  "description": "Nível Intermediário (B1/B2)",
  "cards": [
   {
    "q": "Badminton",
    "a": "Badminton"
   },
   {
    "q": "Boxing",
    "a": "Boxe"
   },
   {
    "q": "Canoeing",
    "a": "Canoagem"
   },
   {
    "q": "Climbing",
    "a": "Escalada"
   },
   {
    "q": "Cricket",
    "a": "Críquete"
   },
   {
    "q": "Fencing",
    "a": "Esgrima"
   },
   {
    "q": "Fishing",
    "a": "Pesca esportiva"
   },
   {
    "q": "Handball",
    "a": "Handebol"
   },
   {
    "q": "Hockey",
    "a": "Hóquei"
   },
   {
    "q": "Horse riding",
    "a": "Hipismo / Equitação"
   },
   {
    "q": "Ice skating",
    "a": "Patinação no gelo"
   },
   {
    "q": "Judo",
    "a": "Judô"
   },
   {
    "q": "Karate",
    "a": "Caratê"
   },
   {
    "q": "Rugby",
    "a": "Rúgbi"
   },
   {
    "q": "Sailing",
    "a": "Vela / Iatismo"
   },
   {
    "q": "Skiing",
    "a": "Esqui"
   },
   {
    "q": "Surfing",
    "a": "Surfe"
   },
   {
    "q": "Table tennis / Ping-pong",
    "a": "Tênis de mesa / Pingue-pongue"
   },
   {
    "q": "Taekwondo",
    "a": "Taekwondo"
   },
   {
    "q": "Triathlon",
    "a": "Triatlo"
   },
   {
    "q": "Weightlifting",
    "a": "Levantamento de peso"
   },
   {
    "q": "Wrestling",
    "a": "Luta livre / Wrestling"
   }
  ]
 },
 {
  "id": "esportes-dificil",
  "emoji": "⚽",
  "title": "Esportes",
  "level": "dificil",
  "description": "Nível Avançado (C1/C2)",
  "cards": [
   {
    "q": "Archery",
    "a": "Arquearia / Tiro com arco"
   },
   {
    "q": "Biathlon",
    "a": "Biatlo (esqui cross-country + tiro esportivo)"
   },
   {
    "q": "Bobsled / Bobsleigh",
    "a": "Bobsled (trenó de neve)"
   },
   {
    "q": "Caving",
    "a": "Espeleologia esportiva (exploração de cavernas)"
   },
   {
    "q": "Curling",
    "a": "Curling (esporte de gelo com pedras e vassouras)"
   },
   {
    "q": "Decathlon",
    "a": "Decatlo"
   },
   {
    "q": "Diving",
    "a": "Saltos ornamentais (ou mergulho técnico)"
   },
   {
    "q": "Equestrianism",
    "a": "Hipismo clássico (termo técnico)"
   },
   {
    "q": "Figure skating",
    "a": "Patinação artística no gelo"
   },
   {
    "q": "Kayaking",
    "a": "Caiaque (modalidade esportiva)"
   },
   {
    "q": "Lacrosse",
    "a": "Lacrosse"
   },
   {
    "q": "Mountaineering",
    "a": "Alpinismo / Montanhismo de alta altitude"
   },
   {
    "q": "Pentathlon",
    "a": "Pentatlo moderno"
   },
   {
    "q": "Polo",
    "a": "Polo (a cavalo)"
   },
   {
    "q": "Rowing",
    "a": "Remo competitivo"
   },
   {
    "q": "Skeleton",
    "a": "Skeleton (descida de trenó de cabeça para baixo)"
   },
   {
    "q": "Snowboarding",
    "a": "Snowboard"
   },
   {
    "q": "Squash",
    "a": "Squash"
   },
   {
    "q": "Water polo",
    "a": "Polo aquático"
   },
   {
    "q": "Windsurfing",
    "a": "Windsurf"
   }
  ]
 }
];
FLASHCARD_DECKS.push(...PDF_DECKS);

// Rótulos e cores das categorias de nível
const LEVELS = {
  basico:        { label: "Básico" },
  intermediario: { label: "Intermediário" },
  dificil:       { label: "Avançado" },
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

// Filtro de livros por categoria
let currentBookFilter = "todos";
const normalize = t => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function renderBooks() {
  const list = BOOKS.filter(b => currentBookFilter === "todos" || normalize(b.level) === currentBookFilter);
  document.getElementById("books-grid").innerHTML = list.length ? list.map(b => `
  <a class="item-card" href="${b.pdf}" target="_blank" rel="noopener">
    <img class="item-cover" src="${b.cover}" alt="Capa: ${b.title}" loading="lazy" onerror="${fallbackImg("CAPA DO LIVRO", "0 0 300 400")}">
    <div class="item-body"><span>${b.level}</span><h4>${b.title}</h4></div>
  </a>`).join("") : `<p class="empty">Nenhum livro nesta categoria ainda.</p>`;
}
document.getElementById("books-filter").addEventListener("click", e => {
  const btn = e.target.closest("[data-book]");
  if (!btn) return;
  currentBookFilter = btn.dataset.book;
  document.querySelectorAll("#books-filter [data-book]").forEach(b => b.setAttribute("aria-pressed", b === btn));
  renderBooks();
});
renderBooks();

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
    el("fc-ex").innerHTML = (c.ex || []).map(x => `<span>${x.replace(/</g,"&lt;")}</span>`).join("");
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
