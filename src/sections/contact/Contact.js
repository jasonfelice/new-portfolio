/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
import TextField from '@mui/material/TextField';
import Style from './contact.module.scss';
import github from '../../assets/social-icons/github.svg';
import linkedin from '../../assets/social-icons/linkedin.svg';
import twitter from '../../assets/social-icons/twitter.svg';

const Contact = () => (
  <section id="contact" className={Style.contact}>
    <div className={Style.headline}>
      <div className={Style.headlineBar} />
      <span>Connect with me</span>
      <div className={Style.headlineBar} />
    </div>
    <div className={Style.contactWrapper}>
      <div className={Style.form}>
        <p>
          I&apos;m always interested in hearing about new projects,
          so feel free to reach out if you&apos;d like to get in touch.
        </p>
        <form action="https://formspree.io/f/mdobdvjd" method="post">
          <TextField required id="outlined-basic" name="name" label="Name" variant="outlined" />
          <TextField required id="outlined-basic" name="email" type="email" label="Email" variant="outlined" />
          <TextField
            name="message"
            required
            id="outlined-multiline-flexible"
            label="Type your message"
            multiline
            rows={4}
          />
          <div className={Style.formPanel}>
            <button type="submit">Submit</button>
            <ul className={Style.socialLinks}>
              <li><a style={{ backgroundImage: `url(${linkedin})` }} target="_blank" href="https://www.linkedin.com/in/jake-felice/" rel="noreferrer" /></li>
              <li><a style={{ backgroundImage: `url(${twitter})` }} target="_blank" href="https://twitter.com/jasonfelice0" rel="noreferrer" /></li>
              <li><a style={{ backgroundImage: `url(${github})` }} target="_blank" href="https://github.com/jasonfelice" rel="noreferrer" /></li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
