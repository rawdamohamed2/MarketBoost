import { Layout, PenTool, Share2 } from 'lucide-react';
import { Element } from 'react-scroll';
import { motion } from 'motion/react';

const services = [
  {
    title: 'Social Media Marketing',
    icon: Share2,
    description:
      'Grow your online presence and engage with your audience through viral social strategies.',
    color: 'bg-blue-500',
    delay: 0.1,
  },
  {
    title: 'Landing Page Design',
    icon: Layout,
    description:
      'High-converting landing pages built with modern UI/UX principles to drive sales.',
    color: 'bg-accent',
    delay: 0.2,
  },
  {
    title: 'Content Creation',
    icon: PenTool,
    description:
      'Compelling storytelling and visual assets that resonate with your target market.',
    color: 'bg-purple-500',
    delay: 0.3,
  },
];

const Services = () => {
  return (
    <Element name={'services'} className="border-secondary/5 border-t py-20">
      <div className="container">
        <div className="mb-16 text-center">
          <h2 className="text-secondary mb-4 text-4xl font-bold">
            Our Premium Services
          </h2>
          <p className="text-text-dim mx-auto max-w-2xl text-sm leading-relaxed">
            We provide comprehensive digital solutions tailored to help your
            business thrive in the competitive digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: service.delay }}
              className="card-dark group hover:bg-secondary/[0.04]"
            >
              <div
                className={`bg-accent/10 text-accent mb-6 flex h-12 w-12 items-center justify-center rounded-lg transition-transform group-hover:scale-115`}
              >
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="text-secondary mb-3 text-xl font-bold">
                {service.title}
              </h3>
              <p className="text-text-dim mb-6 text-sm leading-relaxed">
                {service.description}
              </p>
              <button className="text-accent flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase transition-all group-hover:gap-3">
                Learn more
                <span>→</span>
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </Element>
  );
};
export default Services;
