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
          company="Tab Media"
          position="Full-stack developer - Node, React"
          type="Full-time &mdash; Oct ’16 to present"
          url="/work/tab-media"
        />
        <Title>Previous</Title>
        <WorkItem
          company="Never Let Go"
          position="Full-stack developer - Wordpress, JavaScript"
          type="Contract &mdash; Mar to Jun ’17"
          external
          url="https://neverletgo.com"
        />
        <WorkItem
          company="Sofar Sounds"
          position="Front-end developer - Ruby on Rails, JavaScript, SASS"
          type="Full-time &mdash; Oct ’15 to Oct ’16"
          url="/work/sofar-sounds"
        />
        <WorkItem
          company="Moneybags"
          position="Design + Development - Node, Preact"
          type="Personal project &mdash; Mar ’17"
          url="/work/moneybags"
        />
        <WorkItem
          company="Gigs near me"
          position="Design + Development - JavaScript, PostCSS"
          type="Personal project &mdash; Sep ’15"
          external
          url="https://gigsnearme.com/"
        />
        <WorkItem
          company="Brutus"
          position="Full-stack developer - Wordpress, Woocommerce"
          type="Contract &mdash; Jul to Sep ’15"
          external
          url="https://brutus.com"
        />
        <WorkItem
          company="Hector"
          position="Design + Development - Static Site"
          type="Freelance &mdash; Nov ’16"
          external
          url="http://directorhector.com/"
        />
        <WorkItem
          company="Island Records"
          position="Digital Designer + Developer"
          type="Full-time &mdash; Oct ’13 to Mar ’15"
          url="/work/island-records"
        />
      </Page>
    );
  }
}
