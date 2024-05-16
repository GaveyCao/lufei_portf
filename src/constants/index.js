import {
  denim,
  jobit,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const projects = [
  {
    name: "Sonic Gril Denim App",
    description: "An e-commerce app revolutionizing denim shopping for young girls with personalized experiences and perfect fit.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Sketch",
        color: "green-text-gradient",
      },
      {
        name: "Adobe XD",
        color: "pink-text-gradient",
      },
    ],
    image: denim,
  },
  {
    name: "Sonic Gril Echoes App",
    description: "A minimalist-designed podcast platform that simplifies navigation and enhances user engagement.",
    tags: [
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
      {
        name: "Sketch",
        color: "green-text-gradient",
      },
      {
        name: "Adobe XD",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
  },
];

export {  projects };
