/* ============================================================================
   SIR OSAMA MUSANI · EconoBuz · Business · website settings
   THE ONLY FILE YOU EDIT. Every page reads it, so keep one copy beside them.
   Built by Nexlyr Solutions.

   Rule: a blank value hides that thing on the site. Nothing invented ever
   shows: no placeholder number, no made-up review, no fake result.
   ============================================================================ */

window.RA_CONFIG = {

  /* 1. WHO HE IS ------------------------------------------------------------ */
  name:      'Sir Osama Musani',
  shortName: 'Osama Musani',
  subject:   'Business',
  city:      'Karachi',

  /* 2. CONTACT -------------------------------------------------------------- */
  // WhatsApp: digits only, country code first. From his EconoBuz carousels.
  whatsapp:     '923313294318',
  phoneDisplay: '0331 3294318',
  email:        '',                // blank = hidden

  instagram:  'https://www.instagram.com/econobuz/',
  instagram2: 'https://www.instagram.com/osama_musani/',
  facebook:   'https://www.facebook.com/osama.musani.1',
  youtube:    '',                  // the EconoBuz channel URL, if he wants it linked
  linkedin:   '',                  // his LinkedIn profile URL, if he wants it shown

  /* Places he teaches. Remove a line to hide it. All from public posts. */
  campuses: [
    { name: 'EVO Institute', note: 'Founder · Bahadurabad', text: 'A Cambridge institute for O Levels, IGCSE, AS & A Levels. House 5, Block 3, BYJCH Society, Bahadurabad. 0323 2288077.' },
    { name: 'Success Institute', note: 'O & A Level Business · North Nazimabad', text: 'Business batches in Block L, North Nazimabad. 0333 4510668.' },
    { name: 'NexGen Ed', note: 'Founder', text: 'Next-generation education, from the same team.' },
    { name: 'Titan College', note: 'Business Studies', text: 'Joined the faculty as a Business Studies teacher.' },
    { name: 'Axora Academy', note: 'Business Studies', text: 'Business Studies classes for A and A* aims.' }
  ],
  online: true,

  /* 3. STUDENT PORTAL --------------------------------------------------------
     Static demo: the portal and admin panel run on sample data kept only in
     the visitor's own browser. Nothing is sent anywhere. */
  PORTAL_PREVIEW: true,
  MAX_DEVICES: 2,

  /* 4. REAL MATERIAL ONLY — empty lists hide their sections ---------------- */
  /* From the Candidate Marks Reports he posted (names hidden). */
  RESULTS: [
    { value: '40/40', label: 'AS Business 9609 · Paper 12', note: 'June 2026 series', name: 'Student M.' },
    { value: '40/40', label: 'AS Business 9609 · Paper 12', note: 'June 2026 series', name: 'Student A.' },
    { value: '40/40', label: 'AS Business 9609 · Paper 12', note: 'June 2026 series', name: 'Student F.' }
  ],
  /* { name: 'Ayesha K.', meta: 'AS 9609 · 2026', text: 'What they actually said.' } */
  REVIEWS: [],

  /* 5. SITE ----------------------------------------------------------------- */
  siteUrl:   'https://osama-musani.nexlyr.solutions',
  agency:    'Nexlyr Solutions',
  agencyUrl: 'https://nexlyr.solutions'
};

/* ============================================================================
   Plumbing. Nothing to edit below.
   ============================================================================ */
(function () {
  var C = window.RA_CONFIG;
  C.live = false;
  C.waUrl = function (text) {
    return 'https://wa.me/' + (C.whatsapp || '') + (text ? '?text=' + encodeURIComponent(text) : '');
  };
  C.waLabel = 'WhatsApp';
})();
