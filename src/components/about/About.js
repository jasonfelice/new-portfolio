/* eslint-disable import/no-extraneous-dependencies */
import Tooltip from '@mui/material/Tooltip';
import Style from './about.module.scss';
import javas from '../../assets/tech-icons/javas.svg';
import types from '../../assets/tech-icons/type.svg';
import psql from '../../assets/tech-icons/psql.svg';
import ruby from '../../assets/tech-icons/ruby.svg';
import react from '../../assets/tech-icons/react.svg';
import rails from '../../assets/tech-icons/rails.svg';
import redux from '../../assets/tech-icons/redux.svg';

const About = () => {
  const technologies = [
    {
      name: 'JavaScript',
      image: javas,
    },
    {
      name: 'TypeScript',
      image: types,
    },
    {
      name: 'PostgreSql',
      image: psql,
    },
    {
      name: 'Ruby',
      image: ruby,
    },
    {
      name: 'React',
      image: react,
    },
    {
      name: 'Redux',
      image: redux,
    },
    {
      name: 'Ruby on Rails',
      image: rails,
    },
  ];

  return (
    <section className={Style.about}>
      <div className={Style.greeting}>
        <span>Hello</span>
        <div className={Style.greetingBar} />
      </div>
      <div className={Style.me}>
        <div className={Style.headline}>
          <div className={Style.avatar} />
          <h2>
            I’m Jake Felice
            Full-Stack Software Developer
            and a tech fanatic
          </h2>
        </div>
        <p>
          Love solving problems, reading and learning new things. I always welcome new challenges.
          I&apos;m a huge fan of classic rock n&apos; roll, and sometimes like to play guitar in my
          free time.
        </p>
      </div>
      <ul className={Style.technologies}>
        {
          technologies.map((tech) => (
            <Tooltip key={tech.name} title={tech.name} placement="top">
              <li style={{ backgroundImage: `url(${tech.image})` }} className={Style.tech} />
            </Tooltip>
          ))
        }
      </ul>
    </section>
  );
};

export default About;
