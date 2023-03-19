import Style from './projects.module.scss';

const Projects = () => (
  <section className={Style.projects}>
    <div className={Style.headline}>
      <div className={Style.headlineBar} />
      <span>Portfolio</span>
      <div className={Style.headlineBar} />
    </div>
  </section>
);

export default Projects;
