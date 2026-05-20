const template = document.createElement('template');
template.innerHTML = `
    <link rel="stylesheet" href="${new URL('./home.css', import.meta.url).href}">
    <main class="home">
        <section class="hero">
            <h1>Bem-vindo ao WebComponents!</h1>
            <p>Explore a magia dos Web Components e crie interfaces incríveis.</p>
            <a href="#" class="btn">Saiba Mais</a>
        </section>
        <section class="features">
            <div class="feature">
                <h2>Componentes Reutilizáveis</h2>
                <p>Crie componentes que podem ser usados em qualquer lugar do seu projeto.</p>
            </div>
            <div class="feature">
`;

class HomeComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.handleMenuClick = this.handleMenuClick.bind(this);
  }

  connectedCallback() {
    this.menuIcon = this.shadowRoot.querySelector('.menu-icon');
    this.links = this.shadowRoot.querySelector('.links');
    this.menuIcon.addEventListener('click', this.handleMenuClick);
  }

  disconnectedCallback() {
    this.menuIcon.removeEventListener('click', this.handleMenuClick);
  }
  
handleMenuClick() {
    this.links.classList.toggle('active');
  }
}

export { HomeComponent };