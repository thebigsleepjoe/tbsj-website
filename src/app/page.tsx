import Image from "next/image";
import Tag from "./tag";

export function Hero() {
  return (
    <div className="-mt-16 -z-10 relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
    <div className="-mt-16 -z-10 absolute inset-0">
      <img src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxjb2RlfGVufDB8MHx8fDE2OTQwOTg0MTZ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Background Image" className="object-cover object-center w-full h-full" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-75"></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {/* <div className="absolute inset-0 bg-gradient-to-t from-90% from-transparent to-gray-900"></div> */}
      <div className="absolute inset-0 bg-gradient-to-b from-80% from-transparent to-black opacity-40"></div>
      </div>
    
    {/* The hero text in the left-center */}
    <div className="-mt-16 relative z-10 flex flex-col justify-center items-start h-full text-center ml-32">
      <h1 className="text-8xl font-bold leading-tight mb-4">@thebigsleepjoe</h1>
      <p className="text-3xl text-gray-100 mb-2">{'$'} Software Engineer • Web Developer • IT Specialist</p>
      <div className="flex flex-wrap gap-3 max-w-xl mt-3">
        <Tag size='lg' color="blue">React</Tag>
        <Tag size='lg' color="blue">TypeScript</Tag>
        <Tag size='lg' color="blue">Next.js</Tag>
        <Tag size='lg' color="yellow">JavaScript</Tag>
        <Tag size='lg' color="green">Tailwind</Tag>
        <Tag size='lg' color="green">Bulma</Tag>
        <Tag size='lg' color="green">Python</Tag>
        <Tag size='lg' color="orange">HTML</Tag>
        <Tag size='lg' color="blue">CSS</Tag>
        <Tag size='lg' color="purple">Lua</Tag>
        <Tag size='lg' color="purple">Love2D</Tag>
        <Tag size='lg' color="green">AI</Tag>
        <Tag size='lg' color="green">Machine Learning</Tag>
        <Tag size='lg' color="green">LLMs</Tag>
        <Tag size='lg' color="red">Game Design</Tag>
        <Tag size='lg' color="red">Game Modding</Tag>
        <Tag size='lg' color="orange">Git</Tag>
        <Tag size='lg' color="orange">GNU/Linux</Tag>
        <Tag size='lg' color="teal">IoT</Tag>
        <Tag size='lg' color="blue">Windows</Tag>
        <Tag size='lg' color="indigo">Networking</Tag>
        <Tag size='lg' color="teal">Networking</Tag>
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
