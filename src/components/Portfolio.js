import Styles from './portfolio.module.scss';
import Card from './Project';

const Portfolio = () => (
  <div className={Styles.wrapper}>
    <div className={Styles.top}>
      <i className={Styles.prev} />
      <Card />
      <i className={Styles.next} />
    </div>
  </div>
);

export default Portfolio;
