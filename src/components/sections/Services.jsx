import React from 'react';
import { LayoutDashboard, Smartphone, Wrench } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import ServiceCard from './ServiceCard';

const services = [
  {
    id: 1,
    title: "Website Design",
    description: "Custom website design tailored to your brand and business needs.",
    icon: LayoutDashboard
  },
  {
    id: 2,
    title: "Responsive Development",
    description: "Websites that look great on any device, from desktop to mobile.",
    icon: Smartphone
  },
  {
    id: 3,
    title: "Website Maintenance",
    description: "Ongoing support and updates to keep your website running smoothly.",
    icon: Wrench
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-md">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title="Our Services" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;