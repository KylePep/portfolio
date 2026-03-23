type SectionProps = {
  children: React.ReactNode;
  background?: string; // Tailwind classes or custom color
};

export default function Section({ children, background = "bg-primary-1050" }: SectionProps) {
  return (
    <section className={`py-10 px-6 ${background}`}>
      <div className="mx-auto px-4 max-w-full sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
        {children}
      </div>
    </section>
  );
}


