export default function Navbar({ title }) {
  const nav = document.createElement('nav');
  nav.classList.add('container');
  nav.innerHTML = `<span class="title">${title}</span>
    <section class="actions">
        <button class="action-btn">Projects</button>
        <button class="action-btn">About</button>
        <button class="action-btn">Contacts</button>
    </section>`;
  return nav;
}
