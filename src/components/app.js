import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Work from '../routes/work';
import About from '../routes/about';
import Cv from '../routes/cv';
import Blog from '../routes/blog';
import BlogPost from '../routes/blog-post';
// import Home from 'async!./home';

export default class App extends Component {
  /** Gets fired when the route changes.
  * @param {Object} event  "change" event from [preact-router](http://git.io/preact-router)
  * @param {string} event.url	The newly routed URL
  */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app" class="sans-serif f4 bg-near-white min-vh-100">
        <Header />
        <Router onChange={this.handleRoute}>
          <Home path="/" />
          <Work path="/work/:work" />
          <About path="/about/" />
          <Cv path="/cv/" />
          <Blog path="/blog" />
          <BlogPost path="/blog/:post" />
        </Router>
      </div>
    );
  }
}
