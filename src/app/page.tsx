import Image from "next/image";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
    <div className="absolute inset-0">
      <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" className="object-cover object-center w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-75"></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    
    <div className="relative z-10 flex flex-col justify-center items-start h-full text-center ml-32">
      <h1 className="text-5xl font-bold leading-tight mb-4">@thebigsleepjoe</h1>
      <p className="text-lg text-gray-300 mb-8">Software dev • Web dev • IT Support Specialist</p>
    </div>

    <div className="relative z-10 flex flex-col justify-end items-center h-full text-center">
      <p className="text-1g text-gray-500 mb-8">More ⥕</p>
    </div>
  </div>
  );
}

export default function Home() {
  return (
    <Hero />
  );
}
