import React from 'react';
import { cn } from '../../../utils/cn';

const CardHeader = ({ children, className, ...props }) => (
  <div 
    className={cn("p-6", className)} 
    {...props}
  >
    {children}
  </div>
);

export default CardHeader;