const fortuneScenes = [
  {
    text: 'Dnes potkáš někoho, kdo ti zlepší náladu jedním úsměvem.',
    symbol: '🙂',
    title: 'Kočka radosti',
    colorA: '#ffe5ed',
    colorB: '#ffeecf'
  },
  {
    text: 'Tvoje zvědavost tě dovede k příjemnému překvapení.',
    symbol: '🎁',
    title: 'Kočka překvapení',
    colorA: '#e9f3ff',
    colorB: '#e9ffe8'
  },
  {
    text: 'Neboj se říct svůj názor. Dnes bude mít sílu.',
    symbol: '📣',
    title: 'Kočka odvahy',
    colorA: '#ffe8f7',
    colorB: '#ffdfe2'
  },
  {
    text: 'Malá pauza ti přinese velký nápad.',
    symbol: '💡',
    title: 'Kočka nápadů',
    colorA: '#fff4dc',
    colorB: '#fffde5'
  },
  {
    text: 'Večer patří klidu, čaji a dobré zprávě.',
    symbol: '🍵',
    title: 'Kočka klidu',
    colorA: '#e8f8ff',
    colorB: '#f0edff'
  },
  {
    text: 'Jedna zdánlivě drobnost ti otevře nové dveře.',
    symbol: '🚪',
    title: 'Kočka nových cest',
    colorA: '#f6ebff',
    colorB: '#ffeef7'
  }
];

const fortuneButton = document.getElementById('fortuneButton');
const fortuneText = document.getElementById('fortuneText');
const fortuneImage = document.getElementById('fortuneImage');

function createCatImage(scene) {
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="640" height="380" viewBox="0 0 640 380" role="img" aria-label="${scene.title}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${scene.colorA}"/>
      <stop offset="100%" stop-color="${scene.colorB}"/>
    </linearGradient>
  </defs>
  <rect width="640" height="380" rx="24" fill="url(#bg)"/>

  <circle cx="320" cy="200" r="98" fill="#ffd4a8"/>
  <polygon points="245,130 272,70 302,132" fill="#ffd4a8"/>
  <polygon points="338,132 368,70 395,130" fill="#ffd4a8"/>

  <polygon points="258,124 273,92 288,124" fill="#ffb5be"/>
  <polygon points="352,124 367,92 382,124" fill="#ffb5be"/>

  <circle cx="286" cy="196" r="10" fill="#3f3552"/>
  <circle cx="354" cy="196" r="10" fill="#3f3552"/>
  <ellipse cx="320" cy="220" rx="12" ry="9" fill="#ff9fb0"/>
  <path d="M308 236 Q320 249 332 236" stroke="#3f3552" stroke-width="4" fill="none" stroke-linecap="round"/>

  <line x1="250" y1="220" x2="195" y2="212" stroke="#3f3552" stroke-width="3" stroke-linecap="round"/>
  <line x1="250" y1="235" x2="190" y2="238" stroke="#3f3552" stroke-width="3" stroke-linecap="round"/>
  <line x1="390" y1="220" x2="445" y2="212" stroke="#3f3552" stroke-width="3" stroke-linecap="round"/>
  <line x1="390" y1="235" x2="450" y2="238" stroke="#3f3552" stroke-width="3" stroke-linecap="round"/>

  <circle cx="514" cy="95" r="48" fill="#ffffff" fill-opacity="0.75"/>
  <text x="514" y="109" text-anchor="middle" font-size="46">${scene.symbol}</text>

  <text x="320" y="334" text-anchor="middle" font-size="28" fill="#4a3f5f" font-family="Trebuchet MS, Segoe UI, sans-serif">${scene.title}</text>
</svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

fortuneButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * fortuneScenes.length);
  const selectedScene = fortuneScenes[randomIndex];

  fortuneText.textContent = `Kočka říká: ${selectedScene.text}`;
  fortuneImage.src = createCatImage(selectedScene);
  fortuneImage.alt = `${selectedScene.title} - ilustrace kočky k věštbě`;
  fortuneImage.hidden = false;
});
