import { motion } from 'motion/react';
import { Palette, Search, Smartphone, Zap } from 'lucide-react';
import { Element } from 'react-scroll';

const features = [
  {
    title: 'Responsive Design',
    description:
      'Perfect viewing experience on desktops, tablets, and mobile devices.',
    icon: Smartphone,
    delay: 0.1,
  },
  {
    title: 'Fast Loading',
    description:
      'Optimized performance for lightning-fast speeds and better user retention.',
    icon: Zap,
    delay: 0.2,
  },
  {
    title: 'Modern UI',
    description:
      'Clean, professional, and visually stunning interfaces that build trust.',
    icon: Palette,
    delay: 0.3,
  },
  {
    title: 'SEO Friendly',
    description:
      'Structure and content optimized for maximum search engine visibility.',
    icon: Search,
    delay: 0.4,
  },
];

const Features = () => {
  return (
    <Element name={'features'} className="border-secondary/5 border-t py-20">
      <div className="container">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <h2 className="text-secondary mb-4 text-4xl font-bold">
              Powerful Features for Modern Success
            </h2>
            <p className="text-text-dim text-sm leading-relaxed">
              We focus on the details that matter to ensure your project not
              only looks great but performs exceptionally.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="text-text-dim border-secondary/10 bg-secondary/5 rounded-lg border px-6 py-2 text-[10px] font-bold tracking-widest uppercase">
              Trusted by 120+ Companies
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: feature.delay }}
              className="card-dark hover:border-accent/20 border-dashed transition-all"
            >
              <feature.icon className="text-accent mb-6 h-8 w-8" />
              <h3 className="text-secondary mb-3 text-lg font-bold">
                {feature.title}
              </h3>
              <p className="text-text-dim text-xs leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Element>
  );
};
export default Features;
