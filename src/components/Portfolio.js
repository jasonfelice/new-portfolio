import Styles from './portfolio.module.scss';
import Project from './Project';

const Portfolio = () => (
  <div className={Styles.wrapper}>
    <div className={Styles.top}>
      <i className={Styles.prev} />
      <Project />
      <i className={Styles.next} />
    </div>
  </div>
);

export default Portfolio;
