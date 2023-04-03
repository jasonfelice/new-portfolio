import { motion } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Styles from './portfolio.module.scss';
import Card from './Card';

const temp = [1, 2, 3, 4, 5];

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
        temp.map((x) => (
          <Card key={x} />
        ))
      }
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
