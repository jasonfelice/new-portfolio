import PropTypes from 'prop-types';
import Style from './header.module.scss';

const Header = ({ scrolled }) => {
  // Box shadow style
  const shadow = scrolled ? { boxShadow: '0 0 5px #888' } : {};

  return (
    <header style={shadow} className={Style.app__header}>
      <a href="/#">Jake Felice</a>
      <nav className={Style.app__headerNav}>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#portfolio">Contact</a></li>
        </ul>
      </nav>
      <span>Email</span>
    </header>
  );
};

export default Header;

Header.propTypes = {
  scrolled: PropTypes.bool.isRequired,
};
