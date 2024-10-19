import React from "react";

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

interface DocProps {
  children: React.ReactNode;
}

interface DocElementProps {
  as?: HeadingLevel | "p";
  className?: string;
  children: React.ReactNode;
}

export function Doc({ children }: DocProps) {
  return (
    <section className="w-full flex justify-center bg-gray-900">
      <div className="w-full md:w-2/3 2xl:w-5/12">
        <div className="bg-transparent border md:border-2 border-gray-700 shadow-emerald-300 rounded-2xl p-8 md:p-12 2xl:p-20 w-full mt-16">
          {children}
        </div>
      </div>
    </section>
  );
}

export function DocElement(
  { as = "p", className = "", children }: DocElementProps,
) {
  const Component = as;
  const baseStyles = {
    h1: "text-4xl md:text-7xl font-bold mb-6 mt-8",
    h2: "text-3xl md:text-5xl font-semibold mb-6 mt-8",
    h3: "text-2xl md:text-4xl font-semibold mb-5 mt-8",
    h4: "text-xl md:text-3xl font-medium mb-4 mt-8",
    h5: "text-lg md:text-2xl font-medium mb-4 mt-8",
    h6: "text-base md:text-xl font-medium mb-4 mt-8",
    p: "text-lg md:text-2xl mb-4 mt-2",
  };

  return (
    <Component className={`${baseStyles[as]} ${className}`}>
      {children}
    </Component>
  );
}
