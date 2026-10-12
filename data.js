// Trip content. Edit this file to update the site. Plans only: no prices, no personal or booking details.
window.TRIP = {
  start: "2027-10-21",
  end: "2027-10-26",
  updated: "Oct 12, 2026",

  // Newest first. Add a line here whenever something changes.
  news: [
    { date: "Oct 12, 2026", title: "Around town guide added", body: "Airport transfers, rideshare, the Metro, and common scams to watch for." },
    { date: "Oct 12, 2026", title: "Experiences and food guides added", body: "Six things to do, where to eat, and what to book ahead. Note that museums like Casa Azul close on Mondays." },
    { date: "Oct 12, 2026", title: "The trip hub is live", body: "This is where the plan and every update will live." },
    { date: "Oct 11, 2026", title: "Dates narrowed down", body: "Leaning toward Oct 21 to 26, 2027, with Nov 3 to 8 as the backup." },
    { date: "Oct 11, 2026", title: "We're skipping Grand Prix week", body: "The Mexico City F1 race lands on Día de Muertos weekend in 2027, so we're going the week before." }
  ],

  // Questions the group still needs to settle. Remove one once it's decided.
  decisions: [
    {
      q: "Which dates?",
      options: ["Oct 21 to 26 (recommended)", "Nov 3 to 8 (backup)"],
      note: "Needed before anyone books flights or rooms."
    },
    {
      q: "Which hotel?",
      options: ["Condesa DF (top pick)", "Hotel Carlota", "Casa Decu", "Camino Real Polanco"],
      note: "Needed before anyone books rooms. We all stay at the same one."
    }
  ],

  decided: [
    "We all fly from Dallas (DFW), ideally on the same flight.",
    "We stay at the same hotel, with a separate room for each couple. Everyone books their own flights and room.",
    "We're skipping Formula 1 Grand Prix week (Oct 28 to Nov 1) because of crowds and cost."
  ],

  dates: [
    {
      name: "Thu Oct 21 to Tue Oct 26, 2027",
      tag: "Recommended",
      pick: true,
      why: [
        "Altars and marigold markets are going up around the city.",
        "The giant alebrije sculptures line Paseo de la Reforma.",
        "The Catrinas procession will likely be Sun Oct 24 (estimated from the 2026 pattern; the city confirms in summer 2027).",
        "We fly home before the F1 crowds arrive around Oct 28.",
        "Thursday out and Tuesday back avoids the busiest flight days."
      ]
    },
    {
      name: "Wed Nov 3 to Mon Nov 8, 2027",
      tag: "Backup",
      why: [
        "Far smaller crowds after the holiday.",
        "Some altars stay up, and the alebrijes remain on Reforma until about Nov 8.",
        "The trade-off is that we miss the build-up and the holiday itself."
      ]
    },
    {
      name: "Oct 28 to Nov 2, 2027",
      tag: "Skipping",
      why: [
        "The Mexico City Grand Prix is Oct 29 to 31, on the same weekend as Día de Muertos.",
        "Expect the biggest crowds and the highest prices of the whole fall."
      ]
    }
  ],

  flights: {
    summary: "Dallas is one of the best-served routes to Mexico City: about 7 nonstops a day, roughly 3 hours.",
    airlines: [
      ["American Airlines", "4 to 5 nonstops a day", "Most flexible if a flight gets cancelled"],
      ["Aeromexico", "1 nonstop a day", ""],
      ["Volaris", "1 nonstop a day", "Low-cost, so bags and seats cost extra"]
    ],
    tips: [
      "Search for 6 seats, then for 2. If the price jumps at 6, the cheapest fare has fewer than six seats left, so book the same flight as two or three reservations.",
      "Skip Basic Economy if you want to sit together.",
      "Book about 3 to 6 months out. Set a Google Flights alert for DFW to MEX now.",
      "Tuesday, Wednesday and Saturday are usually the cheapest days to fly."
    ],
    booking: "Everyone books their own flights. Try to land on the same flight if you can."
  },

  hotels: {
    summary: "One hotel, a room for each couple. A hotel with 30 or more rooms is safer, since small guesthouses can sell out between bookings.",
    list: [
      { name: "Condesa DF", area: "Condesa", note: "40 rooms, rooftop over Parque España, quiet street, very walkable.", pick: true },
      { name: "Hotel Carlota", area: "Juárez", note: "36 rooms, pool, restaurant, close to Reforma." },
      { name: "Casa Decu", area: "Condesa / Roma", note: "Great value with a rooftop bar. Only 16 rooms, so book all three the same day." },
      { name: "Camino Real Polanco", area: "Polanco", note: "715 rooms, always has availability, elevators, pools, full service." },
      { name: "Las Alcobas", area: "Polanco", note: "Splurge: intimate luxury with a spa." }
    ],
    tips: [
      "Check that three rooms are open for our exact dates, then all three couples book on the same day with free cancellation.",
      "Book the same room type, then email the hotel all three confirmation numbers and ask for rooms near each other.",
      "Confirm there is an elevator. Mexico City sits at 7,350 ft, and stairs feel harder.",
      "Add roughly 20% for taxes on top of the rates the hotel shows."
    ],
    booking: "Each couple books their own room at the same hotel."
  },

  // Experiences: "book" is when to lock it in. Closed days are checked against Oct 21 to 26, 2027.
  experiences: {
    summary: "Six things worth planning around. Mon Oct 25 is inside our dates, and the Anthropology Museum and Casa Azul are both closed Mondays, so those two go on other days.",
    list: [
      {
        name: "Teotihuacán pyramids",
        kind: "Day trip",
        when: "Open every day, 8am to 5pm (last entry 4:30pm)",
        how: "Plan on a half day. About 45 minutes by car, or a bus from the Terminal Norte every 20 minutes or so (cash only at the desk).",
        tips: [
          "Go early, before the heat and the tour buses.",
          "Hat, sunscreen, water and good shoes. There is almost no shade.",
          "A private car or Uber for six is easiest. Two cars, or a driver who waits, are worth pricing.",
          "Mon Oct 25 is a good day for it, since it is open when much of the city is closed."
        ],
        book: "Optional: a private driver or guide. Nothing sells out."
      },
      {
        name: "Frida Kahlo Museum (Casa Azul)",
        kind: "Museum",
        when: "Closed Mondays. Tue and Thu to Sun 10am to 6pm, Wed from 11am",
        how: "Coyoacán. Pair it with the neighborhood's market and plaza for the rest of the day.",
        tips: [
          "Timed tickets sold online only. No tickets at the door.",
          "Morning slots sell out first, so buy a week or more ahead.",
          "Buy from the official site. Resellers charge nearly double.",
          "Photos are fine in the garden. Inside the rooms needs a small photo permit, and no flash."
        ],
        book: "Book when tickets open, a couple of months out. Buy all six together on one booking."
      },
      {
        name: "National Anthropology Museum",
        kind: "Museum",
        when: "Closed Mondays. Tue to Sun 9am to 6pm",
        how: "Chapultepec Park. Allow 3 hours, and combine it with a walk in the park.",
        tips: [
          "The Aztec Sun Stone and the Maya halls are the highlights.",
          "Best done the day before Teotihuacán, for context.",
          "Hours can change, so check the official site before the trip."
        ],
        book: "No booking needed. Go on a weekday morning."
      },
      {
        name: "Xochimilco trajinera ride",
        kind: "Evening out",
        when: "Daily. Weekdays are far quieter than weekends",
        how: "Colorful flat boats on the canals, about 45 minutes from Condesa. One boat fits all six.",
        tips: [
          "Use Embarcadero Nuevo Nativitas or Las Flores. Ignore anyone who says it is closed.",
          "Boats are priced per boat, not per person, with a two-hour minimum. Agree on the price first.",
          "Bring cash. Mariachi, food and drinks float by and cost extra.",
          "You can bring your own food and drinks on board.",
          "Go before the Oct 23 to 24 weekend crowds, or on a weekday."
        ],
        book: "Walk up. No booking needed, but weekdays are better."
      },
      {
        name: "Lucha libre",
        kind: "Night out",
        when: "Arena México: Tue 7:30pm, Fri 8:30pm (the big show), Sun 5pm. Arena Coliseo: Sat 7:30pm",
        how: "A loud, funny, family-friendly wrestling night. About 3 hours.",
        tips: [
          "Fri Oct 22 is the best fit, with the biggest show of the week.",
          "Phones are fine, cameras are banned, and bags are checked. Bring cash.",
          "Take a rideshare home. The area gets dark and quiet late.",
          "Tours add tacos and mezcal and a mask, if you would rather have a guide."
        ],
        book: "Official tickets go on sale about 3 to 4 weeks ahead. Ringside seats sell out."
      },
      {
        name: "Historic center and the Zócalo",
        kind: "Walking day",
        when: "Any day. Quieter in the morning",
        how: "The cathedral, Templo Mayor ruins, Bellas Artes and Alameda Park, all within a short walk of each other.",
        tips: [
          "Altars and decorations are going up around the Zócalo during our dates.",
          "Pair it with lunch at Café de Tacuba, then the Catrinas procession on the evening of Sun Oct 24 (date estimated).",
          "Keep valuables zipped away in crowds."
        ],
        book: "No booking needed."
      }
    ],
    fit: {
      title: "How the days could fit",
      note: "A sketch only. The real day-by-day comes once the dates and hotel are final.",
      days: [
        ["Thu Oct 21", "Arrive, settle in Condesa, easy dinner nearby. Take it slow while we adjust to the altitude."],
        ["Fri Oct 22", "Historic center in the morning. Lucha libre in the evening."],
        ["Sat Oct 23", "Casa Azul and Coyoacán. Dinner somewhere special."],
        ["Sun Oct 24", "Anthropology Museum and Chapultepec. Catrinas procession in the evening."],
        ["Mon Oct 25", "Teotihuacán. Most museums are closed today, so this is the day to be out of the city."],
        ["Tue Oct 26", "Xochimilco boat ride in the morning, then fly home."]
      ]
    }
  },

  // Food: dishes to try, places to eat, and what to book.
  food: {
    summary: "Mexico City is one of the best eating cities anywhere. Most of it is cheap and casual, with a few dinners worth planning ahead for.",
    dishes: [
      ["Tacos al pastor", "Marinated pork shaved off a spinning spit, usually with pineapple. A night-time favorite."],
      ["Tacos de suadero and carnitas", "Soft beef and slow-simmered pork. The everyday taco, and the best value."],
      ["Tlacoyos", "Oval corn patties stuffed with beans, topped with cheese and salsa."],
      ["Tamales", "Steamed corn dough in a leaf. A breakfast food, sold from early morning."],
      ["Elotes and esquites", "Street corn on the cob or in a cup, with cream, cheese and chili."],
      ["Churros and conchas", "Churros at El Moro, and sweet bread (conchas) from any panadería."],
      ["Pan de muerto", "The sweet bread of the season. It appears in bakeries as the holiday nears."]
    ],
    eat: [
      { name: "Contramar", area: "Roma Norte", style: "Seafood lunch", note: "The famous whole grilled fish and tuna tostadas. Long, lively lunches. Weekends book up within hours.", book: "Reserve on Tock the day it opens, about 30 days out.", special: true },
      { name: "Pujol", area: "Polanco", style: "Fine dining", note: "The best-known tasting menu in Mexico, famous for its mole that has cooked for over a thousand days. The taco bar tasting is the easier way in.", book: "Reserve on Tock exactly 28 days out. Prime slots go in minutes.", special: true },
      { name: "Quintonil", area: "Polanco", style: "Fine dining", note: "Vegetable- and herb-led Mexican tasting menus. Across the street from Pujol.", book: "Reserve on Resy about 30 days out.", special: true },
      { name: "Rosetta", area: "Roma", style: "Italian-Mexican", note: "Set in a beautiful old house. Known for its chaya pasta. A relaxed dinner for six.", book: "Reserve on Resy 2 to 3 weeks out.", special: false },
      { name: "Máximo Bistrot", area: "Roma Norte", style: "Market bistro", note: "A French-leaning bistro with a menu that follows the market.", book: "Reserve directly, 1 to 2 weeks out.", special: false },
      { name: "Sud 777", area: "Pedregal", style: "Modern Mexican", note: "Regional dishes in a stunning modern space.", book: "Reserve directly by phone or website.", special: false },
      { name: "El Turix", area: "Polanco", style: "Yucatecan", note: "A tiny, beloved spot for cochinita pibil. Cash preferred.", book: "Walk in.", special: false },
      { name: "Café de Tacuba", area: "Centro", style: "Classic breakfast", note: "Open since 1912. A good stop after a morning in the historic center.", book: "Walk in.", special: false },
      { name: "El Cardenal", area: "Centro and Polanco", style: "Traditional breakfast", note: "Famous for classic Mexican breakfasts and hot chocolate.", book: "Walk in. Arrive early.", special: false },
      { name: "Expendio de Maíz", area: "Centro", style: "Corn and masa", note: "A short menu built around heirloom corn. Tortillas, tamales and atole.", book: "Walk in.", special: false }
    ],
    markets: [
      ["Mercado Roma", "A polished food hall in Roma. Easy for a group that can't agree."],
      ["Mercado de Coyoacán", "Tostadas and quesadillas, easy to pair with Casa Azul."],
      ["Mercado de San Juan", "Specialty and gourmet ingredients, a short ride from the historic center."],
      ["La Merced", "The huge traditional market. Best with a guide or a local."]
    ],
    stalls: [
      "El Vilsito (Narvarte) and El Huequito (Centro) for tacos al pastor.",
      "Los Cocuyos (Centro) for suadero and campechano tacos.",
      "Churrería El Moro for churros and hot chocolate.",
      "Tacos Hola El Güero (Condesa) is close to the top hotel pick."
    ],
    tips: [
      "Choose busy stalls with a steady crowd, and skip empty ones.",
      "Watch how the vendor handles food and money. Look for clean stalls away from traffic fumes.",
      "Ask the price first if it isn't posted. Customize freely: more or less salsa, onion and cilantro.",
      "Bring small bills and coins. Many stalls are cash only.",
      "Ease in on day one. A heavy night out at 7,350 ft hits harder than at home.",
      "Drink bottled or filtered water. Bagged ice from stores is generally fine.",
      "If anyone has dietary needs, tell us early so the group can plan restaurants around them."
    ],
    book: [
      "About 30 days out (late Sep 2027): Contramar, Pujol, Quintonil. Set a calendar reminder.",
      "2 to 3 weeks out: Rosetta and Máximo Bistrot.",
      "Everything else: just walk in."
    ]
  },

  // Getting around and staying safe. No prices on the site; they live in the research notes.
  around: {
    summary: "Mexico City is easy to get around and, with normal big-city habits, safe for visitors. For six of us with luggage, rideshare and official taxis do most of the work.",
    airport: {
      title: "From the airport to the hotel",
      steps: [
        "Use an official prepaid taxi. Buy the ticket at the Sitio or Taxi Autorizado booth inside arrivals, before the exit doors. Keep the receipt and give it to the driver.",
        "Six people with bags will need two taxis or a larger vehicle. Ask at the booth.",
        "Condesa is about 25 to 50 minutes away, depending on traffic.",
        "Skip anyone who approaches you in arrivals, the parking area or outside, and don't let anyone carry bags you didn't ask them to.",
        "Uber and DiDi pickups at the terminal were reported banned in March 2026 and may still be unreliable. Check the airport's current rules before we fly. Rideshare to the airport for the flight home is fine."
      ]
    },
    modes: [
      ["Uber and DiDi", "The default for most trips. Pay in the app, check the plate, and watch the route. Best at night and between neighborhoods. Two cars for six."],
      ["Metro", "Very cheap and fast for the historic center, but crowded. Avoid rush hour (7 to 9am, 6 to 8pm), keep valuables in front pockets, and don't flash your phone. Some cars are reserved for women."],
      ["Metrobús", "Bus lanes with their own stations. A good daytime option along main avenues, and a calmer pick than the Metro at rush hour."],
      ["Taxis", "Only official stands, hotel-booked taxis or app-based ones. Never hail one off the street at night."],
      ["Walking", "Condesa, Roma and the historic center are very walkable. After dark, stay in the neighborhood you're eating in and ride between areas."]
    ],
    scams: [
      ["Overpriced airport taxis", "Touts in arrivals quote far above the official fare. Use only the prepaid booth."],
      ["Rideshare cancellation tricks", "A driver cancels and asks for cash, or takes a long detour. Pay in the app only, and rebook if asked to pay off-app."],
      ["Pickpockets and phone grabs", "Worst at the Zócalo, Bellas Artes, Calle Madero and on the Metro. Use a zipped crossbody bag, and keep your phone off café tables."],
      ["Fake police", "Mostly after 10pm. Ask for a badge name and number, show a photocopy of the passport, and never unlock your phone or pay cash on the spot."],
      ["ATM trouble", "Use ATMs inside bank branches during business hours. Refuse any taxi detour to an ATM."]
    ],
    tips: [
      "Carry a photocopy of each passport, and leave the originals in the hotel safe.",
      "Take one card and a day's cash, not your whole wallet.",
      "Save the hotel's address and a few Spanish phrases in your phone.",
      "Share rides with the group by messaging plates and routes to one another.",
      "Drink bottled or filtered water, never from the tap.",
      "Some neighborhoods, such as Tepito and Doctores, are best left alone, and the airport area is best avoided at night. Lucha libre is in Doctores, so take a rideshare there and back."
    ]
  },

  guide: {
    events: [
      ["Alebrijes parade", "Mid Oct (likely Sat Oct 16)", "Giant painted creatures walk from the Zócalo to the Ángel. Free. They stay on display on Reforma until about Nov 8."],
      ["Catrinas procession", "Likely Sun Oct 24, evening", "Hundreds of people dressed as catrinas walk from the Ángel to the Zócalo. Free."],
      ["Main Día de Muertos parade", "Likely Sat Oct 30", "Falls after our trip, if the pattern holds."],
      ["Mixquic cemetery vigil", "Night of Nov 1", "Famous candlelit vigil. Outside our dates, and a long trip from the city."]
    ],
    notes: [
      "Altitude: Mexico City is 7,350 ft. Take it easy on day one, drink lots of water, and go light on alcohol at first.",
      "Getting around: Uber and DiDi are easy. The Metro and Metrobús are good for events, but avoid rideshare right after big events (surge pricing).",
      "Water: drink bottled or filtered water.",
      "Respect: ask permission before photographing people at altars or graves. Treat ofrendas as family rituals, not shows.",
      "Reservations: book popular restaurants for six 1 to 2 months ahead (Pujol, Contramar, Rosetta, Quintonil)."
    ],
    todo: [
      "Check that all six passports are valid (many airlines want 6 months left).",
      "Set a Google Flights alert for DFW to MEX.",
      "Pick the dates and the hotel.",
      "Book flights and rooms (early 2027).",
      "Watch for the city's event dates (announced in summer 2027).",
      "Book a Xochimilco boat evening and any tours that sell out.",
      "Buy travel insurance with medical coverage and check phone plans."
    ]
  }
};
