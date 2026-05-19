const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="${new URL('./footer.css', import.meta.url).href}">
  <footer>
    <div class="footer-content">
      <p>&copy; 2026 WebComponents. Todos os direitos reservados.</p>
        <nav>
            <a href="#">Política de Privacidade</a>
            <a href="#">Termos de Uso</a>
            <a href="#">Contato</a>
        </nav>
    </div>
  </footer>
`;

class FooterComponent extends HTMLElement {
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

export { FooterComponent };