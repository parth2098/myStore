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
      name: "Two Free Vine Tomatoes",
      category: "Grocery",
      subCategory: "Dal & Pulses",
      image:
        "https://static.lufa.com/uploads/products/resized_690x430/12726_12726-Two-Free-Organic-Vine-Tomatoes-Serres-Royales.jpg",
      price: 50,
      sellPrice: 30,
      description:
        "Certified organic and greenhouse-grown. This is a new product on the Marketplace. Let us know what you think about it in the comments!",
      stock: 60,
    },

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
      stock: 20,
    },

    {
      name: "Grape Tomatoes",
      category: "Grocery",
      subCategory: "Dal & Pulses",
      image:
        "https://static.lufa.com/uploads/products/resized_690x430/7186_grape-tomatoes-Suntech-Greenhouses.jpg",
      price: 20,
      sellPrice: 10,
      description:
        "The pigeon pea, also known as pigeonpea, red gram, tur, or gungo peas, gungu peas, gunga peas in Jamaica, is a perennial legume from the family Fabaceae. Since its domestication in the Indian subcontinent at least 3,500 years ago, its seeds have become a common food in Asia, Africa, and Latin America.",
      stock: 51,
    },

    {
      name: "English Cucumber",
      category: "Grocery",
      subCategory: "Dal & Pulses",
      image:
        "https://static.lufa.com/uploads/products/resized_690x430/12627_265--265-Concombre-anglais-Serres-Lefort--1-.jpg",
      price: 52,
      sellPrice: 15,
      description:
        "The pigeon pea, also known as pigeonpea, red gram, tur, or gungo peas, gungu peas, gunga peas in Jamaica, is a perennial legume from the family Fabaceae. Since its domestication in the Indian subcontinent at least 3,500 years ago, its seeds have become a common food in Asia, Africa, and Latin America.",
      stock: 0,
    },

    {
      name: "Yellow Bell Pepper",
      category: "Grocery",
      subCategory: "Dal & Pulses",
      image:
        "https://static.lufa.com/uploads/products/resized_240x160/12630_356-yellow-pepper-serres-lefort.jpg",
      price: 100,
      sellPrice: 89,
      description:
        "This product is charged by weight. The weight of some products is approximate (for example, a 1 kg beef roast could actually weigh 1.1 kg). When this happens, we adjust the price in consequence. If your product was underweight, you’ll get a credit on your next order. If your product was overweight, the difference will be charged on your next order.",
      stock: 5,
    },

    {
      name: "Product Item",
      category: "Grocery",
      subCategory: "Dal & Pulses",
      image:
        "https://static.lufa.com/uploads/products/resized_690x430/11363_11363-2--Bio-Nutrinor.jpg",
      price: 50,
      sellPrice: 12,
      description:
        "Certified organic. red gram, tur, or gungo peas, gungu peas, gunga peas in Jamaica, is a perennial legume from the family Fabaceae. Since its domestication in the Indian subcontinent at least 3,500 years ago, its seeds have become a common food in Asia, Africa, and Latin America.",
      stock: 16,
    },

    {
      name: "Upbeet (organic vegetable protein smoothie)",
      category: "Grocery",
      subCategory: "Dal & Pulses",
      image:
        "https://static.lufa.com/uploads/products/resized_690x430/12540_-12540-Upbeet--organic-vegetable-protein-smoothie--DOSE.jpg",
      price: 999,
      sellPrice: 59,
      description:
        "The pigeon pea, also known as pigeonpea, red gram, tur, or gungo peas, gungu peas, gunga peas in Jamaica, is a perennial legume from the family Fabaceae. Since its domestication in the Indian subcontinent at least 3,500 years ago, its seeds have become a common food in Asia, Africa, and Latin America.",
      stock: 1,
    },

    {
      name: "Apple Juice",
      category: "Grocery",
      subCategory: "Dal & Pulses",
      image:
        "https://5.imimg.com/data5/RO/UP/MY-5329745/tata-sampann-chana-dal-500x500.jpg",
      price: 9,
      sellPrice: 59,
      description: "uice made at the orchard with organic apples. ",
      stock: 100,
    },
  ],
};

export default data;
