/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import Style from './cursor.module.scss';

const Cursor = ({ coords }) => {
  useEffect(() => {

  }, [coords]);
  return (
    <>
      <div style={{ left: `${coords.x - 12}px`, top: `${coords.y - 12}px` }} className={Style.circle} />
      <div className={Style.circle} />
      <div className={Style.circle} />
      <div className={Style.circle} />
      <div className={Style.circle} />
      <div className={Style.circle} />
      <div className={Style.circle} />
      <div className={Style.circle} />
      <div className={Style.circle} />
      <div className={Style.circle} />
    </>
  );
};
export default Cursor;
