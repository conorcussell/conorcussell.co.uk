import { h } from 'preact';

const Page = props => (
  <div class="w-100 flex-auto mw8 center ph3 ph4-ns mt5 pb5">
    {props.children}
  </div>
);

export default Page;
