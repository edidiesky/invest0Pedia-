import bcrypt from "bcryptjs";

const users = [
  {
    lastname: "admin",
    email: "admin@gmail.com",
    phone: "612 484 7315",
    firstname: "admin",
    address: "3449 Northland Alley",
    country: "Guatemala",
    postalCode: "16005",
    createdAt: "8/6/2022",
    password: bcrypt.hashSync("admin", 10),
    isAdmin: true,
  },
  {
    lastname: "McRobert",
    email: "emcrobert1@yolasite.com",
    phone: "639 404 8339",
    firstname: "Edin",
    address: "58 Merrick Parkway",
    country: "France",
    state: "Nord-Pas-de-Calais",
    postalCode: "59652 CEDEX",
    createdAt: "8/12/2022",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: false,
  },
];

export default users;
