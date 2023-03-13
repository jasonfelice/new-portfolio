import Style from './about.module.scss';

const About = () => (
  <section className={Style.about}>
    <div className={Style.about__greeting}>
      <span>Hello</span>
      <div className={Style.about__greetingBar} />
    </div>
    <div className={Style.me}>
      <div className={Style.circle} />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo culpa autem!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae
        animi ab.
      </p>
    </div>
  </section>
);

export default About;
