import tour1 from'../src/images/tour-1.jpeg'
import tour2 from '../src/images/tour-2.jpeg';
import tour3 from '../src/images/tour-3.jpeg';
import tour4 from '../src/images/tour-4.jpeg';


export const pageLinks = [
    { id: 1, href: '#home', text: 'home' },
    { id: 2, href: '#about', text: 'about' },
    { id: 3, href: '#services', text: 'services' },
    { id: 4, href: '#tours', text: 'tours' },
];

export const socialLinks = [
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-facebook' },
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-twitter' },
  { id: 1, href: 'https://www.twitter.com', icon: 'fab fa-squarespace' },
];

export const servicesData = [
  {
    id: 1,
    icon: 'fas fa-wallet fa-fw',
    heading: 'saving money',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 2,
    icon: 'fas fa-tree fa-fw',
    heading: 'endless hiking',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
  {
    id: 3,
    icon: 'fas fa-socks fa-fw',
    heading: 'amazing comfort',
    paragraph:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit.Asperiores, officia.',
  },
];

export const toursData = [
  {
    id: 1,
    date: 'august 26th, 2020',
    icon: 'fas fa-map',
    img: tour1,
    title: 'Tibet Adventure',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    days: '6 days',
    price: 'from $2100',
    country: 'china',
  },
  {
    id: 2,
    date: 'october 1th, 2020',
    icon: 'fas fa-map',
    img: tour2,
    title: 'best of java',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    days: '11 dayss',
    price: 'from $1400',
    country: 'indonesia',
  },
  {
    id: 3,
    date: 'september 15th, 2020',
    icon: 'fas fa-map',
    img: tour3,
    title: 'explore hong kong',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    days: '8 days',
    price: 'from $5000',
    country: 'hong kong',
  },
  {
    id: 4,
    date: 'december 5th, 2019',
    icon: 'fas fa-map',
    img: tour4,
    title: 'kenya highlights',
    description:
      ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.',
    days: '20 days',
    price: 'from $3300',
    country: 'kenya',
  },
];