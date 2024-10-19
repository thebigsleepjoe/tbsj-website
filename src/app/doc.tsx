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
      <div className="w-full md:w-2/3">
        <div className="bg-transparent border md:border-2 border-gray-700 shadow-emerald-300 rounded-2xl p-8 md:p-12 w-full mt-16">
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
    h1: "text-4xl font-bold mb-4",
    h2: "text-3xl font-semibold mb-3",
    h3: "text-2xl font-semibold mb-2",
    h4: "text-xl font-medium mb-2",
    h5: "text-lg font-medium mb-2",
    h6: "text-base font-medium mb-2",
    p: "text-base mb-4",
  };

  return (
    <Component className={`${baseStyles[as]} ${className}`}>
      {children}
    </Component>
  );
}

// Usage example
export function DocumentExample() {
  return (
    <Doc>
      <DocElement as="h1">Main Header</DocElement>
      <DocElement as="h2">Subheader</DocElement>
      <DocElement>This is a paragraph.</DocElement>
      <DocElement as="h3" className="text-blue-600">
        Custom styled header
      </DocElement>
    </Doc>
  );
}
