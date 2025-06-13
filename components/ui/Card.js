import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { twMerge } from 'tailwind-merge';

const Card = ({
  icon: Icon,
  title,
  stat,
  description,
  href,
  className,
}) => {
  const content = (
    <>
      <div className="flex justify-center mb-4">
        <div className="p-3 bg-brand-light-blue rounded-full">
          <Icon className="w-8 h-8 text-brand-teal" />
        </div>
      </div>
      <h3 className="text-xl font-bold text-center text-brand-light-gray mb-2">{title}</h3>
      <p className="font-mono text-center text-brand-cyan text-lg mb-4">{stat}</p>
      <p className="text-sm text-center text-brand-gray flex-grow mb-6">{description}</p>
      <div className="mt-auto text-center">
        <span className="inline-flex items-center text-sm font-semibold text-brand-teal group-hover:underline">
          Learn more <ArrowRight className="ml-2 w-4 h-4" />
        </span>
      </div>
    </>
  );

  return (
    <Link
      href={href}
      className={twMerge(
        'group block p-6 hud-bg hud-border rounded-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-brand-teal/10 hover:-translate-y-1',
        className
      )}
    >
      <div className="flex flex-col h-full">
        {content}
      </div>
    </Link>
  );
};

export default Card;
