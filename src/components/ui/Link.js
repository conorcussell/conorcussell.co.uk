import { Link } from 'preact-router/match';

/**
 * 
 *
 */

export default ({ href, children, external, className, activeClassName }) =>
  href.charAt(0) === '/' ? (
    <Link href={href} class={className} activeClassName={activeClassName}>
      {children}
    </Link>
  ) : (
    <a href={href} target={external ? '_blank' : ''} class={className}>
      {children}
    </a>
  );
