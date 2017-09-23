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

  componentWillReceiveProps(props) {
    if (props.post !== this.props.post) {
      this.getPosts();
    }
  }

  getPosts = () => {
    let { post } = this.props;
    this.setState({
      loading: true
    });
    fetch(
      `https://api.github.com/repos/conorcussell/conorcussell.co.uk/blog/contents/`
    )
      .then(res => res.json())
      .then(posts => {
        this.setState({
          posts,
          loading: false
        });
        console.log(posts);
      })
      .catch(err => console.log(err));
  };

  renderContent = () => {
    return (
      <div>
        <ul class="ma0 pa0 list">
          {this.state.posts.map(({ name }) => (
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
  };

  render(props, state) {
    return (
      <Page>
        <Title color="blue">Blog</Title>
        {this.renderContent()}
      </Page>
    );
  }
}
