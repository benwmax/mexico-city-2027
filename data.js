// Trip content. Edit this file to update the site. No sensitive info here (no passport or confirmation numbers).
window.TRIP = {
  start: "2027-10-21",
  end: "2027-10-26",
  updated: "2026-10-11",

  status: [
    { label: "Dates", value: "Leaning Oct 21 to 26, 2027", tone: "warn" },
    { label: "Flights", value: "Everyone books their own", tone: "" },
    { label: "Hotel", value: "Same hotel, one room per couple", tone: "" }
  ],

  decided: [
    "We all fly from Dallas (DFW), ideally on the same flight.",
    "We stay at the same hotel, with a separate room for each couple. Everyone books their own flights and room.",
    "We are skipping Formula 1 Grand Prix week (Oct 28 to Nov 1) because of crowds and cost."
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
        "We fly home before the F1 crowds and prices arrive around Oct 28.",
        "Thursday out and Tuesday back avoids the priciest flight days."
      ],
      cost: "About $2,200 to $4,100 per couple, all in"
    },
    {
      name: "Wed Nov 3 to Mon Nov 8, 2027",
      tag: "Backup",
      why: [
        "Lower prices and far smaller crowds after the holiday.",
        "Some altars stay up, and the alebrijes remain on Reforma until about Nov 8.",
        "The trade-off is that we miss the build-up and the holiday itself."
      ],
      cost: "Likely a bit cheaper than the recommended dates"
    },
    {
      name: "Oct 28 to Nov 2, 2027",
      tag: "Skipping",
      why: [
        "The Mexico City Grand Prix is Oct 29 to 31, on the same weekend as Día de Muertos.",
        "Expect the highest hotel and flight prices of the whole fall, plus the biggest crowds."
      ],
      cost: "About $2,400 to $4,300 per couple, or more"
    }
  ],

  flights: {
    summary: "Dallas is one of the best-served routes to Mexico City: about 7 nonstops a day, roughly 3 hours.",
    airlines: [
      ["American Airlines", "4 to 5 nonstops a day", "Most flexible if a flight gets cancelled"],
      ["Aeromexico", "1 nonstop a day", ""],
      ["Volaris", "1 nonstop a day", "Low-cost, so bags and seats cost extra"]
    ],
    fares: [
      ["Late Sept to mid Oct", "$180 to $350"],
      ["Oct 20 to 27", "$250 to $400"],
      ["Oct 28 to Nov 3 (F1 + Muertos)", "$400 to $700"],
      ["Nov 3 to 20", "$200 to $350"]
    ],
    tips: [
      "Search for 6 seats, then for 2. If the price jumps at 6, the cheapest fare has fewer than six seats left, so book the same flight as two or three reservations.",
      "Skip Basic Economy if you want to sit together.",
      "Book about 3 to 6 months out for non-holiday dates. Set a Google Flights alert for DFW to MEX now.",
      "Tuesday, Wednesday and Saturday are usually the cheapest days to fly."
    ],
    booking: "Everyone books their own flights. Try to land on the same flight if you can."
  },

  hotels: {
    summary: "One hotel, three rooms. A hotel with 30 or more rooms is safer, since small guesthouses can sell out between bookings.",
    list: [
      { name: "Condesa DF", area: "Condesa", rate: "~$170 to $330", note: "40 rooms, rooftop over Parque España, quiet street, very walkable.", pick: true },
      { name: "Hotel Carlota", area: "Juárez", rate: "~$150 to $270", note: "36 rooms, pool, restaurant, close to Reforma." },
      { name: "Casa Decu", area: "Condesa / Roma", rate: "~$110 to $190", note: "Best value, rooftop bar. Only 16 rooms, so book all three the same day." },
      { name: "Camino Real Polanco", area: "Polanco", rate: "~$240 to $480", note: "715 rooms, always has availability, elevators, pools, full service." },
      { name: "Las Alcobas", area: "Polanco", rate: "~$320 to $650", note: "Splurge: intimate luxury with a spa." }
    ],
    tips: [
      "Check that three rooms are open for our exact dates, then all three couples book on the same day with free cancellation.",
      "Book the same room type, then email the hotel all three confirmation numbers and ask for rooms near each other.",
      "Confirm there is an elevator. Mexico City sits at 7,350 ft, and stairs feel harder.",
      "Add roughly 20% for taxes on top of the rates shown."
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
      "Book flights and rooms (early 2027).",
      "Watch for the city's event dates (announced in summer 2027).",
      "Book a Xochimilco boat evening and any tours that sell out.",
      "Buy travel insurance with medical coverage and check phone plans."
    ]
  }
};
