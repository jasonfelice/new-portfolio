/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import Style from './cursor.module.scss';

const Cursor = () => {
  window.onload = () => {
    const coords = { x: 0, y: 0 };
    const circles = document.querySelectorAll('.circle');

    const colors = [
      '#ffb56b',
      '#fdaf69',
      '#f89d63',
      '#f59761',
      '#ef865e',
      '#ec805d',
      '#e36e5c',
      '#df685c',
      '#d5585c',
      '#d1525c',
      '#c5415d',
      '#c03b5d',
      '#b22c5e',
      '#ac265e',
      '#9c155f',
      '#950f5f',
      '#830060',
      '#7c0060',
      '#680060',
      '#60005f',
      '#48005f',
      '#3d005e',
    ];

    circles.forEach((circle, index) => {
      circle.x = 0;
      circle.y = 0;
      circle.style.backgroundColor = colors[index];
    });

    window.addEventListener('mousemove', (e) => {
      coords.x = e.clientX;
      coords.y = e.clientY + window.pageYOffset;
    });

    function animateCircles() {
      let { x } = coords;
      let { y } = coords;

      circles.forEach((circle, index) => {
        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;

        circle.style.scale = (circles.length - index) / circles.length;

        circle.x = x;
        circle.y = y;

        const nextCircle = circles[index + 1] || circles[0];
        x += (nextCircle.x - x) * 0.2;
        y += (nextCircle.y - y) * 0.2;
      });

      requestAnimationFrame(animateCircles);
    }

    animateCircles();
  };
  return (
    <>
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
      <div className={`circle ${Style.circle}`} />
    </>
  );
};
export default Cursor;
