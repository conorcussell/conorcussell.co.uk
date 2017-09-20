import { h, Component } from 'preact';
import Link from '../ui/Link';

export default class Header extends Component {
  render() {
    return (
      <header class="flex-ns justify-between items-center mw8 center ph3 pv3">
        <h1 class="normal f3 mb3 ma0-ns">Conor Cussell</h1>
        <nav>
          <Link href="/" className="link black mr2" activeClassName="blue">
            Work
          </Link>
          <Link href="/about" className="link black mr2" activeClassName="blue">
            About
          </Link>
          <Link href="/blog" className="link black mr2" activeClassName="blue">
            Blog
          </Link>
          <Link href="mailto:contact@conorcussell.co.uk" className="link black">
            Contact
          </Link>
        </nav>
      </header>
    );
  }
}
