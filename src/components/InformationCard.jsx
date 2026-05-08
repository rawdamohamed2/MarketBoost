import { motion } from 'motion/react';
import {
  Briefcase,
  DollarSign,
  Mail,
  MessageSquare,
  Phone,
  User,
} from 'lucide-react';

const InformationCard = ({ lastData }) => {
  if (!lastData) return null;

  // تحويل الأكواد المختصرة لنصوص كاملة للعرض
  const serviceLabels = {
    SMM: 'Social Media Marketing',
    LP: 'Landing Page Design',
    CC: 'Content Creation',
  };

  const budgetLabels = {
    '100-': 'Less than 100$',
    '100-300': '100$ - 300$',
    '300+': 'More than 300$',
  };

  const infoItems = [
    { icon: <User size={18} />, label: 'Name', value: lastData.fullName },
    { icon: <Mail size={18} />, label: 'Email', value: lastData.email },
    { icon: <Phone size={18} />, label: 'Phone', value: lastData.phone },
    {
      icon: <Briefcase size={18} />,
      label: 'Service',
      value: serviceLabels[lastData.service] || lastData.service,
    },
    {
      icon: <DollarSign size={18} />,
      label: 'Budget',
      value: budgetLabels[lastData.budget] || lastData.budget,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-surface/50 rounded-[2rem] border border-white/5 p-8 shadow-xl backdrop-blur-sm"
    >
      <h3 className="text-secondary mb-6 text-xl font-bold">
        Summary of your message
      </h3>

      <div className="space-y-4">
        {infoItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 border-b border-white/5 pb-3 last:border-0"
          >
            <div className="text-accent bg-accent/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
              {item.icon}
            </div>
            <div>
              <p className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                {item.label}
              </p>
              <p className="text-sm font-medium text-slate-200">{item.value}</p>
            </div>
          </div>
        ))}

        <div className="mt-4 rounded-2xl bg-white/5 p-4">
          <div className="mb-2 flex items-center gap-2 text-slate-400">
            <MessageSquare size={14} />
            <span className="text-[10px] font-bold tracking-widest uppercase">
              Project Details
            </span>
          </div>
          <p className="text-xs leading-relaxed text-slate-300 italic">
            "{lastData.message}"
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default InformationCard;
