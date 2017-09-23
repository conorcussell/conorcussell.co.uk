import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import Page from '../../components/ui/Page';
import Title from '../../components/ui/Title';

const createLinkText = string => string.replace(/_/g, ' ').replace('.md', '');

const createHref = string => `/blog/${string.replace('.md', '')}`;

export default class Blog extends Component {
  state = {
    posts: [],
    loading: false
  };

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    let { post } = this.props;
    this.setState({
      loading: true
    });

    // TODO: make this master when ready
    // https://api.github.com/repos/conorcussell/conorcussell.co.uk/contents/blog

    fetch(
      `https://api.github.com/repos/conorcussell/conorcussell.co.uk/contents/blog?ref=feature%2Fblog`
    )
      .then(res => res.json())
      .then(posts => {
        if (posts.length) {
          this.setState({
            posts,
            loading: false
          });
        } else {
          this.setState({
            posts: [],
            loading: false
          });
        }
      })
      .catch(err => console.log(err));
  };

  renderContent = ({ posts, loading }) => {
    if (loading) {
      return <div class="mv5">Loading...</div>;
    } else if (posts.length) {
      return (
        <div>
          <ul class="ma0 pa0 list">
            {posts.map(({ name }) => (
              <li class="mv5">
                <Link
                  href={createHref(name)}
                  class="link black"
                  activeClassName=""
                >
                  <p class="ma0 f3">{createLinkText(name)}</p>
                  <p class="blue">Read ⟶</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    } else {
      return <div class="mv5">None found</div>;
    }
  };

  render(props, state) {
    return (
      <Page>
        <Title color="blue">Blog</Title>
        {this.renderContent(state)}
      </Page>
    );
  }
}
