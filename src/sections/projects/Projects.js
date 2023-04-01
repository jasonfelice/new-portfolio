import Style from './projects.module.scss';
import Portfolio from '../../components/Portfolio';

const Projects = () => (
  <section className={Style.projects}>
    <div className={Style.headline}>
      <div className={Style.headlineBar} />
      <span>Portfolio</span>
      <div className={Style.headlineBar} />
    </div>
    <div className={Style.portfolioWrapper}>
      <div className={Style.portfolio}>
        <Portfolio />
      </div>
    </div>
  </section>
);

export default Projects;
