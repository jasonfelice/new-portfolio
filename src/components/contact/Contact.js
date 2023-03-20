import Style from './contact.module.scss';

const Contact = () => (
  <section className={Style.contact}>
    <div className={Style.headline}>
      <div className={Style.headlineBar} />
      <span>Connect with me</span>
      <div className={Style.headlineBar} />
    </div>
  </section>
);

export default Contact;
