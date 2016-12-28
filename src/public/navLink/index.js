import React from 'react';
import { Link } from 'react-router';

const PrimaryNavLink = ({ onClick, to, img, activeImg, children, ...others }) => (
  <Link
    {...others}
    to={to}
    onClick={() => onClick(to)}
    style={{ background: `url(` + img + `) no-repeat 10%`, color: '#fff' }}
    activeStyle={{ background: `url(` + activeImg + `) no-repeat 10%`, color: '#000', backgroundColor: '#fff' }}

  >
    {children}
  </Link>
)

PrimaryNavLink.propTypes = {
  onClick: React.PropTypes.func,
  to: React.PropTypes.string.isRequired,
  children: React.PropTypes.node
}

const SecondaryNavLink = ({ children, ...others }) => (
  <Link
    {...others}
    activeClassName='secondary-nav-item-active'
  >
    {children}
  </Link>
)

SecondaryNavLink.propTypes = {
  children: React.PropTypes.node
}

export { PrimaryNavLink, SecondaryNavLink }
