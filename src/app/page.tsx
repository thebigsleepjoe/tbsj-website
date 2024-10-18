import Image from "next/image";
import Tag from "./tag";

export function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
    <div className="absolute inset-0">
      <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" className="object-cover object-center w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-75"></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-90% from-transparent to-gray-900"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-80% from-transparent to-black opacity-40"></div>
      </div>
    
    {/* The hero text in the left-center */}
    <div className="relative z-10 flex flex-col justify-center items-start h-full text-center ml-32">
      <h1 className="text-5xl font-bold leading-tight mb-4">@thebigsleepjoe</h1>
      <p className="text-lg text-gray-100 mb-2">{'$'} Software Engineer • Web Developer • Technical Support</p>
      <div className="flex flex-wrap gap-3 max-w-sm mt-3">
        <Tag color="blue">React</Tag>
        <Tag color="blue">TypeScript</Tag>
        <Tag color="blue">Next.js</Tag>
        <Tag color="yellow">JavaScript</Tag>
        <Tag color="green">Tailwind</Tag>
        <Tag color="green">Bulma</Tag>
        <Tag color="green">Python</Tag>
        <Tag color="orange">HTML</Tag>
        <Tag color="blue">CSS</Tag>
        <Tag color="purple">Lua</Tag>
        <Tag color="purple">Love2D</Tag>
        <Tag color="green">AI</Tag>
        <Tag color="green">Machine Learning</Tag>
        <Tag color="green">LLMs</Tag>
        <Tag color="red">Game Design</Tag>
        <Tag color="red">Game Modding</Tag>
        <Tag color="orange">Git</Tag>
        <Tag color="orange">GNU/Linux</Tag>
        <Tag color="teal">IoT</Tag>
        <Tag color="blue">Windows</Tag>
        <Tag color="indigo">Networking</Tag>
        <Tag color="teal">Networking</Tag>
      </div>
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
