/**
 * ============================================================
 * MYRSINI'S STUDIOS — ΑΡΧΕΙΟ ΡΥΘΜΙΣΕΩΝ
 * ============================================================
 * Αλλάξτε μόνο αυτό το αρχείο για να ενημερώσετε το site.
 * Μετά από κάθε αλλαγή, ανεβάστε το αρχείο στο Cloudflare.
 * ============================================================
 */

const SITE_CONFIG = {

  // ============================================================
  // 🎨 ΘΕΜΑ ΧΡΩΜΑΤΩΝ
  // Επιλέξτε: 'turquoise' | 'navy' | 'sunset' | 'forest' | 'custom'
  // ============================================================
  theme: 'turquoise',

  // Αν theme = 'custom', ορίστε τα χρώματα εδώ:
  custom_colors: {
    primary:      '#1A3D5C',   // Κύριο χρώμα (nav, headers)
    secondary:    '#2B7A9E',   // Δευτερεύον (buttons, links)
    accent:       '#D4892A',   // Έμφαση (gold, highlights)
    accent_light: '#E8B86D',   // Ανοιχτό accent
    bg:           '#F0FAFA',   // Background σελίδας
    bg_warm:      '#E2F4F0',   // Ζεστό background
    text:         '#122533',   // Κύριο κείμενο
    text_soft:    '#2C4A5A',   // Μαλακό κείμενο
  },

  // ============================================================
  // 🏠 ΔΙΑΜΕΡΙΣΜΑΤΑ
  // ============================================================
  apartments: {

    archontiko: {
      // Ονόματα (σε όλες τις γλώσσες)
      name: {
        el: 'Το Αρχοντικό',
        en: 'The Archontiko',
        de: 'Das Archontiko',
        fr: "L'Archontiko",
      },
      // Περιγραφές
      description: {
        el: 'Πέτρινη κατοικία πρώτου ορόφου, με ταβάνια καστανιάς και τζάκι. Ιδανικό για ζευγάρια και μικρές οικογένειες.',
        en: 'First-floor stone house with chestnut ceilings and a fireplace. Ideal for couples and small families.',
        de: 'Steinhaus im ersten Stock mit Kastaniendecken und Kamin. Ideal für Paare und kleine Familien.',
        fr: 'Maison en pierre au premier étage avec plafonds en châtaignier et cheminée. Idéal pour couples et familles.',
      },
      price_per_night: 85,      // Τιμή βάσης σε €
      max_guests: 4,
      sqm: 65,
      view: {
        el: 'Θέα βουνό',
        en: 'Mountain view',
        de: 'Bergblick',
        fr: 'Vue montagne',
      },
    },

    thalassino: {
      name: {
        el: 'Το Θαλασσινό',
        en: 'The Thalassino',
        de: 'Das Thalassino',
        fr: 'Le Thalassino',
      },
      description: {
        el: 'Μικρό studio με μπαλκόνι που βλέπει τον Παγασητικό. Πέτρα, λευκά υφάσματα, και αλμύρα στον αέρα.',
        en: 'Small studio with a balcony overlooking the Pagasetic Gulf. Stone, white linens, and salt in the air.',
        de: 'Kleines Studio mit Balkon und Blick auf den Pagasitischen Golf. Stein, weiße Stoffe und Salz in der Luft.',
        fr: 'Petit studio avec balcon donnant sur le golfe Pagasétique. Pierre, linges blancs et sel dans l\'air.',
      },
      price_per_night: 65,
      max_guests: 2,
      sqm: 45,
      view: {
        el: 'Θέα θάλασσα',
        en: 'Sea view',
        de: 'Meerblick',
        fr: 'Vue mer',
      },
    },

  },

  // ============================================================
  // 💰 ΤΙΜΕΣ ΕΠΟΧΗΣ (προαιρετικό)
  // Αν δεν θέλετε εποχικές τιμές, αφήστε κενό: []
  // ============================================================
  seasonal_prices: {
    archontiko: [
      // { from: 'YYYY-MM-DD', to: 'YYYY-MM-DD', price: 000 }
      { from: '2026-07-01', to: '2026-08-31', price: 110 },  // Υψηλή σεζόν
      { from: '2026-06-01', to: '2026-06-30', price: 90  },  // Μέση σεζόν
    ],
    thalassino: [
      { from: '2026-07-01', to: '2026-08-31', price: 80  },
      { from: '2026-06-01', to: '2026-06-30', price: 70  },
    ],
  },

  // ============================================================
  // 📅 ΚΡΑΤΗΜΕΝΕΣ ΗΜΕΡΟΜΗΝΙΕΣ
  // Μορφή: 'YYYY-MM-DD'  (π.χ. '2026-07-15')
  // ============================================================
  booked_dates: {
    archontiko: [
      // Προσθέστε/αφαιρέστε ημερομηνίες εδώ
      '2026-06-10', '2026-06-11', '2026-06-12',
      '2026-07-20', '2026-07-21', '2026-07-22', '2026-07-23',
    ],
    thalassino: [
      '2026-06-25', '2026-06-26', '2026-06-27',
      '2026-07-15', '2026-07-16',
    ],
  },

  // ============================================================
  // 📞 ΕΠΙΚΟΙΝΩΝΙΑ
  // ============================================================
  contact: {
    whatsapp:    '306944571280',          // Χωρίς + ή κενά
    email:       'myrsinisstudios@gmail.com',
    phone:       '+30 694 457 1280',      // Για εμφάνιση
  },

  // ============================================================
  // 🗺️ ΕΚΤΑΚΤΗ ΑΝΑΓΚΗ
  // Μπορείτε να προσθέσετε/αφαιρέσετε εγγραφές
  // ============================================================
  emergency: [
    { name: { el: 'Ευρωπαϊκός Αρ. Έκτακτης Ανάγκης', en: 'European Emergency', de: 'Europaweiter Notruf',     fr: 'Urgence Européenne' },   phone: '112' },
    { name: { el: 'ΕΚΑΒ — Ασθενοφόρο',                en: 'Ambulance (EKAV)',   de: 'Krankenwagen (EKAV)',     fr: 'Ambulance (EKAV)' },       phone: '166' },
    { name: { el: 'Πυροσβεστική',                     en: 'Fire Department',    de: 'Feuerwehr',               fr: 'Pompiers' },               phone: '199' },
    { name: { el: 'Κέντρο Υγείας Αργαλαστής',         en: 'Argalasti Health',   de: 'Gesundheitszentrum',      fr: 'Centre de santé' },        phone: '24230 54222' },
    { name: { el: 'Λιμεναρχείο Βόλου',                en: 'Volos Port Auth.',   de: 'Hafenbehörde Volos',      fr: 'Capitainerie Volos' },     phone: '24210 76710' },
  ],

  // ============================================================
  // 🌤️ ΚΑΙΡΟΣ (mock δεδομένα — θα συνδεθεί με API αργότερα)
  // ============================================================
  weather: {
    location: { el: 'Τώρα στο Χόρτο', en: 'Now in Horto', de: 'Jetzt in Horto', fr: 'En ce moment à Horto' },
    temp: 24,
    sea_temp: 22,
    humidity: 58,
    wind_kmh: 12,
    description: { el: 'Λιακάδα με νότιο αεράκι', en: 'Sunny with southern breeze', de: 'Sonnig mit Südwind', fr: 'Ensoleillé, brise du sud' },
  },

  // ============================================================
  // ✈️ ΑΠΟΣΤΑΣΕΙΣ (mock — θα συνδεθεί με Maps API αργότερα)
  // ============================================================
  travel: {
    volos_port:    { duration: '42 λεπτά', distance: '37.2 χλμ' },
    nea_anchialos: { duration: '58 λεπτά', distance: '54.8 χλμ' },
  },

  // ============================================================
  // 🔐 ADMIN PASSWORD
  // ΑΛΛΑΞΤΕ ΤΟ ΠΡΙΝ ΤΟ ΑΝΕΒΑΣΕΤΕ!
  // ============================================================
  admin_password: 'myrsini2026',   // ← Αλλάξτε το!

};

// Θέματα χρωμάτων
const THEMES = {
  turquoise: {
    primary: '#1A3D5C', secondary: '#2B7A9E', accent: '#D4892A',
    accent_light: '#E8B86D', bg: '#F0FAFA', bg_warm: '#E2F4F0',
    text: '#122533', text_soft: '#2C4A5A',
  },
  navy: {
    primary: '#0D2B45', secondary: '#1B4965', accent: '#F4A261',
    accent_light: '#F9C48A', bg: '#E8F4F8', bg_warm: '#D8EEF4',
    text: '#0A1E2E', text_soft: '#1A3A54',
  },
  sunset: {
    primary: '#5C2D0A', secondary: '#A0522D', accent: '#E8943A',
    accent_light: '#F4B870', bg: '#FFF8F0', bg_warm: '#FFF0E0',
    text: '#3D1A08', text_soft: '#6B3D1E',
  },
  forest: {
    primary: '#1A3D2B', secondary: '#2D6A4F', accent: '#B8945F',
    accent_light: '#D4B274', bg: '#F0F8F4', bg_warm: '#E0F0E8',
    text: '#0F2519', text_soft: '#2A4D38',
  },
};

// Apply theme colors to CSS variables
function applyTheme() {
  const theme = SITE_CONFIG.theme === 'custom'
    ? SITE_CONFIG.custom_colors
    : THEMES[SITE_CONFIG.theme] || THEMES.turquoise;

  const root = document.documentElement;
  root.style.setProperty('--primary',      theme.primary);
  root.style.setProperty('--secondary',    theme.secondary);
  root.style.setProperty('--gold',         theme.accent);
  root.style.setProperty('--gold-light',   theme.accent_light);
  root.style.setProperty('--cream',        theme.bg);
  root.style.setProperty('--cream-warm',   theme.bg_warm);
  root.style.setProperty('--ink',          theme.text);
  root.style.setProperty('--ink-soft',     theme.text_soft);
  root.style.setProperty('--wood-dark',    theme.primary);
  root.style.setProperty('--wood-warm',    theme.secondary);
  root.style.setProperty('--stone',        theme.secondary);
  root.style.setProperty('--aegean',       theme.secondary);
}

// Override BOOKED_DATES from config
function applyConfig() {
  // Apply theme
  applyTheme();

  // Override booked dates
  if (typeof BOOKED_DATES !== 'undefined') {
    BOOKED_DATES.archontiko = SITE_CONFIG.booked_dates.archontiko;
    BOOKED_DATES.thalassino = SITE_CONFIG.booked_dates.thalassino;
  }

  // Override apartment prices
  document.querySelectorAll('[data-book]').forEach(btn => {
    const apt = btn.dataset.book;
    if (SITE_CONFIG.apartments[apt]) {
      btn.dataset.price = SITE_CONFIG.apartments[apt].price_per_night;
    }
  });

  // Update price displays
  document.querySelectorAll('.stay-card__price').forEach((el, i) => {
    const apt = i === 0 ? 'archontiko' : 'thalassino';
    const price = SITE_CONFIG.apartments[apt].price_per_night;
    const small = el.querySelector('small');
    el.innerHTML = '';
    el.textContent = `€${price} `;
    if (small) el.appendChild(small);
  });

  // Update weather
  const w = SITE_CONFIG.weather;
  const tempEl = document.querySelector('.weather-card__temp');
  if (tempEl) tempEl.textContent = `${w.temp}°`;
  const detailEls = document.querySelectorAll('.weather-card__details > div');
  if (detailEls[0]) detailEls[0].childNodes[detailEls[0].childNodes.length-1].textContent = `${w.humidity}%`;
  if (detailEls[1]) detailEls[1].childNodes[detailEls[1].childNodes.length-1].textContent = `${w.wind_kmh} km/h`;
  if (detailEls[2]) detailEls[2].childNodes[detailEls[2].childNodes.length-1].textContent = `${w.sea_temp}°`;
}

// Check admin password
function checkAdminPassword(input) {
  return input === SITE_CONFIG.admin_password;
}
