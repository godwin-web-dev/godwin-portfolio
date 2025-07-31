const logotext = "Godwin";
const meta = {
  title: "Godwin",
  description: "I’m Godwin a Front-end web developer, based in India",
};

const introdata = {
  title: "I’m Godwin",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
    third: "I develop mobile apps",
  },
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "A bit about myself",
  aboutme:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis dolor id ligula semper elementum feugiat pretium nulla. Nunc non commodo dolor. Nunc mollis dignissim facilisis. Morbi ut magna ultricies.",
};
const worktimeline = [
  {
    jobtitle: "Designer of the Week",
    where: "YAdfi",
    date: "2020",
  },
  {
    jobtitle: "Designer of the Week",
    where: "Jamalya",
    date: "2019",
  },
  {
    jobtitle: "Designer of the Week",
    where: "ALquds",
    date: "2019",
  },
];

const skills = [
  {
    name: "Python",
    value: 90,
  },
  {
    name: "Django",
    value: 85,
  },
  {
    name: "JavaScript",
    value: 80,
  },
  {
    name: "React",
    value: 60,
  },
  {
    name: "jQuery",
    value: 85,
  },
];

const services = [
  {
    title: "UI & UX Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "WordPress Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

const dataportfolio = [
  {
    img: "https://picsum.photos/400/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  {
    img: "https://picsum.photos/400/800/?grayscale",
    description:
      "The wisdom of life consists in the elimination of non-essentials.",
    link: "#",
  },
  // Add more portfolio items as needed
];

const contactConfig = {
  YOUR_EMAIL: "name@domain.com",
  YOUR_FONE: "(555)123-4567",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vehicula eu nunc et sollicitudin. Cras pulvinar, nisi at imperdiet pharetra.",
  // Create an emailjs.com account
  // Check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_qrkemnc",
  YOUR_TEMPLATE_ID: "template_a2071dn",
  YOUR_USER_ID: "user_id",
};

const socialprofils = {
  github: "https://github.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com",
};

const projectsList = [
  {
    name: "taniarascia.com",
    date: "2022",
    slug: "taniarascia.com",
    tagline: "The source of this website.",
  },
  {
    name: "Keyboard Accordion",
    date: "2022",
    slug: "accordion",
    tagline: "Play the accordion with your keyboard!",
    url: "https://www.keyboardaccordion.com",
    writeup: "/musical-instrument-web-audio-api",
    highlight: true,
  },
  {
    name: "TakeNote",
    date: "2020",
    slug: "takenote",
    tagline: "A free, open source notes app for the web.",
    url: "https://takenote.dev",
    writeup: "/building-takenote",
    highlight: true,
  },
  {
    name: "Chip8",
    date: "2019",
    slug: "chip8",
    tagline: "A retro game emulator for three platforms.",
    url: "https://taniarascia.github.io/chip8",
    writeup: "/writing-an-emulator-in-javascript-chip8",
    highlight: true,
  },
  {
    name: "Sokoban",
    date: "2021",
    slug: "sokoban",
    tagline: "A web-based Sokoban implementation.",
    url: "https://taniarascia.github.io/sokoban",
    writeup: "/sokoban-game",
    highlight: true,
  },
  {
    name: "New Moon",
    date: "2015",
    slug: "new-moon",
    tagline: "The optimized dark theme for web development.",
    url: "https://taniarascia.github.io/new-moon",
    highlight: true,
  },
  {
    name: "Laconia",
    date: "2018",
    slug: "laconia",
    tagline: "An MVC framework from scratch in PHP.",
  },
  {
    name: "Primitive",
    date: "2017",
    slug: "primitive",
    tagline: "A front-end design toolkit for responsive web apps.",
    url: "https://taniarascia.github.io/primitive",
  },
  {
    name: "Snek",
    date: "2019",
    slug: "snek",
    tagline: "A terminal-based Snake implementation.",
    writeup: "/snake-game-in-javascript",
    highlight: true,
  },
  {
    date: "2020",
    name: "webpack Boilerplate",
    slug: "webpack-boilerplate",
    tagline: "A sensible webpack 5 boilerplate.",
  },
  {
    name: "Chat App",
    date: "2021",
    slug: "chat",
    tagline: "React/Redux, TypeScript, Socket.io chat app.",
  },
  {
    name: "React Advanced Form",
    date: "2022",
    slug: "react-advanced-form",
    tagline: "An example of a schema-based form system for React.",
  },
];

export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
  projectsList, // Exporting projectsList here
};
