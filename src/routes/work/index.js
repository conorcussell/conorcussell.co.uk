import { h, Component } from 'preact';

import Page from '../../components/ui/Page';
import Title from '../../components/ui/Title';

import Content from '../../components/Content';

export default class Work extends Component {
  render({ work }, state) {
    const url = `https://raw.githubusercontent.com/conorcussell/conorcussell.co.uk/feature/blog/work/${work}.md`;
    return (
      <Page>
        <Title>{work}</Title>
        <Content url={url} />
      </Page>
    );
  }
}
