import React from 'react';
import { cn } from '../../../utils/cn';

const Card = ({ children, className, ...props }) => (
  <div 
    className={cn("rounded-lg overflow-hidden", className)} 
    {...props}
  >
    {children}
  </div>
);

export default Card;