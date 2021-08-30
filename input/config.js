const fs = require("fs");
const width = 1000;
const height = 1000;
const dir = __dirname;
const rarity = [
  { key: "", val: "original" },
  { key: "_r", val: "rare" },
  { key: "_sr", val: "super rare" },
];

const addRarity = (_str) => {
  let itemRarity;
  rarity.forEach((r) => {
    if (_str.includes(r.key)) {
      itemRarity = r.val;
    }
  });
  return itemRarity;
};

const cleanName = (_str) => {
  let name = _str.slice(0, -4);
  rarity.forEach((r) => {
    name = name.replace(r.key, "");
  });
  return name;
};

const getElements = (path) => {
  return fs
    .readdirSync(path)
    .filter((item) => !/(^|\/)\.[^\/\.]/g.test(item))
    .map((i, index) => {
      return {
        id: index + 1,
        name: cleanName(i),
        fileName: i,
        rarity: addRarity(i),
      };
    });
};

const layers = [
  {
    id: 1,
    name: "background",
    location: `${dir}/background/`,
    elements: getElements(`${dir}/background/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 2,
    name: "beanColor",
    location: `${dir}/beanColor/`,
    elements: getElements(`${dir}/beanColor/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 3,
    name: "beanType",
    location: `${dir}/beanType/`,
    elements: getElements(`${dir}/beanType/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 4,
    name: "shadow",
    location: `${dir}/shadow/`,
    elements: getElements(`${dir}/shadow/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  {
    id: 5,
    name: "hat",
    location: `${dir}/hat/`,
    elements: getElements(`${dir}/hat/`),
    position: { x: 0, y: 0 },
    size: { width: width, height: height },
  },
  // {
  //   id: 6,
  //   name: "bottom lid",
  //   location: `${dir}/bottom lid/`,
  //   elements: getElements(`${dir}/bottom lid/`),
  //   position: { x: 0, y: 0 },
  //   size: { width: width, height: height },
  // },
  // {
  //   id: 7,
  //   name: "top lid",
  //   location: `${dir}/top lid/`,
  //   elements: getElements(`${dir}/top lid/`),
  //   position: { x: 0, y: 0 },
  //   size: { width: width, height: height },
  // },
];

module.exports = { layers, width, height };
