import { DocumentTextIcon, EnvelopeIcon, UserCircleIcon } from "@heroicons/react/24/outline";
import Section from "../ui/Section";

export default function Contact() {
  return (
    <Section id="contact-section" background="pb-8 md:pb-12 relative bg-[linear-gradient(to_bottom,rgba(1,14,22,1),rgba(1,14,22,.25)),url('/bg-stars.jpg')] bg-cover bg-center
">
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
            className="flex flex-col md:flex-row gap-2 px-6 py-3 rounded-lg border border-sky-200/50 btn glass transition"
          >
            <EnvelopeIcon className="w-6 h-6 text-white mx-auto" />
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/kyle-peppersack"
            target="_blank"
            className="flex flex-col md:flex-row gap-2 px-6 py-3 rounded-lg border border-sky-200/50 btn glass transition"
          >
            <UserCircleIcon className="w-6 h-6 text-white mx-auto" />
            LinkedIn
          </a>

          <a
            href="/Kyle_Peppersack_SWE_Resume.pdf"
            target="_blank"
            className="flex flex-col md:flex-row gap-2 px-6 py-3 rounded-lg border border-sky-200/50 btn glass transition"
          >
            <DocumentTextIcon className="w-6 h-6 text-white mx-auto" />
            View Resume
          </a>
        </div>

        <p className="text-sm opacity-80">
          Prefer email? kylepcodes@gmail.com
        </p>
      </div>
    </Section>
  );
}
