import Style from './header.module.scss';

const Header = () => (
  <header className={Style.app__header}>
    <a href="/#">Jake Felice</a>
    <nav>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#portfolio">Contact</a></li>
      </ul>
    </nav>
    <span>Email</span>
  </header>
);

export default Header;
