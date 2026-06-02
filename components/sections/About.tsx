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
          <h2 className="text-4xl md:text-6xl font-bold text-center leading-14 md:leading-24">Systems <br className="md:hidden" /> Built. <br /> Problems <br className="md:hidden" /> Solved.</h2>
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
            I’m a full-stack software engineer focused on building and maintaining reliable web applications.
          </p>

          <p className="mb-6">
            Most of my professional experience has been maintaining and improving production systems for state government clients. I’ve owned features end-to-end in large, complex codebases, quickly learning how they work and extending them to be more stable and maintainable.
          </p>

          <p className="mb-6">
            My work has spanned both frontend and backend responsibilities, including implementing UI features, working through API integrations, and addressing issues in data flow that impact how applications behave end-to-end.
          </p>

          <p className="mb-6">
            Outside of client work, I've built complete full-stack applications from scratch. Most recently a matchmaking platform with a full auth system, third-party API integration, and a purpose-built relational schema. These projects give me direct ownership over architectural decisions I don't always get to make in production environments.
          </p>

          <p className="mb-6">
            I care about building systems that are clean, predictable, and easy for other engineers to work in, with attention to both frontend usability and backend structure.
          </p>

          <p className="mb-6">
            I’m comfortable working across the stack and tend to be most effective in roles where I can take ownership of features.
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