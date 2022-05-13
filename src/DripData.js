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
    roughnessLabel: "Medium",
    water: 250, // ml
    temperature: 95, // C
    steps: {
      totalTime: 150, // in sec -> 2,5 min
      instructions: [
        {
          timing: 15,
          content: "Pour hot water over the paper filter.",
        },
        {
          timing: 10,
          content: "Pour out the water from the container.",
        },
        {
          timing: 10,
          content:
            "We pour the coffee into the V60 drip and the first preinfusion comes",
        },
        {
          timing: 15,
          content:
            "Pour it up to approx. 50 ml / g and thoroughly mix the coffee with water.",
        },
        {
          timing: 30,
          content:
            "After preinfusion, pour the coffee in the second pour in a circular motion to a total of 150 ml / g",
        },
        {
          timing: 30,
          content: "Waiting... coffee is dripping :-)",
        },
        {
          timing: 30,
          content:
            "In the third pour, we pour coffee again in a circular motion for as many cups as we need.",
        },
        {
          timing: 10,
          content: "Enjoy your brew and taste your coffee!",
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
