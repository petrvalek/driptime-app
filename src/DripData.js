let DripData = [
  {
    name: "V60 Dripper",
    permalink: "v60-dripper",
    ratio: {
      normal: 17, // 1:xx
      strong: 15, // 1:xx
    },
    coffee: {
      normal: 14, // g
      strong: 16.5, // g
    },
    roughness: 3, // /5
    water: 250, // ml
    temperature: 95, // C
    steps: {
      totalTime: 150, // in sec -> 2,5 min
      instructions: [
        {
          timing: 20,
          content: "Dodatečně prolít horkou vodou papírový filtr.",
        },
        {
          timing: 10,
          content: "Výlít vodu z karafy",
        },
        {
          timing: 15,
          content:
            "Zalijeme do cca 50 ml/g a důkladně promícháme kávu s vodou.",
        },
      ],
    },
  },
  {
    name: "FrenchPress",
    permalink: "frenchpress",
    ratio: {
      normal: 17, // 1:xx
      strong: 15, // 1:xx
    },
    coffee: {
      normal: 16, // g
      strong: 20, // g
    },
    roughness: 3, // /5
    water: 250, // ml
    temperature: 95, // C
  },
  {
    name: "Moka Pot",
    permalink: "moka-pot",
    ratio: {
      normal: 16, // 1:xx
      strong: 14, // 1:xx
    },
    coffee: {
      normal: 13, // g
      strong: 15, // g
    },
    roughness: 4, // /5
    water: 220, // ml
    temperature: 99, // C
  },
  {
    name: "Aeropress",
    permalink: "aeropress",
    ratio: {
      normal: 16, // 1:xx
      strong: 14, // 1:xx
    },
    coffee: {
      normal: 15, // g
      strong: 18, // g
    },
    roughness: 5, // /5
    water: 250, // ml
    temperature: 95, // C
  },
];

export function getDripData() {
  return DripData;
}

export function getDripDataPermalink(permalink) {
  return DripData.find((drip) => drip.permalink === permalink);
}
