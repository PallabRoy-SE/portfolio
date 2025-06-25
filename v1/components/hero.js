export default function Hero({ role, name, description }) {
  const hero = document.createElement('section');
  hero.classList.add(...['hero-container', 'container']);
  hero.innerHTML = `
      <section class="text-container">
         <h4>${role}</h4>
         <h1>Hello, my name is ${name}</h1>
         <p>${description}</p>
         <section class="button-container">
            <button class="primary-btn">Projects</button>
            <button class="secondary-btn">LinkedIn</button>
         </section>
      </section>
      <section class="image-container">
        <div class="mask">
            <img src="../assets/images/hero.png" alt="Hero image">
        </div>
      </section>`;
  return hero;
}
