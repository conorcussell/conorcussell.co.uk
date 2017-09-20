import { h, Component } from 'preact';

import Page from '../../components/ui/Page';
import Title from '../../components/ui/Title';

export default class Work extends Component {
  render({ work }, state) {
    return (
      <Page>
        <Title>
          {work}
        </Title>
      </Page>
    );
  }
}
