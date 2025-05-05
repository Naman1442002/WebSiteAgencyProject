import React from 'react';
import { cn } from '../../../utils/cn';

const CardDescription = ({ children, className, ...props }) => (
  <p 
    className={cn("text-gray-300", className)} 
    {...props}
  >
    {children}
  </p>
);

export default CardDescription;