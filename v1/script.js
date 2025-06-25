import Hero from './components/hero.js';
import Navbar from './components/navbar.js';

async function main() {
  try {
    const config = await init();
    const root = document.getElementById('root');

    root.appendChild(Navbar({ title: config.title })); // add navbar
    root.appendChild(Hero({ role: config.role, name: config.title, description: config.description }));
  } catch (error) {
    console.error(error);
  }
}

async function init() {
  const config = await (await fetch('./assets/config.json')).json();
  updateTitle(config.title);
  return config;
}

function updateTitle(title) {
  const titleElement = document.createElement('title');
  titleElement.innerText = title;
  document.head.appendChild(titleElement);
}

await main();
