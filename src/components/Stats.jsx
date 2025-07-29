import React from 'react';
import { BarChart4, Users2, GraduationCap, ShieldCheck } from 'lucide-react';

const StatItem = ({ number, label, delay, Icon }) => {
  return (
    <div
      className="rounded-3xl bg-white/10 backdrop-blur-xl p-8 shadow-lg border border-white/20 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="flex justify-center items-center w-16 h-16 mx-auto bg-white/20 text-white rounded-full mb-4">
        <Icon size={32} />
      </div>
      <div className="text-4xl font-extrabold text-white mb-1">{number}</div>
      <p className="text-white text-base font-medium opacity-90">{label}</p>
    </div>
  );
};

const Stats = () => {
  const stats = [
    { number: '1500+', label: 'Dentists Trained', delay: '0', Icon: Users2 },
    { number: '25+', label: 'Expert Faculty', delay: '100', Icon: GraduationCap },
    { number: '12', label: 'Specialty Courses', delay: '200', Icon: BarChart4 },
    { number: '100%', label: 'Practical Focus', delay: '300', Icon: ShieldCheck },
  ];

  return (
    <section className="relative py-24 bg-gradient-to-br from-[#8A0D16] via-[#B53A44] to-[#8A0D16] text-white overflow-hidden">
      <div className="absolute inset-0 opacity-5 bg-[url('/pattern.svg')] bg-cover bg-no-repeat"></div>

      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 tracking-tight">
          Our Impact
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              label={stat.label}
              delay={stat.delay}
              Icon={stat.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
