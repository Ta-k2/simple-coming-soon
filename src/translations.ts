type Lang = 'nl' | 'en';
type T = Record<Lang, string>;

export const t = {
  // ── Header / Navigation ──────────────────────────────────────────
  header: {
    nav: {
      hetDrankje: { nl: 'Het Drankje', en: 'The Drink' } as T,
      ontstaan: { nl: 'Ontstaan', en: 'Origin' } as T,
      voorWie: { nl: 'Voor Wie', en: 'For Who' } as T,
      contact: { nl: 'Contact', en: 'Contact' } as T,
      hetVerhaal: { nl: 'Het Verhaal', en: 'The Story' } as T,
    },
    menuOpen: { nl: 'Menu openen', en: 'Open menu' } as T,
    naarBoven: { nl: 'Naar boven', en: 'Back to top' } as T,
    voelJeInVerbinding: { nl: 'Voel je in verbinding', en: 'Feel the connection' } as T,
  },

  // ── IntroFade ────────────────────────────────────────────────────
  intro: {
    tagline: { nl: 'Helder aanwezig.', en: 'Clearly present.' } as T,
  },

  // ── Hero (App.tsx home section) ──────────────────────────────────
  hero: {
    tagline: { nl: 'Helder aanwezig.', en: 'Clearly present.' } as T,
    subtitle: {
      nl: 'A herbal tonic with saffraan at its heart',
      en: 'A herbal tonic with saffron at its heart',
    } as T,
    bottleAlt: { nl: 'AURA11 flesje', en: 'AURA11 bottle' } as T,
    description: {
      nl: 'Een sprankelende saffraan tonic voor rust, focus en helderheid. Zonder cafeïne of alcohol.',
      en: 'A sparkling saffron tonic for calm, focus and clarity. Without caffeine or alcohol.',
    } as T,
    cta: { nl: 'Ontdek', en: 'Discover' } as T,
  },

  // ── MarqueeBand ──────────────────────────────────────────────────
  marquee: {
    items: {
      nl: ['Saffraan', 'Helderheid', 'Rust', 'Focus', 'Aanwezigheid', 'Balans', 'Goud', 'Ritueel'],
      en: ['Saffron', 'Clarity', 'Calm', 'Focus', 'Presence', 'Balance', 'Gold', 'Ritual'],
    },
  },

  // ── Het Drankje ──────────────────────────────────────────────────
  hetDrankje: {
    label: { nl: 'Het drankje', en: 'The drink' } as T,
    bottleAlt: { nl: 'AURA11 saffraan tonic flesje', en: 'AURA11 saffron tonic bottle' } as T,
    intro1: {
      nl: 'Een sprankelende saffraan tonic.\nHelder. Goud. Aanwezig.',
      en: 'A sparkling saffron tonic.\nClear. Gold. Present.',
    } as T,
    specs200ml: { nl: '200 ml', en: '200 ml' } as T,
    specs30mg: { nl: '30 mg saffraan', en: '30 mg saffron' } as T,
    specsZorgvuldig: { nl: 'zorgvuldig samengesteld.', en: 'carefully composed.' } as T,
    specsPerFlesje: { nl: 'per flesje.', en: 'per bottle.' } as T,
    specsKcal: { nl: '22 kcal. Cafeïnevrij. Alcoholvrij.', en: '22 kcal. Caffeine free. Alcohol free.' } as T,
    tagline: {
      nl: 'Niet gemaakt om op te vallen.\nMaar om te voelen.',
      en: 'Not made to stand out.\nBut to be felt.',
    } as T,
    pricePerBottle: { nl: 'per fles', en: 'per bottle' } as T,
    trialBox: { nl: 'Proefbox 6 flesjes · €29,70', en: 'Trial box 6 bottles · €29.70' } as T,
    cta: { nl: 'Binnenkort', en: 'Coming soon' } as T,
  },

  // ── Ontstaan ─────────────────────────────────────────────────────
  ontstaan: {
    label: { nl: 'Ontstaan van AURA11', en: 'Origin of AURA11' } as T,
    heading: { nl: 'Waar de tijd vertraagt', en: 'Where time slows down' } as T,
    p1: {
      nl: 'AURA11 is niet ontstaan vanuit een businessplan.\nMaar vanuit een persoonlijke frustratie.',
      en: 'AURA11 did not start from a business plan.\nIt started from a personal frustration.',
    } as T,
    p2: {
      nl: 'Cafeïne gaf energie. Maar geen helderheid.\nFocus kwam met onrust. Energie met een crash.',
      en: 'Caffeine gave energy. But no clarity.\nFocus came with restlessness. Energy with a crash.',
    } as T,
    p3: {
      nl: 'Wat hij miste kon hij niet benoemen.\nDus ging hij op zoek. Niet verder. Maar terug.',
      en: 'What he was missing, he could not name.\nSo he went searching. Not further. But back.',
    } as T,
    p4: {
      nl: 'Naar eenvoud. Naar rust. Naar aandacht.',
      en: 'To simplicity. To calm. To attention.',
    } as T,
    p5: {
      nl: 'Daar vond hij saffraan.',
      en: 'There he found saffron.',
    } as T,
    cta: { nl: 'Lees het verhaal', en: 'Read the story' } as T,
  },

  // ── Verhaal van Saffraan ─────────────────────────────────────────
  verhaalSaffraan: {
    label: { nl: 'Het verhaal van saffraan', en: 'The story of saffron' } as T,
    p1: {
      nl: 'Saffraan gaat meer dan 3000 jaar terug in de geschiedenis',
      en: 'Saffron goes back more than 3000 years in history',
    } as T,
    p2: {
      nl: 'Gebruikt door koningen, genezers en culturen over de hele wereld',
      en: 'Used by kings, healers and cultures around the world',
    } as T,
    p3: {
      nl: 'Niet alleen om zijn smaak',
      en: 'Not just for its taste',
    } as T,
    p4: {
      nl: 'maar om zijn bijzondere eigenschappen',
      en: 'but for its extraordinary properties',
    } as T,
    p5: {
      nl: 'Het goud van zijn tijd',
      en: 'The gold of its time',
    } as T,
    p6: { nl: 'Zeldzaam', en: 'Rare' } as T,
    p7: { nl: 'Met de hand geoogst', en: 'Harvested by hand' } as T,
    p8: {
      nl: 'Voor één kilo zijn ongeveer 150.000 bloemen nodig',
      en: 'One kilogram requires approximately 150,000 flowers',
    } as T,
    p9: { nl: 'Allemaal met de hand', en: 'All by hand' } as T,
    p10: { nl: 'Met aandacht', en: 'With care' } as T,
    p11: {
      nl: 'Al eeuwen gewaardeerd om de rust en helderheid die mensen erin ervaren',
      en: 'Valued for centuries for the calm and clarity people experience in it',
    } as T,
    p12: {
      nl: 'AURA11 draagt die erfenis verder',
      en: 'AURA11 carries that legacy forward',
    } as T,
  },

  // ── WatJeErvaart ─────────────────────────────────────────────────
  watJeErvaart: {
    label: { nl: 'Waarom AURA11', en: 'Why AURA11' } as T,
    heading: { nl: 'Rust. Helderheid. Aanwezigheid.', en: 'Calm. Clarity. Presence.' } as T,
    intro: {
      nl: 'Wat je ervaart is geen harde stimulatie, maar een rustig en verfijnd moment in je dag.',
      en: 'What you experience is not hard stimulation, but a calm and refined moment in your day.',
    } as T,
    introItalic: {
      nl: 'rustig en verfijnd moment',
      en: 'calm and refined moment',
    } as T,
    cards: [
      {
        icon: '✦',
        title: { nl: 'Calm energy', en: 'Calm energy' } as T,
        desc: {
          nl: 'Zachte energie zonder cafeïne of onrust. Voelt als wakker zijn zonder spanning.',
          en: 'Gentle energy without caffeine or restlessness. Feels like being awake without tension.',
        } as T,
      },
      {
        icon: '◈',
        title: { nl: 'Mental clarity', en: 'Mental clarity' } as T,
        desc: {
          nl: 'Saffraan wordt traditioneel gebruikt in momenten van focus en balans — al eeuwenlang.',
          en: 'Saffron has traditionally been used in moments of focus and balance — for centuries.',
        } as T,
      },
      {
        icon: '❋',
        title: { nl: 'Pure ingredients', en: 'Pure ingredients' } as T,
        desc: {
          nl: 'Verfijnde botanicals met saffraan als hart. Geen kunstmatige toevoegingen.',
          en: 'Refined botanicals with saffron at its heart. No artificial additives.',
        } as T,
      },
      {
        icon: '◎',
        title: { nl: 'No crash', en: 'No crash' } as T,
        desc: {
          nl: 'Geen piek. Geen dip. Alleen rustige aanwezigheid die blijft.',
          en: 'No peak. No dip. Just quiet presence that stays.',
        } as T,
      },
    ],
    outro: {
      nl: 'En soms... gewoon een kleine glimlach.',
      en: 'And sometimes... just a little smile.',
    } as T,
  },

  // ── Reviews ──────────────────────────────────────────────────────
  reviews: {
    label: { nl: 'Ervaringen', en: 'Experiences' } as T,
    expandMore: { nl: 'Lees meer', en: 'Read more' } as T,
    expandLess: { nl: 'Minder lezen', en: 'Read less' } as T,
    prevAriaLabel: { nl: 'Vorige review', en: 'Previous review' } as T,
    nextAriaLabel: { nl: 'Volgende review', en: 'Next review' } as T,
    items: [
      {
        short: {
          nl: 'Naast de heerlijke smaak spreekt het verhaal achter AURA11 mij erg aan. De werking van saffraan heb ik zelf ervaren als ontspannend.',
          en: 'Besides the delicious taste, the story behind AURA11 really speaks to me. I have personally experienced the effect of saffron as relaxing.',
        } as T,
        full: {
          nl: 'Ik heb altijd een grote interesse gehad in een gezonde levensstijl vanuit een holistische benadering van voeding. Ik vind het belangrijk om bewust om te gaan met wat ik in mijn lichaam stop en wat dat met mijn lichaam doet.\n\nDaarom was ik meteen geïnteresseerd in Aura toen ik erover hoorde omdat hier saffraan in zit. Ik ben ervan overtuigd dat kruiden een positieve werking kunnen hebben op het lichaam. Naast dat Aura een heerlijke smaak heeft en een goed alternatief is voor gewone frisdrank, spreekt het verhaal achter Aura mij ook erg aan. Ook de werking van saffraan in het drankje spreekt mij aan en heb ik zelf ervaren als ontspannend.',
          en: 'I have always had a great interest in a healthy lifestyle from a holistic approach to nutrition. I think it is important to be mindful of what I put in my body and what it does to my body.\n\nThat is why I was immediately interested in Aura when I heard about it because it contains saffron. I am convinced that herbs can have a positive effect on the body. Besides that Aura has a delicious taste and is a good alternative to regular soft drinks, the story behind Aura also really speaks to me. The effect of saffron in the drink also appeals to me and I have personally experienced it as relaxing.',
        } as T,
        author: { nl: 'Merrel W.', en: 'Merrel W.' } as T,
      },
      {
        short: {
          nl: 'Met elke slok voel ik de ruis wegtrekken. Wat overblijft? Ik, helder en thuis bij mezelf.',
          en: 'With every sip I feel the noise fade away. What remains? Me, clear and at home with myself.',
        } as T,
        full: {
          nl: 'Een heerlijk en verfrissend drankje. Met elke slok voel ik de ruis wegtrekken. Wat overblijft? Ik, helder en thuis bij mezelf.',
          en: 'A delicious and refreshing drink. With every sip I feel the noise fade away. What remains? Me, clear and at home with myself.',
        } as T,
        author: { nl: 'Makiz H.', en: 'Makiz H.' } as T,
      },
      {
        short: {
          nl: 'Geen piek of onrustig gevoel — meer een soort heldere focus en ontspanning tegelijk. Verrassend lekkere drank die je net dat beetje extra balans geeft.',
          en: 'No peak or restless feeling — more a kind of clear focus and relaxation at the same time. Surprisingly delicious drink that gives you that extra bit of balance.',
        } as T,
        full: {
          nl: 'Ik was eerlijk gezegd een beetje sceptisch toen ik Aura11 voor het eerst probeerde. Er zijn tegenwoordig zoveel "functionele" drankjes op de markt dat het lastig is om iets te vinden dat echt iets toevoegt. Maar dit drankje heeft me positief verrast.\n\nDe smaak is fris en prettig – niet te zoet en juist lekker licht. Wat ik vooral merkte, is dat het een fijne, rustige energie geeft. Geen piek of onrustig gevoel maar meer een soort heldere focus en ontspanning tegelijk.\n\nPerfect voor drukke dagen waarop je scherp wilt blijven, maar ook wat meer rust in je hoofd kunt gebruiken. Na een paar keer gebruiken merkte ik dat het echt een momentje voor mezelf werd.\n\nKort gezegd: een verrassend lekkere drank die je net dat beetje extra balans en energie geeft. Wat mij betreft zeker een aanrader als je op zoek bent naar iets dat verder gaat dan een standaard drankje.',
          en: 'To be honest, I was a bit skeptical when I first tried Aura11. There are so many "functional" drinks on the market nowadays that it is hard to find something that truly adds value. But this drink pleasantly surprised me.\n\nThe taste is fresh and pleasant – not too sweet and just nicely light. What I especially noticed is that it gives a nice, calm energy. No peak or restless feeling but more a kind of clear focus and relaxation at the same time.\n\nPerfect for busy days when you want to stay sharp, but could also use some more calm in your head. After a few uses I noticed it really became a moment for myself.\n\nIn short: a surprisingly delicious drink that gives you that extra bit of balance and energy. As far as I am concerned, definitely recommended if you are looking for something that goes beyond a standard drink.',
        } as T,
        author: { nl: 'Tim R.', en: 'Tim R.' } as T,
      },
      {
        short: {
          nl: 'Je proeft gewoon dat iemand hier de tijd voor heeft genomen. Geen haastwerk, maar gewoon aandacht voor wat je drinkt.',
          en: 'You can simply taste that someone took the time for this. No rush, just attention for what you drink.',
        } as T,
        full: {
          nl: 'Je proeft gewoon dat iemand hier de tijd voor heeft genomen. Geen haastwerk, maar gewoon aandacht voor wat je drinkt. Het voelt meteen rustiger vanbinnen, zonder dat je suf wordt. Je hoofd wordt er helder van, op een stille manier.',
          en: 'You can simply taste that someone took the time for this. No rush, just attention for what you drink. It immediately feels calmer inside, without making you drowsy. Your mind becomes clear, in a quiet way.',
        } as T,
        author: { nl: 'Mohsen K.', en: 'Mohsen K.' } as T,
      },
    ],
  },

  // ── VoorWie ──────────────────────────────────────────────────────
  voorWie: {
    label: { nl: 'Voor wie', en: 'For who' } as T,
    heading: { nl: 'Voor wie is AURA11?', en: 'Who is AURA11 for?' } as T,
    accordionItems: [
      {
        text: { nl: 'Voor wie dieper wil werken. Zonder ', en: 'For those who want to work deeper. Without ' } as T,
        highlight: { nl: 'onrust', en: 'restlessness' } as T,
        rest: { nl: '.', en: '.' } as T,
        detail: {
          nl: 'AURA11 helpt je om in een staat van rustige focus te komen. Geen gejaagd gevoel, geen neerkomst — alleen heldere aanwezigheid die je laat presteren zonder jezelf te verliezen.',
          en: 'AURA11 helps you reach a state of calm focus. No rushed feeling, no comedown — just clear presence that lets you perform without losing yourself.',
        } as T,
      },
      {
        text: { nl: 'Voor wie voelt dat cafeïne te ', en: 'For those who feel caffeine is too ' } as T,
        highlight: { nl: 'hard', en: 'hard' } as T,
        rest: { nl: ' is.', en: '.' } as T,
        detail: {
          nl: 'Veel mensen zijn gevoelig voor cafeïne zonder het te beseffen. AURA11 biedt een zachter alternatief dat energie geeft zonder hartkloppingen, nervositeit of slaapverstoring.',
          en: 'Many people are sensitive to caffeine without realizing it. AURA11 offers a gentler alternative that gives energy without palpitations, nervousness or sleep disruption.',
        } as T,
      },
      {
        text: { nl: 'Voor wie bewust ', en: 'For those who consciously ' } as T,
        highlight: { nl: 'leeft', en: 'live' } as T,
        rest: { nl: '. En ', en: '. And choose ' } as T,
        highlight2: { nl: 'kwaliteit', en: 'quality' } as T,
        rest2: { nl: ' kiest.', en: '.' } as T,
        detail: {
          nl: 'Bewuste keuzes beginnen met wat je in je lichaam stopt. AURA11 is gemaakt met de beste ingrediënten, zonder compromissen — voor mensen die weten wat ze willen.',
          en: 'Conscious choices start with what you put in your body. AURA11 is made with the finest ingredients, without compromise — for people who know what they want.',
        } as T,
      },
      {
        text: { nl: 'Voor wie luxe ', en: 'For those who appreciate ' } as T,
        highlight: { nl: 'waardeert', en: 'luxury' } as T,
        rest: { nl: '. Met ', en: '. With ' } as T,
        highlight2: { nl: 'betekenis', en: 'meaning' } as T,
        rest2: { nl: '.', en: '.' } as T,
        detail: {
          nl: 'Luxe is meer dan een prijs. AURA11 combineert een premium smaakbeleving met een verhaal — saffraan als gouden draad, zorgvuldig samengesteld voor mensen die het verschil voelen.',
          en: 'Luxury is more than a price. AURA11 combines a premium taste experience with a story — saffron as a golden thread, carefully composed for people who feel the difference.',
        } as T,
      },
      {
        text: { nl: 'Voor wie ', en: 'For those who want to bring ' } as T,
        highlight: { nl: 'hoofd', en: 'mind' } as T,
        rest: { nl: ' en ', en: ' and ' } as T,
        highlight2: { nl: 'hart', en: 'heart' } as T,
        rest2: { nl: ' in balans wil brengen.', en: ' into balance.' } as T,
        detail: {
          nl: 'Saffraan wordt al eeuwen gebruikt om het gemoed te ondersteunen. AURA11 brengt die wijsheid samen met moderne smaakervaring, zodat je zowel mentaal als emotioneel tot rust kunt komen.',
          en: 'Saffron has been used for centuries to support the mind. AURA11 brings that wisdom together with a modern taste experience, so you can find calm both mentally and emotionally.',
        } as T,
      },
      {
        text: { nl: 'Voor wie ', en: 'For those who choose ' } as T,
        highlight: { nl: 'alcoholvrij', en: 'alcohol-free' } as T,
        rest: { nl: ' kiest. Zonder ', en: '. Without missing ' } as T,
        highlight2: { nl: 'iets', en: 'a thing' } as T,
        rest2: { nl: ' te missen.', en: '.' } as T,
        detail: {
          nl: 'Alcoholvrij hoeft niet saai te zijn. AURA11 geeft je de beleving van een verfijnd drankje — sprankelend, complex en bijzonder — zonder de bijwerkingen van alcohol.',
          en: 'Alcohol-free doesn\'t have to be boring. AURA11 gives you the experience of a refined drink — sparkling, complex and special — without the side effects of alcohol.',
        } as T,
      },
    ],
    quote1: { nl: 'Helder aanwezig.', en: 'Clearly present.' } as T,
    quote2: { nl: 'In balans met jezelf.', en: 'In balance with yourself.' } as T,
    cta: { nl: 'Ik wil AURA11 proberen', en: 'I want to try AURA11' } as T,
    ctaSmall: { nl: 'Eenvoudig. Helder.', en: 'Simple. Clear.' } as T,
  },

  // ── ProductInformatie ────────────────────────────────────────────
  productInfo: {
    label: { nl: 'Productinformatie', en: 'Product information' } as T,
    heading: { nl: 'Eenvoudig. Helder.', en: 'Simple. Clear.' } as T,
    specs: [
      { label: { nl: 'Inhoud', en: 'Content' } as T, value: { nl: '200 ml', en: '200 ml' } as T },
      { label: { nl: 'Type', en: 'Type' } as T, value: { nl: 'Sprankelende herbal tonic', en: 'Sparkling herbal tonic' } as T },
      { label: { nl: 'Saffraan', en: 'Saffron' } as T, value: { nl: '30 mg per fles', en: '30 mg per bottle' } as T },
      { label: { nl: 'Calorieën', en: 'Calories' } as T, value: { nl: '22 kcal', en: '22 kcal' } as T },
      { label: { nl: 'Cafeïne', en: 'Caffeine' } as T, value: { nl: 'Vrij van cafeïne', en: 'Caffeine free' } as T },
      { label: { nl: 'Alcohol', en: 'Alcohol' } as T, value: { nl: 'Alcoholvrij', en: 'Alcohol free' } as T },
    ],
    imageAlt: { nl: 'AURA11 saffraan tonic', en: 'AURA11 saffron tonic' } as T,
    cta: { nl: 'Binnenkort beschikbaar', en: 'Coming soon' } as T,
  },

  // ── De Maker (App.tsx founder strip) ─────────────────────────────
  maker: {
    label: { nl: 'De Maker', en: 'The Maker' } as T,
    founderAlt: {
      nl: 'Pourya Shoughiniya, oprichter en maker van AURA11',
      en: 'Pourya Shoughiniya, founder and maker of AURA11',
    } as T,
    title: { nl: 'Oprichter & Maker van AURA', en: 'Founder & Maker of AURA' } as T,
    bio: {
      nl: 'Pourya Shoughiniya zocht geen product.\nHij zocht rust. En vond saffraan.',
      en: 'Pourya Shoughiniya was not looking for a product.\nHe was looking for calm. And found saffron.',
    } as T,
    readStory: { nl: 'Lees het verhaal →', en: 'Read the story →' } as T,
  },

  // ── Name Meaning strip ───────────────────────────────────────────
  nameMeaning: {
    line: {
      nl: 'AU — goud & essentie · RA — levenskracht · AURA — aanwezigheid · 11 — alignment & balans',
      en: 'AU — gold & essence · RA — life force · AURA — presence · 11 — alignment & balance',
    } as T,
  },

  // ── ErvaartHetZelf ───────────────────────────────────────────────
  ervaartHetZelf: {
    label: { nl: 'Binnenkort beschikbaar', en: 'Coming soon' } as T,
    heading: { nl: 'Ervaar het zelf.', en: 'Experience it yourself.' } as T,
    desc: {
      nl: 'Laat je e-mailadres achter en ontvang als eerste bericht wanneer AURA11 beschikbaar is.',
      en: 'Leave your email and be the first to know when AURA11 is available.',
    } as T,
    placeholder: { nl: 'Je e-mailadres', en: 'Your email address' } as T,
    cta: { nl: 'Houd me op de hoogte', en: 'Keep me updated' } as T,
    success: {
      nl: 'Bedankt. Je hoort van ons.',
      en: 'Thank you. You\'ll hear from us.',
    } as T,
    error: {
      nl: 'Er ging iets mis. Probeer het later opnieuw.',
      en: 'Something went wrong. Please try again later.',
    } as T,
    errorInvalid: {
      nl: 'Vul een geldig e-mailadres in.',
      en: 'Please enter a valid email address.',
    } as T,
  },

  // ── Contact ──────────────────────────────────────────────────────
  contact: {
    label: { nl: 'Contact', en: 'Contact' } as T,
    heading: { nl: 'Neem contact op', en: 'Get in touch' } as T,
    desc: {
      nl: 'Heb je een vraag, opmerking of wil je samenwerken? Stuur ons een bericht.',
      en: 'Have a question, comment or want to collaborate? Send us a message.',
    } as T,
    nameLabel: { nl: 'Naam', en: 'Name' } as T,
    namePlaceholder: { nl: 'Je naam', en: 'Your name' } as T,
    emailLabel: { nl: 'E-mail', en: 'Email' } as T,
    emailPlaceholder: { nl: 'Je e-mailadres', en: 'Your email address' } as T,
    messageLabel: { nl: 'Bericht', en: 'Message' } as T,
    messagePlaceholder: { nl: 'Je bericht...', en: 'Your message...' } as T,
    cta: { nl: 'Verstuur', en: 'Send' } as T,
    success: {
      nl: 'Bedankt voor je bericht. We nemen zo snel mogelijk contact op.',
      en: 'Thank you for your message. We\'ll get back to you as soon as possible.',
    } as T,
    error: {
      nl: 'Er ging iets mis. Probeer het later opnieuw.',
      en: 'Something went wrong. Please try again later.',
    } as T,
  },

  // ── DeMensErachter ───────────────────────────────────────────────
  deMensErachter: {
    label: { nl: 'De mens erachter', en: 'The person behind it' } as T,
    heading: { nl: 'Ontstaan van AURA11', en: 'Origin of AURA11' } as T,
    p1: {
      nl: 'Ik maakte AURA11 niet vanuit een businessplan. Maar vanuit frustratie.',
      en: 'I didn\'t create AURA11 from a business plan. But from frustration.',
    } as T,
    p2: {
      nl: 'Cafeïne gaf me energie, maar geen rust. Alcohol gaf ontspanning, maar geen helderheid.',
      en: 'Caffeine gave me energy, but no calm. Alcohol gave relaxation, but no clarity.',
    } as T,
    p3: {
      nl: 'Ik wilde iets dat me hielp om aanwezig te zijn. Zonder bijwerkingen. Zonder gedoe.',
      en: 'I wanted something that helped me be present. Without side effects. Without fuss.',
    } as T,
    p4: {
      nl: 'Toen vond ik saffraan.',
      en: 'Then I found saffron.',
    } as T,
    signature: { nl: '— Pourya', en: '— Pourya' } as T,
  },

  // ── HetHart ──────────────────────────────────────────────────────
  hetHart: {
    label: { nl: 'Het hart', en: 'The heart' } as T,
    heading: { nl: 'Saffraan', en: 'Saffron' } as T,
    p1: {
      nl: 'Het hart van AURA11 is saffraan. Al meer dan 3000 jaar wordt het gewaardeerd — niet alleen om zijn smaak, maar om wat het doet.',
      en: 'The heart of AURA11 is saffron. For over 3000 years it has been valued — not just for its taste, but for what it does.',
    } as T,
    p2: {
      nl: 'Onderzoek toont aan dat saffraan kan bijdragen aan een kalmer gevoel, betere focus en meer mentale helderheid.',
      en: 'Research shows that saffron can contribute to a calmer feeling, better focus and more mental clarity.',
    } as T,
    p3: {
      nl: 'Geen wondermiddel. Maar een natuurlijk ingredient met een bijzondere geschiedenis.',
      en: 'No miracle cure. But a natural ingredient with a remarkable history.',
    } as T,
    p4: {
      nl: 'Eén flesje AURA11 bevat 30 mg premium saffraan — genoeg om het verschil te voelen.',
      en: 'One bottle of AURA11 contains 30 mg premium saffron — enough to feel the difference.',
    } as T,
  },

  // ── HetVerhaal ───────────────────────────────────────────────────
  hetVerhaal: {
    label: { nl: 'Het Verhaal', en: 'The Story' } as T,
    heading: { nl: 'Waar de tijd vertraagt', en: 'Where time slows down' } as T,
    p1: {
      nl: 'Op de berg werd alles stiller. Niet leeg. Maar rustig.',
      en: 'On the mountain, everything grew quieter. Not empty. But calm.',
    } as T,
    p2: {
      nl: 'Mensen spraken zachter. Luisterden echt. Alsof niemand haast had.',
      en: 'People spoke more softly. Truly listened. As if no one was in a hurry.',
    } as T,
    p3: {
      nl: 'Er hing iets in de lucht. Een kalme aandacht. Moeilijk te benoemen.',
      en: 'There was something in the air. A calm attention. Hard to name.',
    } as T,
    p4: {
      nl: 'Maar je voelde het meteen.',
      en: 'But you felt it immediately.',
    } as T,
    p5: {
      nl: 'Daar groeide saffraan.',
      en: 'That\'s where saffron grew.',
    } as T,
    p6: {
      nl: 'Niet als luxe. Maar als ritueel.',
      en: 'Not as luxury. But as ritual.',
    } as T,
    closingLine1: { nl: 'Gemaakt om te vertragen.', en: 'Made to slow down.' } as T,
    closingLine2: { nl: 'Helder aanwezig te zijn.', en: 'To be clearly present.' } as T,
    imageAlt: {
      nl: 'Rustige berglandschap waar de tijd vertraagt',
      en: 'Calm mountain landscape where time slows down',
    } as T,
  },

  // ── DeMensErachter images ────────────────────────────────────────
  deMensErachterImage: {
    alt: {
      nl: 'Rustige natuur, verbinding met de kern',
      en: 'Calm nature, connection with the core',
    } as T,
  },

  // ── HetHart images ──────────────────────────────────────────────
  hetHartImage: {
    alt: {
      nl: 'Saffraan draden — het gouden hart van AURA11',
      en: 'Saffron threads — the golden heart of AURA11',
    } as T,
  },

  // ── Loading states ──────────────────────────────────────────────
  loading: {
    pleaseWait: { nl: 'Even wachten...', en: 'Please wait...' } as T,
    patience: { nl: 'Even geduld...', en: 'Please wait...' } as T,
  },

  // ── ErvaartHetZelf extra ────────────────────────────────────────
  ervaartHetZelfExtra: {
    disclaimer: {
      nl: 'Geen spam. Geen verplichtingen. Alleen het echte moment.',
      en: 'No spam. No obligations. Just the real moment.',
    } as T,
  },

  // ── Footer ──────────────────────────────────────────────────────
  footer: {
    rights: { nl: 'Alle rechten voorbehouden.', en: 'All rights reserved.' } as T,
  },

  // ── Aria labels ─────────────────────────────────────────────────
  aria: {
    close: { nl: 'Sluiten', en: 'Close' } as T,
    instagramLink: { nl: 'Aura11 op Instagram', en: 'Aura11 on Instagram' } as T,
    menuOpen: { nl: 'Menu openen', en: 'Open menu' } as T,
    backToTop: { nl: 'Naar boven', en: 'Back to top' } as T,
    prevReview: { nl: 'Vorige review', en: 'Previous review' } as T,
    nextReview: { nl: 'Volgende review', en: 'Next review' } as T,
  },

  // ── EersteToegang ────────────────────────────────────────────────
  eersteToegang: {
    heading: { nl: 'Eerste toegang', en: 'Early access' } as T,
    desc: {
      nl: 'AURA11 is binnenkort beschikbaar. Laat je e-mail achter en wees er als eerste bij.',
      en: 'AURA11 will be available soon. Leave your email and be the first to know.',
    } as T,
    placeholder: { nl: 'Je e-mailadres', en: 'Your email address' } as T,
    cta: { nl: 'Houd me op de hoogte', en: 'Keep me updated' } as T,
    success: { nl: 'Bedankt. Je hoort van ons.', en: 'Thank you. You\'ll hear from us.' } as T,
    error: { nl: 'Er ging iets mis.', en: 'Something went wrong.' } as T,
  },

  // ── VerhaalPage ──────────────────────────────────────────────────
  verhaalPage: {
    back: { nl: 'Terug', en: 'Back' } as T,
    specsLine: {
      nl: '200 ml · sprankelende saffraan tonic · 30 mg saffraan · 22 kcal · cafeïnevrij · alcoholvrij',
      en: '200 ml · sparkling saffron tonic · 30 mg saffron · 22 kcal · caffeine free · alcohol free',
    } as T,
    cta: { nl: 'Lees het verhaal', en: 'Read the story' } as T,
  },
};
