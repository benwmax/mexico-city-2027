// Trip content. Edit this file to update the site. Plans only: no prices, no personal or booking details.
window.TRIP = {
  start: "2027-10-21",
  end: "2027-10-26",
  updated: "Oct 12, 2026",

  // Newest first. Add a line here whenever something changes.
  news: [
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
