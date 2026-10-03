import React from 'react';

export const Stats: React.FC = () => {
  const statsList = [
    { number: '18+', label: 'Expositores Internacionales', highlight: false },
    { number: '05', label: 'Días de Conferencias', highlight: true },
    { number: '10+', label: 'Paneles Magistrales', highlight: false },
    { number: '+3000', label: 'Comunicadores Conectados', highlight: true },
  ];

  return (
    <section className="py-12 bg-[#04010A] border-y border-[#7135F5]/25 relative shadow-2xl shadow-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {statsList.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#090414] border border-[#7135F5]/35 hover:border-[#C6FF00] transition-all hover:bg-[#110724] shadow-xl shadow-black/80 group"
            >
              <div
                className={`font-heading font-black text-3xl sm:text-4xl ${
                  stat.highlight ? 'text-[#C6FF00]' : 'text-white'
                }`}
              >
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
