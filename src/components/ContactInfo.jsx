import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const mockOptions = [
  {
    label: 'Ahmed (LP)',
    data: {
      fullName: 'Ahmed Ali',
      email: 'ahmed@example.com',
      phone: '01234567890',
      service: 'LP',
      budget: '100-300',
      message: 'I need a professional landing page for my new startup product.',
    },
  },
  {
    label: 'Sara (CC)',
    data: {
      fullName: 'Sara Mohamed',
      email: 'sara@example.com',
      phone: '01234567891',
      service: 'CC',
      budget: '100-',
      message:
        'We want to launch a major campaign across Instagram and TikTok.',
    },
  },
  {
    label: 'Mostafa (SMM)',
    data: {
      fullName: 'Mostafa Adel',
      service: 'SMM',
      budget: '300+',
      email: 'mostafa@example.com',
      phone: '01234567892',
      message:
        'We want to launch a major campaign across Instagram and TikTok.',
    },
  },
];

const ContactInfo = ({ handleMockClick }) => {
  return (
    <div>
      <h2 className="mb-8 text-4xl leading-tight font-extrabold text-white md:text-5xl">
        Ready to{' '}
        <span className="text-accent decoration-accent/30 underline underline-offset-8">
          Supercharge
        </span>{' '}
        Your Brand?
      </h2>
      <p className="mb-10 max-w-lg text-lg leading-relaxed text-slate-400">
        Fill out the form and our marketing experts will get back to you within
        24 hours with a custom strategy.
      </p>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <CheckCircle2 className="text-accent h-6 w-6" />
          </div>
          <div>
            <h4 className="mb-1 font-bold text-white">Expert Consultation</h4>
            <p className="text-text-dim text-sm">
              Personalized strategy session with our top consultants.
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <CheckCircle2 className="text-accent h-6 w-6" />
          </div>
          <div>
            <h4 className="mb-1 font-bold text-white">
              No-Obligation Proposal
            </h4>
            <p className="text-text-dim text-sm">
              Detailed roadmap and budget breakdown for your project.
            </p>
          </div>
        </div>
      </div>

      {/* Mock Data Shortcuts */}
      <div className="mt-12 border-t border-white/10 pt-12">
        <p className="text-text-dim mb-4 text-xs font-bold tracking-widest uppercase">
          Quick Mock Data
        </p>
        <div className="flex flex-wrap gap-2">
          {mockOptions.map((mock, i) => (
            <button
              key={i}
              onClick={() => handleMockClick(mock.data)}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] text-slate-400 transition-all hover:bg-white/10 hover:text-white"
            >
              {mock.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ContactInfo;
