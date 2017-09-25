import { h } from 'preact';

import Page from '../../components/ui/Page';
import Title from '../../components/ui/Title';
import Content from '../../components/Content';

export default ({ work }) => {
  // NOTE - I'm fetching the raw .md file here as in my tests it was 3x faster
  // than using the normal github api for raw content e.g.
  // https://api.github.com/repos/conorcussell/conorcussell.co.uk/master/work/${work}.md

  // TODO: make this master when ready
  // https://raw.githubusercontent.com/conorcussell/conorcussell.co.uk/master/work/${work}.md

  const url = `https://raw.githubusercontent.com/conorcussell/conorcussell.co.uk/2.0/work/${work}.md?v=1`;
  return (
    <Page>
      <div class="mw7">
        <Content url={url} />
      </div>
    </Page>
  );
};
