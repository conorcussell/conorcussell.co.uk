import { h, Component } from 'preact';
import Markup from 'preact-markup';

export default class Content extends Component {
  state = {
    title: null,
    content: null,
    loading: false
  };

  componentDidMount() {
    this.fetchContent(this.props.url);
  }

  fetchContent = url => {
    this.setState({
      loading: true
    });

    console.log('fetching', url);

    fetch(url)
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

  render(props, state) {
    let { content, loading } = state;
    return loading ? 'Loading...' : <Markup markup={content} />;
  }
}
