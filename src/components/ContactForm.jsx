import ContactInfo from './ContactInfo.jsx';
import { CheckCircle2, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { contactSchema } from '../Schema/contactSchema.jsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import FormField from './FormField.jsx';
import { useNavigate } from 'react-router-dom';
import { Element } from 'react-scroll';

const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    localStorage.setItem('lastContactData', JSON.stringify(data));
    console.log(data);
    setIsSuccess(true);
    reset();
    setTimeout(() => setIsSuccess(false), 3000);
    setTimeout(() => {
      navigate('/thankyou');
    }, 1000);
  };
  const handleMockClick = (data) => {
    Object.keys(data).forEach((key) => setValue(key, data[key]));
  };

  return (
    <Element
      name={'contact'}
      className="relative overflow-hidden bg-slate-950 py-15"
    >
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-10">
        <div className="bg-accent absolute top-1/4 left-10 h-96 w-96 rounded-full blur-[120px]" />
        <div className="absolute right-10 bottom-1/4 h-96 w-96 rounded-full bg-blue-600 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
          <ContactInfo handleMockClick={handleMockClick} />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-surface rounded-3xl border border-white/5 p-8 shadow-2xl lg:p-12 lg:py-8"
          >
            <div className="mb-8">
              <h3 className="text-secondary mb-2 text-2xl font-bold">
                Ready to start?
              </h3>
              <p className="text-text-dim text-sm">
                Fill out the form below to get a custom quote.
              </p>
            </div>
            {isSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-accent/10 border-accent/20 text-accent mb-8 flex items-center gap-3 rounded-xl border p-4 text-sm font-medium"
              >
                <CheckCircle2 className="h-5 w-5" />
                Your message has been sent successfully.
              </motion.div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <FormField label="Full Name" error={errors.fullName}>
                  <input
                    {...register('fullName')}
                    className="input-dark"
                    placeholder="Ahmed Ali"
                  />
                </FormField>

                <FormField label="Email Address" error={errors.email}>
                  <input
                    {...register('email')}
                    className="input-dark"
                    placeholder="ahmed@co.com"
                  />
                </FormField>
              </div>

              <FormField label="Phone Number" error={errors.phone}>
                <input
                  {...register('phone')}
                  className="input-dark"
                  placeholder="012XXXXXXXX"
                />
              </FormField>

              <div className="grid gap-4 md:grid-cols-2">
                <FormField label="Service Needed" error={errors.service}>
                  <select
                    {...register('service')}
                    className="input-dark appearance-none"
                  >
                    <option value="">Select service</option>
                    <option value="SMM">Social Media Marketing</option>
                    <option value="LP">Landing Page Design</option>
                    <option value="CC">Content Creation</option>
                  </select>
                </FormField>

                <FormField label="Budget Range" error={errors.budget}>
                  <select
                    {...register('budget')}
                    className="input-dark appearance-none"
                  >
                    <option value="">Select budget</option>
                    <option value="100-">Less than 100$</option>
                    <option value="100-300">100$ - 300$</option>
                    <option value="300+">More than 300$</option>
                  </select>
                </FormField>
              </div>

              <FormField label="Project Details" error={errors.message}>
                <textarea
                  {...register('message')}
                  rows={3}
                  className="input-dark resize-none"
                  placeholder="Goals..."
                />
              </FormField>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                className="bg-accent text-primary flex w-full items-center justify-center gap-2 rounded-lg py-4 font-bold tracking-widest uppercase"
              >
                {isSubmitting ? 'Sending...' : 'Submit'} <Send size={18} />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </Element>
  );
};
export default ContactForm;
