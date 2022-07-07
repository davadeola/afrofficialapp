import assets from "./assets";

const data = [
  {
    id: "item1",
    name: "Ankara Jacket",
    price: "900",
    image: assets.design1,
    materials: [
      {
        id: "material1",
        image: assets.material1,
      },
      {
        id: "material2",
        image: assets.material2,
      },
      {
        id: "material3",
        image: assets.material3,
      },
      {
        id: "material4",
        image: assets.material4,
      },
    ],
  },
  {
    id: "item2",
    name: "Ankara Jacket",
    price: "900",
    image: assets.design2,
    materials: [
      {
        id: "material1",
        image: assets.material1,
      },
      {
        id: "material2",
        image: assets.material2,
      },
      {
        id: "material3",
        image: assets.material3,
      },
      {
        id: "material4",
        image: assets.material4,
      },
    ],
  },
  {
    id: "item3",
    name: "Ankara Jacket",
    price: "900",
    image: assets.design3,
    materials: [
      {
        id: "material1",
        image: assets.material1,
      },
      {
        id: "material4",
        image: assets.material4,
      },
    ],
  },
  {
    id: "item4",
    name: "Ankara Jacket",
    price: "900",
    image: assets.design4,
    materials: [
      {
        id: "material1",
        image: assets.material1,
      },
    ],
  },
];

const categories = [
  { name: "Women's", image: assets.womenImage },
  { name: "Men's", image: assets.menImage },
  { name: "Girls'", image: assets.girlImage },
  { name: "Boys'", image: assets.boyImage },
];

export { data };
