import { h } from 'preact';

import Page from '../../components/ui/Page';
import Title from '../../components/ui/Title';
import Paragraph from '../../components/ui/Paragraph';
import Link from '../../components/ui/Link';

export default props => (
  <Page>
    <Title color="blue">About</Title>
    <div class="mw6 mt5">
      <img src="/assets/images/me.jpg" class="br-100" width="80" height="80" />
      <Paragraph>I build things for the web.</Paragraph>
      <Paragraph>
        I have experience working with a variety of languages, frameworks and
        libraries in order to produce fast, accessible and usable websites.
      </Paragraph>
      <Paragraph>
        I'm not currently looking for work, but feel free to check out my{' '}
        <Link href="/cv" className="blue link">
          CV.
        </Link>{' '}
        You can also find me on{' '}
        <Link
          href="https://twitter.com/conorcussell"
          external
          className="blue link"
        >
          Twitter
        </Link>{' '}
        or{' '}
        <Link
          href="https://github.com/conorcussell"
          external
          className="blue link"
        >
          Github.
        </Link>
      </Paragraph>
      <Paragraph>
        I'm based in London, but try and spend as much of my free time as
        possible away from it, rock climbing.
      </Paragraph>
    </div>
  </Page>
);
