import TextField from '@mui/material/TextField';
import Style from './contact.module.scss';

const Contact = () => (
  <section className={Style.contact}>
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
        <form>
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" type="email" label="Email" variant="outlined" />
          <TextField
            id="outlined-multiline-flexible"
            label="Multiline"
            multiline
            rows={4}
            defaultValue="Default Value"
          />
          <div className={Style.formPanel}>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </div>
  </section>
);

export default Contact;
