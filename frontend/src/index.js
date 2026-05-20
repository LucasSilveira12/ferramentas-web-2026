import { Header } from './components/header/index.js';
import { Footer } from './components/footer/index.js';
import { Home } from './components/home/index.js';

// Central Registration of Web Components
customElements.define('app-header', Header);
customElements.define('app-footer', Footer);


// Pages
customElements.define('page-home', Home);

console.log('App initialized and components registered.');