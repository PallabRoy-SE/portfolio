export default function Navbar({ title }) {
  const nav = document.createElement('nav');
  nav.classList.add('container');
  nav.innerHTML = `<span class="title">${title}</span>
    <section class="actions">
        <a href="#" class="action-btn">Projects</a>
        <a href="#" class="action-btn">About</a>
        <a href="#" class="action-btn">Contacts</a>
    </section>`;
  return nav;
}
