import { h, Component } from 'preact';

import Page from '../../components/ui/Page';
import Title from '../../components/ui/Title';
import WorkItem from '../../components/WorkItem';

export default class Home extends Component {
  render() {
    return (
      <Page>
        <Title color="blue">Work</Title>
        <WorkItem
          company="The Tab"
          position="Full-stack developer - Node, React"
          type="Full-time"
          url="/work/the-tab"
        />
        <Title>Previous</Title>
        <WorkItem
          company="Never Let Go"
          position="Full-stack developer - Wordpress, JavaScript"
          type="Contract"
          external
          url="http://staging.neverletgo.com"
        />
        <WorkItem
          company="Sofar Sounds"
          position="Front-end developer - Ruby on Rails, JavaScript, SASS"
          type="Full-time"
          url="/work/sofar-sounds"
        />
        <WorkItem
          company="Moneybags"
          position="Design + Development - Node, Preact"
          type="Personal project"
          url="/work/moneybags"
        />
        <WorkItem
          company="Gigs near me"
          position="Design + Development - JavaScript, PostCSS"
          type="Personal project"
          external
          url="https://gigsnearme.com/"
        />
        <WorkItem
          company="Brutus"
          position="Full-stack developer - Wordpress, Woocommerce"
          type="Contract"
          external
          url="https://brutus.com"
        />
        <WorkItem
          company="Hector"
          position="Design + Development - Static Site"
          type="Freelance"
          external
          url="http://directorhector.com/"
        />
        <WorkItem
          company="Island Records"
          position="Digital Designer + Developer"
          type="Full-time"
          external
          url="http://directorhector.com/"
        />
      </Page>
    );
  }
}
