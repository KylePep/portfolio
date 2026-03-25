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
            <svg
              viewBox="0 0 192 192"
              className="w-6 h-6 mx-auto text-white"
              fill="none"
            ><rect width="132" height="132" x="30" y="30" stroke="currentColor" strokeWidth="12" rx="16" /><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="12" d="M66 86v44" /><circle cx="66" cy="64" r="8" fill="currentColor" /><path stroke="currentColor" stroke-linecap="round" strokeWidth="12" d="M126 130v-26c0-9.941-8.059-18-18-18v0c-9.941 0-18 8.059-18 18v26" /></svg>

            LinkedIn
          </a>

          <a
            href="https://github.com/KylePep"
            target="_blank"
            className="flex flex-col md:flex-row gap-2 px-6 py-3 rounded-lg border border-sky-200/50 btn glass transition"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-6 h-6 mx-auto text-white"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.475 2 2 6.475 2 12C2 16.425 4.8625 20.1625 8.8375 21.4875C9.3375 21.575 9.525 21.275 9.525 21.0125C9.525 20.775 9.5125 19.9875 9.5125 19.15C7 19.6125 6.35 18.5375 6.15 17.975C6.0375 17.6875 5.55 16.8 5.125 16.5625C4.775 16.375 4.275 15.9125 5.1125 15.9C5.9 15.8875 6.4625 16.625 6.65 16.925C7.55 18.4375 8.9875 18.0125 9.5625 17.75C9.65 17.1 9.9125 16.6625 10.2 16.4125C7.975 16.1625 5.65 15.3 5.65 11.475C5.65 10.3875 6.0375 9.4875 6.675 8.7875C6.575 8.5375 6.225 7.5125 6.775 6.1375C6.775 6.1375 7.6125 5.875 9.525 7.1625C10.325 6.9375 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.9375 14.525 7.1625C16.4375 5.8625 17.275 6.1375 17.275 6.1375C17.825 7.5125 17.475 8.5375 17.375 8.7875C18.0125 9.4875 18.4 10.375 18.4 11.475C18.4 15.3125 16.0625 16.1625 13.8375 16.4125C14.2 16.725 14.5125 17.325 14.5125 18.2625C14.5125 19.6 14.5 20.675 14.5 21.0125C14.5 21.275 14.6875 21.5875 15.1875 21.4875C17.525 20.1625 22 16.425 22 12C22 6.475 17.525 2 12 2Z"
              />
            </svg>

            Github
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
