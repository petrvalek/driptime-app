let DripData = [
  {
    name: "V60 Dripper",
    permalink: "v60-dripper",
    ratio: {
      normal: "1:17",
      strong: "1:15",
    },
    coffee: {
      normal: "14", // g
      strong: "16.5", // g
    },
    roughness: "3", // /5
    water: "250", // ml
    temperature: "95", // C
  },
  {
    name: "FrenchPress",
    permalink: "frenchpress",
    ratio: {
      normal: "1:17",
      strong: "1:15",
    },
    coffee: {
      normal: "16", // g
      strong: "20", // g
    },
    roughness: "3", // /5
    water: "250", // ml
    temperature: "95", // C
  },
  {
    name: "Moka Pot",
    permalink: "moka-pot",
    ratio: {
      normal: "1:16",
      strong: "1:14",
    },
    coffee: {
      normal: "13", // g
      strong: "15", // g
    },
    roughness: "4", // /5
    water: "220", // ml
    temperature: "99", // C
  },
  {
    name: "Aeropress",
    permalink: "aeropress",
    ratio: {
      normal: "1:16",
      strong: "1:14",
    },
    coffee: {
      normal: "15", // g
      strong: "18", // g
    },
    roughness: "5", // /5
    water: "250", // ml
    temperature: "95", // C
  },
];

export function getDripData() {
  return DripData;
}

export function getDripDataPermalink(permalink) {
  return DripData.find((drip) => drip.permalink === permalink);
}
