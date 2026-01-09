const { Router } = require('express');
const indexRoute = Router();

const messages = [
  {
    text: 'Just hit level 30 and finally became a Cleric! Time to grind zombie mushrooms.',
    user: 'OGcleric',
    added: new Date(),
  },
  {
    text: 'Anyone Zakum tonight? Need a helm for my Dexless Sin.',
    user: 'xOPsinx',
    added: new Date(),
  },
  {
    text: "Spent 2 hours at Henesys Hunting Ground ks'ing noobs and loved every minute of it. Classic Maple.",
    user: 'IlikeArrow',
    added: new Date(),
  },
  {
    text: "Anybody want to start a guild? We'll be super active for 4 weeks and then never log on again",
    user: 'Soupd',
    added: new Date(),
  },
];

indexRoute.get('/', (req, res) => {
  res.render('index', {
    title: "Maya's House Message Board",
    messages: messages,
  });
});

module.exports = indexRoute;
