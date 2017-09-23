import { h } from 'preact';

import Link from '../ui/Link';

export default props => (
  <footer class="flex-none w-100 flex-ns justify-between items-center mw8 center ph3 ph4-ns pv3">
    <div class="order-last">
      <ul class="ma0 pa0 list flex">
        <li class="mr2 mr3-ns">
          <Link
            href="https://github.com/conorcussell"
            external
            className="gray link f5"
          >
            Github
          </Link>
        </li>
        <li class="mr2 mr3-ns">
          <Link
            href="https://twitter.com/conorcussell"
            external
            className="gray link f5"
          >
            Twitter
          </Link>
        </li>
        <li>
          <Link
            href="https://instagram.com/conorcussell"
            external
            className="gray link f5"
          >
            Instagram
          </Link>
        </li>
      </ul>
    </div>
    <div class="mt2 mt0-ns gray f5">© Conor Cussell - 2017</div>
  </footer>
);
