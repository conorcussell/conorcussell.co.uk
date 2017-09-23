import { h, Component } from 'preact';
import Link from '../ui/Link';

export default class Header extends Component {
  render() {
    return (
      <header class="flex-ns justify-between items-center mw8 center ph3 pv3">
        <Link href="/" className="no-underline">
          <h1 class="normal black f3 mb3 ma0-ns">Conor Cussell</h1>
        </Link>
        <nav>
          <Link
            href="/"
            className="link black mr2 mr3-ns"
            activeClassName="blue"
          >
            Work
          </Link>
          <Link
            href="/about"
            className="link black mr2 mr3-ns"
            activeClassName="blue"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="link black mr2 mr3-ns"
            activeClassName="blue"
          >
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
