import Style from './contact.module.scss';

const Contact = () => (
  <section className={Style.contact}>
    <div>
      Contact
      <form>
        <input type="text" name="Name" />
        <input type="text" name="Email" />
        <textarea name="Message" />
      </form>
    </div>
  </section>
);

export default Contact;
