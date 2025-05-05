import React from 'react';
import { motion } from 'framer-motion';
import { LayoutDashboard } from 'lucide-react';

const ServiceCard = ({ title, description, icon: Icon = LayoutDashboard }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    className="bg-white/5 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/10"
  >
    {Icon && <Icon className="w-8 h-8 text-blue-400 mb-4" />}
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
);

export default ServiceCard;