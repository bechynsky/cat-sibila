const fortunes = [
  'Dnes potkáš někoho, kdo ti zlepší náladu jedním úsměvem.',
  'Tvoje zvědavost tě dovede k příjemnému překvapení.',
  'Neboj se říct svůj názor. Dnes bude mít sílu.',
  'Malá pauza ti přinese velký nápad.',
  'Večer patří klidu, čaji a dobré zprávě.',
  'Jedna zdánlivě drobnost ti otevře nové dveře.'
];

const fortuneButton = document.getElementById('fortuneButton');
const fortuneText = document.getElementById('fortuneText');

fortuneButton.addEventListener('click', () => {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  fortuneText.textContent = `Kočka říká: ${fortunes[randomIndex]}`;
});
