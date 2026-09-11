/**
 * Centralized Multi-Client Digital Wedding E-Card Data Schema
 * Replace data objects in this file to generate a new wedding invitation.
 */

export const weddingData = {
  meta: {
    title: 'Wedding Invitation of Abdullah & Aamena',
    description: 'Join us in celebrating the Royal Muslim Wedding of Abdullah Ahmad and Aamena Noor.',
    ogImage: '/assets/images/couple-portrait.jpg',
    favicon: '/favicon.svg',
  },

  theme: {
    primaryColor: '#0B3D35',
    accentColor: '#C8A45D',
    backgroundColor: '#F8F3E7',
    textColor: '#17211F',
    headingFont: 'Cormorant Garamond',
    bodyFont: 'Plus Jakarta Sans',
  },

  groom: {
    firstName: 'Abdullah',
    lastName: 'Ahmad',
    fullName: 'Abdullah Ahmad',
    title: 'Son of Mr. Mohammad Tanveer & Mrs. Farida Begum',
    bio: 'Software Architect & Philanthropist',
    image: '/assets/images/photo5.jpg',
  },

  bride: {
    firstName: 'Aamena',
    lastName: 'Noor',
    fullName: 'Aamena Noor',
    title: 'Daughter of Dr. Tariq Mahmood & Mrs. Shahida Parveen',
    bio: 'Interior Designer & Artist',
    image: '/assets/images/photo4.jpg',
  },

  couple: {
    hashtag: '#AbdullahWedsAamena',
    monogram: 'A & A',
    mainHeading: 'The Royal Wedding',
    subHeading: 'Under the Blessings of Almighty Allah',
    bismillahText: 'بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
    quranVerseArabic: 'وَخَلَقْنَاكُمْ أَزْوَاجًا',
    quranVerseTranslation: '“And We created you in pairs.”',
    quranVerseReference: 'Surah An-Naba [78:8]',
    invitationText: 'We request the honor of your presence and blessings at the wedding ceremony celebrating the holy union of our beloved children.',
    heroImage: '/assets/images/couple-portrait.jpg',
    groomImage: '/assets/images/photo5.jpg',
    brideImage: '/assets/images/photo4.jpg',
  },

  schedule: {
    dayOfWeek: 'SUNDAY',
    dateIso: '2026-12-20',
    dateFormatted: '20 DECEMBER 2026',
    fullDateDisplay: 'Sunday, December 20, 2026',
    hijriDate: '11 Rajab 1448 AH',
    timeFormatted: '07:30 PM',
    timezone: 'Asia/Kolkata',
  },

  events: [
    {
      id: 'nikah',
      title: 'Sacred Nikah Ceremony',
      date: 'Sunday, Dec 20, 2026',
      time: '05:00 PM',
      venueName: 'Lala Kaka Municipal Community Hall',
      address: 'Dudheshwar Road, Ahmedabad, Gujarat',
      mapsUrl: 'https://maps.google.com/maps?q=Lala+Kaka+Municipal+Community+Hall,+Dudheshwar+Road,+Ahmedabad,+Gujarat+380004,+India',
      description: 'Solemnization of marriage following Islamic traditions.',
      dressCode: 'Royal Traditional / Formal White & Emerald',
    },
    {
      id: 'walima',
      title: 'Grand Walima Reception',
      date: 'Monday, Dec 21, 2026',
      time: '07:30 PM',
      venueName: 'Royal Imperial Banquet',
      address: 'VIP Road, Ahmedabad, Gujarat',
      mapsUrl: 'https://maps.google.com/maps?q=Royal+Imperial+Banquet,+VIP+Road,+Ahmedabad,+Gujarat',
      description: 'Celebratory feast and evening of blessings with family and friends.',
      dressCode: 'Black Tie / Elegant Traditional',
    },
  ],

  venue: {
    name: 'LALA KAKA\nMUNICIPAL COMMUNITY HALL',
    city: 'Ahmedabad, Gujarat',
    fullAddress: 'Dudheshwar Road\nAhmedabad, Gujarat · 380004',
    googleMapsQuery: 'Lala Kaka Municipal Community Hall, 2HVH+6XR, Near Shakti Nagar Cross Road, Outside Shahpur Darwaja, Dudheshwar Road, Ahmedabad, Gujarat 380004, India',
    googleMapsEmbedUrl: '',
    directionsHint: '',
  },

  family: {
    groomParents: 'Mr. & Mrs. Mohammad Tanveer',
    brideParents: 'Dr. & Mrs. Tariq Mahmood',
    hosts: ['Tanveer Family', 'Mahmood Family'],
  },

  story: {
    title: 'Our Journey',
    moments: [
      {
        id: 'beginning',
        label: 'THE BEGINNING',
        title: 'A Beautiful Start',
        text: 'Some stories begin quietly, with a simple moment, a beautiful connection, and two hearts slowly discovering something meant to last.',
        image: '/assets/images/photo1.jpg',
      },
      {
        id: 'journey',
        label: 'THE JOURNEY',
        title: 'Two Paths',
        text: 'With every passing moment, two different paths grew closer, bringing laughter, memories, understanding, and a bond that felt like home.',
        image: '/assets/images/photo2.jpg',
      },
      {
        id: 'promise',
        label: 'THE PROMISE',
        title: 'A Vow',
        text: 'Through every season of life, they choose each other, to walk together, to grow together, and to hold on to this beautiful promise.',
        image: '/assets/images/photo3.jpg',
      },
      {
        id: 'forever',
        label: 'FOREVER',
        title: 'New Chapter',
        text: 'And now, with grateful hearts, they begin a new chapter, where two lives become one journey, two hearts become one home, and forever begins today.',
        image: '/assets/images/photo6.jpg',
      }
    ]
  },

  sections: {
    showCoverCard: true,
    showPhotoRevealCard: true,
    showScheduleCard: true,
    showInvitationCard: true,
    showEventsCard: true,
    showRSVPCard: true,
  },

  galleryData: {
    title: 'MEMORIES',
    intro: 'Moments captured,\nmemories kept forever.',
    items: [
      {
        id: 'g1',
        image: '/assets/images/photo1.jpg',
        alt: 'Couple portrait looking at each other',
        caption: 'the beginning'
      },
      {
        id: 'g2',
        image: '/assets/images/photo2.jpg',
        alt: 'Elegant detail shot',
        caption: ''
      },
      {
        id: 'g3',
        image: '/assets/images/photo3.jpg',
        alt: 'Bride portrait',
        caption: 'a moment to remember'
      },
      {
        id: 'g4',
        image: '/assets/images/photo4.jpg',
        alt: 'Groom portrait',
        caption: ''
      },
      {
        id: 'g5',
        image: '/assets/images/photo5.jpg',
        alt: 'Couple walking together',
        caption: 'together'
      },
      {
        id: 'g6',
        image: '/assets/images/photo6.jpg',
        alt: 'Beautiful evening moment',
        caption: 'towards forever'
      }
    ]
  }
};

export default weddingData;
