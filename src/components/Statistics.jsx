import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Element } from 'react-scroll';

const stats = [
  { label: 'Projects Completed', value: 120, suffix: '+' },
  { label: 'Happy Clients', value: 85, suffix: '+' },
  { label: 'Conversion Rate', value: 95, suffix: '%' },
  { label: 'Support Availability', value: 24, suffix: '/7' },
];

function Counter({ value, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);
  return (
    <span ref={ref} className="text-5xl font-extrabold">
      {count}
      {suffix}
    </span>
  );
}

const Statistics = () => {
  return (
    <Element
      name={'Statistic'}
      className="bg-primary border-secondary/5 border-t py-10 md:py-20"
    >
      <div className="container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-dark flex flex-col items-center justify-center text-center"
            >
              <div className="text-accent mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-text-dim text-[10px] font-bold tracking-widest uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Element>
  );
};
export default Statistics;
