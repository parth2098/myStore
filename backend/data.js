import bcrypt from "bcryptjs";
const data = {
  users: [
    {
      name: "Parth",
      email: "admin@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: true,
    },
    {
      name: "John",
      email: "user@example.com",
      password: bcrypt.hashSync("1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Toor Dal",
      category: "Grocery",
      subCategory: "Dal & Pulses",
      image:
        "https://5.imimg.com/data5/RO/UP/MY-5329745/tata-sampann-chana-dal-500x500.jpg",
      price: 99,
      sellPrice: 59,
      description:
        "The pigeon pea, also known as pigeonpea, red gram, tur, or gungo peas, gungu peas, gunga peas in Jamaica, is a perennial legume from the family Fabaceae. Since its domestication in the Indian subcontinent at least 3,500 years ago, its seeds have become a common food in Asia, Africa, and Latin America.",
      stock: 6,
    },

    {
      name: "Moong Dal",
      category: "Grocery",
      subCategory: "Dal & Pulses",
      image:
        "https://5.imimg.com/data5/RO/UP/MY-5329745/tata-sampann-chana-dal-500x500.jpg",
      price: 99,
      sellPrice: 59,
      description:
        "The pigeon pea, also known as pigeonpea, red gram, tur, or gungo peas, gungu peas, gunga peas in Jamaica, is a perennial legume from the family Fabaceae. Since its domestication in the Indian subcontinent at least 3,500 years ago, its seeds have become a common food in Asia, Africa, and Latin America.",
      stock: 20,
    },

    {
      name: "Channa Dal",
      category: "Grocery",
      subCategory: "Dal & Pulses",
      image:
        "https://5.imimg.com/data5/RO/UP/MY-5329745/tata-sampann-chana-dal-500x500.jpg",
      price: 99,
      sellPrice: 59,
      description:
        "The pigeon pea, also known as pigeonpea, red gram, tur, or gungo peas, gungu peas, gunga peas in Jamaica, is a perennial legume from the family Fabaceae. Since its domestication in the Indian subcontinent at least 3,500 years ago, its seeds have become a common food in Asia, Africa, and Latin America.",
      stock: 51,
    },

    {
      name: "Arhar Dal",
      category: "Grocery",
      subCategory: "Dal & Pulses",
      image:
        "https://5.imimg.com/data5/RO/UP/MY-5329745/tata-sampann-chana-dal-500x500.jpg",
      price: 99,
      sellPrice: 59,
      description:
        "The pigeon pea, also known as pigeonpea, red gram, tur, or gungo peas, gungu peas, gunga peas in Jamaica, is a perennial legume from the family Fabaceae. Since its domestication in the Indian subcontinent at least 3,500 years ago, its seeds have become a common food in Asia, Africa, and Latin America.",
      stock: 0,
    },

    {
      name: "Dal",
      category: "Grocery",
      subCategory: "Dal & Pulses",
      image:
        "https://5.imimg.com/data5/RO/UP/MY-5329745/tata-sampann-chana-dal-500x500.jpg",
      price: 99,
      sellPrice: 59,
      description:
        "The pigeon pea, also known as pigeonpea, red gram, tur, or gungo peas, gungu peas, gunga peas in Jamaica, is a perennial legume from the family Fabaceae. Since its domestication in the Indian subcontinent at least 3,500 years ago, its seeds have become a common food in Asia, Africa, and Latin America.",
      stock: 5,
    },

    {
      name: "Moong",
      category: "Grocery",
      subCategory: "Dal & Pulses",
      image:
        "https://5.imimg.com/data5/RO/UP/MY-5329745/tata-sampann-chana-dal-500x500.jpg",
      price: 99,
      sellPrice: 59,
      description:
        "The pigeon pea, also known as pigeonpea, red gram, tur, or gungo peas, gungu peas, gunga peas in Jamaica, is a perennial legume from the family Fabaceae. Since its domestication in the Indian subcontinent at least 3,500 years ago, its seeds have become a common food in Asia, Africa, and Latin America.",
      stock: 16,
    },

    {
      name: "Channa",
      category: "Grocery",
      subCategory: "Dal & Pulses",
      image:
        "https://5.imimg.com/data5/RO/UP/MY-5329745/tata-sampann-chana-dal-500x500.jpg",
      price: 999,
      sellPrice: 59,
      description:
        "The pigeon pea, also known as pigeonpea, red gram, tur, or gungo peas, gungu peas, gunga peas in Jamaica, is a perennial legume from the family Fabaceae. Since its domestication in the Indian subcontinent at least 3,500 years ago, its seeds have become a common food in Asia, Africa, and Latin America.",
      stock: 1,
    },

    {
      name: "Arhar",
      category: "Grocery",
      subCategory: "Dal & Pulses",
      image:
        "https://5.imimg.com/data5/RO/UP/MY-5329745/tata-sampann-chana-dal-500x500.jpg",
      price: 9,
      sellPrice: 59,
      description:
        "The pigeon pea, also known as pigeonpea, red gram, tur, or gungo peas, gungu peas, gunga peas in Jamaica, is a perennial legume from the family Fabaceae. Since its domestication in the Indian subcontinent at least 3,500 years ago, its seeds have become a common food in Asia, Africa, and Latin America.",
      stock: 100,
    },
  ],
};

export default data;
