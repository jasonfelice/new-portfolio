/* eslint-disable no-unused-vars */
import Style from './footer.module.scss';
import github from '../../assets/social-icons/github.svg';
import linkedin from '../../assets/social-icons/linkedin.svg';
import twitter from '../../assets/social-icons/twitter.svg';

const Footer = () => (
  <footer className={Style.footer}>
    <div className={Style.backTop}>
      <span>Back to top</span>
      <i />
    </div>
    <span>
      © Jake Felice
      {' '}
      { new Date().getFullYear()}
    </span>
    <div className={Style.contactList}>
      <h3>Connect</h3>
      <ul className={Style.social}>
        <li>
          <a target="_blank" href="/#">
            <i style={{ backgroundImage: `url(${linkedin})` }} />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a target="_blank" href="/#">
            <i style={{ backgroundImage: `url(${github})` }} />
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a target="_blank" href="/#">
            <i style={{ backgroundImage: `url(${twitter})` }} />
            <span>Twitter</span>
          </a>
        </li>
      </ul>
      <a href="mailto:jasonfelice0@gmail.com" target="_blank" className={Style.email} rel="noreferrer">jasonfelice0@gmail.com</a>
    </div>
  </footer>
);

export default Footer;
