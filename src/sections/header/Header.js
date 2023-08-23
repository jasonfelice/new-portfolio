import PropTypes from 'prop-types';
import Style from './header.module.scss';
import envelop from '../../assets/icons/envelope.svg';

const Header = ({ scrolled }) => {
  // Box shadow style
  const shadow = scrolled ? { boxShadow: '0 0 5px #888', background: '#fff' } : {};

  return (
    <header style={shadow} className={Style.app__header}>
      <a href="/#"><h3>Jake Felice</h3></a>
      <nav className={Style.app__headerNav}>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
      <a href="mailto:jasonfelice0@gmail.com" target="_blank" rel="noreferrer"><img alt="envelop" src={envelop} /></a>
    </header>
  );
};

export default Header;

Header.propTypes = {
  scrolled: PropTypes.bool.isRequired,
};
