import { h } from 'preact';

const Title = ({ color, children }) =>
  <h1 class={`normal f2 ma0 ${color ? color : 'gray'}`}>
    {children}
  </h1>;

export default Title;
