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


        <p className="font-semibold">The future is still so much bigger than the past.</p>
        <div className="flex justify-around mt-16">
          <button className="btn-hero">Projects</button><button className="btn-hero">Skills </button><button className="btn-hero">Contact</button>
        </div>
      </div>
    </Section>
  );
}