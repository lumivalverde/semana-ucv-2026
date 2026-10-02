import React from 'react';

export const Stats: React.FC = () => {
  const statsList = [
    { number: '18+', label: 'Expositores Internacionales', highlight: false },
    { number: '05', label: 'Días de Conferencias', highlight: true },
    { number: '12', label: 'Talleres Prácticos', highlight: false },
    { number: '+3000', label: 'Comunicadores Conectados', highlight: true },
  ];

  return (
    <section className="py-10 bg-[#0A152E]/80 border-y border-[#1E3266]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          {statsList.map((stat, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-[#111F42]/40 border border-[#1E3266]/50 hover:border-[#D91B24]/40 transition-colors"
            >
              <div
                className={`font-heading font-black text-3xl sm:text-4xl ${
                  stat.highlight ? 'text-[#D91B24]' : 'text-white'
                }`}
              >
                {stat.number}
              </div>
              <div className="text-xs sm:text-sm text-slate-300 font-medium mt-1.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
