import Section from "../ui/Section";

export default function Contact() {
  return (
    <Section id="contact-section" background="relative bg-primary-1050">
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent from-5% md:from-20% via-sky-300 to-transparent to-95% md:to-80%">
      </div>
      <div className="max-w-2xl mx-auto text-center mb-24">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Get In Touch
        </h2>

        <p className="mb-8 opacity-80">
          If you’re working on something interesting or need help on a project,
          feel free to reach out. I’m always open to new opportunities.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <a
            href="mailto:kylepcodes@gmail.com"
            className="px-6 py-3 rounded-lg border border-sky-900/50 hover:bg-primary-1050 transition"
          >
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/kyle-peppersack"
            target="_blank"
            className="px-6 py-3 rounded-lg border border-sky-900/50 hover:bg-primary-1050 transition"
          >
            LinkedIn
          </a>

          <a
            href="/Kyle_Peppersack_SWE_Resume.pdf"
            target="_blank"
            className="px-6 py-3 rounded-lg border border-sky-900/50 hover:bg-primary-1050 transition"
          >
            View Resume
          </a>
        </div>

        <p className="text-sm opacity-60">
          Prefer email? kylepcodes@gmail.com
        </p>
      </div>
    </Section>
  );
}
