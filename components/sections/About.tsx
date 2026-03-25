"use client";
import { useBreakpoint } from "@/hooks/useBreakpoint";
import Section from "../ui/Section";
import Square from "../ui/Square";
import Deck from "../ui/Deck";

export default function About() {
  const isMd = useBreakpoint("(min-width: 768px)");
  return (
    <>
      <Section id="about-section" background="relative bg-about overflow-x-hidden pb-6">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent from-5% md:from-20% via-sky-300 to-transparent to-95% md:to-80%">
        </div>
        <div className="relative">
          <Square left={isMd ? 6 : -16} top={-8} rot={90} />
          <Square left={isMd ? 14 : -6} top={20} rot={0} />
          <Square left={isMd ? 22 : 2} top={46} rot={90} />
          <Square right={isMd ? 6 : -16} top={-8} rot={180} />
          <Square right={isMd ? 14 : -6} top={20} rot={270} />
          <Square right={isMd ? 22 : 2} top={46} rot={180} />
          <h2 className="text-4xl md:text-6xl font-bold text-center leading-14 md:leading-24">Real <br className="md:hidden" /> Code. <br /> Real <br className="md:hidden" /> Impact.</h2>
          <p className="text-center mt-6 max-w-2xl mx-auto">I work on production systems where reliability matters, handling frontend, accessibility, and whatever else it takes to get things done.</p>
        </div>

      </Section>
      <Section background="bg-linear-to-b/srgb from-primary-1050 via-primary-1050/90 to-primary-1050">
        <Deck />
      </Section>
      <Section background="relative bg-about overflow-x-hidden ">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent from-5% md:from-20% via-sky-300 to-transparent to-95% md:to-80%"></div>
        <div className="relative max-w-128 mx-auto my-16">
          <Square right={-5} top={100} rot={90} />
          <Square left={-5} top={-5} rot={270} />
          <p className="mb-6">
            Hey, I’m Kyle.
          </p>

          <p className="mb-6">
            I’m a software engineer focused on frontend development, with experience building and maintaining production web applications for state government clients.
          </p>

          <p className="mb-6">
            Most of my work has involved stepping into complex or messy codebases, figuring them out quickly, and getting things back on track, whether that’s fixing frontend issues, improving accessibility, or rebuilding systems to be easier to work with.
          </p>

          <p className="mb-6">
            I care a lot about doing things the right way: clean structure, accessible UI, and code that other developers can actually understand and build on.
          </p>

          <p className="mb-6">
            I’m strongest on the frontend, but I’ve worked across the stack enough to be comfortable with APIs, databases, and backend systems when needed.
          </p>

          <p className="mb-6">
            Outside of work, I’m into fitness, game design, and things like HEMA and Dragon Ball, basically anything with progression systems or skill curves.
          </p>

          <p className="mb-6">
            If you made it this far, I appreciate you taking the time.
          </p>

          <p>
            Kyle Peppersack <br />
            <a href="https://www.linkedin.com/in/kyle-peppersack">@kyle-peppersack</a>
          </p>
        </div>
      </Section>
    </>
  );
}