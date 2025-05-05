import React from 'react';
import { cn } from '../../../utils/cn';

const CardTitle = ({ children, className, ...props }) => (
  <h3 
    className={cn("text-xl font-semibold mb-2", className)} 
    {...props}
  >
    {children}
  </h3>
);

export default CardTitle;