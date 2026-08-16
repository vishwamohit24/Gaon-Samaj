import React from 'react';
import { motion, Variants } from 'motion/react';

interface FlipTextProps {
  children: string;
  className?: string;
  delayMultiple?: number;
}

export const FlipText: React.FC<FlipTextProps> = ({ 
  children, 
  className = '', 
  delayMultiple = 0.03 
}) => {
  const words = children.split(' ');
  
  const variants: Variants = {
    hidden: { rotateX: -90, opacity: 0 },
    visible: (i: number) => ({
      rotateX: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 25,
        stiffness: 160,
        delay: i * delayMultiple,
      },
    }),
  };

  let globalIndex = 0;

  return (
    <div className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => (
        <span key={i} className="inline-block mr-[0.25em] whitespace-nowrap">
          {word.split('').map((char, j) => {
            const index = globalIndex++;
            return (
              <motion.span
                key={j}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                variants={variants}
                style={{ transformOrigin: 'top center', display: 'inline-block' }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </div>
  );
};
