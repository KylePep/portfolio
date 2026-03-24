import { CodeBracketIcon, ComputerDesktopIcon, HeartIcon } from "@heroicons/react/24/solid";
import Section from "../ui/Section";

export default function Hero() {
  return (
    <Section background="bg-gradient-to-b from-transparent from-20% to-primary-1050/80 h-[calc(100vh-32px)] flex flex-col justify-center">
      <div className="text-center ">
        <h1 className="text-4xl lg:text-8xl pb-6 mb-2 font-bold text-transparent bg-clip-text
          bg-gradient-to-br from-white/90 via-white/40 to-white/10
          [-webkit-text-stroke:1px_rgba(255,255,255,0.7)]
          drop-shadow-[0_4px_20px_rgba(255,255,255,0.3)]">
          Kyle Peppersack
        </h1>


        <p className="font-semibold">Full-stack engineer building reliable, production web apps.</p>
        <div className="flex flex-col md:flex-row gap-4 justify-around mt-16 text-sm font-bold">
          <span className="bg-primary-1050 shadow-md shadow-black/50 border border-sky-900/50 rounded-full px-4 leading-6 flex gap-x-2 mx-auto">
            <ComputerDesktopIcon className="h-4 w-4 my-auto text-sky-300" />
            Frontend
          </span>
          <span className="bg-primary-1050 shadow-md shadow-black/50 border border-sky-900/50 rounded-full px-4 leading-6 flex gap-x-2 mx-auto">
            <HeartIcon className="h-4 w-4 my-auto text-sky-300" />
            Accessibility
          </span>
          <span className="bg-primary-1050 shadow-md shadow-black/50 border border-sky-900/50 rounded-full px-4 leading-6 flex gap-x-2 mx-auto">
            <CodeBracketIcon className="h-4 w-4 my-auto text-sky-300" />
            Full-Stack
          </span>
        </div>
      </div>
    </Section>
  );
}