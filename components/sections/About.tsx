"use client";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import Section from "../ui/Section";
import Square from "../ui/Square";

export default function About() {
  const isMd = useBreakpoint("(min-width: 768px)");
  return (
    <Section background="relative bg-about">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent from-5% md:from-20% via-sky-300 to-transparent to-95% md:to-80%">
      </div>
      <div className="relative">
        <Square left={isMd ? 6 : -8} top={-8} rot={90} />
        <Square left={isMd ? 14 : 4} top={20} rot={0} />
        <Square left={isMd ? 22 : 14} top={40} rot={90} />
        <Square right={isMd ? 6 : -8} top={-8} rot={180} />
        <Square right={isMd ? 14 : 4} top={20} rot={270} />
        <Square right={isMd ? 22 : 14} top={40} rot={180} />
        <h2 className="text-4xl md:text-6xl font-bold text-center leading-14 md:leading-24">Weaving <br className="md:hidden" /> Winning <br /> Websites</h2>
        <p className="text-center mt-6"> I craft premium websites for creators, entrepreneurs and startups who want to convert clients, drive serious revenue and stand out in an ever-crowding market.</p>
      </div>
    </Section>
  );
}