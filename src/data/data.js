import book from './book.png';
import insta from './insta.PNG';
import space from './space.PNG';
import math from './math.PNG';

const projects = [
  {
    index: 0,
    title: 'Instagram clone',
    description: 'This is a clone of Instagram. After creating an account, users can create or browse all the posts and comment on them. Built with: React and Firebase',
    tech: ['JS', 'React', 'Firebase'],
    image: insta,
    live: 'https://ig-clone-9bf7a.web.app/',
    github: 'https://github.com/jasonfelice',
  },
  {
    index: 1,
    title: 'Space Travelers Hub',
    description: 'The application fetches data from the SpaceX API and allows users to book rockets, dragons, and join selected space missions.​​',
    image: space,
    tech: ['JS', 'React', 'API'],
    live: 'https://brilliant-dolphin-a10874.netlify.app/',
    github: 'https://github.com/d2ndjim/SpaceX',
  },
  {
    index: 2,
    title: 'Math Magicians',
    description: 'Math magicians is a Single Page App (SPA) that allows users to make simple calculations. Built with: React',
    tech: ['JS', 'React'],
    image: math,
    live: 'luxury-salmiakki-c12cfc.netlify.app/',
    github: 'https://github.com/jasonfelice/Math-Magicians',
  },
  {
    index: 3,
    title: 'BookStore',
    tech: ['JS', 'React', 'Redux', 'API'],
    description: 'This website is built using React and Redux. Add or remove book from the list that is saved on the API.',
    image: book,
    live: 'https://deft-babka-260201.netlify.app/',
    github: 'https://github.com/jasonfelice/Bookstore',
  },
];

export default projects;
