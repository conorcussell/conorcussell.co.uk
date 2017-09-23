import { h } from 'preact';
import Link from './ui/Link';

const WorkItem = ({ external, company, position, type, url }) => (
  <div class="mv5">
    <h2 class="normal f3">{company}</h2>
    <p class="gray">{type}</p>
    <p>{position}</p>
    <Link href={url} external className="blue link">
      More ⟶
    </Link>
  </div>
);

export default WorkItem;
