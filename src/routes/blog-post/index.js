import { h, Component } from 'preact';
import Markup from 'preact-markup';

import Page from '../../components/ui/Page';

export default class BlogPost extends Component {
  state = {
    title: null,
    content: null,
    loading: false
  };

  componentDidMount() {
    this.getPost();
  }

  componentWillReceiveProps(props) {
    if (props.post !== this.props.post) {
      this.getPost();
    }
  }

  getPost = () => {
    let { post } = this.props;
    this.setState({
      loading: true
    });
    fetch(
      `https://raw.githubusercontent.com/conorcussell/blog/master/${post}.md`
    )
      .then(res => res.text())
      .then(text => {
        // TODO: deal with 404
        this.setState({
          title: this.getTitle(text),
          content: this.getContent(text),
          loading: false
        });
      })
      .catch(err => console.log(err));
  };

  getTitle = text => {
    // TODO: use this to apply page title and description
    let arr = text.split('---');
    console.log(arr[1]);
  };

  getContent = text => text.split('---').pop();

  renderContent = content =>
    content ? <Markup markup={content} /> : <div>Loading...</div>;

  render(props, state) {
    let { content, title } = state;
    return <Page>{this.renderContent(content)}</Page>;
  }
}
