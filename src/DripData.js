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
    roughnessLabel: "Medium",
    water: 250, // ml
    temperature: 95, // C
    steps: {
      totalTime: 320, // in sec -> 5,20 min
      instructions: [
        {
          timing: 10,
          content: "We pour the coffee into the FrenchPress.",
        },
        {
          timing: 10,
          content:
            "Pour all the water at once quickly, ensuring all grounds are wet",
        },
        {
          timing: 230,
          content: "Place plunger screen below this surface of the coffee",
        },
        {
          timing: 10,
          content: "Plunge the filter screen gently",
        },
        {
          timing: 60,
          content: "Wait one minute for coffee particles to settle, and serve",
        },
      ],
    },
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
    steps: {
      totalTime: 85, // in sec -> 1,25 min
      instructions: [
        {
          timing: 5,
          content: "Fill the bottom of moka pot with boiling water",
        },
        {
          timing: 5,
          content: "Fill the filter basket with ground coffee",
        },
        {
          timing: 10,
          content: "Insert the filter (grounds side up) and cover the moka",
        },
        {
          timing: 40,
          content: "Set the pot on the stove over a low-to-medium heat",
        },
        {
          timing: 15,
          content:
            "When the coffee bubbles and spurts, remove the Moka Pot from the stove",
        },
        {
          timing: 10,
          content: "Cool down the Moka Pot with cold water",
        },
      ],
    },
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
    steps: {
      totalTime: 95, // in sec -> 1,35 min
      instructions: [
        {
          timing: 10,
          content: "Pour 30ml (1 oz) wetting all the grounds",
        },
        {
          timing: 20,
          content: "Wait, allowing the coffee to bloom",
        },
        {
          timing: 10,
          content: "Pour 220ml (7.5 oz) more into the chamber",
        },
        {
          timing: 10,
          content: "Use the stirrer in a circular motion",
        },
        {
          timing: 30,
          content: "Secure cap, place cup on top and flip the aeropress",
        },
        {
          timing: 15,
          content: "Plunge until hissing sound",
        },
      ],
    },
  },
];

export function getDripData() {
  return DripData;
}

export function getDripDataPermalink(permalink) {
  return DripData.find((drip) => drip.permalink === permalink);
}
