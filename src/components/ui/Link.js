import { Link } from 'preact-router/match';

/**
 * 
 *
 */

export default ({
  href,
  children,
  external = false,
  className,
  activeClassName
}) =>
  external ? (
    <a href={href} rel="noopener" target="_blank" class={className}>
      {children}
    </a>
  ) : (
    <Link href={href} class={className} activeClassName={activeClassName}>
      {children}
    </Link>
  );
