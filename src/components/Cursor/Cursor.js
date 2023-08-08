/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import Style from './cursor.module.scss';

const Cursor = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  useEffect(() => {
    window.addEventListener('mousemove', (e) => {
      setCoords({ x: e.clientX, y: e.clientY + window.pageYOffset });
    });
  }, []);
  return (
    <>
      {
        (() => {
          let { x, y } = coords;
          const arr = [];
          for (let i = 1; i <= 10; i += 1) {
            arr.push(<div style={{ left: `${x - 12}px`, top: `${y - 12}px` }} className={Style.circle} />);

            x += 10;
            y += 10;
          }
          return arr;
        })()
}
    </>
  );
};
export default Cursor;
