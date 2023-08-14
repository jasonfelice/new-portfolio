import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Styles from './portfolio.module.scss';
import Card from './Card';
import projects from '../data/data';

const Portfolio = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={carousel} className={Styles.carousel}>
      <motion.div drag="x" dragConstraints={{ right: 0, left: -width }} className={Styles.innerCarousel}>
        {
        projects.map((data) => (
          <Card key={data.index} info={data} />
        ))
      }
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
