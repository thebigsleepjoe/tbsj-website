import React from 'react';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'hr' | 'a';

interface DocProps {
  children: React.ReactNode;
}

interface DocElementProps {
  as?: HeadingLevel | 'p';
  className?: string;
  children?: React.ReactNode;
  href?: string;
}

export function Doc({ children }: DocProps) {
  return (
    <section className='w-full flex justify-center py-8 pb-24 relative'>
      {/* Top transition to transparency */}
      <div className='absolute inset-0 bg-gradient-to-b from-gray-900 to-transparent to-15%' />
      {/* Bottom transition to opacity */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-gray-950 from-85%' />
      {/* The background image */}
      <div className='absolute inset-0 doc-bkg-img opacity-50 -z-10' />
      <div className='w-full md:w-2/3 xl:w-1/2 backdrop-blur-sm'>
        <div className='bg-transparent relative border md:border-2 border-gray-700 shadow-emerald-300 rounded-2xl p-8 md:p-12 2xl:p-20 w-full md:mt-16 mt-0'>
          <div className='absolute rounded-2xl inset-0 bg-gradient-to-r from-transparent to-black opacity-30' />
          <div className='absolute rounded-2xl inset-0 bg-gradient-to-b from-transparent to-black opacity-30' />
          <div className='absolute rounded-2xl inset-0 bg-gradient-to-bl from-green-800 to-orange-500 opacity-5' />
          <div className='absolute rounded-2xl inset-0 bg-gradient-to-tl from-blue-800 to-purple-500 opacity-5' />
          <div className='relative z-10'>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DocElement(
  { as = 'p', className = '', children, href }: DocElementProps,
) {
  const Component = as;
  const baseStyles = {
    h1: 'text-4xl md:text-7xl font-bold mb-6 mt-8',
    h2: 'text-3xl md:text-5xl font-semibold mb-6 mt-8',
    h3: 'text-2xl md:text-4xl font-semibold mb-5 mt-8',
    h4: 'text-xl md:text-3xl font-medium mb-4 mt-8',
    h5: 'text-lg md:text-2xl font-medium mb-4 mt-8',
    h6: 'text-base md:text-xl font-medium mb-4 mt-8',
    p: 'text-lg md:text-2xl mb-4 mt-2',
    hr: 'border-gray-700 my-12',
    a: 'ml-1 text-cyan-500 hover:text-cyan-300 transition-colors animate-underline',
  };

  return (
    <Component className={`${baseStyles[as]} ${className}`} href={href}>
      {children}
    </Component>
  );
}
